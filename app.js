function imgSlider(sla) {
    document.querySelector('.starbucks').src = `images/${sla}`;
}

function changeCircle(color) {
    const circle = document.querySelector('.circle')
    circle.style.background = color
}

function hambMenu(){
    const menuToggle = document.querySelector('.toggle')
    const navigation = document.querySelector('.navigation')

    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
}