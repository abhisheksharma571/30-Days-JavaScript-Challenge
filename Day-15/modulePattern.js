//Task - 06: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.

const itemManager = (function(){
    let items = [];
    function addItem(item){
        items.push(item)
        console.log(`Added: ${item}`);
    }

    function removeItem(item){
        const index = items.indexOf(item)
        if(index !== -1){
            items.splice(index, 1)
            console.log(`Removed: ${item}`);
        } else {
            console.log(`Item not found: ${item}`);
        }
    }

    function listItems(){
        if(items.length === 0){
            console.log(`No items found`);
        } else {
            console.log('Items: ', items.join(', '));
        }
    }

    return {
        add: addItem,
        remove: removeItem,
        list: listItems
    }
})()


itemManager.add('apple');
itemManager.add('banana');
itemManager.list();
itemManager.remove('apple');
itemManager.list();
itemManager.remove('grape');
