FROM node:14-alpine

RUN mkdir /app
WORKDIR /app

EXPOSE 3000

# Copy npm's package.json
COPY package.json /app
COPY package-lock.json /app

# Install runtime dependencies only
RUN npm ci --only=production

# Copy source files
COPY . /app

# Start the server
CMD npm run prod
