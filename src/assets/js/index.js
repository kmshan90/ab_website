var words = document.getElementsByClassName('banner-word');
    var wordArray = [];
    var currentWord = 0;

    words[currentWord].style.opacity = 1;
    for (var i = 0; i < words.length; i++) {
        splitLetters(words[i]);
    }

    function changeWord() {
        var cw = wordArray[currentWord];
        var nw = currentWord == words.length - 1 ? wordArray[0] : wordArray[currentWord + 1];
        for (var i = 0; i < cw.length; i++) {
            animateLetterOut(cw, i);
        }

        for (var i = 0; i < nw.length; i++) {
            nw[i].className = 'letter behind';
            nw[0].parentElement.style.opacity = 1;
            animateLetterIn(nw, i);
        }

        currentWord = (currentWord == wordArray.length - 1) ? 0 : currentWord + 1;
    }

    function animateLetterOut(cw, i) {
        setTimeout(function () {
            cw[i].className = 'letter out';
        }, i * 80);
    }

    function animateLetterIn(nw, i) {
        setTimeout(function () {
            nw[i].className = 'letter in';
        }, 340 + (i * 80));
    }

    function splitLetters(word) {
        var content = word.innerHTML;
        word.innerHTML = '';
        var letters = [];
        for (var i = 0; i < content.length; i++) {
            var letter = document.createElement('span');
            letter.className = 'letter';
            letter.innerHTML = content.charAt(i);
            word.appendChild(letter);
            letters.push(letter);
        }

        wordArray.push(letters);
    }
setTimeout(function(){
    changeWord();
    setInterval(changeWord, 3000);
},3000);

function typeWriter(text, i, elm, fnCallback) {
    if (i < (text.length)) {
        document.querySelector("."+elm).innerHTML = text.substring(0, i+1);
        setTimeout(function() {
            typeWriter(text, i + 1, elm, fnCallback)
        }, 200);
    }
}
function StartTextAnimation(i,dataText,elm) {
    if (i < dataText[i].length) {
        typeWriter(dataText[i], 0, elm, function(){
            StartTextAnimation(i + 1,dataText,elm);
        });
    }
}

var typing_1 = 0;
var typing_2 = 0;

function typingAnimation() {
    var currentScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var deploySection = document.getElementById("section-deploy").offsetTop - 250;
    var integrateSection = document.getElementById("section-integrate").offsetTop - 250;
    if (currentScrollTop > integrateSection) {
        if(typing_1 === 0){
            typing_1 = 1;
            StartTextAnimation(0,["bb pull @appblocks v1.10."],"typing-1");
        }
    }
    if (currentScrollTop > deploySection) {
        if(typing_2 === 0){
            typing_2 = 1;
            StartTextAnimation(0,["bb pull @appblocks v1.10."],"typing-2");
        }
    } 
}

var lastScroll = 0;

function scrollDetect(){
    let currentScroll = document.documentElement.scrollTop || document.body.scrollTop; // Get Current Scroll Value
    var discoverSlideBox = document.querySelector(".discover-box-wrapper");
    var discoverSlideBoxHeight = document.querySelector(".discover-box-wrapper").scrollHeight;
    var discoverSectionOffset = document.getElementById("discover-section").offsetTop;
    var integrateSection = document.getElementById("section-integrate").offsetTop - 250;
    // var integrateSectionHeight = document.getElementById("section-integrate").scrollHeight;
    var collaborateSection = document.getElementById("section-collaborate").offsetTop - 250;
    if (currentScroll > 0 && lastScroll <= currentScroll){
        lastScroll = currentScroll;
        if (currentScroll > discoverSectionOffset) {
            discoverSlideBox.classList.remove("slide-up-animation");
            discoverSlideBox.classList.add("slide-bottom-animation");
            if (currentScroll > integrateSection) {
                document.querySelector(".slide-box-animation").classList.remove("slide-tr");
                document.querySelector(".slide-box-animation").classList.remove("slide-br");
                document.querySelector(".slide-box-animation").classList.remove("slide-tl");
                document.querySelector(".slide-box-animation").classList.add("slide-bl");
            }
            if(currentScroll > collaborateSection){
                document.querySelector(".slide-box-animation").classList.remove("slide-bl");
                document.querySelector(".slide-box-animation").classList.remove("slide-tr");
                document.querySelector(".slide-box-animation").classList.remove("slide-tl");
                document.querySelector(".slide-box-animation").classList.add("slide-br");
                document.querySelector(".collaborate-box").classList.add("active-collaborate-box");
            }
        }
    }else{
        lastScroll = currentScroll;
        
        if (currentScroll < integrateSection ) {
            document.querySelector(".collaborate-box").classList.remove("active-collaborate-box");
            document.querySelector(".slide-box-animation").classList.remove("slide-br");
            document.querySelector(".slide-box-animation").classList.remove("slide-bl");
            document.querySelector(".slide-box-animation").classList.remove("slide-tr");
            document.querySelector(".slide-box-animation").classList.add("slide-tl");
            
        }
        if (currentScroll < (discoverSectionOffset + (discoverSlideBoxHeight  - 150))) {
            discoverSlideBox.classList.remove("slide-bottom-animation");
            discoverSlideBox.classList.add("slide-up-animation");
            document.querySelector(".slide-box-animation").classList.remove("slide-bl");
            document.querySelector(".slide-box-animation").classList.remove("slide-br");
            document.querySelector(".slide-box-animation").classList.remove("slide-tl");
            document.querySelector(".slide-box-animation").classList.add("slide-tr");
        }
        
    }
}


window.onscroll = function () {
    typingAnimation();
    scrollDetect();
};
typingAnimation();
scrollDetect();
  


function borderAnimation(){
    document.querySelector(".c-cicle-wrapper").classList.add("has-border-animation");
    setTimeout(function(){
        document.querySelector(".c-cicle-wrapper").classList.remove("has-border-animation");
        setTimeout(borderAnimation,200);
    },3000)
}

borderAnimation();

var featureSlideHeight = 0;
var customerSlideHeight = 0;
const featureSwiperLargeHeight = () =>{
    let featureElementWrapper = document.querySelector(".feature-swiper"); 
    let featureElement =  featureElementWrapper.querySelector('.swiper-wrapper');
    for (let i = 0; i < featureElement.children.length; i++) { 
        let childElement = featureElement.children[i];
        if(featureSlideHeight < childElement.getBoundingClientRect().height){
            featureSlideHeight = childElement.getBoundingClientRect().height;
        }
    }
}
const customerSwiperLargeHeight = () =>{
    let customerElementWrapper = document.querySelector(".customer-swiper"); 
    let customerElement =  customerElementWrapper.querySelector('.swiper-wrapper');
    for (let i = 0; i < customerElement.children.length; i++) { 
        let childElement = customerElement.children[i];
        if(customerSlideHeight < childElement.getBoundingClientRect().height){
            customerSlideHeight = childElement.getBoundingClientRect().height;
        }
    }
}
const swiperHeightHandle = (elem,ht) =>{
    let elementWrapper = document.querySelector(elem); 
    let elementContainer =  elementWrapper.querySelector('.swiper-wrapper');
    for (let i = 0; i < elementContainer.children.length; i++) { 
        elementContainer.children[i].style.minHeight = ht+"px";
    }
}

var swiperFeature = new Swiper(".feature-swiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    on: {
        afterInit: function () {
            featureSwiperLargeHeight();
            swiperHeightHandle(".feature-swiper",featureSlideHeight);
        },
    },
});
var swiperCustomer = new Swiper(".customer-swiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    on: {
        afterInit: function () {
            customerSwiperLargeHeight();
            swiperHeightHandle(".customer-swiper",customerSlideHeight);
        },
    },
});