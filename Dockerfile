# Utiliza una imagen de Node.js para compilar la aplicación
FROM node:16 AS build

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias de la aplicación
RUN npm install

# Copia el código fuente de la aplicación al contenedor
COPY . .

# Compila la aplicación para producción
RUN npm run build --prod

# Utiliza una imagen de Nginx para servir la aplicación
FROM nginx:alpine

# Copia los archivos generados en la carpeta dist al directorio html de Nginx
COPY --from=build /app/dist/angular-distribuido /usr/share/nginx/html

# Exponer el puerto 80 para que la aplicación sea accesible
EXPOSE 80

# Inicia el servidor Nginx
CMD ["nginx", "-g", "daemon off;"]
