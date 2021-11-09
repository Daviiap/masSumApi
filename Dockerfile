FROM node:16.0.0-alpine3.12 AS BUILD_IMAGE

WORKDIR /usr/src/app

# Prepara ambiente para o build, precisa instalar todas dependencias por conta do TSC
COPY . .
RUN yarn

# Realiza o build
RUN yarn run build

# Remove o node_modules com dev dependences, instala as dependencias de prod e realiza o prune
RUN rm -rf ./node_modules
RUN yarn --production

#####################################################################
FROM node:16.0.0-alpine3.12

LABEL maintainer="Daviiap"
LABEL author="Daviiap"

# Instala dependencias do bash e do cURL
RUN apk add --no-cache curl && apk add --no-cache --upgrade bash && rm -rf /var/cache/apk/*

# Copia os arquivos da imagem de build
WORKDIR /usr/api/
COPY --from=BUILD_IMAGE /usr/src/app/bin ./
COPY --from=BUILD_IMAGE /usr/src/app/node_modules ./node_modules
COPY --from=BUILD_IMAGE /usr/src/app/entrypoint.sh ./

# Expoe a porta 4000
EXPOSE 4000

# Seta o entrypoint
ENTRYPOINT ["./entrypoint.sh"]

# Comando de inicializacao
CMD ["start"]

