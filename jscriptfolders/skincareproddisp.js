document.addEventListener("DOMContentLoaded",()=>{

    const itemsShelf = document.querySelector(".all-arr-items");

    fetch("skincareprod.json")
        .then(response => response.json())
        .then(data => {
            data.forEach(product => {
                const froProdCard = createFrontProdCard(product);
                itemsShelf.appendChild(froProdCard);
            })
        })
        .catch(error => {
            console.error("The error you are experiencing is:", error);
        })
})

function createFrontProdCard(product) {
    // PARENT CARD
    const parentCard = document.createElement("div");
    parentCard.className = "whole-card";

    // FRONTFACE CARD
    const frontProdCard = document.createElement("div");
    frontProdCard.className = "item-card";
    parentCard.appendChild(frontProdCard);

    const imgDiv = document.createElement("div");
    imgDiv.className = "img-area";
    frontProdCard.appendChild(imgDiv);

    const image = document.createElement("img");
    image.src = product.image;
    image.className = "card-img";
    imgDiv.appendChild(image);

    const cardHeaders = document.createElement("div");
    cardHeaders.className = "card-headers";
    frontProdCard.appendChild(cardHeaders);
 
    const prodCardName = document.createElement("h3");
    prodCardName.textContent = product.name;
    prodCardName.className = "name-of-item";
    cardHeaders.appendChild(prodCardName);

    const divLine = document.createElement("div");
    divLine.className = "prod-div-line";
    cardHeaders.appendChild(divLine);

    const prodDesc = document.createElement("p");
    prodDesc.textContent = product.description;
    prodDesc.className = "desc-of-item";
    cardHeaders.appendChild(prodDesc);

    const prodPrice = document.createElement("h3");
    prodPrice.textContent = `R ${product.price.toFixed(2)}`;
    prodPrice.className = "prod-price";
    frontProdCard.appendChild(prodPrice);

    // PRODUCT INFOMATION BUTTON
    const prodInfoBtn = document.createElement("button");
    prodInfoBtn.textContent = "Product info";
    prodInfoBtn.className = "prod-info-btn";
    frontProdCard.appendChild(prodInfoBtn);

    prodInfoBtn.addEventListener("click", () => {
        detDescription.classList.add("showflex");
        frontProdCard.classList.add("noflex")

        topBlockCompChild.addEventListener("click", () => {
            detDescription.classList.remove("showflex");
            frontProdCard.classList.remove("noflex");
        })
    })

    // DETAILED DECSRIPTION CARD
    const detDescription = document.createElement("div");
    detDescription.className = "after-click";
    parentCard.appendChild(detDescription)

    const topBlockComp = document.createElement("div");
    topBlockComp.className = "top-block";
    detDescription.appendChild(topBlockComp);

    const topBlockCompChild = document.createElement("span");
    topBlockCompChild.className = "material-symbols-rounded";
    topBlockCompChild.id = "remove-pro-desc";
    topBlockCompChild.textContent = "cancel";
    topBlockComp.appendChild(topBlockCompChild);

    const picDesc = document.createElement("div");
    picDesc.className = "picture-desc";
    detDescription.appendChild(picDesc);

    const pdAltered = document.createElement("div");
    pdAltered.className = "pd-parent-altrd";
    picDesc.appendChild(pdAltered);

    const slideshowDiv = document.createElement("div");
    slideshowDiv.className = "slideshow";
    pdAltered.appendChild(slideshowDiv);

    const morePics = product["add-pictures"];
    morePics.forEach((imgUrl) => {
    const img = document.createElement("img");
    img.src = imgUrl;
    slideshowDiv.appendChild(img);
    });

    const contSect = document.createElement("div");
    contSect.className = "content-section";
    detDescription.appendChild(contSect);

    const descProdName = document.createElement("h2");
    descProdName.textContent = product.name;
    descProdName.className = "cont-header";
    contSect.appendChild(descProdName);

    const descProdPara = document.createElement("p");
    descProdPara.textContent = product.longDescription;
    descProdPara.className = "cont-para";
    contSect.appendChild(descProdPara);

    // Slideshow functionality
    const slides = slideshowDiv.querySelectorAll('img');
    let currentIndex = 0;

    function showSlide(index) {
      slides[currentIndex].style.display = 'none';
      slides[index].style.display = 'block';
      currentIndex = index;
    }

    function showNextSlide() {
      const nextIndex = (currentIndex + 1) % slides.length;
      showSlide(nextIndex);
    }

    function showPreviousSlide() {
      const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(prevIndex);
    }

    const prevButton = document.createElement('button');
    prevButton.className = 'prevbtn';
    prevButton.innerText = 'Previous';

    const nextButton = document.createElement('button');
    nextButton.className = 'nextbtn';
    nextButton.innerText = 'Next';

    prevButton.addEventListener('click', showPreviousSlide);
    nextButton.addEventListener('click', showNextSlide);

    slideshowDiv.appendChild(prevButton);
    slideshowDiv.appendChild(nextButton);

    showSlide(currentIndex);

    //----------------------PARENT------------------------------------
    const additionalQueries = document.createElement("div");
    additionalQueries.className = "sizes-and-colors";
    detDescription.appendChild(additionalQueries);


    //----------------------SIZES
    const availSizes = document.createElement("div");
    availSizes.className = "add-div";
    additionalQueries.appendChild(availSizes);

    const addHeaderSizes = document.createElement("h3");
    addHeaderSizes.textContent = "Available Sizes"
    addHeaderSizes.className = "hea-sac";
    availSizes.appendChild(addHeaderSizes);

    const size = document.createElement("span");
    size.textContent = "- " + product.availSizes;
    size.className = "add-info";
    availSizes.appendChild(size);
    
    
    //----------------------COLORS
    const availColors = document.createElement("div");
    availColors.className = "add-div";
    additionalQueries.appendChild(availColors);

    const addHeaderColors = document.createElement("h3");
    addHeaderColors.textContent = "Available Colors"
    addHeaderColors.className = "hea-sac";
    availColors.appendChild(addHeaderColors);

    const color = document.createElement("span");
    color.textContent = "- " + product.colors;
    color.className = "add-info";
    availColors.appendChild(color);

    //----------------------STOCK
    const availStock = document.createElement("div");
    availStock.className = "add-div";
    additionalQueries.appendChild(availStock);

    const addHeaderStock = document.createElement("h3");
    addHeaderStock.textContent = "Stock Availability"
    addHeaderStock.className = "hea-sac";
    availStock.appendChild(addHeaderStock);

    const stock = document.createElement("span");
    stock.textContent = "- " + product.stock;
    stock.className = "add-info";
    availStock.appendChild(stock);

    //---------------------------------------------------------
    
    //-------------- CHECKOUT DIV ---------------------------------
    const checkoutDiv = document.createElement("div");
    checkoutDiv.className = "checkout";
    detDescription.appendChild(checkoutDiv);

    const priceTag = document.createElement("h2");
    priceTag.textContent = `R ${product.price.toFixed(2)}`;
    priceTag.className = "price-tag";
    checkoutDiv.appendChild(priceTag);

    const checkoutBtnDiv = document.createElement("div");
    checkoutBtnDiv.className = "btn-div";
    checkoutDiv.appendChild(checkoutBtnDiv);

    const descCheckOutBtn = document.createElement("button");
    descCheckOutBtn.id = "checkoutBtn";
    descCheckOutBtn.textContent = "Buy";
    descCheckOutBtn.setAttribute("type","button");
    checkoutBtnDiv.appendChild(descCheckOutBtn);

    const inquire = document.createElement("span");
    inquire.className = "material-symbols-outlined";
    inquire.id = "wa-redi";
    checkoutBtnDiv.appendChild(inquire);

    const innerA = document.createElement("a");
    innerA.setAttribute("href","https://wa.me/0634927047?text=Hello%2C%20I%20would%20love%20to%20purchase%20this%20item.");
    innerA.setAttribute("target","_blank");
    innerA.setAttribute("class","whi");
    innerA.textContent = "forum";
    inquire.appendChild(innerA);
    //-------------- CHECKOUT DIV ---------------------------------

    return parentCard;
}