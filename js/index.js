const h1 = document.createElement('h1')
h1.textContent = "My Todo List Project"
h1.className = "text-center"
const myContainer = document.getElementsByClassName('container')[0]
console.log (myContainer)
myContainer.insertBefore(h1, myContainer.firstChild)
