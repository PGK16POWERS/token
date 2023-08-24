document.addEventListener("DOMContentLoaded", () => {
    const ul = document.querySelector("#checkout-list");
    const totalPrice = document.querySelector("#total-price");

    function retrieveData() {
        for (let i = 0; i < localStorage.length; i++) {
            const prodID = localStorage.key(i);
            const storageItems = JSON.parse(localStorage.getItem(localStorage.key(i)));
            receiptItem(storageItems, prodID);
        }

        updateTotalPrice();
    }

    function updateTotalPrice() {
        const total = calculateTotalPrice();
        totalPrice.textContent = `R ${total.toFixed(2)}`;
    }

    function calculateTotalPrice() {
        let total = 0;

        document.querySelectorAll(".receiptItem").forEach(card => {
            const price = parseInt(card.querySelector(".total").getAttribute("data-price"));
            const qty = parseInt(card.querySelector(".qty").textContent);
            total += price * qty;
        });

        return total;
    }

    function receiptItem(storageItems, prodID) {
        const receiptItem = document.createElement("div");
        receiptItem.setAttribute("class", "receiptItem");
        ul.appendChild(receiptItem);

        const leftSide = document.createElement("div");
        leftSide.setAttribute("class", "leftside");
        receiptItem.appendChild(leftSide);

        const prodName = document.createElement("p");
        prodName.setAttribute("class", "prodName");
        prodName.textContent = storageItems.name;
        leftSide.appendChild(prodName);

        const prodPrice = document.createElement("p");
        prodPrice.textContent = `R ${storageItems.price}.00`;
        prodPrice.setAttribute("class", "total");
        prodPrice.setAttribute("data-price", storageItems.price);
        leftSide.appendChild(prodPrice);

        var quantity = 1;
        const qtyDiv = document.createElement("div");
        qtyDiv.setAttribute("class", "qty-div");
        receiptItem.appendChild(qtyDiv);

        const minus = document.createElement("button");
        minus.textContent = "-";
        minus.setAttribute("class", "min-plus");
        qtyDiv.appendChild(minus);

        const qty = document.createElement("span");
        qty.setAttribute("class", "qty");
        qtyDiv.appendChild(qty);

        const plus = document.createElement("button");
        plus.textContent = "+";
        plus.setAttribute("class", "min-plus");
        qtyDiv.appendChild(plus);

        plus.addEventListener("click", () => {
            quantity++;
            qty.textContent = quantity;
            updateTotalPrice();
        });

        minus.addEventListener("click", () => {
            if (quantity >= 2) {
                quantity--;
                qty.textContent = quantity;
                updateTotalPrice();
            }
        });

        const deleteAll = document.createElement("span");
        deleteAll.textContent = "delete";
        deleteAll.setAttribute("class", "material-symbols-outlined");
        deleteAll.setAttribute("id", "deleteAll");
        receiptItem.appendChild(deleteAll);

        deleteAll.addEventListener("click", () => {
            localStorage.removeItem(prodID);
            ul.removeChild(receiptItem);
            updateTotalPrice();
        });

        qty.textContent = quantity;
    }

    retrieveData();
});
