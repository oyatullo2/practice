document.addEventListener('keydown',function(event){
    if(event.key==='Enter'){
        document.querySelector("#login").click();
    }
})

let button=document.querySelector("#login");
let e=document.querySelector("#error")
button.style.cursor='not-allowed'

function login(){
    let email=document.querySelector("#email");
    let password=document.querySelector("#password");


    if(email.value.length<15 && password.value.length!=0){
        e.innerHTML=`Email juda qisqa !`
        e.style.color='red'
        email.style.borderColor='red'
        email.style.color='red'
        button.disabled=true
        button.style.color=' #FBDDBB'
        button.style.cursor='not-allowed'
        button.style.borderRadius='5px'
        button.style.backgroundColor='#00302EE8'
    }

    if(email.value.length>15 && password.value.length!=0){
        button.disabled=false
        button.style.cursor='pointer'
        button.style.backgroundColor='white'
        button.style.color='#00302EE8'
        button.style.border='3px solid #00302EE8'
        button.style.borderRadius='0px'
        email.style.borderColor=' rgb(40, 225, 40)'
        password.style.borderColor=' rgb(40, 225, 40)'
        email.style.color=' rgb(40, 225, 40)'
        password.style.color=' rgb(40, 225, 40)'
        e.innerHTML=""
    }
    else if(email.value.length===0 || password.value.length===0){
        email.style.color='red'
        password.style.color='red'
        email.style.borderColor='red'
        password.style.borderColor='red'
        e.innerHTML="Bo'sh maydon mavjud !"
        e.style.color='red'
        button.disabled=true
        button.style.color=' #FBDDBB'
        button.style.cursor='not-allowed'
        button.style.borderRadius='5px'
        button.style.backgroundColor='#00302EE8'
    }
}

document.querySelector("#email").addEventListener('input',login);
document.querySelector("#password").addEventListener('input',login);


document.querySelector("#login").addEventListener('click',function(){
    if(email.value.length>15 && password.value.length!=0){
        window.location.href='../lilies/index.html'
        button.disabled=false;
    }
    else{
        button.disabled=true
    }
})
