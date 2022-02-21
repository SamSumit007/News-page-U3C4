async function apiCall(url) {
try{
    let res = await fetch   (url);
    let data = await res.json();
    return  data;
}catch(error){
console.log('error:', error)

    //add api call logic here
}

}


function appendArticles(articles, main) {
    articles.forEach(element => {
        let div = document.createElement("div");
        let h3 = document.createElement("h3");
        h3.innerText = element.description;
        let img = document.createElement("img");
        img.src = element.urlToImage;
        let p = document.createElement("p");
        p.innerText = element.content;

        div.append(h3,img,p);
        div.onclick = () =>{
            localStorage.setItem("clicked_news", JSON.stringify(element));
            window.location.href = "news.html"
        };
        main.append(div);


        
    });


    //add append logic here

}

export { apiCall, appendArticles }