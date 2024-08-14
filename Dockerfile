# Etapa 1: Compilación de la aplicación Angular
FROM node:20.15.1 AS build

WORKDIR /app

# Copia los archivos de configuración de dependencias
COPY package*.json ./

# Instala las dependencias necesarias
RUN npm install

# Copia el resto del código fuente al contenedor
COPY . .

# Construye la aplicación Angular para producción
RUN npm run build -- --configuration production

# Etapa 2: Servir la aplicación utilizando `serve`
FROM node:20.15.1 AS serve

WORKDIR /app

# Instala `serve` para servir la aplicación Angular
RUN npm install -g serve

# Copia los archivos generados en la etapa de construcción
COPY --from=build /app/dist/angular-distribuido /app

# Expone el puerto 3000 del contenedor para el tráfico web
EXPOSE 3000

# Comando para iniciar `serve`
CMD ["serve", "-s", ".", "-l", "3000"]
