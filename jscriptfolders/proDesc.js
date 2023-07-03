// Get all elements with the class "item-card"
const itemCards = document.querySelectorAll(".whole-card");

itemCards.forEach(element => {
    const itemCard = element.querySelector(".item-card");
    const description = element.querySelector(".after-click");
    const rmpd = element.querySelector("#remove-pro-desc");

    itemCard.addEventListener("click", ()=> {
        itemCard.classList.add("noflex");

        description.classList.add("showflex");
    });

    rmpd.addEventListener("click", (e)=> {
        e.stopPropagation();
        itemCard.classList.remove("noflex");

        description.classList.remove("showflex");
    });
});