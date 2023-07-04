export function chopra() {
    window.addEventListener('load', function() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';})

    const bar = document.querySelector(".burger");
    const ctaBtn = document.querySelector("#spd-btn");
    const close = document.querySelector(".xmark");
    const formA = document.querySelector("#newsletter-form");
    const uniProdRedi = document.querySelectorAll(".upr");
    const formbtn = document.querySelector("#form-sub-btn");

    
    bar.addEventListener("click", () => {
        const nav = document.querySelector("nav");
        nav.classList.toggle("showflex");
    });
    ctaBtn.addEventListener("click", () => {
    const form = document.querySelector("#newsletter-form");
    const bgColor = document.querySelector(".right-side-cta");

        form.classList.add("showform");
        bgColor.style.display = "none";
    });
    close.addEventListener("click", () => {
    const form = document.querySelector("#newsletter-form");
    const bgColor = document.querySelector(".right-side-cta");
    
        form.classList.remove("showform");
        bgColor.style.display = "flex";
    });
    formA.addEventListener("submit", (e) => {
    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");
    const nameErrMess = document.querySelector(".name-inp-err");
    const emailErrMess = document.querySelector(".email-inp-err");
    const successMessage = "Thank you for signing up!";

    if (nameInput.value.length === 0) {
        e.preventDefault();
        nameInput.classList.remove("succborder"); // Remove the "succborder" class
        nameInput.classList.add("errborder");
        nameErrMess.innerHTML = "Please Fill Field";
    } else if (/[!@#$%]/.test(nameInput.value)) {
        e.preventDefault();
        nameInput.classList.remove("succborder"); // Remove the "succborder" class
        nameInput.classList.add("errborder");
        nameErrMess.innerHTML = "Kindly remove Special Characters";
    } else {
        nameErrMess.innerHTML = "";
        nameInput.classList.remove("errborder"); // Remove the "errborder" class
        nameInput.classList.add("succborder");
    }

    if (emailInput.value.length === 0) {
        e.preventDefault();
        emailInput.classList.remove("succborder"); // Remove the "succborder" class
        emailInput.classList.add("errborder");
        emailErrMess.innerHTML = "Please Fill Field";
    } else {
        emailErrMess.innerHTML = "";
        emailInput.classList.remove("errborder"); // Remove the "errborder" class
        emailInput.classList.add("succborder");
    
        
    }
    if (!nameErrMess.innerHTML && !emailErrMess.innerHTML) {
        const bgColor = document.querySelector(".right-side-cta");

        formA.classList.remove("showform");
        alert(successMessage);
        formA.reset();
        
        bgColor.style.display = "flex";
    };
    });
    uniProdRedi.forEach((button) => {
        button.addEventListener("click",() => {
            const targetPage = button.getAttribute("data-target")
            window.location.href = targetPage;
        })
    });
};