document.querySelector("form").addEventListener("submit",function(e){
    e.preventDefault();
    form={}
    var formData=e.target.querySelectorAll("input")

    formData.forEach(input => {
        form[input.name]=input.value
    });

    if(!valideMail(form.mail)){
        errorMsg=e.target.querySelector("span")
        errorMsg.style.display="block"
        formData[0].classList.add("active");
    }else{
        errorMsg.style.display="none"
        formData[0].classList.remove("active");
    }
})

function valideMail(mail){
    const regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(mail)
}

