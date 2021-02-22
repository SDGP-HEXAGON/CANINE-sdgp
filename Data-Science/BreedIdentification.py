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

