FROM python:3.11.9-slim-bullseye

RUN apt-get update && apt-get -y install sqlite3 && \
    groupadd -g 1100 pyuser && \
    useradd -m -s /bin/bash -u 1100 -g 1100 pyuser

COPY /deploy/requirements.txt /home/pyuser
WORKDIR /home/pyuser
RUN pip install -r requirements.txt

USER pyuser
COPY ./backend /home/pyuser/backend
WORKDIR /home/pyuser/backend

CMD flask run -h 0.0.0.0 -p $PORT