async function apiCall(url) {

try{

    let res= await fetch(url);
    let data= await res.json();
    return data;

}
catch(error){
    console.log("error:", error)

}
   


}




function appendArticles(articles, main) {

articles.forEach( (elem) =>{

 let div= document.createElement("div");

 let title= document.createElement("h3");
title.innerHTML= elem.title;

 let content = document.createElement("p");
content.innerHTML= elem.content;

let description = document.createElement("p");
description.innerHTML= elem.description;



// let image= document.createElement("img");
// image.src= elem.url;

let imagesp= document.createElement("img");
imagesp.src= elem.urlToImage;

div.onclick = ()=>{
    localStorage.setItem("article", JSON.stringify(elem))

    window.location.href= "news.html"; 
}

div.append(title, imagesp, description, content)

main.append(div); 




})    //add append logic here

}

export { apiCall, appendArticles }