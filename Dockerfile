FROM node:alpine
COPY ./Lab-4/Lab4.js /Lab4/
WORKDIR /Lab4
CMD node Lab4.js
