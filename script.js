function Generate() {
  const quotes = {
    "-Oscar Wilde": "“Be yourself; everyone else is already taken.”",
    "-Marilyn Monroe":
      "I am selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.\"",
    "-Albert Einstein":
      "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    "-Bernard M. Baruch":
      "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
  };
  var authors = Object.keys(quotes);
  var author = authors[Math.floor(Math.random() * authors.length)];

  var quote = quotes[author];

  document.getElementById("quote").innerHTML = quote;
  document.getElementById("author").innerHTML = author;
}
