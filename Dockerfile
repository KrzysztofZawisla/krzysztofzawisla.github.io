FROM mhart/alpine-node:latest AS build
ADD . /home/website
WORKDIR /home/website
RUN npm install
RUN npm run build
FROM mhart/alpine-node:latest
COPY --from=build /home/website/dist /home/website
RUN npm install -g serve
EXPOSE 5000
CMD ["serve", "-s", "/home/website"]
