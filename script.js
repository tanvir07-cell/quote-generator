// pull the quotes from locally:

const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const facebookBtn = document.getElementById("facebook");
const newQuoteBtn = document.getElementById("new-quote");

function newQuote() {
  const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];

  if (!quote.author) {
    authorText.textContent = "Unknow";
  } else {
    authorText.textContent = quote.author;
  }

  if (quote.text.length > 150) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }

  quoteText.textContent = quote.text;

  //   jokhon newQuoteBtn e click korbo tokhon jate quotation sign ti dekhay:
  document.getElementById("quote-sign-left").style.display = "inline";
  document.getElementById("quote-sign-right").style.display = "inline";
}

newQuoteBtn.addEventListener("click", newQuote);
