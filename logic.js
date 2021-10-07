let btn = document.getElementById('btn')
let text = document.getElementById('text')
let head = document.getElementById('head')
let clear = document.getElementById('clear')
let container = document.getElementById('container')
let body = document.getElementById('body')
//loader
let content=document.getElementById(`content`)
let loader=document.getElementById('loader')
let wid=0
// content.style.display="none"
// setInterval(() => {
//     wid++
//     loader.style.width=`${wid}%`
//     if(wid==100){
//     wid=-10*100000*10000*10000
//     loader.style.display="none"
//     content.style.visibility="visible"
//    }
// }, 10);
// if(screenX){
//   // content.style.fontSize="8px"
//   // container.removeAttribute="style"
//   body.style.background="red"
// }
//show note function
localStorage.setItem('head', head.value)
function showNotes() {
 let notes = localStorage.getItem('notes')
 if (notes == null) {
  notesObj = []
 }
 else {
  notesObj = JSON.parse(notes)
 }
 let html = ``
 notesObj.forEach(function (element, index) {
  html += `
  <div class="noteCard card m-3 text-dark
  " style=" width: 18rem; height: fit-content;">
  <!-- <img src="..." class="card-img-top" alt="..."> -->
  <div class="card-body">
   <h3 class="card-title text-center text-primary">${element.title}</h3>
   <p class="card-text">${element.text}</p>
   <i class="fas fa-trash pointer" onclick="to_delete(this.id)" id="${index}"style="margin-left:40%; color:red; font-size:30px;"></i>
  </div>
</div>
  `
  let notesEle = document.getElementById(`notes`)
  if (notesObj.length != 0) {
   notesEle.innerHTML = html;
  }
  else {
   notesEle.innerHTML = `<h1>nothing is there in notes!</h1>`
  }
 });
}
showNotes()
//If user adds a note add it to the local storage
btn.addEventListener("click", function () {
 let notes = localStorage.getItem('notes')
 if (notes == null) {
  notesObj = []
 }
 else {
  notesObj = JSON.parse(notes)
 }
 let myObj = {
  title: head.value,
  text: text.value
 }
 head.value = ""
 text.value = ""
 notesObj.push(myObj)
 localStorage.setItem(`notes`, JSON.stringify(notesObj))
 showNotes()
})
function to_delete(index) {
 let notes = localStorage.getItem('notes')
 if (notes == null) {
  notesObj = []
 }
 else {
  notesObj = JSON.parse(notes)
 }
 notesObj.splice(index, 1)
 localStorage.setItem(`notes`, JSON.stringify(notesObj))
 showNotes()
}
let search = document.getElementById(`search`)
search.addEventListener('input', function () {
 let inputVal = search.value
 let noteCards = document.getElementsByClassName(`noteCard`)
 Array.from(noteCards).forEach(function (element) {
  let cardTxt = element.getElementsByTagName(`p`)[0].innerText
  if (cardTxt.includes(inputVal)) {
   element.style.display = "block"
  }
  else {
   element.style.display = "none"
  }
 });
})
clear.addEventListener("click",function(){
  let con=confirm("Are you sure that you want to delete all of your notes")
  if(con==true){
localStorage.clear()
  }
})
// let b=0
// let load=document.getElementById(`load`)
// setInterval(() => {
//   load.style.transform=`rotate(${b}deg)`
//   b+=2
// }, 0.1);
// setTimeout(() => {
//   load.style.display="none"
//   content.style.display="block"
// }, 2000);