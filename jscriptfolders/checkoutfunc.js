document.addEventListener("DOMContentLoaded", () => {
    const ul = document.querySelector("#checkout-list");
    const totalPrice = document.querySelector("#total-price");

    function updateQty(qtyElement, newQuantity) {
        qtyElement.textContent = newQuantity;
    }

    function updateTotalPrice() {
        totalPrice.textContent = `R ${calculateTotalPrice().toFixed(2)}`;
    }

    function calculateTotalPrice() {
        var total = 0;

        document.querySelectorAll(".receiptItem").forEach(card => {
            var price = parseInt(card.querySelector(".prodPrice").textContent);
            var qty = parseInt(card.querySelector(".qty").textContent);
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

        // ...

        var quantity = 1; // You might want to adjust this based on your data

        // ...

        plus.addEventListener("click", () => {
            quantity++;
            updateQty(qty, quantity);
            updateTotalPrice();
        });

        minus.addEventListener("click", () => {
            if (quantity >= 2) {
                quantity--;
            }
            updateQty(qty, quantity);
            updateTotalPrice();
        });

        // ...

        const prodPrice = document.createElement("p");
        prodPrice.textContent = `R ${storageItems.price}.00`;
        prodPrice.setAttribute("class", "prodPrice");
        leftSide.appendChild(prodPrice);

        // ...

        const deleteAll = document.createElement("span");
        deleteAll.textContent = "delete";
        deleteAll.setAttribute("class", "material-symbols-outlined");
        deleteAll.setAttribute("id", "deleteAll");
        receiptItem.appendChild(deleteAll);

        deleteAll.addEventListener("click", () => {
            ul.removeChild(receiptItem);
            localStorage.removeItem(prodID);
            updateTotalPrice();
        });

        // ...

        // Call these functions only once, after setting up everything
        updateQty(qty, quantity);
        updateTotalPrice();
    }

    function retrieveData() {
        for (let i = 0; i < localStorage.length; i++) {
            const prodID = localStorage.key(i);
            const storageItems = JSON.parse(localStorage.getItem(localStorage.key(i)));
            console.log(prodID);

            receiptItem(storageItems, prodID);
        }
    }

    retrieveData();
});
