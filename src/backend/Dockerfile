#Stage 1 Build
FROM maven:3.6-jdk-11-slim as BUILD


FROM amazoncorretto:11
COPY target/backend.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-Duser.timezone=America/Sao_Paulo", "-Xmx512m", "-jar", "/app.jar"]