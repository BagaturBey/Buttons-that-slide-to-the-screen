window.addEventListener("load", () => {
const Button1 = document.querySelector(".button-1");
const Button2 = document.querySelector(".button-2");
  
// Ekran yüklendiğinde butonları göstermek için animasyonlar ekleyelim
Button1.style.left = "-1000px";
Button2.style.right = "-1000px";
  
Button1.style.transition = "left 5s ease"; /* 5 saniye süren bir animasyon */
Button2.style.transition = "right 5s ease"; /* 5 saniye süren bir animasyon */
  
setTimeout(() => {
    Button1.style.left = "0";
     Button2.style.right = "0";
}, 100);
  
// Butonları ortalamak için container genişliğini düzenleyelim
const container = document.querySelector(".button-container");
const containerWidth = container.offsetWidth;
  
Button1.style.position = "absolute";
Button2.style.position = "absolute";
  
Button1.style.left = `${containerWidth / 2 - Button1.offsetWidth}px`;
Button2.style.right = `${containerWidth / 2 - Button2.offsetWidth}px`;

// Opaklık animasyonlarını ekleyelim
Button1.style.animation = "fadeIn 7s forwards"; /* 7 saniye süren bir animasyon */
Button2.style.animation = "fadeIn 7s forwards"; /* 7 saniye süren bir animasyon */
});
  