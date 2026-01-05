# Build
FROM maven:3.9.5-eclipse-temurin-21 AS build
WORKDIR /app
COPY . .
RUN mvn clean package -DskipTests

# Run
FROM eclipse-temurin:21-jre-jammy
WORKDIR /app
COPY --from=build /app/target/bookify-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8080

# RAM limits
ENTRYPOINT ["java", "-Xmx300m", "-Xss512k", "-jar", "app.jar"]