const Auth = {
  open() {
    authModal.classList.add('show');
    authModal.innerHTML = `
      <div class="modal-box">
        <button class="x" onclick="Auth.close()">×</button>
        <h2>Giriş Yap</h2>
        <input id="loginEmail" placeholder="E-posta">
        <input id="loginPassword" type="password" placeholder="Şifre">
        <button class="btn primary" onclick="Auth.login()">Giriş Yap</button>
        <hr>
        <h2>Kayıt Ol</h2>
        <input id="regName" placeholder="Ad Soyad">
        <input id="regEmail" placeholder="E-posta">
        <input id="regPhone" placeholder="Telefon">
        <input id="regPassword" type="password" placeholder="Şifre">
        <button class="btn ghost" onclick="Auth.register()">Kayıt Ol</button>
      </div>`;
  },
  close() { authModal.classList.remove('show'); },
  async login() {
    const data = await API.post('/api/auth/login', { email: loginEmail.value, password: loginPassword.value });
    if (data.token) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      alert('Giriş başarılı');
      this.close();
    } else alert(data.error || 'Giriş başarısız');
  },
  async register() {
    const data = await API.post('/api/auth/register', { name: regName.value, email: regEmail.value, phone: regPhone.value, password: regPassword.value });
    if (data.token) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      alert('Kayıt başarılı');
      this.close();
    } else alert(data.error || 'Kayıt başarısız');
  }
};
