from fastapi import FastAPI, UploadFile, File, HTTPException, Depends
from pydantic import BaseModel
import numpy as np
import tensorflow as tf
import time

from .preprocess import preprocess

class Prediction(BaseModel):
    class_name: str
    proba: float
    execution_time: float

app = FastAPI()

model = tf.keras.models.load_model("./model/astronomia.keras", compile=False)

@app.get("/")
def read_root():
    return {
        "message": "Welcome to the AstronomIA API"
    }

@app.post("/predict", response_model=Prediction)
async def predict(file: UploadFile = File(...)):
    try :
        start_time = time.time()

        image = await file.read()
        preprocessed_image = preprocess(image)
        prediction = model.predict(preprocessed_image)

        class_name = "unknown"
        if prediction[0][0] <= 0.33:
            class_name = "elliptical"
        elif prediction[0][0] > 0.66:
            class_name = "spiral"

        return {
            "class_name": class_name,
            "proba": float(prediction[0][0]),
            "execution_time": time.time() - start_time 
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))