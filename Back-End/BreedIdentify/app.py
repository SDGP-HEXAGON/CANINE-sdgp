import os
from tqdm import tqdm
import pickle
import numpy as np
import pandas as pd
from keras import Sequential
from keras.callbacks import EarlyStopping
from keras.callbacks import ReduceLROnPlateau

from keras.optimizers import Adam, SGD
from keras.layers import Dense, Dropout
from flask import Flask, request
from flask_cors import CORS

from keras.layers import Lambda, Input, GlobalAveragePooling2D
from tensorflow.keras.models import Model
from keras.preprocessing.image import load_img

app = Flask(__name__)
CORS(app)


# reading labels csv file
labels = pd.read_csv('..\\..\\Data-Science\\DogBreedIdentify\\labels.csv')

# importing the files that are required to run
with open('..\\..\\Data-Science\\DogBreedIdentify\\test_array', 'rb') as f:
    y = pickle.load(f)

with open('..\\..\\Data-Science\\DogBreedIdentify\\InceptionV3_s01', 'rb') as f:
    InceptionV3 = pickle.load(f)

with open('..\\..\\Data-Science\\DogBreedIdentify\\inception_features_s01', 'rb') as f:
    inception_features1 = pickle.load(f)

with open('..\\..\\Data-Science\\DogBreedIdentify\\inception_preprocessor_s01', 'rb') as f:
    inception_preprocessor = pickle.load(f)

with open('..\\..\\Data-Science\\DogBreedIdentify\\Xception_s01', 'rb') as f:
    Xception = pickle.load(f)

with open('..\\..\\Data-Science\\DogBreedIdentify\\xception_features_s01', 'rb') as f:
    xception_features1 = pickle.load(f)

with open('..\\..\\Data-Science\\DogBreedIdentify\\xception_preprocessor_s01', 'rb') as f:
    xception_preprocessor = pickle.load(f)

with open('..\\..\\Data-Science\\DogBreedIdentify\\InceptionResNetV2_s01', 'rb') as f:
    InceptionResNetV2 = pickle.load(f)

with open('..\\..\\Data-Science\\DogBreedIdentify\\inc_resnet_features_s01', 'rb') as f:
    inc_resnet_features1 = pickle.load(f)

with open('..\\..\\Data-Science\\DogBreedIdentify\\nasnet_features_s01', 'rb') as f:
    nasnet_features1 = pickle.load(f)

with open('..\\..\\Data-Science\\DogBreedIdentify\\inc_resnet_preprocessor_s01', 'rb') as f:
    inc_resnet_preprocessor = pickle.load(f)

with open('..\\..\\Data-Science\\DogBreedIdentify\\final_features_s01', 'rb') as f:
    final_features = pickle.load(f)

with open('..\\..\\Data-Science\\DogBreedIdentify\\NASNetLarge_s01', 'rb') as f:
    NASNetLarge = pickle.load(f)

with open('..\\..\\Data-Science\\DogBreedIdentify\\nasnet_preprocessor_s01', 'rb') as f:
    nasnet_preprocessor = pickle.load(f)
    # create list of alphabetical sorted labels.
    classes = sorted(list(set(labels['breed'])))
    n_classes = len(classes)
    # function to extract features from the dataset by a given pretrained model
    img_size = (331, 331, 3)

    batch_size = 128
    epochs = 50
    learn_rate = .001
    sgd = SGD(lr=learn_rate, momentum=.9, nesterov=False)
    adam = Adam(lr=learn_rate, beta_1=0.9, beta_2=0.999, epsilon=None, amsgrad=False)

    lrr = ReduceLROnPlateau(monitor='val_acc', factor=.01, patience=3, min_lr=1e-5, verbose=1)

    EarlyStop = EarlyStopping(monitor='val_loss', patience=10, restore_best_weights=True)

    final_features1 = np.concatenate([inception_features1,
                                      xception_features1,
                                      nasnet_features1,
                                      inc_resnet_features1,
                                      ], axis=-1)


    def get_features(model_name, model_preprocessor, input_size, data):
        input_layer = Input(input_size)
        preprocessor = Lambda(model_preprocessor)(input_layer)
        base_model = model_name(weights='imagenet', include_top=False,
                                input_shape=input_size)(preprocessor)
        avg = GlobalAveragePooling2D()(base_model)
        feature_extractor = Model(inputs=input_layer, outputs=avg)

        # Extract feature.
        feature_maps = feature_extractor.predict(data, verbose=1)

        return feature_maps


    def images_to_array_test(test_path, img_size=(331, 331, 3)):
        test_filenames = [test_path + fname for fname in os.listdir(test_path)]

        data_size = len(test_filenames)
        images = np.zeros([data_size, img_size[0], img_size[1], 3], dtype=np.uint8)

        for ix, img_dir in enumerate(tqdm(test_filenames)):
            img = load_img(img_dir, target_size=img_size)
            images[ix] = img
            del img

        return images


    test_data = images_to_array_test('..\\..\\Data-Science\\DogBreedIdentify\\dataset\\test\\', img_size)

    model = Sequential()
    model.add(Dropout(0.7, input_shape=(final_features1.shape[1],)))
    model.add(Dense(n_classes, activation='softmax'))

    model.compile(optimizer=adam,
                  loss='categorical_crossentropy',
                  metrics=['accuracy'])

    # Training the model.
    history = model.fit(final_features, y,
                        batch_size=batch_size,
                        epochs=epochs,
                        validation_split=0.2,
                        callbacks=[lrr, EarlyStop])


    # Extract test data features.

    def extact_features(data):
        inception_features = get_features(InceptionV3, inception_preprocessor, img_size, data)
        xception_features = get_features(Xception, xception_preprocessor, img_size, data)
        nasnet_features = get_features(NASNetLarge, nasnet_preprocessor, img_size, data)
        inc_resnet_features = get_features(InceptionResNetV2, inc_resnet_preprocessor, img_size, data)

        final_features = np.concatenate([inception_features,
                                         xception_features,
                                         nasnet_features,
                                         inc_resnet_features, ], axis=-1)
        return final_features

test_features = extact_features(test_data)

# using this post endpoint we are getting the base64 encoded image to be used for the breed identification

@app.route('/api/post/data', methods=['POST'])
def create_record():
    import base64
    requestdata=request.data
    #removing the unnecassory suffix and prefix
    data=requestdata.decode('utf-8').replace("{","")
    data1=data.replace("{","")
    data2 = data1[1:-1]
    data3 = data2[8:]
    # converting string into base64 encoding
    imgdata = base64.b64decode(data3)
    filename = 'temp_img.jpg'  # temporary file name
    with open(filename, 'wb') as h:
        h.write(imgdata)
    img_g = load_img(filename, target_size=img_size)
    img_g = np.expand_dims(img_g, axis=0)
    print(f"Predicted label: {classes[np.argmax(img_g[0])]}")

    # processing code
    return classes[np.argmax(img_g[0])]


if __name__ == '__main__':
    app.run()
