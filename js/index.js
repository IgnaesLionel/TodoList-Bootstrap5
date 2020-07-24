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
const tasksStorage = ["test", "test2"]
//

// affichage des tâches avec boutton.
const myTasks = document.createElement('p')
myTasks.className = "text-center"
myTasks.textContent = tasksStorage
const removebtn = document.createElement('button')
removebtn.textContent ='x'
removebtn.style.color = "red"
removebtn.className = "btn btn-primary"

myTasks.appendChild(removebtn)
//

const test = "test"
for (let i = 0; i<tasksStorage.length; i++){
console.log()
showMyTasks.insertBefore(test, showMyTasks.firstChild)
}
//

//ajout d'une tâches
