
//======Раскрытие меню==========================

const bubgerIcon = document.querySelector('.nav_button')
const navList = document.querySelector('.header_nav_list')

if (bubgerIcon) {
    bubgerIcon.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock')
        bubgerIcon.classList.toggle('_active')
        navList.classList.toggle('_active')
    })
}

//====Закрыть при клике по ссылке==============


const menuLinks = document.querySelectorAll('.header_nav_link')

menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", function () {
        document.body.classList.toggle('_lock')
        bubgerIcon.classList.toggle('_active')
        navList.classList.toggle('_active')
    })
})



