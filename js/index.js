"use strict";
//targeting des bouttons et id d'insertion
const addTask = document.getElementById('addTask') //btn
const addUser = document.getElementById('addUser')
const input = document.getElementById('input') //input
const clear = document.getElementById('clear') //btn
const showMyTasks = document.getElementById('showMyTasks') //ul
const showUser = document.getElementById('showUser') //ul
const inputGroup = document.getElementById('inputGroup') //input selector
const inputGroup2 = document.getElementById('inputGroup2') //input selector

const tasksStorage = []
const userStorage = []

class Enfant {
  constructor(nom, score){
    this.nom = nom,
    this.score = score,
    //fonction qui creer un compteur ou le met a jour si il existe deja
    this.create = () => {
      if (document.getElementById(`${this.nom}`)){
        document.getElementById(`${this.nom}`).textContent=`${this.nom} à ${this.score} minutes !`
        }else
        {
        let storedScore = parseInt(localStorage.getItem(`${this.nom}`))
        this.score = storedScore
      let injectLi  = document.createElement('li')
      injectLi.textContent=`${this.nom} à ${this.score} minutes !`
      injectLi.id=nom
      document.getElementById('score').appendChild(injectLi)
      //ajout d'un boutton +5 et d'un boutton reset score
      const btn5 = document.createElement('button')
      btn5.textContent = "+5"
      btn5.className = "btn btn-primary mb-3"
      btn5.addEventListener('click', () => {this.addscore(5)})
      const btn_reset = document.createElement('button')
      btn_reset.textContent = "reset"
      btn_reset.className = "btn btn-primary mb-3"
      btn_reset.addEventListener('click', () => {this.scoreReset()})
      document.getElementById('score').appendChild(btn5)
      document.getElementById('score').appendChild(btn_reset)
    }
  }
    //fonction qui ajoute au score et sauvegarde local.
    this.addscore = (value) => {
      this.score += value
      this.create() //Refresh ui
      localStorage.setItem(`${this.nom}`, this.score)
    }
    //remet le score a zero sur localstorage et variable score
    this.scoreReset = () => {
      this.score = 0
      localStorage.setItem(`${this.nom}`, this.score)
      this.create()
      console.log (score)
    }
  }
}
//
//creation de 3 enfants

// affichage des tâches avec boutton de destruction.
function showTask(task){
  input.focus()
  const li = document.createElement('li')
  const removeli_btn = document.createElement('button')
  removeli_btn.textContent ='x'
  li.textContent = task
  removeli_btn.className = "btn btn-primary"
  removeli_btn.style.color = "red"
  li.className = "btn-primary mt-2 mb-2"
  removeli_btn.addEventListener('click', () => {showMyTasks.removeChild(removeli_btn.parentNode)})
  li.appendChild(removeli_btn)
  console.log(tasksStorage)
  showMyTasks.insertBefore(li, showMyTasks.firstChild)
}

//event d'ajout du bouton Ajouter et de l'input au clavier
input.addEventListener('keydown', (e) => {
  if (e.keyCode===13){tasksStorage.push(input.value)
  showTask(input.value)
input.value=""} //vide l'input
  }
)
addTask.addEventListener('click', () => {tasksStorage.push(input.value)
showTask(input.value)
input.value="" //vide l'input
}
)

//Clear du tableau des tâches
clear.addEventListener('click', () => {
  tasksStorage.splice(0,tasksStorage.length)
  showTask()
  showMyTasks.innerHTML=''
}
)

//Boucle d'affichage des tâches
for (let i = 0; i<tasksStorage.length; i++){
  showTask(tasksStorage[i])
}

//Gestion input-> Creation d'un nouvelle utilisateur
const createUser = () => {
  inputUser = document.getElementById('inputUser')
  inputUser.focus()
  userStorage.push(inputUser.value)
  console.log (userStorage)
}

inputUser.addEventListener('keydown', (e) => {
  if (e.keyCode===13){userStorage.push(inputUser.value)
  showUsers(inputUser.value)
inputUser.value=""}
}
)

addUser.addEventListener('click', () => {userStorage.push(inputUser.value)
showUsers(inputUser.value)
inputUser.value="" //vide l'input
}
)

function showUsers(user){
const liUser = document.createElement('li')
const user5 = document.createElement('button')
user5.textContent ='x'
liUser.textContent = user
user5.className = "btn btn-primary"
user5.style.color = "red"
liUser.className = "btn-primary mt-2 mb-2"
user5.addEventListener('click', () => {showUser.removeChild(user5.parentNode)})
liUser.appendChild(user5)
showUser.insertBefore(liUser, showUser.firstChild)
}

let lea = new Enfant("Lea", 0)
let vic = new Enfant("Victoria", 0)
let enzo = new Enfant("Enzo", 0)
lea.create()
vic.create()
enzo.create()
