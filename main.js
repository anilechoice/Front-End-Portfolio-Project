url = 'https://newsapi.org/v2/top-headlines?' + 'country=us&category=business'+ 'apiKey=d924b68639f044a1b31eeff37055b6ca'

articleTemplate = document.getElementById("article-template")
button.addEventListener("click", (e) => {

fetch(url)
    .then(data => data.json())
    .then(json => getArticle(json))
    .catch(err => alert('request failed', err))
});

const getArticle = (json) => {
    articleTemplate.innerHTML = 
    `<template id="article-template" >
    <img src="${json.article.urlToImage}"/>
    <h3> ${json.article.title} </h3>
    <h4> ${json.article.source.name} </h4>
    <a href="${json.article.url}"></a>
</template >`
}