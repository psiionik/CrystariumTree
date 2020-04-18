# FROM node:12 as react-build
# WORKDIR /app
# COPY . ./
# RUN yarn
# RUN yarn global add create-react-app
# RUN yarn build

# # Stage 2 - the production environment
# FROM nginx:alpine
# COPY nginx.conf /etc/nginx/conf.d/default.conf
# COPY --from=react-build /app/build /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]

# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY yarn.lock ./
RUN yarn
RUN yarn global add react-scripts

# add app
COPY . ./

# start app
CMD ["yarn", "start"]