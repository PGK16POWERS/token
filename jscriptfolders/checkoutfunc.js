document.addEventListener("DOMContentLoaded",() => {
    const ul = document.querySelector("#checkout-list");
    const totalPrice = document.querySelector("#total-price");
    let addedUp = 0;

    function retriveveData(){
        for(let i = 0; i < localStorage.length; i++) {
        const prodID = localStorage.key(i);
        const storageItems = JSON.parse(localStorage.getItem(localStorage.key(i)));
        console.log(prodID)

        receiptItem(storageItems,prodID);

        addedUp += parseFloat(storageItems.price);
        }
    }
    

    function receiptItem(storageItems, prodID) {
        const receiptItem = document.createElement("div");
        receiptItem.setAttribute("class","receiptItem");
        ul.appendChild(receiptItem);

        const leftSide = document.createElement("div");
        leftSide.setAttribute("class","leftside");
        receiptItem.appendChild(leftSide);

        const prodName = document.createElement("p");
        prodName.setAttribute("class","prodName");
        prodName.textContent = storageItems.name;
        leftSide.appendChild(prodName);

        const prodPrice = document.createElement("p");
        prodPrice.textContent = `R ${storageItems.price}.00`;
        prodPrice.setAttribute("class","total");
        leftSide.appendChild(prodPrice);

        const rightSide = document.createElement("div");
        rightSide.setAttribute("class","rightside");
        receiptItem.appendChild(rightSide);

        const deleteAll = document.createElement("span");
        deleteAll.textContent = "delete";
        deleteAll.setAttribute("class","material-symbols-outlined");
        deleteAll.setAttribute("id","deleteAll");
        rightSide.appendChild(deleteAll);

            deleteAll.addEventListener("click", () => {
                localStorage.removeItem(prodID);
            })
            // CREATE A FUNCTION THAT, WHEN THE DELETEALL BUTTON IS CLICKED, 
            // THE KEY IS REMOVED AND THE DIV IS REMOVED, ALSO THE ITEMS PRICE IS 
            // IS SUBTRACTED FROM THE TOTAL PRICE. 
    }

    window.addEventListener("storage", () => {
        totalPrice.textContent = `R ${addedUp.toFixed(2)}`;
        addedUp += parseFloat(storageItems.price);
    })
    addedUp += parseFloat(storageItems.price);
    retriveveData()
}) 