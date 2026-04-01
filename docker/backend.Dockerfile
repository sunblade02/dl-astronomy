FROM python:3.11-slim

ENV PYTHONUNBUFFERED=1
ENV PYTHONIOENCODING=utf-8  

WORKDIR /app

COPY backend/requirements.txt .
COPY backend/app ./app
COPY backend/model ./model

RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 8000

CMD ["uvicorn", "app.main:app", "--host", "0.0.0", "--port", "8000", "--reload"]