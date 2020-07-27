"use strict";
//targeting des bouttons et id d'insertion
const add = document.getElementById('add') //btn
const input = document.getElementById('input') //input
const clear = document.getElementById('clear') //btn
const showMyTasks = document.getElementById('showMyTasks') //ul
const inputGroup = document.getElementById('inputGroup') //input selector
const inputGroup2 = document.getElementById('inputGroup2') //input selector
//
//stockage des tâches
const tasksStorage = []
//
//Constructeur d'enfants
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
      //ajout d'un boutton +5 et d'un boutton reset
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
    //fonction qui ajoute des minutes au score et sauvegarde local.
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
  showMyTasks.innerHTML=''
  }
)
//

//Boucle d'affichage des tâches
for (let i = 0; i<tasksStorage.length; i++){
  showTask(tasksStorage[i])
}
//



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
  console.log(user.nom)
}


lea.create()
vic.create()
enzo.create()
