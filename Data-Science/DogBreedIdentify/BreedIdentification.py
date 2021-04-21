#!/usr/bin/env python
# coding: utf-8

# In[77]:


import matplotlib.pyplot as plt
import seaborn as sns
import os
import gc
import sys
get_ipython().system('pip install tensorflow')
get_ipython().system('pip install keras')
from sklearn.model_selection import train_test_split
from tqdm import tqdm

import numpy as np
import pandas as pd
from keras import Sequential
from keras.callbacks import EarlyStopping
from keras.callbacks import ReduceLROnPlateau

from keras.optimizers import Adam,SGD
from keras.layers import Dense,Dropout,Flatten,BatchNormalization,Activation
from keras.layers import Lambda,Input,GlobalAveragePooling2D,BatchNormalization
from keras.utils import to_categorical
from tensorflow.keras.models import Model
from keras.preprocessing.image import load_img


# In[78]:


labels = pd.read_csv(r'C:\sem2\SDGP\DataSet\labels.csv')
labels.head()


# In[79]:


labels.describe()


# In[80]:


from IPython.display import display,Image
Image(r"C:\sem2\SDGP\DataSet\train\e08c321bfa4141ecfc3dc6c5488ec770.jpg")


# In[81]:


import os
if len(os.listdir(r'C:\sem2\SDGP\DataSet\train')) == len(labels['id']):
  print("Number of file matches of actual images!")
else:
  print("Number of file does not matches number of actual images!!")


# In[83]:


#Create list of alphabetically sorted labels.
classes = sorted(list(set(labels['breed'])))
n_classes = len(classes)
print('Total unique breed {}'.format(n_classes))



#Map each label string to an integer label.
class_to_num = dict(zip(classes, range(n_classes)))
class_to_num


# In[86]:


input_shape = (331,331,3)


def images_to_array(directory, label_dataframe, target_size = input_shape):
    
    image_labels = label_dataframe['breed']
    images = np.zeros([len(label_dataframe), target_size[0], target_size[1], target_size[2]],dtype=np.uint8) #as we have huge data and limited ram memory. uint8 takes less memory
    y = np.zeros([len(label_dataframe),1],dtype = np.uint8)
    
    for ix, image_name in enumerate(tqdm(label_dataframe['id'].values)):
        img_dir = os.path.join(directory, image_name + '.jpg')
        img = load_img(img_dir, target_size = target_size)
#         img = np.expand_dims(img, axis=0)
#         img = processed_image_resnet(img)
#         img = img/255
        images[ix]=img
#         images[ix] = img_to_array(img)
        del img
        
        dog_breed = image_labels[ix]
        y[ix] = class_to_num[dog_breed]
    
    y = to_categorical(y)
    
    return images,y


# In[87]:


import time 
t = time.time()

X,y = images_to_array(r'C:\sem2\SDGP\DataSet\train', labels[:])

print('runtime in seconds: {}'.format(time.time() - t))


# In[88]:


n=25
plt.figure(figsize=(20,20))
for i in range (n):
    ax=plt.subplot(5,5,i+1)
    plt.title(classes[np.where(y[i]==1)[0][0]])
    plt.imshow(X[i].astype('int32'))

lrr= ReduceLROnPlateau(monitor='val_acc', factor=.01, patience=3, min_lr=1e-5,verbose = 1)

#Prepare call backs
EarlyStop = EarlyStopping(monitor='val_loss', patience=10, restore_best_weights=True)

# Hyperparameters
batch_size= 128
epochs=50
learn_rate=.001
sgd=SGD(lr=learn_rate,momentum=.9,nesterov=False)
adam=Adam(lr=learn_rate, beta_1=0.9, beta_2=0.999, epsilon=None,  amsgrad=False)

#function to extract features from the dataset by a given pretrained model
img_size = (331,331,3)

def get_features(model_name, model_preprocessor, input_size, data):

    input_layer = Input(input_size)
    preprocessor = Lambda(model_preprocessor)(input_layer)
    base_model = model_name(weights='imagenet', include_top=False,
                            input_shape=input_size)(preprocessor)
    avg = GlobalAveragePooling2D()(base_model)
    feature_extractor = Model(inputs = input_layer, outputs = avg)
    
    #Extract feature.
    feature_maps = feature_extractor.predict(data, verbose=1)
    print('Feature maps shape: ', feature_maps.shape)
    return feature_maps
  
# Extract features using InceptionV3 
from keras.applications.inception_v3 import InceptionV3, preprocess_input
inception_preprocessor = preprocess_input
inception_features = get_features(InceptionV3,
                                  inception_preprocessor,
                                  img_size, X)

import pickle
with open('InceptionV3_s01','wb') as f:
    pickle.dump(InceptionV3,f)

with open('inception_preprocessor_s01','wb') as f:
    pickle.dump(inception_preprocessor,f)

with open('inception_features_s01','wb') as f:
    pickle.dump(inception_features,f)

#read InceptionV3 model
with open('InceptionV3_s01','rb') as f:
    InceptionV3 = pickle.load(f)

with open('inception_preprocessor_s01','rb') as f:
    inception_preprocessor = pickle.load(f)
    
with open('inception_features_s01','rb') as f:
    inception_features = pickle.load(f)

# Extract features using Xception 
from keras.applications.xception import Xception, preprocess_input
xception_preprocessor = preprocess_input
xception_features = get_features(Xception,
                                 xception_preprocessor,
                                 img_size, X)

with open('Xception_s01','wb') as f:
    pickle.dump(Xception,f)

with open('xception_preprocessor_s01','wb') as f:
    pickle.dump(xception_preprocessor,f)

with open('xception_features_s01','wb') as f:
    pickle.dump(xception_features,f)



with open('Xception_s01','rb') as f:
    Xception = pickle.load(f)

with open('xception_preprocessor_s01','rb') as f:
    xception_preprocessor = pickle.load(f)
    
with open('xception_features_s01','rb') as f:
    xception_features = pickle.load(f)

# Extract features using InceptionResNetV2 
from keras.applications.inception_resnet_v2 import InceptionResNetV2, preprocess_input
inc_resnet_preprocessor = preprocess_input
inc_resnet_features = get_features(InceptionResNetV2,
                                   inc_resnet_preprocessor,
                                   img_size, X)

# Extract features using NASNetLarge 
from keras.applications.nasnet import NASNetLarge, preprocess_input
nasnet_preprocessor = preprocess_input
nasnet_features = get_features(NASNetLarge,
                               nasnet_preprocessor,
                               img_size, X)

del X #to free up some ram memory
gc.collect()

#Creating final featuremap by combining all extracted features

final_features = np.concatenate([inception_features,
                                 xception_features,
                                 nasnet_features,
                                 inc_resnet_features,], axis=-1) #axis=-1 to concatinate horizontally

print('Final feature maps shape', final_features.shape)

#Prepare Deep net

model = Sequential()
# model.add(Dense(1028,input_shape=(final_features.shape[1],)))
model.add(Dropout(0.7,input_shape=(final_features.shape[1],)))
model.add(Dense(n_classes,activation= 'softmax'))

model.compile(optimizer=adam,
              loss='categorical_crossentropy',
              metrics=['accuracy'])

#Training the model. 
history = model.fit(final_features, y,
            batch_size=batch_size,
            epochs=epochs,
            validation_split=0.2,
            callbacks=[lrr,EarlyStop])

#deleting to free up ram memory

del inception_features
del xception_features
del nasnet_features
del inc_resnet_features
del final_features
gc.collect()

#Function to read images from test directory

def images_to_array_test(test_path, img_size = (331,331,3)):
    test_filenames = [test_path + fname for fname in os.listdir(test_path)]

    data_size = len(test_filenames)
    images = np.zeros([data_size, img_size[0], img_size[1], 3], dtype=np.uint8)
    
    
    for ix,img_dir in enumerate(tqdm(test_filenames)):
#         img_dir = os.path.join(directory, image_name + '.jpg')
        img = load_img(img_dir, target_size = img_size)
#         img = np.expand_dims(img, axis=0)
#         img = processed_image_resnet(img)
#         img = img/255
        images[ix]=img
#         images[ix] = img_to_array(img)
        del img
    print('Ouptut Data Size: ', images.shape)
    return images

test_data = images_to_array_test('/kaggle/input/dog-breed-identification/test/', img_size)

#Extract test data features.
def extact_features(data):
    inception_features = get_features(InceptionV3, inception_preprocessor, img_size, data)
    xception_features = get_features(Xception, xception_preprocessor, img_size, data)
    nasnet_features = get_features(NASNetLarge, nasnet_preprocessor, img_size, data)
    inc_resnet_features = get_features(InceptionResNetV2, inc_resnet_preprocessor, img_size, data)

    final_features = np.concatenate([inception_features,
                                     xception_features,
                                     nasnet_features,
                                     inc_resnet_features],axis=-1)
    
    print('Final feature maps shape', final_features.shape)
    
    #deleting to free up ram memory
    del inception_features
    del xception_features
    del nasnet_features
    del inc_resnet_features
    gc.collect()
    
    
    return final_features

test_features = extact_features(test_data)


del test_data
gc.collect()

#Predict test labels given test data features.

pred = model.predict(test_features)

# prediction
print(pred[0])
print(f"Max value (probability of prediction): {np.max(pred[0])}") # the max probability value predicted by the model
print(f"Sum: {np.sum(pred[0])}") # because we used softmax activation in our model, this will be close to 1
print(f"Max index: {np.argmax(pred[0])}") # the index of where the max value in predictions[0] occurs
print(f"Predicted label: {classes[np.argmax(pred[0])]}")

# Create pandas DataFrame with empty columns
preds_df = pd.DataFrame(columns=["id"] + list(classes))
preds_df.head()

# Append test image ID's to predictions DataFrame
test_path = "/kaggle/input/dog-breed-identification/test/"
preds_df["id"] = [os.path.splitext(path)[0] for path in os.listdir(test_path)]
preds_df.head()

preds_df.loc[:,list(classes)]= pred

preds_df.to_csv('submission.csv',index=None)
preds_df.head()

#Testing with Custom input
Image('../input/dog-breed-identification/train/0075dc49dab4024d12fafe67074d8a81.jpg')

#reading the image and converting it into an np array
img_g = load_img('../input/dog-breed-identification/train/0075dc49dab4024d12fafe67074d8a81.jpg',target_size = img_size)
img_g = np.expand_dims(img_g, axis=0)

#Predict test labels given test data features.
test_features = extact_features(img_g)
predg = model.predict(test_features)
print(f"Predicted label: {classes[np.argmax(predg[0])]}")
print(f"Probability of prediction): {round(np.max(predg[0])) * 100} %")


