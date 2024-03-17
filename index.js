const typedTextSpan =document.querySelector('.typed-text')
const cursor =document.querySelector('.cursor')
const  words = ['Emel Yeboah ~ indeed we are going and heaven knows where we are going and we know we will.',
'Atakora Amania.. ~ May his soul rest in peace and my condolences to the family and Asass fraternity.','Nana Agyeman ~ General was moving from class to teach Maths whether his class or not... when he has free period and a class is not with a teacher,he occupies. A great lost to the school',
'Fillmycup ~ Aaah what did i just read.','Best Grade Series ~ Eeiii','Prof ~ What!!!!! Fare thee well General','Owura4eva ~ May his gentle soul rest in peace.',
'Kwaku boateng ~ Whaaaaaaaatttt','Owura ~ Why','maths-Hod ~ Why general?','Vision Nation ~ Eii','Kwaku Boateng ~ Ooooooooohhhh general yiieeeeeeeee this world koraaaaaa aahhhhh.Rest well my dear brother',
'Afia Abrafi ~ So so Sad Someone who arranged table and chairs for his group for Plc just this last Tuesday','Sena maths Dep ~ Aaawww','Junior adu darko ~ Oohh',
'Raph ~ What!!!!!!!!', 'Sir Handle ~ Eeeeii wat a shocking news','Robert Kiyosaki ~ Really a great loss','Micky ~ Jesus Christ!!!!!, what a bad news, oh no no no',
'233248838977 ~ Hhmmmmmm','Augustina Amponsah ~ My one and only general May your general soul rest in peace','Aypapong Max ~ Ahhhh ba.General!Rest well.']

const typingDelay = 200
const erasingDelay = 200
// delay btn current and next text
const newletterDelay = 200

let index = 0
let charIndex = 0

document.addEventListener('DOMContentLoaded', () => {
  if (words.length) {
    setTimeout(type,newletterDelay)
  }
})

function type (){
if (charIndex < words[index].length){
typedTextSpan.textContent += words[index].charAt(charIndex)
charIndex++
setTimeout(type, typingDelay)
}else{
  setTimeout(erase, newletterDelay)
}

}

function erase(){
if (charIndex >0){
typedTextSpan.textContent = words[index].substring(0,charIndex - 1)
charIndex--
setTimeout(erase, erasingDelay)
}else{
  index++
  if(index >= words.length){
  index = 0
 }
 setTimeout(type,typingDelay + 1100)
}

}



let firstIndex = 0
function automaticSlide() {
  setTimeout(automaticSlide,4000)
  let pics
  const img = document.querySelectorAll('#imagez')
  for(pics=0;pics<img.length;pics++){
    img[pics].style.display ='none'

  }
  firstIndex++
  if (firstIndex>img.length) {
    firstIndex =1
  }
  img[firstIndex-1].style.display = 'block'

}

automaticSlide()


const days = document.getElementById('day')
const hours = document.getElementById('hour')
const minutes = document.getElementById('minute')
const seconds = document.getElementById('second')
const countTitle = document.getElementById('count-title')

const futureTime = new Date(`August 03 2024`).getTime()
//console.log(futureTime)

function updateCountDown(){
  const currentTime = new Date().getTime()
  const diff = futureTime - currentTime
const d = Math.floor(diff/1000/60/60/24)
const h = Math.floor(diff/1000/60/60) %24
const m = Math.floor(diff/1000/60) %60
const s = Math.floor(diff/1000) %60

console.log(d)
console.log(h)
console.log(m)
console.log(s)
days.innerHTML = d
hours.innerHTML = h < 10 ? '0'+ h: h
minutes.innerHTML = m < 10 ? '0'+ m: m
seconds.innerHTML = s < 10 ? '0'+ s : s
if (diff<0) {
  clearInterval(countdown)
  countTitle.innerHTML = "WE THANK GOD FOR A SUCCESSFUL EVENT"
  
}
  
}

let countdown = setInterval(updateCountDown, 1000);
updateCountDown()


const formEl = document.querySelector('form')
const btnEl = document.getElementById('btn')
const firstName = document.getElementById('name-first')
const lastName = document.getElementById('name-last')


function responseAlet(e){
  e.preventDefault()
  alert(`Sorry, we were not able to submit your message. Please
 contact general's family for any assistance.Thank You.(~ Response by team Evans Osei Kwaku(ojooooe))`)

}
 

formEl.addEventListener('submit',responseAlet)