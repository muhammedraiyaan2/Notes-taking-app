let btn = document.getElementById('btn')
let text = document.getElementById('text')
let head = document.getElementById('head')
let clear = document.getElementById('clear')
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
  <div class="noteCard card m-3" style="width: 18rem;">
  <!-- <img src="..." class="card-img-top" alt="..."> -->
  <div class="card-body">
   <h3 class="card-title">${element.title}</h3>
   <p class="card-text">${element.text}</p>
   <button onclick="to_delete(this.id)" id="${index}" class="btn btn-primary">Delete</button>
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
 localStorage.clear()
})
