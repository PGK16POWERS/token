document.addEventListener("DOMContentLoaded",() => {
    const ul = document.querySelector("#checkout-list");
    const totalPrice = document.querySelector("#total-price");
    let addedUp = 0;

    for(let i = 0; i < localStorage.length; i++) {
        var keys = localStorage.key(i);
        var values = localStorage.getItem(keys);
        receiptItem(keys,values);

        addedUp += parseFloat(values);
    }

    function receiptItem(keys,values) {
        const receiptItem = document.createElement("div");
        receiptItem.setAttribute("class","receiptItem");
        ul.appendChild(receiptItem);

        const leftSide = document.createElement("div");
        leftSide.setAttribute("class","leftside");
        receiptItem.appendChild(leftSide);

        const prodName = document.createElement("p");
        prodName.setAttribute("class","prodName");
        prodName.textContent = keys;
        leftSide.appendChild(prodName);

        const prodPrice = document.createElement("p");
        prodPrice.textContent = `R ${values}.00`;
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
                localStorage.removeItem(keys);
            })
            // CREATE A FUNCTION THAT, WHEN THE DELETEALL BUTTON IS CLICKED, 
            // THE KEY IS REMOVED AND THE DIV IS REMOVED, ALSO THE ITEMS PRICE IS 
            // IS SUBTRACTED FROM THE TOTAL PRICE. 
    }

    totalPrice.textContent = `R ${addedUp.toFixed(2)}`;
    
})