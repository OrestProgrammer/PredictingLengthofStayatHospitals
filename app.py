from flask import Flask, request
from flask_cors import CORS
from tensorflow.keras.models import load_model
import tensorflow as tf
# from sklearn.preprocessing import MinMaxScaler
import numpy as np

app = Flask(__name__)
CORS(app)

@app.route('/', methods = ['POST'])
def hello():
    model = load_model("model.h5")
    data = request.get_json()
#     non_numeric_cols = ["rcount", "hematocrit", "neutrophils", "sodium", "glucose", "bloodureanitro", "creatinine", "bmi",
#                         "pulse", "respiration"]
#     scaler = MinMaxScaler()
#     data[non_numeric_cols] = scaler.fit_transform(data[non_numeric_cols])
    data = np.array(data, dtype=np.float32)
    data = tf.reshape(data, (data.shape[0], 1, data.shape[1]))
    res = np.round(model.predict(data, verbose=0))
    return res[0].tolist()

if __name__ == '__main__':
    app.run()
