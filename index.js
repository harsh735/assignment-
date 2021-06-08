
//LEFT COLORS

// leftTopColor = new Array('red', 'yellow', 'cyan' , 'green');
// function leftEffect(left){
// left %= leftTopColor.length;
// document.getElementById('leftTop').style.background = leftTopColor[left];   
// var lOne = setTimeout("leftEffect("+(left + 1)+")", 1000);}


// leftBottomColor = new Array('green', 'red', 'yellow' , 'cyan');
// function leftBEffect(leftB){
// leftB %= leftBottomColor.length;
// document.getElementById('leftBottom').style.background = leftBottomColor[leftB];   
// setTimeout("leftBEffect("+(leftB+1)+")", 1000);}


// //RIGHT COLORS// 

// rightTopColor = new Array('cyan', 'green', 'red' , 'yellow');
// function rightEffect(right){
// right %= rightTopColor.length;
// document.getElementById('rightTop').style.background = rightTopColor[right];   
// setTimeout("rightEffect("+(right+1)+")", 1000);}


// rightBottomColor = new Array('yellow', 'cyan', 'green' , 'red');
// function rightBEffect(rightB){
// rightB %= rightBottomColor.length;
// document.getElementById('rightBottom').style.background = rightBottomColor[rightB];   
// setTimeout("rightBEffect("+(rightB+1)+")", 1000);}


// function stopColor() {
//     // document.getElementById('leftTop').style.backgroundColor = 'red';
//     // document.getElementById('leftBottom').style.backgroundColor = 'green';
//     // document.getElementById('rightTop').style.backgroundColor = 'cyan';
//     // document.getElementById('rightBottom').style.backgroundColor = 'yellow';

//     clearTimeout(lOne);
//     clearTimeout(leftBottomColor);
//     clearTimeout(rightTopColor);
//     clearTimeout(rightBottomColor);
// }


var i = 0;
var j = 0;
var k = 0;
var r = 0;
var myInterval = setInterval(change, 1000);

function change() {
  suspend = false;
  var colorLT = document.getElementById("leftTop");
  var leftT = ["red", "yellow", "cyan", "green"];
  colorLT.style.backgroundColor = leftT[i];
  i = (i + 1) % leftT.length;

  var colorLB = document.getElementById("leftBottom");
  var leftB = ["green", "red" , "yellow"  , "cyan"];
  colorLB.style.backgroundColor = leftB[j];
  j = (j+1) % leftB.length;


  var colorRT = document.getElementById("rightTop");
  var rightT = ["cyan", "green", "red" , "yellow"];
  colorRT.style.backgroundColor = rightT[k];
  k = (k + 1) % rightT.length;


  var colorRB = document.getElementById("rightBottom");
  var rightB = ["yellow", "cyan" , "green"  , "red"];
  colorRB.style.backgroundColor = rightB[r];
  r = (r+1) % rightB.length;
}

function stopColor() {
    clearInterval(myInterval);
}
