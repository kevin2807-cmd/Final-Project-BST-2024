document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelectorAll('.btn');
    const screen = document.getElementById('screen');

    for (const item of btn) {
        item.addEventListener('click', (e) => {
            let btntext = e.target.innerText;
            screen.value += btntext;
        });
    }
});

var screen = document.getElementById('screen');
function sin(){
    let valueInDegrees = parseFloat(screen.value);
    let valueInRadians = valueInDegrees * (Math.PI / 180);
    screen.value = Math.sin(valueInRadians);
}
function cos(){
    let valueInDegrees = parseFloat(screen.value);
    let valueInRadians = valueInDegrees * (Math.PI / 180);
    screen.value = Math.cos(valueInRadians);
}
function tan(){
    let valueInDegrees = parseFloat(screen.value);
    if (valueInDegrees % 180 === 90) {
        screen.value = "Undefined";
    } else {
        let valueInRadians = valueInDegrees * (Math.PI / 180);
        screen.value = Math.tan(valueInRadians);
    }
}
function sqrt(){
    screen.value = Math.sqrt(parseFloat(screen.value));
}
function log(){
    screen.value = Math.log10(parseFloat(screen.value));
}
function e(){
    screen.value = 2.71828182846;
}
function pi(){
    screen.value = 3.14159265359;
}   
function pow(){
    screen.value = Math.pow(parseFloat(screen.value),2);
}
function fact(){
    var i, num, f;
    f=1;
    num = parseFloat(screen.value);
    for(i = 1; i <= num; i++){
        f = f * i;
    }
    screen.value = f;
}
function backspc(){
    screen.value = screen.value.slice(0,- 1);
}
function div100(){
    screen.value = parseFloat(screen.value)/100;
}
