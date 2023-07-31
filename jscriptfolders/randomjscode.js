export function chopra() {   
    const uniProdRedi = document.querySelectorAll(".upr");
    const bar = document.querySelector(".burger");
 
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
    }
