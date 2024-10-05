document.addEventListener('keydown',function(event){
    if(event.key==='Enter'){
        document.querySelector("#btn").click();
    }
})

let button=document.querySelector("#btn");
let e=document.querySelector("#error")
button.disabled=true
button.style.cursor='not-allowed'

function buttons(){
    let inp1=document.querySelector("#name");
    let inp2=document.querySelector("#email");
    let inp3=document.querySelector("#password");
    let btn=document.querySelector("#btn");

        if(inp1.value.length>4){
            btn.disabled=false
            btn.style.cursor='pointer'
            btn.style.backgroundColor='white'
            btn.style.color='#00302EE8'
            btn.style.border='3px solid #00302EE8'
            btn.style.borderRadius='0px'
            inp1.style.borderColor=' rgb(40, 225, 40)'
            inp1.style.color=' rgb(40, 225, 40)'
            e.innerHTML=""
        }
        if(inp1.value.length<=4){
            inp1.style.color='red'
            inp1.style.borderColor='red'
            e.innerHTML="Name juda qisqa !"
            button.disabled=true
            btn.style.color=' #FBDDBB'
            btn.style.cursor='not-allowed'
            btn.style.borderRadius='5px'
            btn.style.backgroundColor='#00302EE8'
        }
    if(inp1.value.length>4 && inp2.value.length!=0 && inp3.value.length!=0){
        btn.disabled=false
        btn.style.cursor='pointer'
        btn.style.backgroundColor='white'
        btn.style.color='#00302EE8'
        btn.style.border='3px solid #00302EE8'
        btn.style.borderRadius='0px'
        inp1.style.borderColor=' rgb(40, 225, 40)'
        inp1.style.color=' rgb(40, 225, 40)'
        e.innerHTML=""
    }

    else if (inp1.value.length===0 || inp2.value.length===0 || inp3.value.length===0){
        btn.disabled=true
        btn.style.cursor='not-allowed'
        e.innerHTML=`Bo'sh maydon mavjud !`
        e.style.color='red'
        btn.style.borderColor='transparent'
        btn.style.color=' #FBDDBB'
        btn.style.borderRadius='5px'
        btn.style.backgroundColor='#00302EE8'

    }
}

document.querySelector("#name").addEventListener('input',buttons)
document.querySelector("#email").addEventListener('input',buttons)
document.querySelector("#password").addEventListener('input',buttons)


document.querySelector("#btn").addEventListener('click',function(){
    let name=document.querySelector("#name")
    let email=document.querySelector("#email")
    let password=document.querySelector("#password")

    if(name.value.length>4 && email.value.length!=0 && password.value.length!=0){
        button.style.cursor='pointer';
        button.disabled=false;
        window.location.href='../login/index.html'
    }
    else{
        button.disabled=true
        button.style.cursor='pointer'
        e.innerHTML=`Bo'sh maydon mavjud !`

    }
})
