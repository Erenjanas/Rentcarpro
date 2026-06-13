# API Dokümantasyonu

## POST /api/auth/register
Kullanıcı kaydı
Yetki: Public/Kullanıcı

## POST /api/auth/login
Kullanıcı/admin girişi
Yetki: Public/Kullanıcı

## GET /api/auth/me
Oturumdaki kullanıcı
Yetki: Public/Kullanıcı

## GET /api/cars
Araç listesi
Yetki: Public/Kullanıcı

## POST /api/cars
Admin araç ekleme
Yetki: Public/Kullanıcı

## PUT /api/cars/:id
Admin araç güncelleme
Yetki: Admin

## DELETE /api/cars/:id
Admin araç silme
Yetki: Admin

## POST /api/reservations
Rezervasyon oluşturma
Yetki: Public/Kullanıcı

## GET /api/reservations
Admin rezervasyon listesi
Yetki: Public/Kullanıcı

## PUT /api/reservations/:id
Rezervasyon durum güncelleme
Yetki: Admin

## GET /api/users
Admin kullanıcı listesi
Yetki: Admin

## GET /api/dashboard/stats
Admin dashboard
Yetki: Admin
