/* =====================================
   AZTUTMIND WEBSITE JAVASCRIPT
===================================== */


/* ---------- MOBILE MENU ---------- */


const nav = document.querySelector("nav");

const navLinks = document.querySelectorAll("nav ul li a");


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

    });

});





/* ---------- SMOOTH SCROLL ---------- */


document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {


anchor.addEventListener("click", function(e){


e.preventDefault();


document.querySelector(this.getAttribute("href"))
.scrollIntoView({

behavior:"smooth"

});


});


});







/* ---------- SCROLL ANIMATION ---------- */


const revealElements = document.querySelectorAll(
".category-card, .course-card, .feature-card, .testimonial-card"
);



const revealOnScroll = () => {


let windowHeight = window.innerHeight;


revealElements.forEach(element => {


let elementTop =
element.getBoundingClientRect().top;



if(elementTop < windowHeight - 100){


element.style.opacity="1";

element.style.transform="translateY(0)";


}


});


};



revealElements.forEach(element=>{


element.style.opacity="0";

element.style.transform="translateY(40px)";

element.style.transition="0.6s";


});



window.addEventListener(
"scroll",
revealOnScroll
);



revealOnScroll();








/* ---------- COUNTER ANIMATION ---------- */


const counters =
document.querySelectorAll(".achievement h3");



counters.forEach(counter=>{


let target =
parseInt(counter.innerText.replace("+",""));



let count=0;



let interval =
setInterval(()=>{


count += Math.ceil(target/100);



if(count >= target){


count=target;

clearInterval(interval);


}



counter.innerText =
count + "+";



},30);



});








/* ---------- COURSE CARD EFFECT ---------- */


const cards =
document.querySelectorAll(".course-card");



cards.forEach(card=>{


card.addEventListener(
"mouseenter",
()=>{

card.style.transform="translateY(-10px)";

}
);



card.addEventListener(
"mouseleave",
()=>{

card.style.transform="translateY(0)";

}

);


});








/* ---------- REGISTER BUTTON MESSAGE ---------- */


const registerButtons =
document.querySelectorAll(".register, .primary-btn");



registerButtons.forEach(button=>{


button.addEventListener(
"click",
()=>{


console.log(
"Welcome to AztutMind!"
);


});


});
