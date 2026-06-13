# Production Checklist

Bu proje Google’da indekslenebilir ve gerçek müşteriye açılabilir hale yaklaşmıştır; yine de yayından önce aşağıdaki maddeler gerçek ortamda kontrol edilmelidir.

## Güvenlik

- [ ] `.env` içindeki JWT_SECRET uzun ve rastgele yapıldı.
- [ ] Admin şifresi değiştirildi.
- [ ] Sunucuda HTTPS aktif.
- [ ] Nginx reverse proxy kuruldu.
- [ ] Rate limit açık.
- [ ] Helmet ve güvenlik headerları aktif.
- [ ] Dosya yükleme boyut ve tür kontrolleri şirket ihtiyacına göre sıkılaştırıldı.
- [ ] SQL injection kontrolleri yapıldı.
- [ ] XSS kontrolleri yapıldı.

## Hukuki

- [ ] KVKK metni gerçek şirket bilgileriyle düzenlendi.
- [ ] Gizlilik politikası hukuk danışmanı tarafından kontrol edildi.
- [ ] Kullanım şartları araç kiralama sözleşmesine göre yazıldı.
- [ ] Çerez bildirimi onay mekanizması kontrol edildi.

## Operasyon

- [ ] SMTP ayarları girildi.
- [ ] Ödeme sağlayıcı gerçek API ile bağlandı.
- [ ] Veritabanı yedekleme cron job kuruldu.
- [ ] Loglar izleniyor.
- [ ] Admin panel sadece yetkili kişilerde.
- [ ] Test rezervasyonu yapıldı.
- [ ] Test araç ekleme/silme yapıldı.
- [ ] Mobil test yapıldı.

## SEO

- [ ] Domain sitemap.xml içinde güncellendi.
- [ ] robots.txt domain ile güncellendi.
- [ ] Google Search Console eklendi.
- [ ] Meta açıklamaları kontrol edildi.
- [ ] Sayfa hız testi yapıldı.
