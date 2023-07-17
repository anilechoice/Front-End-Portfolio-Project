const url =
  "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d924b68639f044a1b31eeff37055b6ca";
//url = 'https://tinyurl.com/2cy6uaxe'
const articleTemplate = document.getElementById("article-template");
const form = document.getElementById("news-search");
const newsOutlet = document.getElementById("news-outlet");
const author = document.getElementById("author");
const title = document.getElementById("title")


form.addEventListener("submit", function (event) {
  event.preventDefault();
  const outletValue = event.target.outlet.value || null;
   //const authorValue = event.target.author.value || null;
   //const titleValue = event.target.title.value || null;

  fetch(url)
    .then((data) => {
      return data.json();
    })
    .then((json) => {
      console.log(json);

      const articles = json.articles;
    
      
     const filteredArticles = articles.filter(article => {
      console.log(article.source.name.toLowerCase(),outletValue?.toLowerCase())
       return article.source.name.toLowerCase().includes(outletValue?.toLowerCase()) 
       //|| article.author.toLowerCase().includes(authorValue?.toLowerCase()) || article.title.toLowerCase().includes(titleValue?.toLowerCase())
      }) 
      console.log(filteredArticles)
      filteredArticles.forEach((article) => getArticle(article));
      
    })
    .catch((err) => console.log(err.code, err.message));
});

const getArticle = (article) => {
  console.log(article)
  const articleContainer = document.createElement('div')
  articleContainer.innerHTML = `<div id="article-template" >
  <img src="${article.urlToImage}"/>
  <h3> ${article.title} </h3>
  <h4> ${article.source.name} </h4>
  <a href="${article.url}"></a>
</div >`
  articleTemplate.appendChild(articleContainer);
};

// for (i = 0; i < newsOutlet.length; i++) {
//   if (!newsOutlet[i]..toLowerCase().includes())
// }

// form.addEventListener("input", (e) => {
//   e.preventDefault();
//   fetch(url)
//     .then((data) => {
//       return data.json();
//     })
//     .then((json) => {
//       console.log(json);
   
//       const articles = json.articles;
//   const outletValue = e.target.outlet.value;
//   const authorValue = e.target.author.value;
//   const titleValue = e.target.title.value;
    
//   articles.forEach(article => {
//       console.log(article)
//       const isVisible = article.source.name.toLowerCase().includes(outletValue.toLowerCase()) || article.author.toLowerCase().includes(authorValue.toLowerCase()) || article.title.toLowerCase().includes(titleValue.toLowerCase())
//       article.element.classList.toggle("hide", !isVisible)
//     })
//   })
// });