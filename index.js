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
