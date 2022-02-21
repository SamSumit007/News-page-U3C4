function storeSearchterm(term) {
term.forEach(element => {
    let div = document.createElement("div");
    let h3 = document.createElement("h3");
    h3.innerText = element.description;
    let img = document.createElement("img");
    img.src = element.urlToImage;
    let p = document.createElement("p");
    p.innerText = element.content;

    div.append(h3,img,p);
     main.append(div)
    
});


}

export default storeSearchterm