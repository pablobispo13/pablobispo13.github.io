var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "fechar";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var fechar = document.getElementsByClassName("fechar");
var i;
for (i = 0; i < fechar.length; i++) {
  fechar[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

function novoElemento() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("fazer").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    Swal.fire('Insira alguma coisa para fazer!')
  } else {
    document.getElementById("lista").appendChild(li);
  }
  document.getElementById("fazer").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "fechar";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < fechar.length; i++) {
    fechar[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}