console.log("test")

const photoTags = document.querySelectorAll("a img")
modalCloseTag = document.querySelector(".modal-close")
modalContentTag = document.querySelector(".modal-content img")
modalTag = document.querySelector(".modal")
idImgTag = document.getElementById("modal-img")

const closeModal = () => {
  modalCloseTag.addEventListener("click", () => {
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
