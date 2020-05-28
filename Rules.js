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
