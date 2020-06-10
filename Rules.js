function SendTo(location) {
   var url = window.location.href.toString();
   var splitaroo = url.split("/");
   url = "";
   for (x = 0; x < splitaroo.length-1; x++ ) {
    url += splitaroo[x] + "/"
   }
   url += location;
   console.log(url);
   window.location.href = url;
}

var quotientStep;
var productStep;
var powerStep;
var chainStep;

function powerStepFunction() {
  var powertable = document.getElementById("powertable");
  if (typeof powerStep !== 'undefined') {
    powerStep +=1;
    if (powerStep == 2) {
      var row = powertable.insertRow(1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      cell1.innerHTML = "Step 2:";
      cell2.innerHTML = "something";
    }
    if (powerStep == 3) {
      var row = powertable.insertRow(2);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      cell1.innerHTML = "Step 3:";
      cell2.innerHTML = "something else";
    }
  }
  else {
    powerStep = 1;
    var row = powertable.insertRow(0);
    var cell1= row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "Step 1:";
    cell2.innerHTML = "f(x) = (7x-4), g(x) = (4x<sup>2</sup>-2)"
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
      cell2.innerHTML = "something";
    }
    if (quotientStep == 3) {
      var row = quotienttable.insertRow(2);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      cell1.innerHTML = "Step 3:";
      cell2.innerHTML = "something else";
    }
  }
  else {
    quotientStep = 1;
    var row = quotienttable.insertRow(0);
    var cell1= row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "Step 1:";
    cell2.innerHTML = "f(x) = (7x-4), g(x) = (4x<sup>2</sup>-2)"
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
      cell2.innerHTML = "something";
    }
    if (productStep == 3) {
      var row = producttable.insertRow(2);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      cell1.innerHTML = "Step 3:";
      cell2.innerHTML = "something else";
    }
  }
  else {
    productStep = 1;
    var row = producttable.insertRow(0);
    var cell1= row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "Step 1:";
    cell2.innerHTML = "f(x) = (7x-4), g(x) = (4x<sup>2</sup>-2)"
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
      cell2.innerHTML = "something";
    }
    if (chainStep == 3) {
      var row = chaintable.insertRow(2);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      cell1.innerHTML = "Step 3:";
      cell2.innerHTML = "something else";
    }
  }
  else {
    chainStep = 1;
    var row = chaintable.insertRow(0);
    var cell1= row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "Step 1:";
    cell2.innerHTML = "f(x) = (7x-4), g(x) = (4x<sup>2</sup>-2)"
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
      cell2.innerHTML = "Intervals: (-2, -(1/2)), ((-1/2), 2)</br> Test Points: -1, 1 </br> At x = -1, the derivative is negative which means the function is decreasing </br> At x = 1, the derivative is positive which means the function is increasing";
    }
    if (aodStep == 3) {
      var row = aodtable.insertRow(2);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      cell1.innerHTML = "Step 3:";
      cell2.innerHTML = "On the left side of our critical point, the derivative is negative. On the right side of our critical point, the derivative is positive. Since the functions derivative is going from negative to positive at this point, it means the point x = (-1/2) is a relative minimum.";
    }
  }
  else {
    aodStep = 1;
    var row = aodtable.insertRow(0);
    var cell1= row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "Step 1:";
    cell2.innerHTML = "f'(x) = 2x+1(power rule)</br>2x + 1 = 0 </br> x = -(1/2) (critical point)"
  }
}
