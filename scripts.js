document.addEventListener('DOMContentLoaded', () => {
  const coButton = document.getElementById('co');
  const khongButton = document.getElementById('khong');
  
  let coFontSize = 20;
  let khongFontSize = 20;
  
  const updateSizes = () => {
    coButton.style.fontSize = `${coFontSize}px`;
    khongButton.style.fontSize = `${khongFontSize}px`;
  };
  updateSizes();

  khongButton.addEventListener('click', (e) => {
    e.preventDefault();
    coFontSize += 5;
    khongFontSize = Math.max(10, khongFontSize - 5);
    updateSizes();
  });

  coButton.addEventListener('click', (e) => {
    e.preventDefault();
    alert('KIỂM TẼN');
  });
});

// Đăng ký Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(() => console.log('Service Worker đăng ký thành công'))
    .catch(err => console.log('Lỗi đăng ký Service Worker:', err));
}
