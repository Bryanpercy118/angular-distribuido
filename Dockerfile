# Utiliza una imagen base de Node.js 20.15.1 para compilar la aplicación
FROM node:20.15.1 AS build

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Construye la aplicación Angular para producción
RUN npm run build --prod

# Utiliza una imagen base de Nginx para servir la aplicación
FROM nginx:alpine

# Copia los archivos generados en la etapa de construcción al directorio de Nginx
COPY --from=build /app/dist/ /usr/share/nginx/html

# Copia un archivo de configuración personalizado para Nginx (opcional)
COPY nginx.conf /etc/nginx/nginx.conf

# Expone el puerto 80
EXPOSE 80

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
