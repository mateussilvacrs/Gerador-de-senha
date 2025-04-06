let sliderElement = document.querySelector("#slider")
let sizePassowrd = document.querySelector("#valor")
let password = document.querySelector("#password")
let containerPassword = document.querySelector("#container-password")
let passHidden = "****************"

let buttonCta = document.getElementById("button-cta")
let buttonLimpa = document.getElementById("button-limpa")
let buttonMostra = document.getElementById("button-mostra")


let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
let novaSenha =""

sizePassowrd.innerHTML = sliderElement.value

sliderElement.oninput = function(){
    sizePassowrd.innerHTML = this.value
}

function generatePassword(){
    let pass = ""
    for(let i = 0, n =charset.length; i < sliderElement.value; ++ i){
        pass += charset.charAt(Math.floor(Math.random() * n))
       
        
        
    }

    containerPassword.classList.remove("hide")
    novaSenha = pass
    console.log(novaSenha)
    password.innerHTML = "***************"
    console.log(password)

    document.getElementById("button-cta").style.visibility="hidden"
    document.getElementById("button-limpa").style.visibility="visible"
    document.getElementById("button-mostra").style.visibility="visible"


}

function copyPassword(){
    alert("Senha copiada com sucesso!")
    navigator.clipboard.writeText(novaSenha)
    
}

function mostraSenha(){
document.getElementById("password").style.visibility="visible"
password = novaSenha
console.log(password)
document.getElementById("password").innerHTML=password

}

function limpaSenha(){
    location.reload();

}


