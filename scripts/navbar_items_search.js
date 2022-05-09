let search_navbar= async(query)=>{
    console.log(query);

    let todayDate = new Date().toISOString().split("T")[0];

    console.log(todayDate);

    let res = await fetch(`https://newsapi.org/v2/everything?q=${query}&from=${todayDate}&sortBy=publishedAt&language=en&apiKey=06534a7328b048a0a25f6eea9a9844c6`);
    
    let data = await res.json();
    
    localStorage.setItem("last_query",JSON.stringify(data.articles));
    window.location.href="search.html";
    console.log(data);

}