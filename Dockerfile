FROM node:8.11.0

# set environment
ENV HOME=/opt
ENV PORT=8080

RUN mkdir -p $HOME/app
#RUN chown -R node $HOME
#USER node

WORKDIR $HOME/app

# install packages
COPY package.json ./
COPY yarn.lock ./

#RUN npm install -g yarn@0.17.10
#RUN brew upgrade yarn
RUN yarn cache clean
RUN yarn install

# copy src files
COPY .env ./.env
COPY tsconfig.json ./tsconfig.json
COPY public ./public
COPY src ./src

# expose port
EXPOSE $PORT

# package client assets
# RUN yarn run build

# set default command
CMD yarn run start
