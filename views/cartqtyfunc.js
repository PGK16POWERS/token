document.addEventListener("DOMContentLoaded", ()=> {
    var checkStorage = localStorage.length;

    if (checkStorage > 0){

        const cartDiv = document.createElement("div");
        cartDiv.setAttribute("class","cartDiv");
        document.body.appendChild(cartDiv)

        const checkoutPageRedirect = document.createElement("span");
            checkoutPageRedirect.setAttribute("class", "material-symbols-outlined");
            checkoutPageRedirect.setAttribute("id", "checkoutRedirect");
            checkoutPageRedirect.textContent = "receipt_long";

            checkoutPageRedirect.addEventListener("click",()=> {
                window.location.href = "/checkout"
            })

        const cartIndicator = document.createElement("div");
        cartIndicator.setAttribute("class","red-ball");
        cartDiv.appendChild(cartIndicator)

        function updateqty() {
            var checkStorage = localStorage.length;
    
            var value = 0;
    
            var checkNum = parseInt(checkStorage);
            value += checkNum;
    
            cartIndicator.textContent = value;
        }
    updateqty()

            cartDiv.appendChild(checkoutPageRedirect);
    }

})
