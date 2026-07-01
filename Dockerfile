# Stage 1: Build the site using Bun
FROM oven/bun:1 AS builder
WORKDIR /app

# Copy dependency files
COPY package.json bun.lock ./

# Install dependencies
RUN bun install

# Copy all project files and build the static site
COPY . .
RUN bun run build

# Stage 2: Serve the built static site using a lightweight web server
FROM nginx:alpine

# Copy the built site from the 'dist' folder of the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
