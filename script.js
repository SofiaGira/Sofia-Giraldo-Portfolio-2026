const menuBtn = document.getElementById("menu-btn");

const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {

  menu.classList.toggle("active");

});

// EMAILJS INIT

emailjs.init("H3tLahI10L-bg-4gL");

// FORM

const form = document.getElementById("contact-form");

form.addEventListener("submit", function(e){

  e.preventDefault();

  emailjs.sendForm(

    "service_s3voa0s",
    "template_2kw1zwo",
    "#contact-form",
    "H3tLahI10L-bg-4gL"

  )

  .then(() => {

    alert("Message Sent Successfully!");

    form.reset();

  })

  .catch((error) => {

    alert("Failed to send message");

    console.log(error);

  });

});