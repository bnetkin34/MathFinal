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

function powerStep() {
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

function quotientStep() {
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

function productStep() {
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

function chainStep() {
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
