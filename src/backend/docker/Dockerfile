#Stage 1 Build
FROM maven:3.6-jdk-11-slim as BUILD


FROM amazoncorretto:11
COPY backend.jar /backend.war

EXPOSE 8080

CMD ["/usr/bin/java", "-XX:+ExitOnOutOfMemoryError","-Xms256m","-Xmx256m","-Duser.timezone=America/Sao_Paulo", "-jar", "/backend.war"]


