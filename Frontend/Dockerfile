FROM node:23.9.0-alpine3.20

# RUN addgroup app && adduser -S -G app app
# USER app

# Set the working directory and assign ownership to the non-root user
WORKDIR /app

# Copy the package.json and package-lock.json files into the image.
COPY package*.json ./

# Install the dependencies.
RUN npm install

# Copy the rest of the source files into the image.
COPY . .

# Expose the port that the application listens on.
EXPOSE 3000

# Run the application.
CMD npm run dev
