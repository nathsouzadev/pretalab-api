FROM node:20-slim AS build

WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) first to leverage Docker's cache
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the TypeScript application
# Ensure your package.json has a "build" script that compiles TypeScript
RUN npm run build

# Stage 2: Create the final, smaller runtime image
FROM node:20-slim

# Set the working directory inside the container
WORKDIR /app

# Copy only the necessary files from the build stage
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package*.json ./
COPY --from=build /app/dist ./dist

# Expose the port your application listens on
# Cloud Run expects your application to listen on the port specified by the PORT environment variable
ENV PORT 3000
EXPOSE ${PORT}

# Define the command to run your application
# Assuming your built JavaScript entry point is in dist/index.js (adjust as needed)
CMD ["node", "dist/index.js"]
