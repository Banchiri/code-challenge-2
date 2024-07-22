document.addEventListener('DOMContentLoaded', () => {
    const itemInput = document.getElementById('item-input');
    const addButton = document.getElementById('add-button');
    const shoppingList = document.getElementById('shopping-list');
    const clearButton = document.getElementById('clear-button');

    const shoppingItems = [];

    function renderList() {
        shoppingList.innerHTML = '';
        shoppingItems.forEach((item, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = item.name;
            listItem.className = item.purchased ? 'purchased' : '';
            listItem.addEventListener('click', () => togglePurchased(index));
            shoppingList.append(listItem);
        });
    }

    function addItem() {
        const itemName = itemInput.value.trim();
        if (itemName) {
            shoppingItems.push({ name: itemName, purchased: false });
            itemInput.value = '';
            renderList();
        }
    }

    function togglePurchased(index) {
        shoppingItems[index].purchased = !shoppingItems[index].purchased;
        renderList();
    }

    function clearList() {
        shoppingItems.length = 0;
        renderList();
    }

    addButton.addEventListener('click', addItem);
    clearButton.addEventListener('click', clearList);
});