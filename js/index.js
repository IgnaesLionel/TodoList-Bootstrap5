"use strict";
//targeting des bouttons et id d'insertion
const add = document.getElementById('add')
const input = document.getElementById('input')
const clear = document.getElementById('clear')
const showMyTasks = document.getElementById('showMyTasks')
const inputGroup = document.getElementById('inputGroup')
const inputGroup2 = document.getElementById('inputGroup2')
//
//stockage des tâches
const tasksStorage = []
//



//Constructeur d'enfants
class Enfant {
  constructor(nom, score){
    this.nom = nom,
    this.score = score,
    //fonction qui ajoute des minutes au score et en local.
    this.addscore = (value) => {
      this.score += value
      this.create()
      localStorage.setItem(`${this.nom}`, this.score)
      console.log(this.score)
    }
    //fonction qui creer un compteur ou le met a jour si il existe deja
    this.create = () => {
      if (document.getElementById(`${this.nom}`)){
        document.getElementById(`${this.nom}`).textContent=`${this.nom} à ${this.score} minutes !`
        }else
        {
      let injectp  = document.createElement('p')
      injectp.textContent=`${this.nom} à ${this.score} minutes !`
      injectp.id=nom
      document.getElementById('score').appendChild(injectp)
      //ajout d'une boutton +5
      const btn = document.createElement('button')
      btn.textContent = "+5"
      btn.className = "btn btn-primary mb-3"
      btn.addEventListener('click', () => {this.addscore(15)})
      const target = document.getElementById(`${this.nom}`)
      target.appendChild(btn, target.lastChild)
      //document.getElementById('score').appendChild(injectp)

    }
  }
    //charge le score du localstorage
    this.scoreUpdate = () => {
      let storedScore = parseInt(localStorage.getItem(`${this.nom}`))
      this.score = storedScore
    }
    //remet le score a zero du localstorage + variable score
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
let lea = new Enfant("Lea", 0)
let vic = new Enfant("Victoria", 0)
let enzo = new Enfant("Enzo", 0)
//

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

//Boucle d'affichage des tâches
for (let i = 0; i<tasksStorage.length; i++){
  showTask(tasksStorage[i])
}
//

//Gestion input->ajout des scores

const submit= () => {
  if (inputGroup.value == "lea" && inputGroup2.value =="5"){
    lea.addscore(5)
  } else if (inputGroup.value == "lea" && inputGroup2.value =="10") {
    lea.addscore(10)
  } else if (inputGroup.value == "lea" && inputGroup2.value =="20")
    lea.addscore(20)

  if (inputGroup.value == "vic" && inputGroup2.value =="5"){
    vic.addscore(5)
  } else if (inputGroup.value == "vic" && inputGroup2.value =="10") {
    vic.addscore(10)
  } else if (inputGroup.value == "vic" && inputGroup2.value =="20")
    vic.addscore(20)

  if (inputGroup.value == "enzo" && inputGroup2.value =="5"){
    enzo.addscore(5)
  } else if (inputGroup.value == "enzo" && inputGroup2.value =="10") {
    enzo.addscore(10)
  } else if (inputGroup.value == "enzo" && inputGroup2.value =="20")
    enzo.addscore(20)

}

//Gestion Input -> Remise à zero des scores
const resetMyScore = () => {
  if (inputGroup.value == "lea"){
    lea.scoreReset()
}else if (inputGroup.value == "vic"){
  vic.scoreReset()
} else if (inputGroup.value == "enzo"){
  enzo.scoreReset()
} else {}
}

//Gestion input-> Creation d'un nouvelle utilisateur
const createUser = () => {
  const inputUser = document.getElementById('inputUser')
  const user = new Enfant(`${inputUser.value}`, 0)
  user.scoreUpdate()
  user.create()
  console.log(user)
}


lea.create()
