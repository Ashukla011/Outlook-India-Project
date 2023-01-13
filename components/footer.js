let footer = () =>{
    return `
    <div class="rowlinks">
    <div class="headings">
    <h3 >Main Stories</h3>
    <hr>
    </div>

    <div class="columnlink">
    <ul>
        <li id="magazine" onclick="search_navbar(this.id)"><a href="#">Magazine</a> </li>
        <li id="national" onclick="search_navbar(this.id)"><a href="#">NATIONAL</a></li>
        <li id="international" onclick="search_navbar(this.id)"><a href="#">INTERNATIONAL</a></li>
        <li id="business" onclick="search_navbar(this.id)"><a href="#">BUSINESS</a></li>
        <li id="options" onclick="search_navbar(this.id)"><a href="#">OPINIONS</a></li>
        <li id="book reviews" onclick="search_navbar(this.id)"><a href="#">BOOK REVIEWS</a></li>
        <li id="the news" onclick="search_navbar(this.id)"><a href="#">THE NEWS</a></li>
        <li id="sports" onclick="search_navbar(this.id)"><a href="#">SPORTS</a></li>
        <li id="art and entertainment" onclick="search_navbar(this.id)"><a href="#">ART & ENTERTAINMENT</a></li>
    </ul>
    </div>
</div>
<div class="rowlinks">
    <div class="headings">
    <h3>Traveller</h3>
    <hr>
    
    </div>
    <div class="columnlink">
    <ul>
        <li id="travelogues" onclick="search_navbar(this.id)"><a href="#">TRAVELOGUES</a></li>
        <li id="weekend breaks" onclick="search_navbar(this.id)"><a href="#">WEEKEND BREAKS</a></li>
        <li id="holiday with ot" onclick="search_navbar(this.id)"><a href="#">HOLIDAYS WITH OT</a></li>
        <li id="photo features" onclick="search_navbar(this.id)"><a href="#">PHOTO FEATURES</a></li>
        <li id="hotels" onclick="search_navbar(this.id)"><a href="#">HOTELS</a></li>
        <li id="guide books" onclick="search_navbar(this.id)"><a href="#">GUIDEBOOKS</a></li>
    </ul>
    </div>
</div>
<div class="rowlinks">
    <div class="headings">
    <h3 >Money</h3>
    <hr>
    
    </div>
        <div class="columnlink">
        <ul>
        <li id="motual funds" onclick="search_navbar(this.id)"><a href="#">Mutual Funds</a></li>
        <li id="insurance" onclick="search_navbar(this.id)"><a href="#">Insurance</a></li>
        <li id="equity" onclick="search_navbar(this.id)"><a href="#">Equity</a></li>
        <li id="fixed aseets" onclick="search_navbar(this.id)"><a href="#">Fixed Assets</a></li>
        <li id="banking" onclick="search_navbar(this.id)"><a href="#">Banking</a></li>
        <li id="ask" onclick="search_navbar(this.id)"><a href="#">ASK</a></li>
        </ul>
        </div>
</div>

<div class="rowlinks">
    <div class="headings">
    <h3 >Business</h3>
    <hr>
    
    </div>
        <div class="columnlink">
        <ul>
        <li id="the big story" onclick="search_navbar(this.id)"><a href="#">THE BIG STORY</a></li>
        <li id="specials" onclick="search_navbar(this.id)"><a href="#">SPECIALS</a></li>
        <li id="perspective" onclick="search_navbar(this.id)"><a href="#">PERSPECTIVE</a></li>
        <li id="enterprise" onclick="search_navbar(this.id)"><a href="#">ENTERPRISE</a></li>
        <li id="strategy" onclick="search_navbar(this.id)"><a href="#">STRATEGY</a></li>
        <li id="markets" onclick="search_navbar(this.id)"><a href="#">MARKETS</a></li>
        <li id="that's life" onclick="search_navbar(this.id)"><a href="#">THAT'S LIFE</a></li>
        </ul>
        </div>
</div>

<div class="rowlinks">
    <div class="headings">
    <h3 >Social Media</h3>
    <hr>
    
    </div>
        <div class="columnlink">
        <ul>
        <li><a href="">Facebook<i class="fa-brands fa-facebook"></i></a></li>
        <li><a href="">Twitter<i class="fa-brands fa-twitter-square"></i></a></li>
        <li><a href="">Instagram<i class="fa-brands fa-instagram-square"></i></a></li>
        <li><a href="">Youtube<i class="fa-brands fa-youtube"></i></a></li>
        </ul>
        </div>
</div> `;
}

export default footer;