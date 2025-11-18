# Use official Maven image to build the application
FROM maven:3.9.6-eclipse-temurin-21 AS build
WORKDIR /app
COPY . .
RUN mvn clean package -DskipTests

# Use JDK 21 image to run the application
FROM eclipse-temurin:21-jdk
WORKDIR /app
COPY --from=build /app/target/Contact-Api-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
