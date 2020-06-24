var numOfSquares=6;
var colors=colorgen(numOfSquares);

var squares=document.querySelectorAll(".square");

var colorpicked = pickColor();

var colordisp = document.getElementById("col");
colordisp.textContent=colorpicked;

var res=document.querySelector("#result");

var h1=document.querySelector("h1");


var easy=document.querySelector("#modee");
var hard=document.querySelector("#modeh");
easy.addEventListener("click",function(){
    hard.classList.remove("selected");
    easy.classList.add("selected");
    numOfSquares=3;
    colors=colorgen(numOfSquares);
    colorpicked=pickColor();
    colordisp.textContent=colorpicked;
    for(var i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.backgroundColor=colors[i];
        }
        else{
            squares[i].style.display="none";
        }
    }
});
hard.addEventListener("click",function(){
    easy.classList.remove("selected");
    hard.classList.add("selected");
    numOfSquares=6;
    colors=colorgen(numOfSquares);
    colorpicked=pickColor();
    colordisp.textContent=colorpicked;
    for(var i=0;i<squares.length;i++){
            squares[i].style.backgroundColor=colors[i];
            squares[i].style.display="block";
        }
    });



var reset=document.querySelector("#reset");
reset.addEventListener("click",function(){
    colors=colorgen(numOfSquares);
    colorpicked = pickColor();
    colordisp.textContent=colorpicked;
    for(let i=0;i<squares.length;i++){
        //add Intial Colors to squares
        squares[i].style.backgroundColor=colors[i];
    }
    this.textContent="New Colors";
    h1.style.backgroundColor="cornflowerblue";
});
for(let i=0;i<squares.length;i++){
    //add Intial Colors to squares
    squares[i].style.backgroundColor=colors[i];

    //add EventListeners
    squares[i].addEventListener("click",function(){
        //grab color of clicked
        var clickedCol=this.style.backgroundColor;
        //compare color with colorpicked
        if(clickedCol===colorpicked){
            res.textContent="Correct!!";
            reset.textContent="Play Again!";
            changeColors(clickedCol);
            h1.style.backgroundColor=colorpicked;
            res.textContent="";
        }
        else{
            this.style.backgroundColor="#232323";
            res.textContent="Try Again";
        }
    })
}

function changeColors(color){
    //loop through all sqaures
    for(let i=0;i<colors.length;i++){
        squares[i].style.backgroundColor=color;
}
}

function pickColor(){
    var random=Math.floor(Math.random()*colors.length);
    return colors[random];
}

function colorgen(num){
    var arr=[];
    for(var i=0;i<num;i++){
        arr.push(randColor());
    }
    return arr;
}

function randColor(){
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}