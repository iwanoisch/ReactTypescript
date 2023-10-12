FROM node:18.17.1-alpine as builder
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app
COPY package-lock.json /app
RUN npm install --silent
COPY . .
EXPOSE 3000

# run your app
CMD ["npm", "start"]
