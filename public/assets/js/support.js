const links = document.querySelectorAll(".sidebar-support li a");
var clickScroll = false;
var currentOffsetTop = 0;
var scrollTimer;
for (const link of links) {
    link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
    clickScroll = true;
    clearTimeout(scrollTimer);
    e.preventDefault();
    const href = this.getAttribute("href");
    var elem = document.querySelectorAll("a[href='" + href + "']");
    for (const link of links) {
        link.classList.remove("active-sidebar-link");
    }
    elem[0].classList.add("active-sidebar-link");
    const offsetTop = document.querySelector(href).offsetTop - 100;
    currentOffsetTop = offsetTop;
    scroll({
        top: offsetTop,
        behavior: "smooth"
    });
    // setTimeout(function(){
    //     clickScroll = false;
    // },700);
}

function activeProgressRemove() {
    for (const link of links) {
        link.classList.remove("active-sidebar-link");
    }
}

window.onscroll = function () {
    if(!clickScroll){
        windowScroll();
    }
    else{
        if(window.pageYOffset == currentOffsetTop){
            scrollTimer = setTimeout(function(){
            // console.log(currentOffsetTop);
                clickScroll = false;
            },250);
        }
    }
};

function windowScroll() {
    var currentScrollTop = document.documentElement.scrollTop;
    for(i=0;i<links.length;i++){
        const href = links[i].getAttribute("href");
        var elem = document.querySelectorAll("a[href='" + href + "']");
        if (currentScrollTop > document.getElementById(href.split("#")[1]).offsetTop - 100) {
            activeProgressRemove();
            elem[0].classList.add("active-sidebar-link");
        }
    }
}
