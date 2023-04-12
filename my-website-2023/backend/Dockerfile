# Use an official Node.js runtime as the parent image
FROM node:14-alpine

# Set the working directory to /backend
WORKDIR /backend

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code to the container
COPY . .

# Expose the port on which the application will run
EXPOSE 3000

# Set the command to start the application
CMD ["node", "app.js"]
