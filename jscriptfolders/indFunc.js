document.addEventListener("DOMContentLoaded", ()=> {

    const newslletterSect = document.querySelector("#cta-newsletter");
    const newsBtn = document.querySelector("#newsletter-btn");
    const frontCont = document.querySelector(".right-side-cta");
    const signUpForm = document.querySelector("#signUp");
    const removeBtn = document.querySelector("#remove");

    const form = document.createElement("form");
    form.setAttribute("action","/newslletter");
    form.setAttribute("method","post");
    form.setAttribute("id","signUpForm");
    signUpForm.appendChild(form);

    const formHeader = document.createElement("h1");
    formHeader.textContent = "NewsLetter";
    formHeader.setAttribute("class","formHeader");
    form.appendChild(formHeader);
    


    newsBtn.addEventListener("click", ()=> {
        frontCont.style.display = "none";
        signUpForm.style.display = "block";

        removeBtn.addEventListener("click", ()=> {
            frontCont.style.display = "flex";
            signUpForm.style.display = "none";
        })
    })
})