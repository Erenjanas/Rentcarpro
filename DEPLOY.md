# Canlı Yayına Alma

1. VPS al: Ubuntu 22.04 önerilir.
2. Node.js 20 kur.
3. Projeyi sunucuya at.
4. npm install çalıştır.
5. .env dosyasını düzenle.
6. npm run seed çalıştır.
7. pm2 ile başlat:
   npm install -g pm2
   pm2 start backend/server.js --name rentcar
8. Nginx reverse proxy ayarla.
9. Domain DNS kaydını sunucu IP adresine yönlendir.
10. SSL kur:
   certbot --nginx


## Production V3 Ek Komutlar

```bash
npm run audit:local
npm run backup
npm run health
```

Nginx örneği:

```nginx
server {
  server_name yourdomain.com www.yourdomain.com;
  location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
  }
}
```
