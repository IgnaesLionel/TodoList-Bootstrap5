"use strict";
//injection h1-h2
const h1 = document.createElement('h1')
h1.textContent = "My Todo List Project"
h1.className = "text-center"
const h3 = document.createElement('h3')
h3.textContent = "Bienvenue sur notre outil gestion des tâches"
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
const tasksStorage = ["tâche1", "tâche2", "tâche3"]
//

//Constructeur d'enfants
class Enfant {
  constructor(nom, score){
    this.nom = nom,
    this.score = score,
    //fonction qui ajoute 5 au score
    this.addscore = (value) => {
      this.score += value
      let injectScore = document.getElementById(nom)
      injectScore.textContent= `${this.nom} à ${this.score} minutes !`
      console.log(this.score)
    }
    //fonction qui crée 5 un compteur
    this.create = () => {
      let injectp  = document.createElement('p')
      injectp.textContent=`${this.nom} à ${this.score} minutes !`
      injectp.id=nom
      document.getElementById('score').appendChild(injectp)
    }
  }
}
//

//creation de 3 enfants
let lea = new Enfant("Lea", 0)
let vic = new Enfant("Victoria", 0)
let enzo = new Enfant("Enzo", 0)
//

//affichage des compteurs
lea.create()
vic.create()
enzo.create()
//

// affichage des tâches avec boutton de destruction.
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
//

//fonction d'ajout d'une tâche dans le tableau des tâches
add.addEventListener('click', () => {tasksStorage.push(input.value)
showTask(input.value)
input.value="" //vide l'input
}
)
//

//Clear du tableau des tâches
clear.addEventListener('click', () => {
  tasksStorage.splice(0,tasksStorage.length)
  showTask()
  showMyTasks.parentNode.removeChild(showMyTasks)
  }
)
//

//Bouclier d'affichage des tâches
for (let i = 0; i<tasksStorage.length; i++){
  showTask(tasksStorage[i])
}
//
