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

function QuotientStep() {
  var quotienttable = document.getElementById("quotienttable");
  if (typeof step !== 'undefined') {
  step +=1;
  if step == 2 {
    var row = quotienttable.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "Step 2:";
    cell2.innerHTML = "something";
  }


  if step == 2
    var row = quotienttable.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "Step 2:";
    cell2.innerHTML = "something";

  if step == 3
    var row = quotienttable.insertRow(2);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "Step 3:";
    cell2.innerHTML = "something else";
else
  var step = 1;
  var row = quotienttable.insertRow(0);
  var cell1= row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = "Step 1:";
  cell2.innerHTML = "f(x) = (7x-4), g(x) = (4x<sup>2</sup>-2)"
}}
