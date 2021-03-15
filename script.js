function chooseFirstItem (){
    var firstItem = document.getElementById('methods').firstChild
    firstItem.setAttribute('style', 'color:blue')
}

function chooseLastItem (){
    var lastItem = document.getElementById('methods').lastChild
    lastItem.setAttribute('style', 'color:blue')
}

function chooseNextItem(){
    var next = document.getElementsByClassName('next');

for(var i=0; i<next.length; i++){
   var next = document.getElementsByClassName('next')[i];
   next.nextSibling.innerHTML = next[i]
}
    // треба щоб кожен елемент по порядку вибирав клік кнопки а вибирає всі разом
}
// function chooseNextItem(){
// var next = document.getElementsByClassName('next')
//     for(var j=0; j<next.length; j++){
//         next[j].onclick = function (){
//             next.nextSibling.innerHTML = ('style', 'color:pink')
//         }
//     }
// }
function appendText(form) {
    if (form.inputText.value) {
        var newItem = document.createElement("li");
        newItem.innerHTML = form.inputText.value;
        document.getElementById("methods").appendChild(newItem);
    }
}

function restoreItem(){
    var restoreItems = document.getElementById('methods').lastChild
    if(restoreItems.parentNode){
        restoreItems.parentNode.removeChild(restoreItems)
    }
}

function appendBefore(form){
    if (form.inputText.value) {
        var newItem = document.createElement("li");
        newItem.innerHTML = form.inputText.value;
        var firstItem = document.getElementById("first")
        var parentFirstItem = firstItem.parentNode
        parentFirstItem.insertBefore(newItem, firstItem);
    }
}