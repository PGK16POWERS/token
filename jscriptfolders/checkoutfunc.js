document.addEventListener("DOMContentLoaded",() => {
    const ul = document.querySelector("#checkout-list");
    const totalPrice = document.querySelector("#total-price");

    function retriveveData(){
        for(let i = 0; i < localStorage.length; i++) {
        const prodID = localStorage.key(i);
        const storageItems = JSON.parse(localStorage.getItem(localStorage.key(i)));
        console.log(prodID)

        receiptItem(storageItems,prodID);

        totalPrice.textContent = `R ${parseFloat(storageItems.price)}.00`
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

        const quntInp = document.createElement("input");
        quntInp.setAttribute("type","tel");
        quntInp.setAttribute("id","quntInp");
        rightSide.appendChild(quntInp);

        const deleteAll = document.createElement("span");
        deleteAll.textContent = "delete";
        deleteAll.setAttribute("class","material-symbols-outlined");
        deleteAll.setAttribute("id","deleteAll");
        rightSide.appendChild(deleteAll);

            deleteAll.addEventListener("click", () => {
                localStorage.removeItem(prodID);
            })

    }

    retriveveData()
}) 