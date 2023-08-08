// Select all buttons inside .color-grid
let buttons = document.querySelectorAll('.color-grid button')

// Add a "mouseover" event listener to each button
buttons.forEach(function (button) {
  button.addEventListener('click', function (event) {
    // event.target is the button being hovered over
    // Access its innerHTML with event.target.innerHTML
    let buttonHTML = event.target.innerHTML
    console.log(buttonHTML)

    let selectColor = document.getElementsByClassName('select-box')[0]
    selectColor.style.backgroundColor = `${buttonHTML}`
    selectColor.style.color = 'black'

    let selectText = document.querySelector('.select-box p')
    selectText.innerHTML = `${buttonHTML}`

    // var colorText = document.createElement('p')
    // selectColor.appendChild(colorText)
  })
})

let addbtn = document.querySelector('.addButton')
addbtn.style.backgroundImage = "url('public/ccrulogo.jpeg')"

function createBox() {

  // Create a new div element
  let newBox = document.createElement('div')
  // adds class name
  newBox.classList.add('box')

  let addBox = document.querySelector('.palette-container')
  addBox.appendChild(newBox)

  let selectText = document.querySelector('.select-box p').innerHTML
 
  newBox.style.backgroundColor = `${selectText}`

  // // adds colors to a list?
  // let colorList = document.querySelector('.list-colors p') // select the 'p' element directly

  // // check if the p element exists in the colorList, if not, create one
  // if (!colorList) {
  //   colorList = document.createElement('p')
  //   document.querySelector('.list-colors').appendChild(colorList)
  // }

  // // append new color to the existing text
  // colorList.textContent += ` ${selectText},`
}

function clearColors() {

  let addBox = document.querySelector('.palette-container')
  let boxes = addBox.querySelectorAll('.box')

  boxes.forEach(function (box) {
    addBox.removeChild(box)
  })
}

function randomButton() {
  const randomNum = Math.floor(Math.random() * buttons.length)
  const randomTerm = buttons[randomNum]
  // https://stackoverflow.com/questions/73979102/pulling-out-a-random-object-of-an-array-in-a-nodelist

  let newBox = document.createElement('div')
  // adds class name
  newBox.classList.add('box')

  let addBox = document.querySelector('.palette-container')
  addBox.appendChild(newBox)

  newBox.style.backgroundColor = `${randomTerm.innerHTML}`
}
