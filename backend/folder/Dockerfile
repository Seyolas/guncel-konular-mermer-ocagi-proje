FROM python:3.10

RUN mkdir -p /tmp/app
ADD . /tmp/app
WORKDIR /tmp/app

RUN pip install -r requirements.txt
RUN echo 'finish'