$(document).ready(function(){window.onload=function(){document.getElementById("contact-form").addEventListener("submit",function(e){e.preventDefault(),emailjs.sendForm("contact_service","southwicks","#contact-form").then(function(e){200==e.status&&"OK"==e.text?alert("Your message has been sent successfully!"):alert("Sorry there was a problem, please refresh your browser and try again."),document.getElementById("contact-form").reset(),window.location.replace("index.html")})})}});