"use strict";
//injection h1-h2
const h1 = document.createElement('h1')
h1.textContent = "My Todo List Project"
h1.className = "text-center"
const h3 = document.createElement('h3')
h3.textContent = "Bienvenue sur ma sandbox de Todo list en mode bootstrap 5"
h3.className = "text-center"
const myContainer = document.getElementsByClassName('container')[0]
myContainer.insertBefore(h3, myContainer.firstChild)
myContainer.insertBefore(h1, myContainer.firstChild)
//

//targeting des bouttons et id d'insertion
const add = document.getElementById('add')
const input = document.getElementById('input')
const clear = document.getElementById('clear')
const showMyTasks = document.getElementById('showMyTasks')
//

//stockage des tâches
const tasksStorage = ["coding", "cooking", "trading"]
//

//Creation des enfants
class Enfant {
  constructor(nom, score){
    this.nom = nom,
    this.score = score
  }
}

let lea = new Enfant("Lea", 0)
let vic = new Enfant("vic", 0)
let enzo = new Enfant("enzo", 0)
//

const showlea = document.createElement('p')
showlea.textContent= `${lea.nom} à ${lea.score} points !`
document.getElementById('score').appendChild(showlea)

const showvic = document.createElement('p')
showvic.textContent= `${vic.nom} à ${vic.score} points !`
document.getElementById('score').appendChild(showvic)

const showenzo = document.createElement('p')
showenzo.textContent= `${enzo.nom} à ${enzo.score} points !`
document.getElementById('score').appendChild(showenzo)

// affichage des tâches avec boutton.
function showTask(task){
  input.focus()
  const myTasks = document.createElement('li')
  const removebtn = document.createElement('button')
  removebtn.textContent ='x'
  myTasks.textContent = task
  removebtn.className = "btn btn-primary"
  removebtn.style.color = "red"
  myTasks.className = "btn-primary mt-2 mb-2"
  removebtn.addEventListener('click', () => {showMyTasks.removeChild(removebtn.parentNode)})
  myTasks.appendChild(removebtn)
  console.log(tasksStorage)
  showMyTasks.insertBefore(myTasks, showMyTasks.firstChild)
}

//event du bouton Ajouter et l'input enter
input.addEventListener('keydown', (e) => {
  if (e.keyCode===13){tasksStorage.push(input.value)
  showTask(input.value)
input.value=""} //vide l'input
  }
)

add.addEventListener('click', () => {tasksStorage.push(input.value)
showTask(input.value)
input.value="" //vide l'input
}
)

//

//Clear le tableau
clear.addEventListener('click', () => {
  tasksStorage.splice(0,tasksStorage.length)
  showTask()
  showMyTasks.parentNode.removeChild(showMyTasks)
  }
)
//

for (let i = 0; i<tasksStorage.length; i++){
  showTask(tasksStorage[i])
}
