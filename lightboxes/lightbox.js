console.log("test")

const bodyTag = document.querySelector("body")
const photoTags = document.querySelectorAll("a img")
modalCloseTag = document.querySelector(".modal-close")
modalBackgroundTag = document.querySelector(".modal-background")
modalContentTag = document.querySelector(".modal-content img")
modalTag = document.querySelector(".modal")
idImgTag = document.getElementById("modal-img")


const closeModal = () => {
  bodyTag.addEventListener("click", event => {
    if (event.target !== modalCloseTag && event.target !== modalBackgroundTag) {
      return
    }
    modalTag.style.display = "none"
  })
}

photoTags.forEach((photoTag) => {
  console.log( "looped")


  photoTag.addEventListener("click", function(e) {
    e.preventDefault()

  
    let currentImg = photoTag.getAttribute("src")
    let currentImgAlt = photoTag.getAttribute("alt")

    console.log(currentImg)
    console.log(currentImgAlt)
    
    modalTag.style.display = "block"
    idImgTag.setAttribute("src", currentImg)
    idImgTag.setAttribute("alt", currentImgAlt)


  })
})

closeModal()