let search_navbar= async(query)=>{
    console.log(query);

    let todayDate = new Date().toISOString().split("T")[0];

    console.log(todayDate);

    let res = await fetch(`https://newsdata.io/api/1/news?apikey=pub_15610243fd574e27e03164cf7edb23aedf21b&q=${query}&to_date=${todayDate}&language=en`);
    
    let data = await res.json();
    
    localStorage.setItem("last_query",JSON.stringify(data.results));
    window.location.href="search.html";
    console.log(data.results);

}