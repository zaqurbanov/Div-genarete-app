let width = document.getElementById("width");
let height = document.getElementById("height");
let backgroundColor = document.getElementById("background");
let radius = document.getElementById("radius");
let border = document.getElementById("border");
let borderColor = document.getElementById("borderColor");
let div = document.getElementById("generate-div");
let button = document.getElementById("button");
let code = document.getElementById("code");
let display  = "";
 let generateCss = ""
function displayUpdate(){
   code.innerHTML = generateCss;
 } 

let Style = div.style;

backgroundColor.addEventListener("input",Background)
width.addEventListener("input",Width);
height.addEventListener("input",Height);
radius.addEventListener("input",Radius);
border.addEventListener("input",Border);
borderColor.addEventListener("input",BorderColor);
Style.borderStyle = "solid";

button.addEventListener("click",function(e){
    e.preventDefault();
    code.classList.toggle("active");
   generateCss = ""
      
    if(width.value >0){
        generateCss += `width: ${width.value}px;`

    }
    if(height.value>0){
     generateCss += `height: ${height.value}px`

    }
    if(radius.value>0){
        generateCss +=`radius: ${radius.value}%`
    }

    if(border.value>0){
        generateCss +=`border: ${border.value}px solid ${borderColor.value}`
    }

    displayUpdate()
})

function Width (){Style.width = width.value +"px";}
function Height(){Style.height = height.value + "px";}
function Background(){Style.backgroundColor = backgroundColor.value};
function Radius(){Style.borderRadius = radius.value+ "%"};
function Border(){Style.borderWidth = border.value + "px"}
function BorderColor(){Style.borderColor = borderColor.value}
displayUpdate()