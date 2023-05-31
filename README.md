# Predicting Length of Stay at Hospitals

Code for training model is in the following Notebook [Model Training Notebook](model_training.ipynb)  

### The structure of project is the following:

- data
  + LengthOfStay.csv - file with the data on what the model was trained
- Notebook.ipynb - file where model is training
- app.py - backend of the project
- index.html - main page of the project, where you by specifying parameters can predict value
- model.h5 - already trained and saved model
- script.js - file for front-end development
- styles.css - styles for the main page

### Local Run:

1. Clone repository:  
```git clone https://github.com/OrestProgrammer/PredictingLengthofStayatHospitals.git```

2. Navigate to root project folder  
```cd PredictingLengthofStayatHospitals```  

3. Create virtual environment  
```python3 -m venv PredictingLengthofStayatHospitalsenv```

4. Activate it
```For linux/mac: source PredictingLengthofStayatHospitalsenv/bin/activate```
```For windows: PredictingLengthofStayatHospitalsenv\Scripts\activate```

5. Install the requirements  
```pip install -r requirements.txt```

6. Run application 
```python app.py```  

7. Open ```index.html``` in browser and provide all information or clock on button "Fill by default values" to fill with default values. Output must be ```6 days```.

8. Click on button "Count"
