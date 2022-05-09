/* let getData= async()=>{

    let todayDate = new Date().toISOString().split("T")[0];

    let res = await fetch(`https://newsapi.org/v2/everything?q=ipl&from=${todayDate}&sortBy=publishedAt&language=en&apiKey=06534a7328b048a0a25f6eea9a9844c6`);

    let data = await res.json();

    console.log(data.articles[0]);
    localStorage.setItem("news",JSON.stringify(data.articles[0]));
}

getData(); */

let appendData = (news)=>{
    
    let container=document.querySelector("#container_DetailedNews");
    container.innerHTML=null;

    let box=document.createElement("div");
    box.setAttribute("id","detailed_news_box");

    let title=document.createElement("h1");
    title.textContent=news.title;
    title.style.fontSize="50px";

    let image=document.createElement("img");
    image.src=news.urlToImage;

    let description=document.createElement("h2");
    description.textContent=news.description;

    let content=document.createElement("p");
    content.textContent=news.content;

    let author=document.createElement("h4");
    author.textContent=news.author;
    
    box.append(title,image,description,content,author);
    container.append(box);
}

let news = JSON.parse(localStorage.getItem("news"));
appendData(news);