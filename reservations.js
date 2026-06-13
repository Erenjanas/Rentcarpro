const Reservations = {
  carId: null,
  open(carId) {
    this.carId = carId;
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    reservationModal.classList.add('show');
    reservationModal.innerHTML = `
      <div class="modal-box">
        <button class="x" onclick="Reservations.close()">×</button>
        <h2>Rezervasyon Bilgileri</h2>
        <input id="customerName" placeholder="Ad Soyad" value="${user.name || ''}">
        <input id="customerEmail" placeholder="E-posta" value="${user.email || ''}">
        <input id="customerPhone" placeholder="Telefon">
        <input id="pickupLocation" placeholder="Alış lokasyonu" value="${searchLocation?.value || ''}">
        <input id="returnLocation" placeholder="İade lokasyonu" value="${searchLocation?.value || ''}">
        <label>Alış tarihi<input id="modalPickup" type="datetime-local" value="${pickupDate?.value || ''}"></label>
        <label>İade tarihi<input id="modalReturn" type="datetime-local" value="${returnDate?.value || ''}"></label>
        <textarea id="notes" placeholder="Not"></textarea>
        <button class="btn primary" onclick="Reservations.create()">Rezervasyon Oluştur</button>
      </div>`;
  },
  close() { reservationModal.classList.remove('show'); },
  async create() {
    const data = await API.post('/api/reservations', {
      car_id: this.carId,
      customer_name: customerName.value,
      customer_email: customerEmail.value,
      customer_phone: customerPhone.value,
      pickup_location: pickupLocation.value,
      return_location: returnLocation.value,
      pickup_date: modalPickup.value,
      return_date: modalReturn.value,
      notes: notes.value
    });
    if (data.id) {
      alert('Rezervasyon oluşturuldu. No: ' + data.id);
      this.close();
    } else alert(data.error || 'Rezervasyon oluşturulamadı');
  }
};
