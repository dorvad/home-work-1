const methodsClass = 'methods' // declare variable with useful value to avoid duplication

function chooseFirstItem() {
    cleanLastChosenClass()
    var firstItem = document.getElementById(methodsClass).firstChild

    if (firstItem) {
        setLastChosenClasses(firstItem)
    } else {
        console.log('There is no any item!')
    }
}

function chooseLastItem() {
    cleanLastChosenClass()
    var lastItem = document.getElementById(methodsClass).lastChild

    if (lastItem) {
        setLastChosenClasses(lastItem)
    } else {
        console.log('There is no any item!')
    }
}

function chooseNextItem() {
    cleanAllChosenClasses()

    let lastChosen = getLastChosenElement();

    cleanLastChosenClass();

    if (lastChosen) {
        let nextElementSibling = lastChosen.nextElementSibling;

        if (nextElementSibling) {
            setLastChosenClasses(nextElementSibling)
        } else {
            chooseFirstItem()
        }
    } else {
        chooseFirstItem()
    }

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

function cleanAllChosenClasses() {
    let allItems = document.getElementById(methodsClass);

    if (allItems) {
        for (var item of allItems.children) {
            item.classList.remove('chosen')
        }
    }
}

function cleanLastChosenClass() {
    let allItems = document.getElementById(methodsClass)

    if (allItems) {
        for (var item of allItems.children) {
            item.classList.remove('last_chosen')
        }
    }
}

function setLastChosenClasses(element) {
    if (element) {
        element.classList.add('chosen')
        element.classList.add('last_chosen')
    } else {
        console.log('Invalid element!')
    }
}

function getLastChosenElement() {

    let elementsByClassName = document.getElementsByClassName('last_chosen');

    var lastElement

    if (elementsByClassName && elementsByClassName.length > 0) {
        lastElement = elementsByClassName[0]
    }
    return lastElement;
}

