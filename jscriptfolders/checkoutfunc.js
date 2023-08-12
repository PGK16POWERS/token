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

        const prodName = document.createElement("p");
        prodName.setAttribute("class","prodName");
        prodName.textContent = keys;
        receiptItem.appendChild(prodName);

        const prodPrice = document.createElement("p");
        prodPrice.textContent = `R ${values}`;
        prodPrice.setAttribute("class","total");
        receiptItem.appendChild(prodPrice);
    }

    totalPrice.textContent = `R ${addedUp.toFixed(2)}`;
    
})