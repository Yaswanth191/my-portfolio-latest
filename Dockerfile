# ---------- Build Stage ----------
FROM node:18-alpine AS builder
WORKDIR /app

# Copy package files & install dependencies
COPY package*.json ./
RUN npm install

# Copy all source files
COPY . .

# Build Next.js app
RUN npm run build


# ---------- Runtime Stage ----------
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Copy only what’s needed from the builder
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next

# Expose Next.js default port
EXPOSE 3000

# Run production server
CMD ["npm", "start"]
