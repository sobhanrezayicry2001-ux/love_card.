const text = ملیکا...

هنر یعنی
یه فضا رو انقدر قشنگ بسازی
که آدم
دلش بخواد
توش زندانی بشه...

من سبحانم،
زندانی شماره 0668

و یه درخواست دارم—

یه ملاقات کوتاه
با مدیر این فضا
برای یه روز نزدیک...;

let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}

function startExperience() {
  document.getElementById("startScreen").style.display = "none";
  document.getElementById("mainContent").classList.remove("hidden");

  const music = document.getElementById("music");
  music.play();

  typeWriter();
}
