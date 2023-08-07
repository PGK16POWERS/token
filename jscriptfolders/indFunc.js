document.addEventListener("DOMContentLoaded", ()=> {

    const newslletterSect = document.querySelector("#cta-newsletter");
    const newsBtn = document.querySelector("#newsletter-btn");
    const frontCont = document.querySelector(".right-side-cta");
    const signUpForm = document.querySelector("#signUp");
    const removeBtn = document.querySelector("#remove");

    const form = document.createElement("form");
    form.setAttribute("action","/newslletter");
    form.setAttribute("method","post");
    form.setAttribute("id","signUpForm");
    signUpForm.appendChild(form);

    const remove = document.createElement("span");
    remove.setAttribute("class","material-symbols-rounded");
    remove.setAttribute("id","remove");
    remove.textContent = "close";
    form.appendChild(remove);

    const formHeader = document.createElement("h1");
    formHeader.textContent = "NewsLetter";
    formHeader.setAttribute("class","formHeader");
    form.appendChild(formHeader);
    
    const formContParent = document.createElement("div");
    formContParent.setAttribute("class","formContParent");
    form.appendChild(formContParent);

    const formChildName = document.createElement("div");
    formChildName.setAttribute("class", "formChild");
    formContParent.appendChild(formChildName);

    const nameLabel = document.createElement("label");
    nameLabel.textContent = "Name";
    nameLabel.setAttribute("class","form-label");
    formChildName.appendChild(nameLabel);

    const nameInp = document.createElement("input")
    nameInp.setAttribute("type","text");
    nameInp.setAttribute("id","name-inp");
    nameInp.setAttribute("name","name")
    formChildName.appendChild(nameInp);

    //////////////////////////////////
    const formChildNumber = document.createElement("div");
    formChildNumber.setAttribute("class", "formChild");
    formContParent.appendChild(formChildNumber);

    const numberLabel = document.createElement("label");
    numberLabel.textContent = "Number";
    numberLabel.setAttribute("class","form-label");
    formChildNumber.appendChild(numberLabel);

    const numberInp = document.createElement("input")
    numberInp.setAttribute("type","tel");
    numberInp.setAttribute("id","number-inp");
    numberInp.setAttribute("name","number")
    formChildNumber.appendChild(numberInp);

    const errMessage = document.createElement("div");
    errMessage.textContent = ""
    errMessage.setAttribute("class","errMes");
    formChildNumber.appendChild(errMessage);

    //////////////////////////////////
    const formChildEmail = document.createElement("div");
    formChildEmail.setAttribute("class", "formChild");
    formContParent.appendChild(formChildEmail);

    const emailLabel = document.createElement("label");
    emailLabel.textContent = "Email";
    emailLabel.setAttribute("class","form-label");
    formChildEmail.appendChild(emailLabel);

    const emailInp = document.createElement("input")
    emailInp.setAttribute("type","email");
    emailInp.setAttribute("id","number-inp");
    emailInp.setAttribute("name","email")
    formChildEmail.appendChild(emailInp);

    const subbtn = document.createElement("button");
    subbtn.textContent = "Send";
    subbtn.setAttribute("type","submit");
    subbtn.setAttribute("id","subbtn");
    subbtn.setAttribute("class","subbutton");
    form.appendChild(subbtn);



    newsBtn.addEventListener("click", ()=> {
        frontCont.style.display = "none";
        signUpForm.style.display = "block";

        remove.addEventListener("click", ()=> {
            frontCont.style.display = "flex";
            signUpForm.style.display = "none";
        })
    })
})