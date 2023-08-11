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
    formHeader.textContent = "";
    formHeader.setAttribute("class","formHeader");
    form.appendChild(formHeader);

    const userSignedUp = localStorage.getItem("signedUp");
    
    function signEmUp() {

        formHeader.textContent = "NewsLetter";

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
        
        const errMessName = document.createElement("div");
        errMessName.textContent = "";
        errMessName.setAttribute("class","errmess");
        formChildName.appendChild(errMessName);
        
        ///////////////////////////////////////////////////////
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
        
        const errMessNumber = document.createElement("div");
        errMessNumber.textContent = "";
        errMessNumber.setAttribute("class","errmess");
        formChildNumber.appendChild(errMessNumber);
        
        /////////////////////////////////////////////////////
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
        
        const errMessEmail = document.createElement("div");
        errMessEmail.textContent = "";
        errMessEmail.setAttribute("class","errmess");
        formChildEmail.appendChild(errMessEmail);
        
        const subbtn = document.createElement("button");
        subbtn.textContent = "Send";
        subbtn.setAttribute("type","submit");
        subbtn.setAttribute("id","subbtn");
        subbtn.setAttribute("class","subbutton");
        form.appendChild(subbtn);
        
        ////////////////////////////////////////////////////

        form.addEventListener("submit", (event) => {
            /////////////////////--NAME-BELOW--/////////////////////////
            if (nameInp.value.length === 0) {
                event.preventDefault();
                errMessName.textContent = "Please Fill Name";
                nameInp.classList.add("redborder");
            } else {
                const cleanedName = nameInp.value.replace(/[!@#$%^&*{}<>()+=?]/g, ''); // Remove special characters
                nameInp.value = cleanedName; // Update the input field with cleaned value
        
                if (cleanedName.length === 0) {
                    event.preventDefault();
                    errMessName.textContent = "Remove special Character(s)";
                    nameInp.classList.add("redborder");
                } else {
                    errMessName.textContent = "";
                    nameInp.classList.add("greenborder");
                    var isVaar = true;
                }
            }
        
            /////////////////////--NUMBER-BELOW--//////////////////////////
            if (numberInp.value.length === 0) {
                event.preventDefault();
                errMessNumber.textContent = "Please Fill Number";
                numberInp.classList.add("redborder");
            } else {
                const cleanedNumber = numberInp.value.replace(/\s/g, ''); // Remove white spaces
        
                if(/[!@#$%^&*{}<>()+=?a-zA-Z]/.test(cleanedNumber)){
                    event.preventDefault();
                    errMessNumber.textContent = "Remove special Character(s)";
                    numberInp.classList.add("redborder");
                } else if(cleanedNumber.length >= 11 || cleanedNumber.length <= 9 ) {
                    event.preventDefault();
                    errMessNumber.textContent = "Make Sure Number is correct";
                    numberInp.classList.add("redborder");
                } else {
                    errMessNumber.textContent = "";
                    numberInp.classList.add("greenborder");
                    isVaar = true;
                }
            }
        
            //////////////////////--EMAIL-BELOW--//////////////////////////
            if(emailInp.value.length === 0) {
                event.preventDefault();
                errMessEmail.textContent = "Please Fill Email";
                emailInp.classList.add("redborder");
            } else {
                errMessEmail.textContent = "";
                emailInp.classList.add("greenborder");
                isVaar = true;
            }
    
            /////////////////////--SET-ITEM-IN-LOCAL-STORAGE--////////////
            if(errMessName.textContent === "" && errMessNumber.textContent === "" && errMessEmail.textContent === "") {
                localStorage.setItem("signedUp","true");
                console.log("This User Signed UP");
            }
        });
    }
    
    if(!userSignedUp){
        signEmUp()
    } else {
        formHeader.textContent = "Already Signed Up"
    }

    newsBtn.addEventListener("click", ()=> {
        frontCont.style.display = "none";
        signUpForm.style.display = "block";

        remove.addEventListener("click", ()=> {
            frontCont.style.display = "flex";
            signUpForm.style.display = "none";
        })
    })
    
})