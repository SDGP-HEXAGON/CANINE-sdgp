import json
from flask import Flask, request, jsonify
from flask_cors import CORS

import pandas as pd
import numpy as np
import pickle
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
rondom = RandomForestClassifier()

sym = pd.read_csv("sym_count.csv")

app = Flask(__name__)
CORS(app)

@app.route('/api/get/data/disese', methods=['PUT'])
def create_record():
    #get data array from react
    record = json.loads(request.data)
    
    #processing code to prepair 
    print(record)
    l2_dataframe = pd.DataFrame(record)
    list_f = []
    sample = (l2_dataframe.gender.unique())
    list_f.append(sample[0])
    sample = (l2_dataframe.age.unique())
    list_f.append(sample[1])
    sample = (l2_dataframe.Symptoms.unique())
    i = 1 
    while i < len(sample):
        list_f.append(sample[i])
        i+= 1
    #check array lenth to make lenth as 17
    while(len(list_f) < 17) :
        list_f.append(0);
        
    print(list_f)

    l2_dataframe = pd.DataFrame(list_f)
    cols = l2_dataframe.columns
    vals = l2_dataframe.values
    symptoms = sym['Symtom'].unique()
    for i in range(len(symptoms)):
        vals[vals == symptoms[i]] = sym[sym['Symtom'] == symptoms[i]]['Count'].values[0]

    list_01 = pd.DataFrame(vals, columns=cols)
    list_01 = list_01.replace('NO',0)
    list_01 = list_01.replace('Both',5001)
    list_01 = list_01.replace('Male',5002)
    list_01 = list_01.replace('Female',5003)
    list_01 = list_01.replace('common',6001)
    list_01 = list_01.replace('Five',6002)
    list_01 = list_01.replace('Ten',6003)
    list_01 = list_01.replace('Fifteen',6004)
    print(list_01)

    #read modle
    with open('mode_pickle','rb') as f:
        exam = pickle.load(f)
    #get prediction
    list_last = list_01[0].values
    disease = exam.predict([list_last])
    print("Your Dog Have ",disease[0],"Disease!!!!")

    #return value to react
    return jsonify(disease[0])
app.run()