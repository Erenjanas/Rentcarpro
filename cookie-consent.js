const CookieConsent = {
  init() {
    if (localStorage.getItem('cookie_ok')) return;
    const box = document.createElement('div');
    box.className = 'cookie-box';
    box.innerHTML = `<b>Çerez Kullanımı</b><p>Deneyimi iyileştirmek için çerezler kullanıyoruz.</p><a href="/pages/cookies.html">Detay</a><button>Onayla</button>`;
    box.querySelector('button').onclick = () => { localStorage.setItem('cookie_ok','1'); box.remove(); };
    document.body.appendChild(box);
  }
};
document.addEventListener('DOMContentLoaded', () => CookieConsent.init());
