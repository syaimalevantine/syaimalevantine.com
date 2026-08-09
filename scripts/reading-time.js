document.addEventListener("DOMContentLoaded", () => {
  const article = document.querySelector(".article-content");
  const readingTime = document.querySelector(".article-reading-time");

  if (!article || !readingTime) return;

  const text = article.innerText
    .replace(/\s+/g, " ")
    .trim();

  if (!text) return;

  const words = text.split(" ").filter(Boolean).length;

  const lang = document.documentElement.lang.toLowerCase();

  const wordsPerMinute = {
    id: 200,
    en: 200,
    tr: 180,
    ar: 180
  };

  const wpm = wordsPerMinute[lang] || 200;
  const minutes = Math.max(1, Math.ceil(words / wpm));

  const labels = {
    id: `${minutes} menit baca`,
    en: `${minutes} min read`,
    tr: `${minutes} dakika okuma`,
    ar: `${minutes} دقيقة للقراءة`
  };

  readingTime.textContent = labels[lang] || labels.en;
});