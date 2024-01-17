//modal, escalar una imagen//
const images = document.querySelectorAll('.im');
const containerImage = document.querySelector('.conteiner-img');
const imageContainer = document.querySelector('.img-show');
const copy = document.querySelector('.copy');
const closeModal = document.querySelector('.modal__close');


images.forEach(image =>{
    image.addEventListener('click', ()=>{
        //containerImage.classList.toggle('move');
        addImage(image.getAttribute('src'),image.getAttribute('alt'));
        
    })
} )

const addImage = (srcImage, altImage)=>{
    containerImage.classList.toggle('move');
    imageContainer.classList.toggle('show');
    imageContainer.src = srcImage;
    copy.innerHTML = altImage;
}

closeModal.addEventListener('click', ()=>{
    containerImage.classList.toggle('move');
    imageContainer.classList.toggle('show');
})