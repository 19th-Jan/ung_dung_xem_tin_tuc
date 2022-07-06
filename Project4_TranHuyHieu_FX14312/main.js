// Hiển thị nội dung
function createArticleHtml(data) {
    var mainHtml = "";
    for (let i = 0; i < data.articles.length; i++) {
        const article = data.articles[i];
        var articleHtml = 
            `<div class="col-md-6" id="article-container">
                <div class="main-box">
                    <div>
                        <div id="img">
                            <img src="${article.image}" alt="${article.title}">
                        </div>
                        <a href="${article.url}" id="title" target="_blank">${article.title}</a>
                        <div id="publischedAT">
                            ${article.publishedAt}
                        </div>
                    </div>
                    <div id="description">
                        ${article.description}
                    </div>
                </div> 
             </div>`;
        mainHtml += articleHtml;
    }
    document.getElementById("article-container").innerHTML = mainHtml;
}

// Tải nội dung top headline
fetch("https://gnews.io/api/v4/top-headlines?&token=3c7e6d470d79119cbdb45ef4089b6fc2")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        createArticleHtml(data);
    });

//Tải nội dung search
function searchArticle() {
    const searchValue = document.getElementById("search-input").value;
    fetch(`https://gnews.io/api/v4/search?q=${searchValue}&token=3c7e6d470d79119cbdb45ef4089b6fc2`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            createArticleHtml(data);
        });
    }
document.getElementById("search-btn").onclick = searchArticle;

// Hiệu ứng load trang
$(document).ready(function(){
    $(window).on('load', function(event) {
        $('body').removeClass('preloading');
        $('.load').delay(1000).fadeOut('fast');
    });
})
  