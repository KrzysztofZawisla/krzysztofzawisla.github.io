FROM mhart/alpine-node:latest AS build
ADD . /home/website
WORKDIR /home/website
RUN yarn
RUN yarn run build
FROM mhart/alpine-node:latest
COPY --from=build /home/website/dist /home/website
RUN yarn global add serve
EXPOSE 5000
CMD ["serve", "-s", "/home/website/dist"]
