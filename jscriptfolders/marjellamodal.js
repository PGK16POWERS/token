document.addEventListener("DOMContentLoaded", ()=> {

    const checkFlag = localStorage.getItem("shownModal");

    if (!checkFlag) {
    const overlayDiv = document.createElement("div");
    overlayDiv.setAttribute("class", "overlaydiv");
    document.body.appendChild(overlayDiv);

    const modalDiv = document.createElement("div");
    modalDiv.setAttribute("class", "modaldiv");
    overlayDiv.appendChild(modalDiv);

    const marjellaimg = document.createElement("img");
    marjellaimg.setAttribute("class", "marjellaimg");
    marjellaimg.src = "Heyy1.png";
    modalDiv.appendChild(marjellaimg);

    const modalHeader = document.createElement("h1");
    modalHeader.setAttribute("class", "modalheader");
    modalHeader.textContent = "Heyy✋🏽";
    modalDiv.appendChild(modalHeader);

    const message = document.createElement("p");
    message.setAttribute("class", "modalmessage");
    message.innerHTML =
        "The NAH Store is currently under-construction. Most features are unavailable. To <b>Inquire or Purchase</b> an item, <b>'Click'</b> below the <b>BUY</b> button.";
    modalDiv.appendChild(message);

    const button = document.createElement("button");
    button.setAttribute("id", "modalbutton");
    button.textContent = "Understood";
    modalDiv.appendChild(button);

    button.addEventListener("click", () => {
        document.body.removeChild(overlayDiv);
    });

        localStorage.setItem("shownModal", true);
    }
    

    })
