export function chopra() {   
    const uniProdRedi = document.querySelectorAll(".upr");
    const bar = document.querySelector(".burger");
    const formA = document.querySelector("#newsletter-form");
 
    uniProdRedi.forEach((button) => {
        button.addEventListener("click",() => {
            const targetPage = button.getAttribute("data-target")
            window.location.href = targetPage;

            if (targetPage === "innerlayout.html"){
                window.location.href = '/innerlayout.html';
            } else if ( targetPage === "skincare-products.html") {
                window.location.href = "/skincare-products.html";
            } else if ( targetPage === "hairproducts.html") {
                window.location.href = "/hairproducts.html";
            } else if ( targetPage === "perfumepage.html") {
                window.location.href = "/perfumepage.html";
            } else if ( targetPage === "Shapewear.html") {
                window.location.href = "/Shapewear.html";
            }
        });
    });
    bar.addEventListener("click", () => {
        const nav = document.querySelector("nav");
        nav.classList.toggle("showflex");
    });
    formA.addEventListener("submit", (e) => {
    const nameInput = document.querySelector("#name");
    const numInput = document.querySelector("#number");
    const emailInput = document.querySelector("#email");
    const nameErrMess = document.querySelector(".name-inp-err");
    const numErrMess = document.querySelector(".num-inp-err");
    const emailErrMess = document.querySelector(".email-inp-err");

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

    if (numInput.value.length === 0) {
        e.preventDefault();
        numInput.classList.remove("succborder"); // Remove the "succborder" class
        numInput.classList.add("errborder");
        numErrMess.innerHTML = "Please Fill Field";
    } else if (numInput.value.length > 10) {
        e.preventDefault();
        numInput.classList.remove("succborder"); // Remove the "succborder" class
        numInput.classList.add("errborder");
        numErrMess.innerHTML = "Too many characters";
    } else if (numInput.value.length < 10) {
        e.preventDefault();
        numInput.classList.remove("succborder"); // Remove the "succborder" class
        numInput.classList.add("errborder");
        numErrMess.innerHTML = "Enter valid Number ";
    } else if (/[!@#$%]/.test(numInput.value)) {
        e.preventDefault();
        numInput.classList.remove("succborder"); // Remove the "succborder" class
        numInput.classList.add("errborder");
        numErrMess.innerHTML = "Remove Special Characters";
    } else {
        numErrMess.innerHTML = "";
        numInput.classList.remove("errborder"); // Remove the "errborder" class
        numInput.classList.add("succborder");
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

    });
    }