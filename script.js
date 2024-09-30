let color1 = document.getElementById('box1');
let input = document.getElementById('box');
let button = document.getElementById('btn');
    let color2 = document.getElementById('box2');
    let color3 = document.getElementById('box3');
    let color4 = document.getElementById('box4');
    let color5 = document.getElementById('box5');
    let color6 = document.getElementById('box6');
    let color7 = document.getElementById('box7');
    let color8 = document.getElementById('box8');
    let color9 = document.getElementById('box9');
    let color10 = document.getElementById('box10');
    let area = document.getElementById('area');

    // color1.addEventListener('click', () => {
    //    area.style.backgroundColor="#335c67"
    // })
    button.addEventListener('click', () => {
        let selectedColor=input.value;
       area.style.backgroundColor = selectedColor;
    });
    // color2.addEventListener('click', () => {
    //    area.style.backgroundColor="#a7c957"
    // })
    // color3.addEventListener('click', () => {
    //    area.style.backgroundColor="#e09f3e"
    // })
    // color4.addEventListener('click', () => {
    //    area.style.backgroundColor="#d04b4e"
    // })
    // color5.addEventListener('click', () => {
    //    area.style.backgroundColor="#540b0e"
    // })
    // color6.addEventListener('click', () => {
    //    area.style.backgroundColor="#00ffb3"
    // })
    // color7.addEventListener('click', () => {
    //    area.style.backgroundColor="#585123"
    // })
    // color8.addEventListener('click', () => {
    //    area.style.backgroundColor="#240046"
    // })
    // color9.addEventListener('click', () => {
    //    area.style.backgroundColor="#e5d352"
    // })
    // color10.addEventListener('click', () => {
    //    area.style.backgroundColor="#006d77"
    // })