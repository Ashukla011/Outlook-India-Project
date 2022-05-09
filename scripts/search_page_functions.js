let container=document.querySelector("#container_searchPage");




let appendData=(searched_news)=>{
    container.innerHTML=null;

    searched_news.map(function (ele){
        let box=document.createElement("div");
        box.setAttribute("id","search_Page_box");

        let blockA=document.createElement("div");
        blockA.setAttribute("id","search_Page_box_blockA");

        let image=document.createElement("img");
        image.src=ele.urlToImage;

        let blockB=document.createElement("div");
        blockB.setAttribute("id","search_Page_box_blockB");

        let title=document.createElement("h2");
        title.textContent=ele.title;

        let description=document.createElement("p");
        description.textContent=ele.description;

        blockA.append(image);
        blockB.append(title,description);
        box.append(blockA,blockB);

        box.addEventListener("click",function (){
            localStorage.setItem("news",JSON.stringify(ele));
            window.location.href="detailedNews.html";
        })

        container.append(box);
    });
}

let search= async()=>{
    let query = document.querySelector("#search_input").value;


    let todayDate = new Date().toISOString().split("T")[0];

    console.log(todayDate);

    let res = await fetch(`https://newsapi.org/v2/everything?q=${query}&from=${todayDate}&sortBy=publishedAt&language=en&apiKey=06534a7328b048a0a25f6eea9a9844c6`);
    
    let data = await res.json();
    
    localStorage.setItem("last_query",JSON.stringify(data.articles));
    window.location.href="search.html";
    appendData(data.articles);
}

let last_searched_news = JSON.parse(localStorage.getItem("last_query"));
appendData(last_searched_news);

