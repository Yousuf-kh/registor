const form = document.querySelector('form')
const userName = document.querySelector('.name')
const password = document.querySelector('.password')
const save = document.querySelector('.save')
const eyes = document.querySelector('.eyes')
const eyes2 = document.querySelector('.eyes2')

let nameValue
let passwordValue

userName.addEventListener('input',()=>{
    nameValue = userName.value
})

password.addEventListener('input',()=>{
    passwordValue = password.value
})


save.addEventListener('click',(e)=>{
    e.preventDefault()
    localStorage.setItem('name',JSON.stringify(nameValue)) 
    localStorage.setItem('password',JSON.stringify(passwordValue))
    alert('Your datas saves')
})

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const userName = JSON.parse(localStorage.getItem('name'))
    const userPassword = JSON.parse(localStorage.getItem('password'))

    if(userName && userPassword && userName == nameValue && userPassword ==passwordValue){
        window.location = 'todo.html'
    }else{
        alert('erroe')
    }
})

eyes2.style.display = 'none'

eyes.addEventListener('click',()=>{
    eyes.style.display = 'none'
    eyes2.style.display = 'block'
    password.type = 'text'
})

eyes2.addEventListener('click',()=>{
    eyes.style.display = 'block'
    eyes2.style.display = 'none'
    password.type = 'password'
})