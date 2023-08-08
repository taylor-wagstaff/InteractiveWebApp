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

    let selectText = document.querySelector('.select-box p')
    selectText.innerHTML = `${buttonHTML}`

    // var colorText = document.createElement('p')
    // selectColor.appendChild(colorText)
  })
})

let addbtn = document.querySelector('.addButton')
addbtn.style.backgroundImage = "url('public/ccrulogo.jpeg')"

function createBox() {
  console.log('clicked')
  // Create a new div element
  let newBox = document.createElement('div')
  // adds class name
  newBox.classList.add('box')

  let addBox = document.querySelector('.palette-container')
  addBox.appendChild(newBox)

  let selectText = document.querySelector('.select-box p').innerHTML
  console.log(selectText)
  newBox.style.backgroundColor = `${selectText}`
}

function clearColors() {
  console.log('clicked')
  console.log('clicked')
  let addBox = document.querySelector('.palette-container')
  let boxes = addBox.querySelectorAll('.box')


  boxes.forEach(function(box) {
    addBox.removeChild(box)
  })
}
