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

  // Xử lý nhấp vào "Không"
  khongButton.addEventListener('click', (e) => {
    e.preventDefault();
    coFontSize += 5; // Phóng to chữ "Có"
    khongFontSize = Math.max(10, khongFontSize - 5); // Thu nhỏ chữ "Không", tối thiểu 10px
    updateSizes();
  });

  // Xử lý nhấp vào "Có"
  coButton.addEventListener('click', (e) => {
    e.preventDefault();
    alert('KIỂM TẼN'); // Hiển thị thông báo
  });
});

// Đăng ký Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(() => console.log('Service Worker đăng ký thành công'))
    .catch(err => console.log('Lỗi đăng ký Service Worker:', err));
}
