FROM node:lts-buster
RUN git clone https://github.com/denki-arch/DENKI-MD/root/denki-arch
WORKDIR /root/denki-arch
RUN npm install && npm install -g pm2 || yarn install --network-concurrency 1
COPY . .
EXPOSE 9090
CMD ["npm", "start"]
