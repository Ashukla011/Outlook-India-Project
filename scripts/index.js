let getData = async (query) => {
  let todayDate = new Date().toISOString().split("T")[0];

  let res = await fetch(`https://newsapi.org/v2/everything?q=${query}&from=${todayDate}&sortBy=publishedAt&language=en&apiKey=aca8e599ce734ecf88f6d175fb6e04a8`);

  let data = await res.json();

  append_1(data.articles)
  append_minidiv_2(data.articles)

  append_2(data.articles)
  append_3(data.articles)
}

getData("general");





 let getData2 = async (query) => {
  let todayDate = new Date().toISOString().split("T")[0];

  let res = await fetch(`https://newsapi.org/v2/everything?q=${query}&from=${todayDate}&sortBy=publishedAt&language=en&apiKey=aca8e599ce734ecf88f6d175fb6e04a8`);

  let data = await res.json();

  append_national_1(data.articles)
  append_national_2(data.articles)
  append_national_3(data.articles)
}

getData2("national features");






let getData3 = async (query) => {
  let todayDate = new Date().toISOString().split("T")[0];

  let res = await fetch(`https://newsapi.org/v2/everything?q=${query}&from=${todayDate}&sortBy=publishedAt&language=en&apiKey=aca8e599ce734ecf88f6d175fb6e04a8`);

  let data = await res.json();

  BUSINESS_MONEY_1(data.articles)
  BUSINESS_MONEY_2(data.articles)
  BUSINESS_MONEY_3(data.articles)
}

getData3("business and money");






let getData4 = async (query) => {
  let todayDate = new Date().toISOString().split("T")[0];

  let res = await fetch(`https://newsapi.org/v2/everything?q=${query}&from=${todayDate}&sortBy=publishedAt&language=en&apiKey=aca8e599ce734ecf88f6d175fb6e04a8`);

  let data = await res.json();

  CRYPTO_CORNER_1(data.articles)
  CRYPTO_CORNER_2(data.articles)
  CRYPTO_CORNER_3(data.articles)
  CRYPTO_CORNER_4(data.articles)
}

getData4("crypto money");






let getData5 = async (query) => {
  let todayDate = new Date().toISOString().split("T")[0];

  let res = await fetch(`https://newsapi.org/v2/everything?q=${query}&from=${todayDate}&sortBy=publishedAt&language=en&apiKey=aca8e599ce734ecf88f6d175fb6e04a8`);

  let data = await res.json();

  SPORTS_1(data.articles)
  SPORTS_2(data.articles)
  SPORTS_3(data.articles)
  SPORTS_4(data.articles)
}

getData5("sports");






let getData6 = async (query) => {
  let todayDate = new Date().toISOString().split("T")[0];

  let res = await fetch(`https://newsapi.org/v2/everything?q=${query}&from=${todayDate}&sortBy=publishedAt&language=en&apiKey=aca8e599ce734ecf88f6d175fb6e04a8`);

  let data = await res.json();

  ENTERTAINMENT_1(data.articles)
  ENTERTAINMENT_2(data.articles)
  ENTERTAINMENT_3(data.articles)
}

getData6("entertainment");






let getData7 = async (query) => {
  let todayDate = new Date().toISOString().split("T")[0];

  let res = await fetch(`https://newsapi.org/v2/everything?q=${query}&from=${todayDate}&sortBy=publishedAt&language=en&apiKey=aca8e599ce734ecf88f6d175fb6e04a8`);

  let data = await res.json();

  CULTUREANDSOCIETY(data.articles)
}

getData7("culture and society");






let getData8 = async (query) => {
  let todayDate = new Date().toISOString().split("T")[0];

  let res = await fetch(`https://newsapi.org/v2/everything?q=${query}&from=${todayDate}&sortBy=publishedAt&language=en&apiKey=aca8e599ce734ecf88f6d175fb6e04a8`);

  let data = await res.json();

  MAGAZINE__1(data.articles)
  MAGAZINE__2_min_2(data.articles)
  MAGAZINE__2(data.articles)
  MAGAZINE__3(data.articles)
}

getData8("magazine");






let getData9 = async (query) => {
  let todayDate = new Date().toISOString().split("T")[0];

  let res = await fetch(`https://newsapi.org/v2/everything?q=${query}&from=${todayDate}&sortBy=publishedAt&language=en&apiKey=aca8e599ce734ecf88f6d175fb6e04a8`);

  let data = await res.json();

  WORLD_NEWS_1(data.articles)
  WORLD_NEWS_2(data.articles)
  WORLD_NEWS_3(data.articles)
  WORLD_NEWS_4(data.articles)
}

getData9("world news");






let getData10 = async (query) => {
  let todayDate = new Date().toISOString().split("T")[0];

  let res = await fetch(`https://newsapi.org/v2/everything?q=${query}&from=${todayDate}&sortBy=publishedAt&language=en&apiKey=aca8e599ce734ecf88f6d175fb6e04a8`);

  let data = await res.json();

  photos(data.articles)
}

getData10("most important news");






let getData11 = async (query) => {
  let todayDate = new Date().toISOString().split("T")[0];

  let res = await fetch(`https://newsapi.org/v2/everything?q=${query}&from=${todayDate}&sortBy=publishedAt&language=en&apiKey=aca8e599ce734ecf88f6d175fb6e04a8`);

  let data = await res.json();

  SPOTLIGHT_1(data.articles)
}

getData11("news in spotlight");






let getData12 = async (query) => {
  let todayDate = new Date().toISOString().split("T")[0];

  let res = await fetch(`https://newsapi.org/v2/everything?q=${query}&from=${todayDate}&sortBy=publishedAt&language=en&apiKey=aca8e599ce734ecf88f6d175fb6e04a8`);

  let data = await res.json();

  BUSINESSSPOTLIGHT(data.articles)
}

getData12("top business news"); 





let append_1 = (data) => {
  for (let i = 0; i < 1; i++) {

    let div = document.createElement("div")


    let urlToImage = document.createElement("img")
    if (i === 0) {

      urlToImage.src = data[i].urlToImage;
      urlToImage.setAttribute("id","p1");
    }

    let publishedAt = document.createElement("p")
    publishedAt.innerText = data[i].publishedAt


    let author = document.createElement("p")
    author.innerText = data[i].author
    author.style.color = "red"


    let title = document.createElement("h3")
    title.innerHTML = data[i].title
    /* title.style.fontSize="30px"; */


    let description = document.createElement("p")
    description.innerText = data[i].description

    let hr = document.createElement("hr")


    div.append(urlToImage, author, title, description, publishedAt, hr);
    div.addEventListener("click", function (){
      localStorage.setItem("news", JSON.stringify(data[i]));
      window.location.href="detailedNews.html";
    });
    document.querySelector("#minidiv_1").append(div);


  }
}

let append_minidiv_2 = (data) => {
  for (let i = 1; i < 5; i++) {

    let div = document.createElement("div")


    let author = document.createElement("p")
    author.innerText = data[i].author

    author.style.color = "red"

    let title = document.createElement("h3")
    title.innerHTML = data[i].title

    let description = document.createElement("p")
    description.innerText = data[i].description

    let publishedAt = document.createElement("p")
    publishedAt.innerText = data[i].publishedAt

    let hr = document.createElement("hr")

    div.append(author, title, description, publishedAt, hr);
    div.addEventListener("click", function (){
      localStorage.setItem("news", JSON.stringify(data[i]));
      window.location.href="detailedNews.html";
    });
    document.querySelector("#minidiv_2").append(div)


  }
}

let append_2 = (data) => {
  for (let i = 5; i < 10; i++) {

    let div = document.createElement("div")


    let author = document.createElement("p")
    author.innerText = data[i].author

    author.style.color = "red"

    let title = document.createElement("h3")
    title.innerHTML = data[i].title

    let description = document.createElement("p")
    description.innerHTML = data[i].description

    let publishedAt = document.createElement("p")
    publishedAt.innerText = data[i].publishedAt

    let hr = document.createElement("hr")

    div.append(author, title, description, publishedAt, hr);
    div.addEventListener("click", function (){
      localStorage.setItem("news", JSON.stringify(data[i]));
      window.location.href="detailedNews.html";
    });
    document.querySelector("#block_2_av_1").append(div)


  }
}


let append_3 = (data) => {
  for (let i = 10; i < 13; i++) {

    let div = document.createElement("div")
    //  div.style.border="1px solid green"
    div.style.width = "fit-content"

    let urlToImage = document.createElement("img")
    urlToImage.src = data[i].urlToImage;
    urlToImage.style.height = "150px";
    urlToImage.style.width = "fit-content";



    let author = document.createElement("p")
    author.innerText = data[i].author

    /* author.style.width = "60%" */
    author.style.color = "red"
    let title = document.createElement("h3")
    title.innerHTML = data[i].title
    /* title.style.width = "60%" */

    let description = document.createElement("p")
    description.innerText = data[i].description
    /* description.style.width = "60%" */

    let publishedAt = document.createElement("p")
    publishedAt.innerText = data[i].publishedAt
    /* publishedAt.style.width = "60%" */
    let hr = document.createElement("hr")


    div.append(urlToImage, author, title, description, publishedAt, hr)
    div.addEventListener("click", function (){
      localStorage.setItem("news", JSON.stringify(data[i]));
      window.location.href="detailedNews.html";
    });
    document.querySelector("#block_3_av_1").append(div)


  }
}


///NATIONAL FEATURES

let append_national_1 = (data) => {
  for (let i = 0; i < 1; i++) {

    let div = document.createElement("div")


    let urlToImage = document.createElement("img")
    if (i === 0) {

      urlToImage.src = data[i].urlToImage;
    }

    let publishedAt = document.createElement("p")
    publishedAt.innerText = data[i].publishedAt


    let author = document.createElement("p")
    author.innerText = data[i].author
    author.style.color = "red"


    let title = document.createElement("h3")
    title.innerHTML = data[i].title

    let description = document.createElement("p")
    description.innerText = data[i].description



    div.append(urlToImage, author, title, description, publishedAt)
    div.addEventListener("click", function (){
      localStorage.setItem("news", JSON.stringify(data[i]));
      window.location.href="detailedNews.html";
    });
    document.querySelector("#block_a_av_2").append(div)
  }
}



let append_national_2 = (data) => {
  for (let i = 1; i < 6; i++) {

    let div = document.createElement("div")


    //  let urlToImage=document.createElement("img")
    //    if(i===0)
    //    {

    //     urlToImage.src=data[i].urlToImage;
    //    }

    let publishedAt = document.createElement("p")
    publishedAt.innerText = data[i].publishedAt


    let author = document.createElement("p")
    author.innerText = data[i].author
    author.style.color = "red"


    let title = document.createElement("h3")
    title.innerHTML = data[i].title

    let description = document.createElement("p")
    description.innerHTML = data[i].description
    let hr = document.createElement("hr")


    div.append(author, title, description, publishedAt, hr)
    div.addEventListener("click", function (){
      localStorage.setItem("news", JSON.stringify(data[i]));
      window.location.href="detailedNews.html";
    });
    document.querySelector("#block_b_av_2").append(div)
  }
}



let append_national_3 = (data) => {
  for (let i = 6; i < 10; i++) {

    let div = document.createElement("div")


    let urlToImage = document.createElement("img")
    if (i === 0) {

      urlToImage.src = data[i].urlToImage;
    }

    let publishedAt = document.createElement("p")
    publishedAt.innerText = data[i].publishedAt


    let author = document.createElement("p")
    author.innerText = data[i].author
    author.style.color = "red"


    let title = document.createElement("h3")
    title.innerHTML = data[i].title

    let description = document.createElement("p")
    description.innerHTML = data[i].description

    let hr = document.createElement("hr")

    div.append(urlToImage, author, title, description, publishedAt, hr)
    div.addEventListener("click", function (){
      localStorage.setItem("news", JSON.stringify(data[i]));
      window.location.href="detailedNews.html";
    });
    document.querySelector("#block_c_av_2").append(div)
  }
}

// BUSINESS_MONEY_1


let BUSINESS_MONEY_1 = (data) => {
  for (let i = 0; i < 1; i++) {

    let div = document.createElement("div")


    let urlToImage = document.createElement("img")
    if (i === 0) {

      urlToImage.src = data[i].urlToImage;
    }

    let publishedAt = document.createElement("p")
    publishedAt.innerText = data[i].publishedAt


    let author = document.createElement("p")
    author.innerText = data[i].author
    author.style.color = "red"


    let title = document.createElement("h3")
    title.innerHTML = data[i].title

    let description = document.createElement("p")
    description.innerHTML = data[i].description



    div.append(urlToImage, author, title, description, publishedAt)
    div.addEventListener("click", function (){
      localStorage.setItem("news", JSON.stringify(data[i]));
      window.location.href="detailedNews.html";
    });
    document.querySelector("#block_a_av_3").append(div)
  }
}

let BUSINESS_MONEY_2 = (data) => {
  for (let i = 1; i < 4; i++) {

    let div = document.createElement("div")

    let publishedAt = document.createElement("p")
    publishedAt.innerText = data[i].publishedAt


    let author = document.createElement("p")
    author.innerText = data[i].author
    author.style.color = "red"


    let title = document.createElement("h3")
    title.innerHTML = data[i].title

    let description = document.createElement("p")
    description.innerHTML = data[i].description

    let hr = document.createElement("hr")

    div.append(author, title, description, publishedAt, hr)
    div.addEventListener("click", function (){
      localStorage.setItem("news", JSON.stringify(data[i]));
      window.location.href="detailedNews.html";
    });
    document.querySelector("#block_b_av_3").append(div)
  }
}

let BUSINESS_MONEY_3 = (data) => {
  for (let i = 4; i < 7; i++) {

    let div = document.createElement("div")



    let publishedAt = document.createElement("p")
    publishedAt.innerText = data[i].publishedAt


    let author = document.createElement("p")
    author.innerText = data[i].author
    author.style.color = "red"


    let title = document.createElement("h3")
    title.innerHTML = data[i].title

    let description = document.createElement("p")
    description.innerHTML = data[i].description

    let hr = document.createElement("hr")

    div.append(author, title, description, publishedAt, hr)
    div.addEventListener("click", function (){
      localStorage.setItem("news", JSON.stringify(data[i]));
      window.location.href="detailedNews.html";
    });
    document.querySelector("#block_c_av_3").append(div)
  }
}

// CRYPTO_CORNER_1



let CRYPTO_CORNER_1 = (data) => {
  for (let i = 0; i < 1; i++) {

    let div = document.createElement("div")


    let urlToImage = document.createElement("img")
    if (i === 0) {

      urlToImage.src = data[i].urlToImage;
    }

    let publishedAt = document.createElement("p")
    publishedAt.innerText = data[i].publishedAt


    let author = document.createElement("p")
    author.innerText = data[i].author
    author.style.color = "red"


    let title = document.createElement("h3")
    title.innerHTML = data[i].title

    let description = document.createElement("p")
    description.innerHTML = data[i].description



    div.append(urlToImage, author, title, description, publishedAt)
    div.addEventListener("click", function (){
      localStorage.setItem("news", JSON.stringify(data[i]));
      window.location.href="detailedNews.html";
    });
    document.querySelector("#block_a_av_4").append(div)
  }
}

let CRYPTO_CORNER_2 = (data) => {
  for (let i = 1; i < 3; i++) {

    let div = document.createElement("div")



    let publishedAt = document.createElement("p")
    publishedAt.innerText = data[i].publishedAt


    let author = document.createElement("p")
    author.innerText = data[i].author
    author.style.color = "red"


    let title = document.createElement("h3")
    title.innerHTML = data[i].title

    let description = document.createElement("p")
    description.innerHTML = data[i].description

    let hr = document.createElement("hr")

    div.append(author, title, description, publishedAt, hr)
    div.addEventListener("click", function (){
      localStorage.setItem("news", JSON.stringify(data[i]));
      window.location.href="detailedNews.html";
    });
    document.querySelector("#block_b_av_4").append(div)
  }
}

let CRYPTO_CORNER_3 = (data) => {
  for (let i = 3; i < 5; i++) {

    let div = document.createElement("div")



    let publishedAt = document.createElement("p")
    publishedAt.innerText = data[i].publishedAt


    let author = document.createElement("p")
    author.innerText = data[i].author
    author.style.color = "red"


    let title = document.createElement("h3")
    title.innerHTML = data[i].title

    let description = document.createElement("p")
    description.innerHTML = data[i].description

    let hr = document.createElement("hr")

    div.append(author, title, description, publishedAt, hr)
    div.addEventListener("click", function (){
      localStorage.setItem("news", JSON.stringify(data[i]));
      window.location.href="detailedNews.html";
    });
    document.querySelector("#block_c_av_4").append(div)
  }
}

let CRYPTO_CORNER_4 = (data) => {
  for (let i = 5; i < 7; i++) {

    let div = document.createElement("div")


    let publishedAt = document.createElement("p")
    publishedAt.innerText = data[i].publishedAt


    let author = document.createElement("p")
    author.innerText = data[i].author
    author.style.color = "red"


    let title = document.createElement("h3")
    title.innerHTML = data[i].title

    let description = document.createElement("p")
    description.innerHTML = data[i].description
    let hr = document.createElement("hr")


    div.append(author, title, description, publishedAt, hr)
    div.addEventListener("click", function (){
      localStorage.setItem("news", JSON.stringify(data[i]));
      window.location.href="detailedNews.html";
    });
    document.querySelector("#block_d_av_4").append(div)
  }
}


// SPORTS

let SPORTS_1 = (data) => {
  for (let i = 0; i < 1; i++) {

    let div = document.createElement("div")


    let urlToImage = document.createElement("img")
    if (i === 0) {

      urlToImage.src = data[i].urlToImage;
    }

    let publishedAt = document.createElement("p")
    publishedAt.innerText = data[i].publishedAt


    let author = document.createElement("p")
    author.innerText = data[i].author
    author.style.color = "red"


    let title = document.createElement("h3")
    title.innerHTML = data[i].title

    let description = document.createElement("p")
    description.innerHTML = data[i].description



    div.append(urlToImage, author, title, description, publishedAt)
    div.addEventListener("click", function (){
      localStorage.setItem("news", JSON.stringify(data[i]));
      window.location.href="detailedNews.html";
    });
    document.querySelector("#block_a_av_5").append(div)
  }
}

let SPORTS_2 = (data) => {
  for (let i = 1; i < 3; i++) {

    let div = document.createElement("div")


    //  let urlToImage=document.createElement("img")
    //    if(i===0)
    //    {

    //     urlToImage.src=data[i].urlToImage;
    //    }

    let publishedAt = document.createElement("p")
    publishedAt.innerText = data[i].publishedAt


    let author = document.createElement("p")
    author.innerText = data[i].author
    author.style.color = "red"


    let title = document.createElement("h3")
    title.innerHTML = data[i].title

    let description = document.createElement("p")
    description.innerHTML = data[i].description

    let hr = document.createElement("hr")

    div.append(author, title, description, publishedAt, hr)
    div.addEventListener("click", function (){
      localStorage.setItem("news", JSON.stringify(data[i]));
      window.location.href="detailedNews.html";
    });
    document.querySelector("#block_b_av_5").append(div)
  }
}

let SPORTS_3 = (data) => {
  for (let i = 3; i < 5; i++) {

    let div = document.createElement("div")

    let publishedAt = document.createElement("p")
    publishedAt.innerText = data[i].publishedAt


    let author = document.createElement("p")
    author.innerText = data[i].author
    author.style.color = "red"


    let title = document.createElement("h3")
    title.innerHTML = data[i].title

    let description = document.createElement("p")
    description.innerHTML = data[i].description


    let hr = document.createElement("hr")
    div.append(author, title, description, publishedAt, hr)
    div.addEventListener("click", function (){
      localStorage.setItem("news", JSON.stringify(data[i]));
      window.location.href="detailedNews.html";
    });
    document.querySelector("#block_c_av_5").append(div)
  }
}

let SPORTS_4 = (data) => {
  for (let i = 5; i < 7; i++) {

    let div = document.createElement("div")



    let publishedAt = document.createElement("p")
    publishedAt.innerText = data[i].publishedAt


    let author = document.createElement("p")
    author.innerText = data[i].author
    author.style.color = "red"


    let title = document.createElement("h3")
    title.innerHTML = data[i].title

    let description = document.createElement("p")
    description.innerHTML = data[i].description
    let hr = document.createElement("hr")


    div.append(author, title, description, publishedAt, hr)
    div.addEventListener("click", function (){
      localStorage.setItem("news", JSON.stringify(data[i]));
      window.location.href="detailedNews.html";
    });
    document.querySelector("#block_d_av_5").append(div)
  }
}

// ENTERTAINMENT

let ENTERTAINMENT_1 = (data) => {
  for (let i = 0; i < 1; i++) {

    let div = document.createElement("div")


    let urlToImage = document.createElement("img")
    if (i === 0) {

      urlToImage.src = data[i].urlToImage;
    }

    let publishedAt = document.createElement("p")
    publishedAt.innerText = data[i].publishedAt


    let author = document.createElement("p")
    author.innerText = data[i].author
    author.style.color = "red"


    let title = document.createElement("h3")
    title.innerHTML = data[i].title

    let description = document.createElement("p")
    description.innerHTML = data[i].description



    div.append(urlToImage, author, title, description, publishedAt)
    div.addEventListener("click", function (){
      localStorage.setItem("news", JSON.stringify(data[i]));
      window.location.href="detailedNews.html";
    });
    document.querySelector("#block_a_av_6").append(div)
  }
}

let ENTERTAINMENT_2 = (data) => {
  for (let i = 1; i < 4; i++) {

    let div = document.createElement("div")


    //  let urlToImage=document.createElement("img")
    //    if(i===0)
    //    {

    //     urlToImage.src=data[i].urlToImage;
    //    }

    let publishedAt = document.createElement("p")
    publishedAt.innerText = data[i].publishedAt


    let author = document.createElement("p")
    author.innerText = data[i].author
    author.style.color = "red"


    let title = document.createElement("h3")
    title.innerHTML = data[i].title

    let description = document.createElement("p")
    description.innerHTML = data[i].description

    let hr = document.createElement("hr")

    div.append(author, title, description, publishedAt, hr)
    div.addEventListener("click", function (){
      localStorage.setItem("news", JSON.stringify(data[i]));
      window.location.href="detailedNews.html";
    });
    document.querySelector("#block_b_av_6").append(div)
  }
}

let ENTERTAINMENT_3 = (data) => {
  for (let i = 4; i < 7; i++) {

    let div = document.createElement("div")

    let publishedAt = document.createElement("p")
    publishedAt.innerText = data[i].publishedAt


    let author = document.createElement("p")
    author.innerText = data[i].author
    author.style.color = "red"


    let title = document.createElement("h3")
    title.innerHTML = data[i].title

    let description = document.createElement("p")
    description.innerHTML = data[i].description
    let hr = document.createElement("hr")


    div.append(author, title, description, publishedAt, hr)
    div.addEventListener("click", function (){
      localStorage.setItem("news", JSON.stringify(data[i]));
      window.location.href="detailedNews.html";
    });
    document.querySelector("#block_c_av_6").append(div)
  }
}

// container_7_Av_7

let CULTUREANDSOCIETY = (data) => {
  for (let i = 0; i < 4; i++) {

    let div = document.createElement("div")

    let urlToImage = document.createElement("img")
    urlToImage.src = data[i].urlToImage;
    urlToImage.style.height="250px";
    urlToImage.style.width="fit-content";

    let author = document.createElement("p")
    author.innerText = data[i].author

    author.style.color = "red"
    let title = document.createElement("h3")
    title.innerText = data[i].title

    let description = document.createElement("p")
    description.innerHTML = data[i].description

    let publishedAt = document.createElement("p")
    publishedAt.innerText = data[i].publishedAt


    div.append(urlToImage, author, title, description, publishedAt)
    div.addEventListener("click", function (){
      localStorage.setItem("news", JSON.stringify(data[i]));
      window.location.href="detailedNews.html";
    });
    document.querySelector("#container_7_Av_7").append(div)


  }
}


//  magzine

let MAGAZINE__1 = (data) => {
  for (let i = 0; i < 1; i++) {

    let div = document.createElement("div")


    let urlToImage = document.createElement("img")
    if (i === 0) {

      urlToImage.src = data[i].urlToImage;
    }

    let publishedAt = document.createElement("p")
    publishedAt.innerText = data[i].publishedAt


    let author = document.createElement("p")
    author.innerText = data[i].author
    author.style.color = "red"


    let title = document.createElement("h3")
    title.innerHTML = data[i].title

    let description = document.createElement("p")
    description.innerHTML = data[i].description

    let hr = document.createElement("hr")

    div.append(urlToImage, author, title, description, publishedAt, hr)
    div.addEventListener("click", function (){
      localStorage.setItem("news", JSON.stringify(data[i]));
      window.location.href="detailedNews.html";
    });
    document.querySelector("#block_a_av_8_min_1").append(div)


  }
}

let MAGAZINE__2_min_2 = (data) => {
  for (let i = 1; i < 5; i++) {

    let div = document.createElement("div")


    let author = document.createElement("p")
    author.innerText = data[i].author

    author.style.color = "red"

    let title = document.createElement("h3")
    title.innerHTML = data[i].title

    let description = document.createElement("p")
    description.innerHTML = data[i].description

    let publishedAt = document.createElement("p")
    publishedAt.innerText = data[i].publishedAt

    let hr = document.createElement("hr")



    div.append(author, title, description, publishedAt, hr)
    div.addEventListener("click", function (){
      localStorage.setItem("news", JSON.stringify(data[i]));
      window.location.href="detailedNews.html";
    });
    document.querySelector("#block_a_av_8_min_2").append(div)


  }
}


let MAGAZINE__2 = (data) => {
  for (let i = 5; i < 11; i++) {

    let div = document.createElement("div")


    let author = document.createElement("p")
    author.innerText = data[i].author

    author.style.color = "red"

    let title = document.createElement("h3")
    title.innerHTML = data[i].title

    let description = document.createElement("p")
    description.innerHTML = data[i].description

    let publishedAt = document.createElement("p")
    publishedAt.innerText = data[i].publishedAt

    let hr = document.createElement("hr")



    div.append(author, title, description, publishedAt, hr)
    div.addEventListener("click", function (){
      localStorage.setItem("news", JSON.stringify(data[i]));
      window.location.href="detailedNews.html";
    });
    document.querySelector("#block_b_av_8").append(div)


  }
}


let MAGAZINE__3 = (data) => {
  for (let i = 11; i < 14; i++) {

    let div = document.createElement("div")

    let urlToImage = document.createElement("img")
    urlToImage.src = data[i].urlToImage;
    urlToImage.style.height="150px";
    urlToImage.style.width="fit-content";
    

    let author = document.createElement("p")
    author.innerText = data[i].author

    author.style.color = "red"
    let title = document.createElement("h3")
    title.innerHTML = data[i].title

    let description = document.createElement("p")
    description.innerHTML = data[i].description

    let publishedAt = document.createElement("p")
    publishedAt.innerText = data[i].publishedAt

    let hr = document.createElement("hr")

    div.append(urlToImage, author, title, description, publishedAt, hr)
    div.addEventListener("click", function (){
      localStorage.setItem("news", JSON.stringify(data[i]));
      window.location.href="detailedNews.html";
    });
    document.querySelector("#block_c_av_8").append(div)


  }
}

//  WORLD_NEWS_1


let WORLD_NEWS_1 = (data) => {
  for (let i = 0; i < 1; i++) {

    let div = document.createElement("div")

    let urlToImage = document.createElement("img")
    urlToImage.src = data[i].urlToImage;

    let author = document.createElement("p")
    author.innerText = data[i].author

    author.style.color = "red"
    let title = document.createElement("h3")
    title.innerHTML = data[i].title

    let description = document.createElement("p")
    description.innerHTML = data[i].description

    let publishedAt = document.createElement("p")
    publishedAt.innerText = data[i].publishedAt



    div.append(urlToImage, author, title, description, publishedAt)
    div.addEventListener("click", function (){
      localStorage.setItem("news", JSON.stringify(data[i]));
      window.location.href="detailedNews.html";
    });
    document.querySelector("#block_a_av_9").append(div)


  }
}

let WORLD_NEWS_2 = (data) => {
  for (let i = 1; i < 2; i++) {

    let div = document.createElement("div")

    let urlToImage = document.createElement("img")
    urlToImage.src = data[i].urlToImage;

    let author = document.createElement("p")
    author.innerText = data[i].author

    author.style.color = "red"
    let title = document.createElement("h3")
    title.innerHTML = data[i].title

    let description = document.createElement("p")
    description.innerHTML = data[i].description

    let publishedAt = document.createElement("p")
    publishedAt.innerText = data[i].publishedAt



    div.append(urlToImage, author, title, description, publishedAt)
    div.addEventListener("click", function (){
      localStorage.setItem("news", JSON.stringify(data[i]));
      window.location.href="detailedNews.html";
    });
    document.querySelector("#block_b_av_9").append(div)


  }
}

let WORLD_NEWS_3 = (data) => {
  for (let i = 2; i < 4; i++) {

    let div = document.createElement("div")

    //  let urlToImage=document.createElement("img")
    //  urlToImage.src=data[i].urlToImage;

    let author = document.createElement("p")
    author.innerText = data[i].author

    author.style.color = "red"
    let title = document.createElement("h3")
    title.innerHTML = data[i].title

    let image= document.createElement("img");
    image.src=data[i].urlToImage;
    image.style.height="80px";
    image.style.width="fit-content";

    let description = document.createElement("p")
    description.innerHTML = data[i].description

    let publishedAt = document.createElement("p")
    publishedAt.innerText = data[i].publishedAt

    let hr = document.createElement("hr")

    div.append(author, title,image, description, publishedAt, hr)
    div.addEventListener("click", function (){
      localStorage.setItem("news", JSON.stringify(data[i]));
      window.location.href="detailedNews.html";
    });
    document.querySelector("#block_c_av_9").append(div)


  }
}

let WORLD_NEWS_4 = (data) => {
  for (let i = 4; i < 5; i++) {

    let div = document.createElement("div")

    let urlToImage = document.createElement("img")
    urlToImage.src = data[i].urlToImage;

    let author = document.createElement("p")
    author.innerText = data[i].author

    author.style.color = "red"
    let title = document.createElement("h3")
    title.innerHTML = data[i].title

    let description = document.createElement("p")
    description.innerHTML = data[i].description

    let publishedAt = document.createElement("p")
    publishedAt.innerText = data[i].publishedAt



    div.append(urlToImage, author, title, description, publishedAt)
    div.addEventListener("click", function (){
      localStorage.setItem("news", JSON.stringify(data[i]));
      window.location.href="detailedNews.html";
    });
    document.querySelector("#block_d_av_9").append(div)


  }
}

//  Photos

let photos = (data) => {
  for (let i = 0; i < 4; i++) {

    let div = document.createElement("div")

    let urlToImage = document.createElement("img")
    urlToImage.src = data[i].urlToImage;
    urlToImage.style.height="200px";
    urlToImage.style.width="fit-content";

    let author = document.createElement("p")
    author.innerText = data[i].author

    author.style.color = "red"
    let title = document.createElement("h3")
    title.innerHTML = data[i].title
    title.style.fontSize="";

    div.append(urlToImage, author, title)
    div.addEventListener("click", function (){
      localStorage.setItem("news", JSON.stringify(data[i]));
      window.location.href="detailedNews.html";
    });
    document.querySelector("#container_10_Av_10").append(div)


  }
}
// SPOTLIGHT_1

let SPOTLIGHT_1 = (data) => {
  for (let i = 0; i < 4; i++) {

    let div = document.createElement("div")


    let urlToImage = document.createElement("img")
    urlToImage.src = data[i].urlToImage;
    urlToImage.style.height="200px";
    urlToImage.style.width="fit-content";

    let publishedAt = document.createElement("p")
    publishedAt.innerText = data[i].publishedAt


    let author = document.createElement("p")
    author.innerText = data[i].author
    author.style.color = "red"


    let title = document.createElement("h3")
    title.innerHTML = data[i].title

    let description = document.createElement("p")
    description.innerHTML = data[i].description



    div.append(urlToImage, author, title, description, publishedAt)
    div.addEventListener("click", function (){
      localStorage.setItem("news", JSON.stringify(data[i]));
      window.location.href="detailedNews.html";
    });
    document.querySelector("#container_11_Av_11").append(div)


  }
}

//  BUSINESSSPOTLIGHT
let BUSINESSSPOTLIGHT = (data) => {
  for (let i = 0; i < 4; i++) {

    let div = document.createElement("div")


    let urlToImage = document.createElement("img")
    urlToImage.src = data[i].urlToImage;
    urlToImage.style.height="250px";
    urlToImage.style.width="fit-content";

    let publishedAt = document.createElement("p")
    publishedAt.innerText = data[i].publishedAt


    let author = document.createElement("p")
    author.innerText = data[i].author
    author.style.color = "red"


    let title = document.createElement("h3")
    title.innerHTML = data[i].title

    let description = document.createElement("p")
    description.innerHTML = data[i].description



    div.append(urlToImage, author, title, description, publishedAt)
    div.addEventListener("click", function (){
      localStorage.setItem("news", JSON.stringify(data[i]));
      window.location.href="detailedNews.html";
    });
    document.querySelector("#container_12_Av_12").append(div)


  }
}







