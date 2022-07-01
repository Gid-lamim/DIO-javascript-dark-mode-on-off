let themeBtn = document.getElementById("themeBtn");
let setTheme = document.getElementById("setTheme");
themeBtn.addEventListener("click", changeTheme);

let h3 = document.getElementsByTagName("h3");
let p = document.getElementsByTagName('p');
let body = document.getElementsByTagName('body');
let button = document.getElementsByTagName('button');
let boxWrapper = document.getElementsByClassName('boxWrapper');

let lightTheme = true;
changeTheme();

function changeTheme(){
    if (lightTheme) {
        changeElementByTagName(body,"background-color: #fafafa;");
        changeElementByTagName(h3,"color: #122a57;");
        changeElementByTagName(p,"color: #122a57;");
        changeElementByTagName(button, "background-color: #122a57; color: #fff;")
        changeElementByTagName(boxWrapper, "background-color: rgba(var(--d87,255,255,255),1); border: 1px solid rgba(var(--b6a,219,219,219),1);");
        setTheme.innerHTML = "Light mode ON";
    }else{
        changeElementByTagName(body,"background-color: #070f0a;");
        changeElementByTagName(h3,"color: white;");
        changeElementByTagName(p,"color: white;");
        changeElementByTagName(button, "background-color: lightgrey; color: black;")
        changeElementByTagName(boxWrapper, "background-color:#1d1d1d; border: 2px solid #2596be;");
        setTheme.innerHTML = "Light mode OFF";
    }
    lightTheme = !lightTheme;

}





function changeElementByTagName(element,style) {
    for (let i = 0; i < element.length ; i++){
        element[i].style = style;
        console.log(element[i]);
    }
}




