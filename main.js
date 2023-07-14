url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d924b68639f044a1b31eeff37055b6ca"

const image = document.getElementById("img")
const title = document.getElementById("title")
const author = document.getElementById("author")
const newsOutlet = document.getElementById("news-outlet");
const link = document.getElementById("link")


button.addEventListener("click", function() {
    fetch(url)
    .then(data => data.json())
    .then(json => newsSearch(json))
    .catch(err => alert("request failed", err));
});

newsSearch = (json) => {
    const article = json.title[0];
    for (let key in title) {
        if ()
    }
}
