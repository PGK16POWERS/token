export function chopra() {   
    const uniProdRedi = document.querySelectorAll(".upr");
    const bar = document.querySelector(".burger");
 
    uniProdRedi.forEach((button) => {
        button.addEventListener("click",() => {
            const targetPage = button.getAttribute("data-target")
            window.location.href = targetPage;

            if (targetPage === "dashboard"){
                window.location.href = '/dashboard.ejs';
            } else if ( targetPage === "skincare-products") {
                window.location.href = "/skincare-products.ejs";
            } else if ( targetPage === "hairproducts") {
                window.location.href = "/hairproducts.ejs";
            } else if ( targetPage === "perfumepage") {
                window.location.href = "/perfumepage.ejs";
            } else if ( targetPage === "shapewear") {
                window.location.href = "/shapewear.ejs";
            }
        });
    });
    bar.addEventListener("click", () => {
        const nav = document.querySelector("nav");
        nav.classList.toggle("showflex");
    });
    }
