FROM python:3.11-slim

ENV PYTHONUNBUFFERED 1

WORKDIR /app/backend
COPY . ./
RUN pip install --upgrade pip
RUN pip install -r requirements.txt


CMD ["uvicorn", "main:app", "--reload", "--host", "0.0.0.0", "--port", "8000"]
