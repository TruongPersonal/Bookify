# Build
FROM maven:3.8.6-eclipse-temurin-17 AS build
WORKDIR /app
COPY . .
RUN mvn clean package -DskipTests

# Run
FROM eclipse-temurin:17-jre-jammy
WORKDIR /app
COPY --from=build /app/target/bookify-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8080

# RAM limits
ENTRYPOINT ["java", "-Xmx300m", "-Xss512k", "-jar", "app.jar"]