FROM node
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
EXPOSE 3050
CMD ["node" ,"index.js"]
