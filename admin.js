const Admin = {
  token() { return localStorage.getItem('token') || ''; },
  ensure() {
    if (!this.token()) return false;
    loginPanel.classList.add('hidden');
    return true;
  },
  async login() {
    const data = await API.post('/api/auth/login', { email: adminEmail.value, password: adminPassword.value });
    if (!data.token) return alert(data.error || 'Giriş başarısız');
    if (data.user.role !== 'admin') return alert('Admin yetkisi yok');
    localStorage.setItem('token', data.token);
    loginPanel.classList.add('hidden');
    this.tab('dashboard');
  },
  show(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
  },
  tab(id) {
    if (!this.ensure()) return;
    this.show(id);
    if (id === 'dashboard') this.dashboard();
    if (id === 'cars') this.cars();
    if (id === 'reservations') this.reservations();
    if (id === 'users') this.users();
  },
  async dashboard() {
    const s = await API.get('/api/dashboard/stats');
    dashboard.innerHTML = `<h1>Dashboard</h1><div class="cards">
      <div class="stat"><p>Araç</p><b>${s.cars}</b></div>
      <div class="stat"><p>Kullanıcı</p><b>${s.users}</b></div>
      <div class="stat"><p>Rezervasyon</p><b>${s.reservations}</b></div>
      <div class="stat"><p>Ciro</p><b>₺${s.revenue}</b></div>
    </div>`;
  },
  async cars() {
    const rows = await API.get('/api/cars');
    carRows.innerHTML = rows.map(c => `<tr>
      <td><img src="${c.image_url || ''}"></td>
      <td>${c.title}<br><small>${c.brand} ${c.model}</small></td>
      <td>₺${c.price_daily}</td>
      <td>${c.status}</td>
      <td><button onclick='Admin.editCar(${JSON.stringify(c).replaceAll("'", "&apos;")})'>Düzenle</button>
      <button onclick="Admin.deleteCar(${c.id})">Sil</button></td>
    </tr>`).join('');
  },
  editCar(c) {
    carId.value=c.id; brand.value=c.brand; model.value=c.model; title.value=c.title; category.value=c.category;
    price_daily.value=c.price_daily; price_weekly.value=c.price_weekly; price_monthly.value=c.price_monthly;
    year.value=c.year; fuel.value=c.fuel; transmission.value=c.transmission; seats.value=c.seats; doors.value=c.doors;
    color.value=c.color; image_url.value=c.image_url; deposit.value=c.deposit; status.value=c.status; featured.value=c.featured;
    description.value=c.description || '';
  },
  async saveCar() {
    const body = {
      brand:brand.value, model:model.value, title:title.value, category:category.value,
      price_daily:price_daily.value, price_weekly:price_weekly.value, price_monthly:price_monthly.value,
      year:year.value, fuel:fuel.value, transmission:transmission.value, seats:seats.value, doors:doors.value,
      color:color.value, image_url:image_url.value, deposit:deposit.value, status:status.value || 'available',
      featured:featured.value === '1', description:description.value
    };
    const url = '/api/cars' + (carId.value ? '/' + carId.value : '');
    const data = carId.value ? await API.put(url, body) : await API.post(url, body);
    if (data.error) return alert(data.error);
    document.querySelectorAll('.form-grid input,.form-grid textarea').forEach(i => i.value='');
    this.cars();
  },
  async deleteCar(id) {
    if (!confirm('Araç silinsin mi?')) return;
    await API.del('/api/cars/' + id);
    this.cars();
  },
  async reservations() {
    const rows = await API.get('/api/reservations');
    reservationRows.innerHTML = rows.map(r => `<tr>
      <td>#${r.id}</td><td>${r.customer_name}<br>${r.customer_email}</td><td>${r.car_title}</td><td>₺${r.total}</td>
      <td>${r.status}</td><td><button onclick="Admin.setReservation(${r.id},'confirmed')">Onayla</button><button onclick="Admin.setReservation(${r.id},'cancelled')">İptal</button></td>
    </tr>`).join('');
  },
  async setReservation(id, status) {
    await API.put('/api/reservations/' + id, { status, payment_status:'unpaid', notes:'' });
    this.reservations();
  },
  async users() {
    const rows = await API.get('/api/users');
    userRows.innerHTML = rows.map(u => `<tr><td>${u.name}</td><td>${u.email}</td><td>${u.role}</td><td>${u.status}</td></tr>`).join('');
  }
};

if (localStorage.getItem('token')) Admin.tab('dashboard');
