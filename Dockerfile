FROM docker.repo1.uhc.com/node:22-alpine AS builder
COPY .. /usr/src/app
WORKDIR /usr/src/app
RUN ls -la /usr/src/app
RUN npm cache clean --force
RUN npm install  --legacy-peer-deps

ARG SPRING_PROFILES_ACTIVE
ENV SPRING_PROFILES_ACTIVE=${SPRING_PROFILES_ACTIVE}
RUN npm run build:$SPRING_PROFILES_ACTIVE  

FROM optum-docker-auth-prod.repo1.uhc.com/chainguard/tomcat:latest
USER root

RUN mkdir /usr/local/tomcat/webapps/ROOT

COPY --from=builder /usr/src/web-angular/src/app/dist/portfolio-editor/browser /usr/local/tomcat/webapps/ROOT

COPY ../context.xml /usr/local/tomcat/conf/
COPY ../rewrite.config /usr/local/tomcat/webapps/ROOT/WEB-INF/

RUN chown -R 1001:1001 /usr/local/tomcat/webapps/*
RUN chmod -R 777 /usr/local/tomcat/webapps/*

EXPOSE 8080
CMD ["run"]
