let navbar=()=>{
    return`
    <div id="top-menu">
        <ul>
            <li><a href="index.html"> HOME</a></li>
            <li class="navbar_items"><a href="#">OUTLOOK</a>
            <div class="sub-menu1">
                <ul>
                <li id="magazine" onclick="search_navbar(this.id)"><a href="#">MAGAZINE</a></li>
                <li id="india news" onclick="search_navbar(this.id)"><a href="#">INDIA NEWS</a></li>
                <li id="international news" onclick="search_navbar(this.id)"><a href="#">INTERNATIONAL NEWS</a></li>
                <li id="culture" onclick="search_navbar(this.id)"><a href="#">CULTURE</a></li>
                <li id="study abroad" onclick="search_navbar(this.id)"><a href="#">STUDY ABROAD</a></li>
                </ul>
            </div></li>
            <li class="navbar_items"><a href="#">BUSINESS</a>
                <div class="sub-menu1">
                    <ul>
                    <li id="business magazine" onclick="search_navbar(this.id)"><a href="#">MAGAZINE</a></li>
                    <li id="business headline" onclick="search_navbar(this.id)"><a href="#">HEADLINES</a></li>
                    <li id="business big story" onclick="search_navbar(this.id)"><a href="#">BIG STORY</a></li>
                    <li id="business enterprise" onclick="search_navbar(this.id)"><a href="#">ENTERPRISE</a></li>
                    <li id="business strategy" onclick="search_navbar(this.id)"><a href="#">STRATEGY</a></li>
                    <li id="business perspective" onclick="search_navbar(this.id)"><a href="#">PERSPECTIVE</a></li>
                    <li id="business story" onclick="search_navbar(this.id)"><a href="#">PIXSTORY</a></li>
                    <li id="business videos" onclick="search_navbar(this.id)"><a href="#">VIDEOS</a></li>
                    <li id="business women" onclick="search_navbar(this.id)"><a href="#">WOMEN</a></li>
                    </ul>
                </div></li>
            <li id="money" onclick="search_navbar(this.id)"><a href="#">MONEY</a></li>
            <li id="crypto currency" onclick="search_navbar(this.id)"><a href="#">CRYPTO CORNER</a></li>
            <li><a href="#">TRAVEL</a>
                <div class="sub-menu1">
                    <ul>
                    <li id="travel" onclick="search_navbar(this.id)"><a href="#">HOME</a></li>
                    <li id="travel & tourism" onclick="search_navbar(this.id)"><a href="#">SEE</a></li>
                    <li id="stay" onclick="search_navbar(this.id)"><a href="#">STAY</a></li>
                    <li id="travel experience" onclick="search_navbar(this.id)"><a href="#">EXPERIENCE</a></li>
                    <li id="travel news" onclick="search_navbar(this.id)"><a href="#">TRAVEL NEWS</a></li>
                    <li id="travel videos" onclick="search_navbar(this.id)"><a href="#">VIDEOS</a></li>
                    <li id="responsible tourism" onclick="search_navbar(this.id)"><a href="#">RESPONSIBLE TOURISM</a></li>
                    <li id="travel quiz" onclick="search_navbar(this.id)"><a href="#">OT QUIZ</a></li>
                    <li id="travel guide" onclick="search_navbar(this.id)"><a href="#">GUIDE BOOKS</a></li>
                    </ul>
                </div></li>
            <li id="ipl" onclick="search_navbar(this.id)"><a href="#">IPL 2022</a></li>
            <li id="sports" onclick="search_navbar(this.id)"><a href="#">SPORTS</a></li>
            <li id="popular videos" onclick="search_navbar(this.id)"><a href="#">VIDEO</a></li>
            <li id="entertainment" onclick="search_navbar(this.id)"><a href="#">ENTERTAINMENT</a></li>
            <li id="photos" onclick="search_navbar(this.id)"><a href="#">PHOTOS</a></li>
            <li><a href="#">MAGAZINE</a>
                <div class="sub-menu1">
                    <ul>
                    <li id="magazine" onclick="search_navbar(this.id)"><a href="#">HOME</a></li>
                    <li id="latest issue" onclick="search_navbar(this.id)"><a href="#">LATEST ISSUE</a></li>
                    <li id="india" onclick="search_navbar(this.id)"><a href="#">INDIA</a></li>
                    <li id="world" onclick="search_navbar(this.id)"><a href="#">WORLD</a></li>
                    <li id="business" onclick="search_navbar(this.id)"><a href="#">BUSINESS</a></li>
                    <li id="books" onclick="search_navbar(this.id)"><a href="#">BOOKS</a></li>
                    <li id="sports" onclick="search_navbar(this.id)"><a href="#">SPORTS</a></li>
                    <li id="thenews" onclick="search_navbar(this.id)"><a href="#">THE NEWS</a></li>
                    <li id="opinion" onclick="search_navbar(this.id)"><a href="#">OPINION</a></li>
                    <li id="arts & entertainment" onclick="search_navbar(this.id)"><a href="#">ART & ENTERTAINMENT</a></li>
                    <li id="archives" onclick="search_navbar(this.id)"><a href="#">ARCHIVES</a></li>
                    </ul>
                </div></li>
            <li id="hindi news" onclick="search_navbar(this.id)"><a href="#">HINDI</a></li>
            <li id="poshan" onclick="search_navbar(this.id)"><a href="#">POSHAN</a></li>
            <li id="others news" onclick="search_navbar(this.id)"><a href="#">OTHERS</a></li>
            <br>
`;
}

export default navbar;