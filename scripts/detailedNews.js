/*  let getData= async()=>{

    let todayDate = new Date().toISOString().split("T")[0];

    let res = await fetch(`https://newsdata.io/api/1/news?apikey=pub_15613809a2723f4f851780b3997b38b0825e6&q=${query}&to_date=${todayDate}&language=en`);

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

    /* let image=document.createElement("img");
    image.src=news.urlToImage; */

    let description=document.createElement("h2");
    description.textContent=news.description;

    let content=document.createElement("p");
    content.textContent=news.content;

    let author=document.createElement("h4");
    author.textContent=news.author;
    
    box.append(title,/* image, */description,content,author);
    container.append(box);
}

let news = JSON.parse(localStorage.getItem("news"));
appendData(news);