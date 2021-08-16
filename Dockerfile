FROM node:14-alpine

# create root application folder
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# copy configs to /app folder
COPY package*.json ./
COPY tsconfig.json ./
# copy source code to /app/src folder
COPY . .

RUN npm install

EXPOSE 3000

CMD [ "npm", "start"]