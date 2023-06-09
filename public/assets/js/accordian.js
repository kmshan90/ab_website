window.onload = (event) => {
    var elem = document.querySelectorAll(".faq-accordian-list")[0].querySelector(".faq-accordian-container");
    document.querySelectorAll(".faq-accordian-list")[0].querySelector(".faq-accordian-btn").classList.add(
        "active-faq-accordian");
    elem.style.maxHeight = elem.scrollHeight + "px";
};
var acc = document.getElementsByClassName("faq-accordian-btn");
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active-faq-accordian");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}