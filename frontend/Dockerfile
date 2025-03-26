# Use a Node.js base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Enable Corepack inside the container
RUN corepack enable

# Copy package.json and install dependencies
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy the entire project
COPY . .

# Expose the port the frontend runs on
EXPOSE 8080

# Start the frontend server
CMD ["yarn", "serve"]
