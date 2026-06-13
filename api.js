const API = {
  token() { return localStorage.getItem('token') || ''; },
  headers() {
    const h = { 'Content-Type': 'application/json' };
    if (this.token()) h.Authorization = 'Bearer ' + this.token();
    return h;
  },
  async get(url) {
    const r = await fetch(url, { headers: this.headers() });
    return r.json();
  },
  async post(url, body) {
    const r = await fetch(url, { method:'POST', headers: this.headers(), body: JSON.stringify(body) });
    return r.json();
  },
  async put(url, body) {
    const r = await fetch(url, { method:'PUT', headers: this.headers(), body: JSON.stringify(body) });
    return r.json();
  },
  async del(url) {
    const r = await fetch(url, { method:'DELETE', headers: this.headers() });
    return r.json();
  }
};
