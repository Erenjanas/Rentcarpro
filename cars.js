const Cars = {
  items: [],
  activeCategory: '',
  async load(category = '') {
    this.activeCategory = category;
    const url = '/api/cars' + (category ? '?category=' + encodeURIComponent(category) + '&status=available' : '?status=available');
    this.items = await API.get(url);
    this.render(this.items);
  },
  render(list) {
    carsGrid.innerHTML = list.map(c => `
      <article class="car-card">
        <img src="${c.image_url || 'https://placehold.co/900x600/111/f6b73c?text=RentCar'}" alt="${c.title}">
        <div class="car-body">
          <div class="pill">${c.category}</div>
          <h3>${c.title}</h3>
          <p>${c.brand} ${c.model} • ${c.year} • ${c.fuel} • ${c.transmission}</p>
          <p>${c.seats} kişi • ${c.doors} kapı • Depozito ₺${c.deposit}</p>
          <div class="price">₺${c.price_daily}<small>/gün</small></div>
          <div class="card-actions">
            <button class="btn primary" onclick="Reservations.open(${c.id})">Rezervasyon</button>
            <a class="btn ghost" target="_blank" href="https://wa.me/16395697826?text=${encodeURIComponent(c.title + ' kiralamak istiyorum')}">WhatsApp</a>
          </div>
        </div>
      </article>`).join('');
  },
  searchText() {
    const q = carSearch.value.toLowerCase();
    this.render(this.items.filter(c => (c.title + c.brand + c.model + c.category).toLowerCase().includes(q)));
  },
  search(e) {
    e.preventDefault();
    document.getElementById('cars').scrollIntoView({ behavior:'smooth' });
  }
};
