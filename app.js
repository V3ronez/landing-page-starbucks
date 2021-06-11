function imgSlider(sla) {
    document.querySelector('.starbucks').src = `images/${sla}`;
}

function changeCircle(color) {
    const circle = document.querySelector('.circle')
    circle.style.background = color
}