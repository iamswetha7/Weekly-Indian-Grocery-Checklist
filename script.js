// Pre-loaded grocery data organized by categories
const groceryData = {
    'Dals & Lentils': [
        { name: 'Toor Dal', quantity: 1, checked: false },
        { name: 'Moong Dal', quantity: 1, checked: false },
        { name: 'Chana Dal', quantity: 1, checked: false },
        { name: 'Masoor Dal', quantity: 1, checked: false }
    ],
    'Rice & Grains': [
        { name: 'Basmati Rice', quantity: 5, checked: false },
        { name: 'Jasmine Rice', quantity: 2, checked: false },
        { name: 'Brown Rice', quantity: 2, checked: false }
    ],
    'Spices & Masalas': [
        { name: 'Turmeric Powder', quantity: 1, checked: false },
        { name: 'Chili Powder', quantity: 1, checked: false },
        { name: 'Cumin Seeds', quantity: 1, checked: false },
        { name: 'Coriander Seeds', quantity: 1, checked: false },
        { name: 'Garam Masala', quantity: 1, checked: false },
        { name: 'Fenugreek (Methi)', quantity: 1, checked: false }
    ],
    'Flours & Dry Goods': [
        { name: 'Atta (Wheat Flour)', quantity: 5, checked: false },
        { name: 'Besan (Gram Flour)', quantity: 1, checked: false },
        { name: 'Corn Starch', quantity: 1, checked: false }
    ],
    'Oils & Condiments': [
        { name: 'Mustard Oil', quantity: 1, checked: false },
        { name: 'Coconut Oil', quantity: 1, checked: false },
        { name: 'Ghee', quantity: 1, checked: false },
        { name: 'Tamarind Paste', quantity: 1, checked: false },
        { name: 'Soy Sauce', quantity: 1, checked: false }
    ],
    'Dairy': [
        { name: 'Milk', quantity: 7, checked: false },
        { name: 'Yogurt', quantity: 1, checked: false },
        { name: 'Paneer', quantity: 1, checked: false },
        { name: 'Butter', quantity: 1, checked: false }
    ],
    'Fresh Produce': [
        { name: 'Onions', quantity: 3, checked: false },
        { name: 'Tomatoes', quantity: 3, checked: false },
        { name: 'Ginger', quantity: 1, checked: false },
        { name: 'Garlic', quantity: 1, checked: false },
        { name: 'Green Chili', quantity: 1, checked: false },
        { name: 'Coriander', quantity: 1, checked: false }
    ],
    'Frozen & Ready-to-Cook': [
        { name: 'Frozen Peas', quantity: 1, checked: false },
        { name: 'Frozen Vegetables Mix', quantity: 1, checked: false },
        { name: 'Frozen Naan', quantity: 1, checked: false }
    ]
};

// Initialize the app
let groceryList = {};

// DOM Elements
const categoriesContainer = document.getElementById('categoriesContainer');
const categorySelect = document.getElementById('categorySelect');
const customItemName = document.getElementById('customItemName');
const customItemQty = document.getElementById('customItemQty');
const addCustomItemBtn = document.getElementById('addCustomItemBtn');
const resetBtn = document.getElementById('resetBtn');
const progressFill = document.getElementById('progressFill');
const checkedCountEl = document.getElementById('checkedCount');
const totalCountEl = document.getElementById('totalCount');
const emptyState = document.getElementById('emptyState');

// Initialize the app
function init() {
    loadGroceryList();
    populateCategorySelect();
    renderGroceryList();
    setupEventListeners();
    updateProgress();
}

// Load grocery list from localStorage or use default data
function loadGroceryList() {
    const savedData = localStorage.getItem('groceryList');
    if (savedData) {
        groceryList = JSON.parse(savedData);
    } else {
        groceryList = JSON.parse(JSON.stringify(groceryData));
        saveGroceryList();
    }
}

// Save grocery list to localStorage
function saveGroceryList() {
    localStorage.setItem('groceryList', JSON.stringify(groceryList));
}

// Populate category select dropdown
function populateCategorySelect() {
    const categories = Object.keys(groceryList);
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categorySelect.appendChild(option);
    });
}

// Render the entire grocery list
function renderGroceryList() {
    categoriesContainer.innerHTML = '';
    let hasItems = false;

    Object.keys(groceryList).forEach(category => {
        const items = groceryList[category];
        
        if (items.length > 0) {
            hasItems = true;
            const categoryEl = createCategoryElement(category, items);
            categoriesContainer.appendChild(categoryEl);
        }
    });

    emptyState.style.display = hasItems ? 'none' : 'block';
}

// Create a category element
function createCategoryElement(category, items) {
    const categoryDiv = document.createElement('div');
    categoryDiv.className = 'category';

    const checkedItems = items.filter(item => item.checked).length;

    const headerDiv = document.createElement('div');
    headerDiv.className = 'category-header';
    headerDiv.innerHTML = `
        <span>${category}</span>
        <span class="category-count">${checkedItems}/${items.length}</span>
    `;

    const itemsListDiv = document.createElement('div');
    itemsListDiv.className = 'items-list';

    items.forEach((item, index) => {
        const itemEl = createItemElement(category, index, item);
        itemsListDiv.appendChild(itemEl);
    });

    categoryDiv.appendChild(headerDiv);
    categoryDiv.appendChild(itemsListDiv);

    return categoryDiv;
}

// Create an item element
function createItemElement(category, index, item) {
    const itemDiv = document.createElement('div');
    itemDiv.className = `item ${item.checked ? 'checked' : ''}`;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'item-checkbox';
    checkbox.checked = item.checked;
    checkbox.addEventListener('change', () => {
        toggleItemChecked(category, index);
    });

    const detailsDiv = document.createElement('div');
    detailsDiv.className = 'item-details';

    const nameSpan = document.createElement('span');
    nameSpan.className = 'item-name';
    nameSpan.textContent = item.name;

    const qtyInput = document.createElement('input');
    qtyInput.type = 'number';
    qtyInput.className = 'item-qty';
    qtyInput.value = item.quantity;
    qtyInput.min = '1';
    qtyInput.addEventListener('change', () => {
        updateItemQuantity(category, index, qtyInput.value);
    });

    detailsDiv.appendChild(nameSpan);
    detailsDiv.appendChild(qtyInput);

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-delete';
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
        deleteItem(category, index);
    });

    itemDiv.appendChild(checkbox);
    itemDiv.appendChild(detailsDiv);
    itemDiv.appendChild(deleteBtn);

    return itemDiv;
}

// Toggle item checked status
function toggleItemChecked(category, index) {
    groceryList[category][index].checked = !groceryList[category][index].checked;
    saveGroceryList();
    renderGroceryList();
    updateProgress();
}

// Update item quantity
function updateItemQuantity(category, index, quantity) {
    const qty = parseInt(quantity);
    if (qty > 0) {
        groceryList[category][index].quantity = qty;
        saveGroceryList();
    }
}

// Delete an item
function deleteItem(category, index) {
    groceryList[category].splice(index, 1);
    saveGroceryList();
    renderGroceryList();
    updateProgress();
}

// Add custom item
function addCustomItem() {
    const itemName = customItemName.value.trim();
    const category = categorySelect.value;
    const quantity = parseInt(customItemQty.value) || 1;

    if (!itemName) {
        alert('Please enter an item name');
        return;
    }

    if (!category) {
        alert('Please select a category');
        return;
    }

    if (!groceryList[category]) {
        groceryList[category] = [];
    }

    groceryList[category].push({
        name: itemName,
        quantity: quantity,
        checked: false
    });

    saveGroceryList();
    renderGroceryList();
    updateProgress();

    // Clear inputs
    customItemName.value = '';
    customItemQty.value = '1';
    categorySelect.value = '';
}

// Reset the checklist
function resetChecklist() {
    if (confirm('Are you sure you want to reset the checklist? All checked items will be unchecked.')) {
        Object.keys(groceryList).forEach(category => {
            groceryList[category].forEach(item => {
                item.checked = false;
            });
        });
        saveGroceryList();
        renderGroceryList();
        updateProgress();
    }
}

// Update progress bar and counter
function updateProgress() {
    let totalItems = 0;
    let checkedItems = 0;

    Object.keys(groceryList).forEach(category => {
        groceryList[category].forEach(item => {
            totalItems++;
            if (item.checked) {
                checkedItems++;
            }
        });
    });

    const percentage = totalItems === 0 ? 0 : (checkedItems / totalItems) * 100;
    progressFill.style.width = percentage + '%';
    checkedCountEl.textContent = checkedItems;
    totalCountEl.textContent = totalItems;
}

// Setup event listeners
function setupEventListeners() {
    addCustomItemBtn.addEventListener('click', addCustomItem);
    resetBtn.addEventListener('click', resetChecklist);
    customItemName.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addCustomItem();
        }
    });
}

// Start the app
init();
