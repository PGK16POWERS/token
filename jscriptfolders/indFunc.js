document.addEventListener("DOMContentLoaded", ()=> {

    const newsBtn = document.querySelector("#newsletter-btn");
    const frontCont = document.querySelector(".right-side-cta");
    const signUpForm = document.querySelector("#signUp");
    const removeBtn = document.querySelector("#remove");

    newsBtn.addEventListener("click", ()=> {
        frontCont.style.display = "none";
        signUpForm.style.display = "block";

        removeBtn.addEventListener("click", ()=> {
            frontCont.style.display = "flex";
            signUpForm.style.display = "none";
        })
    })
})