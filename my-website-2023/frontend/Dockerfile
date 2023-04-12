# Use an official Nginx runtime as a parent image
FROM nginx:alpine

# Copy your static files to the appropriate directory
COPY portfolio/ /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start the Nginx service when the container runs
CMD ["nginx", "-g", "daemon off;"]

