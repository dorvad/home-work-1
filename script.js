function chooseFirstItem() {
    var firstItem = document.getElementById('methods').firstChild
    firstItem.setAttribute('style', 'color:blue')
}

function chooseLastItem() {
    var lastItem = document.getElementById('methods').lastChild
    lastItem.setAttribute('style', 'color:blue')
}

function chooseNextItem() {
    var next = document.getElementsByClassName('next');

    for (var i = 0; i < next.length; i++) {
        var next = document.getElementsByClassName('next')[i];
        next.nextSibling.innerHTML = next[i]
    }
    // треба щоб кожен елемент по порядку вибирав клік кнопки а вибирає всі разом
}

function appendItem(form) {
    let value = form.inputText.value;
    if (form.inputText.value) {
        var newItem = document.createElement("li");
        newItem.innerHTML = value;
        document.getElementById("methods").appendChild(newItem);
    }
}

function deleteItem() {
    var restoreItems = document.getElementById('methods').lastChild
    if (restoreItems.parentNode) {
        restoreItems.parentNode.removeChild(restoreItems)
    }
}

function prependItem(form) {
    let value = form.inputText.value;
    if (value) {
        var newItem = document.createElement("li"); // declare new first item
        newItem.innerHTML = form.inputText.value; // init value for new first item

        let allItems = document.getElementById("methods"); // get all items from element by id

        if (!allItems) {
            console.log('There is no element with the given id!')
        } else if (allItems.length > 0) {
            var firstItem = allItems.children[0]
            firstItem.parentNode.insertBefore(newItem, firstItem);
        } else {
            allItems.appendChild(newItem)
        }
    }
}
