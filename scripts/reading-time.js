document.addEventListener("DOMContentLoaded", () => {
  const article = document.querySelector(".article-content");
  const readingTime = document.querySelector(".article-reading-time");

  if (!article || !readingTime) return;

  const text = article.innerText
    .replace(/\s+/g, " ")
    .trim();

  if (!text) return;

  const words = text.split(" ").filter(Boolean).length;

  const wordsPerMinute = 200;
  const minutes = Math.max(1, Math.ceil(words / wordsPerMinute));

  readingTime.textContent = `${minutes} menit baca`;
});
