let Name= document.getElementById("name")
let Surname=document.getElementById("surname")
let Email =document.getElementById("email")
let Password=document.getElementById("password")
let CPassword=document.getElementById("password2")
let error = document.getElementById("errmsg")
let error2=document.getElementById("errmsg2")
let error3=document.getElementById("errmsg3")
let error4=document.getElementById("errmsg4")
let error5=document.getElementById("errmsg5")
let error6=document.getElementById("errmsg6")
let error7=document.getElementById("errmsg7")



let btn = document.querySelector(".confirm")




btn.onclick= function(){
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if(Name.value == ""){
        error.classList.remove("d-none")

    
    }else if(Surname.value==""){
        error2.classList.remove("d-none")
    }
    else if(Email.value==""){

        error3.classList.remove("d-none")

    }
    else if(!filter.test(Email.value)){
        error7.classList.remove("d-none")

    }
    else if(Password.value==""){
        error4.classList.remove("d-none")

    }
    else if(CPassword.value==""){
        error5.classList.remove("d-none")

    }
    else if(CPassword.value!=Password.value){
        error6.classList.remove("d-none")


    }
    else{
        error.classList.add("d-none")
        error2.classList.add("d-none")
        error3.classList.add("d-none")
        error4.classList.add("d-none")
        error5.classList.add("d-none")
        error6.classList.add("d-none")
        error7.classList.add("d-none")
        window.location.reload()

    }
}

