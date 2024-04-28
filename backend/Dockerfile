FROM python:3.11.9-slim-bullseye
ENV PYTHONUNBUFFERED 1

RUN apt-get update && apt-get -y install sqlite3 && \
    groupadd -g 1100 pyuser && \
    useradd -m -s /bin/bash -u 1100 -g 1100 pyuser

COPY requirements.txt /home/pyuser
WORKDIR /home/pyuser
RUN pip install -r requirements.txt

USER pyuser
COPY . /home/pyuser/backend
WORKDIR /home/pyuser/backend

CMD exec gunicorn --bind :$PORT --workers 1 --threads 8 --timeout 0 "app:create_app()"