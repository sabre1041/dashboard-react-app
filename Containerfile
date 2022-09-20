FROM registry.access.redhat.com/ubi8/nodejs-16-minimal:1

EXPOSE 8080
COPY . $HOME

# Update installed software packages
USER root
#RUN microdnf update && microdnf clean all
RUN npm install -g serve
USER 1001

RUN npm ci --only=production
RUN npm run build

#RUN mkdir -p node_modules/.cache && chmod 770 node_modules/.cache

#CMD npm start
CMD serve -s build

