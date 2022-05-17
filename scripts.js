"use strict";
const releaseDate = document.querySelector('.coming_soon_date')


const months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug',
'Sep','Oct','Nov','Dec']
const now = new Date();


const day = `${now.getDate()}`.padStart(2, 0);
 const month = now.getMonth()
 const year = now.getFullYear();
 console.log(month)


 releaseDate.innerHTML =`${day} ${months[month + 1]} ${year}`

 const finalDate =new Date(year,month+1,day)


 var countDownDate = new Date(year,month+1,day).getTime();

    // Run myfunc every second
    var myfunc = setInterval(function() {

    var now = new Date().getTime();
    var timeleft = countDownDate - now;
        
    // Calculating the days, hours, minutes and seconds left
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
        
    // Result is output to the specific element
    document.querySelector(".days").innerHTML = days 
    document.querySelector(".hours").innerHTML = `${hours}`.padStart(2,0)  
    document.querySelector(".mins").innerHTML = `${minutes}`.padStart(2,0)   
    document.querySelector(".secs").innerHTML = `${seconds}`.padStart(2, 0); 


    },1000)

    const form = document.querySelector('.form')
    const fullName = document.querySelector('.fullname')

    console.log(fullName);
    const email = document.querySelector('.email')
    const dropDown = document.querySelector('.select')
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


    const showError = function(){
        email.classList.add('hidden')
        email.style.opacity = 100


    }

    


    form.addEventListener('submit',function(e){
        e.preventDefault()
        if (email.value === "" || email.value === null){
            showError()
            
         }else if (!email.value.match(emailRegex)) {
           showError()

         }else {
             email.style.opacity = 100
         }

         if(fullName.value ===""){
             console.log(fullName)
             fullName.classList.toggle('hidden')
             fullName.style.opacity = 100
            fullName.style.color ='red'
             
         }else{
             
             fullName.style.opacity = 100
            
         }


         
    })

    dropDown.addEventListener('click',function(e){
        console.log(e.target)
        dropDown.classList.add('select_choosen')
    })
   