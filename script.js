console.log("JS LOADED");

function startExperience() {
  // مخفی کردن صفحه شروع
  document.getElementById("startScreen").style.display = "none";

  // نمایش محتوای اصلی
  document.getElementById("mainContent").classList.remove("hidden");

  // پخش موزیک
  const music = document.getElementById("music");
  music.play().catch(err => {
    console.log("Autoplay blocked:", err);
  });

  // متن تایپی
  const text = ملیکا 
هنر یعنی یه فضا رو اینقد قشنگ بسازی ک آدم دلش بخواد توش زندانی بشه 
من سبحانم 
زندانی شماره ۰۶۶۸
یه درخواست دارم 
یه ملاقات خودمونی با خانم مدیر برای یه روز نزدیک...;

  let i = 0;
  const speed = 50;

  function typeWriter() {
    if (i < text.length) {
      document.getElementById("text").innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();
}
