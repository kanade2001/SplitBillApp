FROM python:3.12

WORKDIR /app/backend

RUN apt-get update && apt-get install -y \
  gcc \ 
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*

COPY requirements.txt requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

COPY . /app/backend

CMD ["python3", "manage.py", "runserver", "0.0.0.0:8000"]