FROM node:latest

ENV HOME=/home/node
#RUN mkdir $HOME
WORKDIR $HOME

RUN npm install -g @angular/cli --unsafe-perm

EXPOSE 4200
