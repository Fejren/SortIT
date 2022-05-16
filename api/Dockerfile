FROM python:3.10

ENV PYTHONUNBUFFERED 1

RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        postgresql-client \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app/api
COPY requirements.txt /app/api
RUN pip install -r requirements.txt