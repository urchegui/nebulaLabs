# ---- Build ----
FROM node:22-alpine AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

# Public Web3Forms key, inlined by Vite into the bundle as import.meta.env.VITE_WEB3FORMS_KEY
ARG VITE_WEB3FORMS_KEY
RUN test -n "$VITE_WEB3FORMS_KEY" || (echo "VITE_WEB3FORMS_KEY build arg is required" && exit 1)
ENV VITE_WEB3FORMS_KEY=$VITE_WEB3FORMS_KEY

RUN npm run build

# ---- Serve ----
FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s CMD wget -qO- http://127.0.0.1/ >/dev/null || exit 1
