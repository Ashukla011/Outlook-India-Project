let container=document.querySelector("#container_searchPage");




 let appendData=(searched_news)=>{
    container.innerHTML=null;

    //console.log(searched_news);

    searched_news.map(function (ele){
        let box=document.createElement("div");
        box.setAttribute("id","search_Page_box");

        let blockA=document.createElement("div");
        blockA.setAttribute("id","search_Page_box_blockA");

        /* let image=document.createElement("img");
        image.src=ele.urlToImage; */

        let blockB=document.createElement("div");
        blockB.setAttribute("id","search_Page_box_blockB");

        let title=document.createElement("h2");
        title.textContent=ele.title;

        let description=document.createElement("p");
        description.textContent=ele.description;

        //blockA.append(image);
        blockB.append(title,description);
        box.append(blockA,blockB);

        box.addEventListener("click",function (){
            localStorage.setItem("news",JSON.stringify(ele));
            window.location.href="detailedNews.html";
        })

        container.append(box);
    });
} 

let search= async()=>{                                          //this will only get called when search button is pressed
    let query = document.querySelector("#search_input").value;


    let todayDate = new Date().toISOString().split("T")[0];

    console.log(todayDate);

    let res = await fetch(`https://newsdata.io/api/1/news?apikey=pub_15610243fd574e27e03164cf7edb23aedf21b&q=${query}&to_date=${todayDate}&language=en`);
    
    let data = await res.json();

    //console.log(data.results);
    
    localStorage.setItem("last_query",JSON.stringify(data.results));        //Saving data to local storage
    //appendData(data.results);
    window.location.href="search.html";                                     //Switching to search.html
    
}

 let last_searched_news = JSON.parse(localStorage.getItem("last_query"));   //This will only get called when search.html get opened
appendData(last_searched_news);                                             //saved data from local storage will get listed
 
