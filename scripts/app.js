// fichier js de base
const closeIcon = document.querySelector('.close-icon')
closeIcon.addEventListener('click', (e)=>{
    e.target.parentElement.parentElement.style.display = "none"
})