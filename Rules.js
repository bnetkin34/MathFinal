function SendTo(location) {
   var url = window.location.href.toString();
   var splitaroo = url.split("/");
   url = "";
   for (t = 0; t < splitaroo.length-1; t++ ) {
    url += splitaroo[t] + "/"
   }
   url += location;
   console.log(url);
   window.location.href = url;
}

var quotientStep;
var productStep;
var powerStep;
var chainStep;
var limStep;

function powerStepFunction() {
  var powertable = document.getElementById("powertable");
  if (typeof powerStep !== 'undefined') {
    powerStep +=1;
    if (powerStep == 2) {
      var row = powertable.insertRow(1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      cell1.innerHTML = "Step 2:";
      cell2.innerHTML = "5 - 1 = 4";
    }
    if (powerStep == 3) {
      var row = powertable.insertRow(2);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      cell1.innerHTML = "Step 3:";
      cell2.innerHTML = "Final Answer: 60t<sup>4</sup>";
    }
  }
  else {
    powerStep = 1;
    var row = powertable.insertRow(0);
    var cell1= row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "Step 1:";
    cell2.innerHTML = "12 * 5 = 60"
  }
}

function quotientStepFunction() {
  var quotienttable = document.getElementById("quotienttable");
  if (typeof quotientStep !== 'undefined') {
    quotientStep +=1;
    if (quotientStep == 2) {
      var row = quotienttable.insertRow(1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      cell1.innerHTML = "Step 2:";
      cell2.innerHTML = "h'(t) = ((4t<sup>2</sup> - 2)(d/dt(7t-4)) - (7t-4)(d/dt(4t<sup>2</sup> - 2)))/(4t<sup>2</sup> - 2)<sup>2</sup>";
    }
    if (quotientStep == 3) {
      var row = quotienttable.insertRow(2);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      cell1.innerHTML = "Step 3:";
      cell2.innerHTML = "h'(t) = (28t<sup>2</sup> - 14 - 56t<sup>2</sup> + 32t)/(4t<sup>2</sup> - 2)<sup>2</sup></br> h'(t) = -28t<sup>2</sup> + 32t - 14/(4t<sup>2</sup> - 2)<sup>2</sup> ";
    }
  }
  else {
    quotientStep = 1;
    var row = quotienttable.insertRow(0);
    var cell1= row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "Step 1:";
    cell2.innerHTML = "f(t) = (7t-4), g(t) = (4t<sup>2</sup>-2), f '(t) = 7, g'(t) = 8t"
  }
}

function productStepFunction() {
  var producttable = document.getElementById("producttable");
  if (typeof productStep !== 'undefined') {
    productStep +=1;
    if (productStep == 2) {
      var row = producttable.insertRow(1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      cell1.innerHTML = "Step 2:";
      cell2.innerHTML = "h'(t) = f(t)g'(t) + f '(t)g(t) </br> h'(t) = (4x<sup>2</sup>)(d/dt9x<sup>3</sup>) + (d/dt4x<sup>2</sup>)(9x<sup>3</sup> - 1)";
    }
    if (productStep == 3) {
      var row = producttable.insertRow(2);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      cell1.innerHTML = "Step 3:";
      cell2.innerHTML = "h'(t) = (4x<sup>2</sup>)(27x<sup>2</sup>) + (8x)(9x<sup>3</sup> - 1)</br> h'(t) = 108x<sup>4</sup> + 72<sup>4</sup> - 8x = 180x<sup>4</sup> - 8x";
    }
  }
  else {
    productStep = 1;
    var row = producttable.insertRow(0);
    var cell1= row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "Step 1:";
    cell2.innerHTML = "f(t) = 4t<sup>2</sup>, g(t) = 9t<sup>3</sup>, f '(t) = 8t, g'(t) = 27t<sup>2</sup>"
  }
}

function chainStepFunction() {
  var chaintable = document.getElementById("chaintable");
  if (typeof chainStep !== 'undefined') {
    chainStep +=1;
    if (chainStep == 2) {
      var row = chaintable.insertRow(1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      cell1.innerHTML = "Step 2:";
      cell2.innerHTML = "u' = d/dt(5t + 2) = 5</br> dy/dt = 15(5t + 2)<sup>2</sup>";
    }
    if (chainStep == 3) {
      var row = chaintable.insertRow(2);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      cell1.innerHTML = "Step 3:";
      cell2.innerHTML = "Final Answer: dy/dt = 15(5(7) + 2)<sup>2</sup> = 20,535 ms<sup>-2</sup>";
    }
  }
  else {
    chainStep = 1;
    var row = chaintable.insertRow(0);
    var cell1= row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "Step 1:";
    cell2.innerHTML = "d/dt(u)<sup>3</sup> = 3u<sup>2</sup>u'"
  }
}

function aodstepFunction() {
  var aodtable = document.getElementById("aodtable");
  if (typeof aodStep !== 'undefined') {
    aodStep +=1;
    if (aodStep == 2) {
      var row = aodtable.insertRow(1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      cell1.innerHTML = "Step 2:";
      cell2.innerHTML = "Intervals: [-2, -1/2], [-1/2, 2]</br> Test Points: -1, 1 </br> At t = -1, the derivative is negative which means the function is decreasing </br> At t = 1, the derivative is positive which means the function is increasing";
    }
    if (aodStep == 3) {
      var row = aodtable.insertRow(2);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      cell1.innerHTML = "Step 3:";
      cell2.innerHTML = "On the left side of our critical point, the derivative is negative. On the right side of our critical point, the derivative is positive. Because the function's derivative is going from negative to positive at this point, the point t = (-1/2) is a relative minimum.";
    }
  }
  else {
    aodStep = 1;
    var row = aodtable.insertRow(0);
    var cell1= row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "Step 1:";
    cell2.innerHTML = "f '(t) = 2t+1(power rule)</br>2t + 1 = 0 </br> t = -(1/2) (critical point)"
  }
}

function limStepFunction(){
  var limtable = document.getElementById("limtable");
  if (typeof limStep !== 'undefined') {
    limStep +=1;
    if (limStep == 2) {
      var row = limtable.insertRow(1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      cell1.innerHTML = "Step 2:";
      cell2.innerHTML = "Final Answer: Limit as x approaches 9 of (&#8730;x - 3)/(x - 9)";
    }
  }
  else {
    limStep = 1;
    var row = limtable.insertRow(0);
    var cell1= row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "Step 1:";
    cell2.innerHTML = "Limit as x approaches t of (f(x) - f(t))/(x - t) = Limit as x approaches 9 of (&#8730;x - &#8730;9)/(x - 9)"
  }
}
