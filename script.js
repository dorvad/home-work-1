const methodsClass = 'methods' // declare variable with useful value to avoid duplication

function chooseFirstItem() {
    var firstItem = document.getElementById(methodsClass).firstChild

    if (firstItem) {
        firstItem.setAttribute('style', 'color:blue')
    } else {
        console.log('There is no any item!')
    }
}

function chooseLastItem() {
    var lastItem = document.getElementById(methodsClass).lastChild

    if (lastItem) {
        lastItem.setAttribute('style', 'color:blue')
    } else {
        console.log('There is no any item!')
    }
}

function chooseNextItem() {
    var next = document.getElementsByClassName('next');

    for (var i = 0; i < next.length; i++) {
        next = document.getElementsByClassName('next')[i];
        next.nextSibling.innerHTML = next[i]
    }
    // треба щоб кожен елемент по порядку вибирав клік кнопки а вибирає всі разом
}

function appendItem(form) {
    let value = form.inputText.value;
    if (form.inputText.value) {
        var newItem = document.createElement("li");
        newItem.innerHTML = value;
        document.getElementById(methodsClass).appendChild(newItem);
    }
}

function deleteItem() {
    var restoreItems = document.getElementById(methodsClass).lastChild
    if (restoreItems.parentNode) {
        restoreItems.parentNode.removeChild(restoreItems)
    }
}

function prependItem(form) {
    let value = form.inputText.value;
    if (value) {
        var newItem = document.createElement("li"); // declare new first item
        newItem.innerHTML = form.inputText.value; // init value for new first item

        let allItems = document.getElementById(methodsClass); // get all items from element by id

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
