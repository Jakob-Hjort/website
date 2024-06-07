# Use an official Node.js runtime as a parent image
FROM httpd:2.4

# Set the working directory in the container
#WORKDIR /website

# Install dependencies
# RUN npm install

# Copy the rest of the application code to the working directory
COPY ./wwwroot /usr/local/apache2/htdocs/

# RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf

# Expose the port the app runs on
EXPOSE 80

# Define the command to run the app
# CMD ["src/main.js"]
