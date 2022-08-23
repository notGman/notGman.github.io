const home = document.querySelector(".HOME-btn");
const about = document.querySelector(".ABOUT-btn");
const edu = document.querySelector(".EDU-btn");
const port = document.querySelector(".PORT-btn");
const contact = document.querySelector(".CONTACT-btn");

const homeEl =document.querySelector(".home");
const aboutEl =document.querySelector(".about");
const eduEl = document.querySelector(".education");
const portEl = document.querySelector(".portfolio");
const contactEl = document.querySelector(".contact");



const ham = document.querySelector(".icon");
const sidebar = document.querySelector(".sidebar");

ham.addEventListener('click',function(){
  sidebar.classList.toggle("show-sidebar");
  homeEl.style.display= "none";
  aboutEl.style.display = "none";
  eduEl.style.display = "none";
  portEl.style.display = "none";
  contactEl.style.display = "none";
});


home.addEventListener('click',function(){
  homeEl.style.display= "flex";
  aboutEl.style.display = "none";
  eduEl.style.display = "none";
  portEl.style.display = "none";
  contactEl.style.display = "none";
  sidebar.classList.remove("show-sidebar");
});

about.addEventListener('click',function(){
  homeEl.style.display= "none";
  aboutEl.style.display = "flex";
  eduEl.style.display = "none";
  portEl.style.display = "none";
  contactEl.style.display = "none";
  sidebar.classList.remove("show-sidebar");
})
edu.addEventListener('click',function(){
  homeEl.style.display= "none";
  aboutEl.style.display = "none";
  eduEl.style.display = "flex";
  portEl.style.display = "none";
  contactEl.style.display = "none";
  sidebar.classList.remove("show-sidebar");
})
port.addEventListener('click',function(){
  homeEl.style.display= "none";
  aboutEl.style.display = "none";
  eduEl.style.display = "none";
  portEl.style.display = "flex";
  contactEl.style.display = "none";
  sidebar.classList.remove("show-sidebar");
})
contact.addEventListener('click',function(){
  homeEl.style.display= "none";
  aboutEl.style.display = "none";
  eduEl.style.display = "none";
  portEl.style.display = "none";
  contactEl.style.display = "flex";
  sidebar.classList.remove("show-sidebar");
})

function aboutNav(){
  homeEl.style.display= "none";
  aboutEl.style.display = "flex";
  eduEl.style.display = "none";
  portEl.style.display = "none";
  contactEl.style.display = "none";
  sidebar.classList.remove("show-sidebar");
}