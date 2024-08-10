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
    screen.value = Math.sin(parseFloat(screen.value));
}
function cos(){
    screen.value = Math.cos(parseFloat(screen.value));
}
function tan(){
    screen.value = Math.tan(parseFloat(screen.value));
}
function sqrt(){
    screen.value = Math.sqrt(parseFloat(screen.value));
}
function log(){
    screen.value = Math.log(parseFloat(screen.value));
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
function backspc() {
    screen.value = screen.value.slice(0,- 1);
}
function div100()
{
    screen.value = parseFloat(screen.value)/100;
}