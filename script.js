// Pre-loaded grocery data organized by categories with extended fields
const groceryData = {
    'Dals & Lentils': [
        { name: 'Toor Dal', quantity: 1, unit: 'kg', price: 0, notes: '', priority: 'normal', staple: true, checked: false },
        { name: 'Moong Dal', quantity: 1, unit: 'kg', price: 0, notes: '', priority: 'normal', staple: true, checked: false },
        { name: 'Chana Dal', quantity: 1, unit: 'kg', price: 0, notes: '', priority: 'normal', staple: false, checked: false },
        { name: 'Masoor Dal', quantity: 1, unit: 'kg', price: 0, notes: '', priority: 'normal', staple: false, checked: false }
    ],
    'Rice & Grains': [
        { name: 'Basmati Rice', quantity: 5, unit: 'kg', price: 0, notes: '', priority: 'normal', staple: true, checked: false },
        { name: 'Jasmine Rice', quantity: 2, unit: 'kg', price: 0, notes: '', priority: 'normal', staple: false, checked: false },
        { name: 'Brown Rice', quantity: 2, unit: 'kg', price: 0, notes: '', priority: 'normal', staple: false, checked: false }
    ],
    'Spices & Masalas': [
        { name: 'Turmeric Powder', quantity: 1, unit: 'g', price: 0, notes: '', priority: 'normal', staple: true, checked: false },
        { name: 'Chili Powder', quantity: 1, unit: 'g', price: 0, notes: '', priority: 'normal', staple: true, checked: false },
        { name: 'Cumin Seeds', quantity: 1, unit: 'g', price: 0, notes: '', priority: 'normal', staple: true, checked: false },
        { name: 'Coriander Seeds', quantity: 1, unit: 'g', price: 0, notes: '', priority: 'normal', staple: false, checked: false },
        { name: 'Garam Masala', quantity: 1, unit: 'g', price: 0, notes: '', priority: 'normal', staple: true, checked: false },
        { name: 'Fenugreek (Methi)', quantity: 1, unit: 'g', price: 0, notes: '', priority: 'normal', staple: false, checked: false }
    ],
    'Flours & Dry Goods': [
        { name: 'Atta (Wheat Flour)', quantity: 5, unit: 'kg', price: 0, notes: '', priority: 'normal', staple: true, checked: false },
        { name: 'Besan (Gram Flour)', quantity: 1, unit: 'kg', price: 0, notes: '', priority: 'normal', staple: false, checked: false },
        { name: 'Corn Starch', quantity: 1, unit: 'kg', price: 0, notes: '', priority: 'normal', staple: false, checked: false }
    ],
    'Oils & Condiments': [
        { name: 'Mustard Oil', quantity: 1, unit: 'L', price: 0, notes: '', priority: 'normal', staple: true, checked: false },
        { name: 'Coconut Oil', quantity: 1, unit: 'L', price: 0, notes: '', priority: 'normal', staple: false, checked: false },
        { name: 'Ghee', quantity: 1, unit: 'kg', price: 0, notes: '', priority: 'normal', staple: true, checked: false },
        { name: 'Tamarind Paste', quantity: 1, unit: 'g', price: 0, notes: '', priority: 'normal', staple: false, checked: false },
        { name: 'Soy Sauce', quantity: 1, unit: 'ml', price: 0, notes: '', priority: 'normal', staple: false, checked: false }
    ],
    'Dairy': [
        { name: 'Milk', quantity: 7, unit: 'L', price: 0, notes: '', priority: 'normal', staple: true, checked: false },
        { name: 'Yogurt', quantity: 1, unit: 'kg', price: 0, notes: '', priority: 'normal', staple: true, checked: false },
        { name: 'Paneer', quantity: 1, unit: 'kg', price: 0, notes: '', priority: 'normal', staple: false, checked: false },
        { name: 'Butter', quantity: 1, unit: 'kg', price: 0, notes: '', priority: 'normal', staple: false, checked: false }
    ],
    'Fresh Produce': [
        { name: 'Onions', quantity: 3, unit: 'kg', price: 0, notes: '', priority: 'normal', staple: true, checked: false },
        { name: 'Tomatoes', quantity: 3, unit: 'kg', price: 0, notes: '', priority: 'normal', staple: true, checked: false },
        { name: 'Ginger', quantity: 1, unit: 'kg', price: 0, notes: '', priority: 'normal', staple: true, checked: false },
        { name: 'Garlic', quantity: 1, unit: 'kg', price: 0, notes: '', priority: 'normal', staple: true, checked: false },
        { name: 'Green Chili', quantity: 1, unit: 'pcs', price: 0, notes: '', priority: 'normal', staple: false, checked: false },
        { name: 'Coriander', quantity: 1, unit: 'pcs', price: 0, notes: '', priority: 'normal', staple: false, checked: false }
    ],
    'Frozen & Ready-to-Cook': [
        { name: 'Frozen Peas', quantity: 1, unit: 'kg', price: 0, notes: '', priority: 'normal', staple: false, checked: false },
        { name: 'Frozen Vegetables Mix', quantity: 1, unit: 'kg', price: 0, notes: '', priority: 'normal', staple: false, checked: false },
        { name: 'Frozen Naan', quantity: 1, unit: 'pcs', price: 0, notes: '', priority: 'normal', staple: false, checked: false }
    ]
};

// Initialize globals
let groceryList = {};
let shopMode = false;
let currentEditingItem = null;

// DOM Elements
const categoriesContainer = document.getElementById('categoriesContainer');
const categorySelect = document.getElementById('categorySelect');
const customItemName = document.getElementById('customItemName');
const customItemQty = document.getElementById('customItemQty');
const customItemUnit = document.getElementById('customItemUnit');
const addCustomItemBtn = document.getElementById('addCustomItemBtn');
const resetBtn = document.getElementById('resetBtn');
const shopModeBtn = document.getElementById('shopModeBtn');
const printBtn = document.getElementById('printBtn');
const copyBtn = document.getElementById('copyBtn');
const progressFill = document.getElementById('progressFill');
const checkedCountEl = document.getElementById('checkedCount');
const totalCountEl = document.getElementById('totalCount');
const emptyState = document.getElementById('emptyState');
const shopModeStatus = document.getElementById('shopModeStatus');
const itemModal = document.getElementById('itemModal');
const itemForm = document.getElementById('itemForm');
const closeModalBtn = document.querySelector('.close');
const searchInput = document.getElementById('searchInput');
const lastResetTimeEl = document.getElementById('lastResetTime');

// Initialize the app
function init() {
    loadGroceryList();
    populateCategorySelect();
    renderGroceryList();
    setupEventListeners();
    updateProgress();
    displayLastResetTime();
}

// Load grocery list from localStorage or use default data
function loadGroceryList() {
    const savedData = localStorage.getItem('groceryList');
    if (savedData) {
        groceryList = JSON.parse(savedData);
    } else {
        groceryList = structuredClone(groceryData);
        saveGroceryList();
    }
}

// Save grocery list to localStorage
function saveGroceryList() {
    localStorage.setItem('groceryList', JSON.stringify(groceryList));
    localStorage.setItem('lastReset', new Date().toISOString());
}

// Display last reset time
function displayLastResetTime() {
    const lastReset = localStorage.getItem('lastReset');
    if (lastReset) {
        const date = new Date(lastReset);
        const today = new Date();
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);
        
        if (date.toDateString() === today.toDateString()) {
            lastResetTimeEl.textContent = 'Today at ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        } else if (date.toDateString() === yesterday.toDateString()) {
            lastResetTimeEl.textContent = 'Yesterday at ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        } else {
            lastResetTimeEl.textContent = date.toLocaleDateString();
        }
    } else {
        lastResetTimeEl.textContent = 'Never reset';
    }
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

// Render the entire grocery list with search and shop mode filtering
function renderGroceryList() {
    categoriesContainer.innerHTML = '';
    let hasItems = false;
    let searchTerm = searchInput.value.toLowerCase();

    Object.keys(groceryList).forEach(category => {
        let items = groceryList[category];
        
        // Filter items based on search
        let filteredItems = items.filter(item => 
            item.name.toLowerCase().includes(searchTerm)
        );

        // Filter based on shop mode
        if (shopMode) {
            filteredItems = filteredItems.filter(item => !item.checked);
        }
        
        if (filteredItems.length > 0) {
            hasItems = true;
            const categoryEl = createCategoryElement(category, filteredItems, items.length);
            categoriesContainer.appendChild(categoryEl);
        }
    });

    emptyState.style.display = hasItems ? 'none' : 'block';
}

// Create a category element
function createCategoryElement(category, filteredItems, totalInCategory) {
    const categoryDiv = document.createElement('div');
    categoryDiv.className = 'category';

    const checkedItems = filteredItems.filter(item => item.checked).length;

    const headerDiv = document.createElement('div');
    headerDiv.className = 'category-header';
    
    const categorySpan = document.createElement('span');
    categorySpan.textContent = category;
    
    const countSpan = document.createElement('span');
    countSpan.className = 'category-count';
    countSpan.textContent = `${checkedItems}/${filteredItems.length}`;
    
    headerDiv.appendChild(categorySpan);
    headerDiv.appendChild(countSpan);

    const itemsListDiv = document.createElement('div');
    itemsListDiv.className = 'items-list';
    itemsListDiv.dataset.category = category;

    filteredItems.forEach((item) => {
        // Find the actual index in the full list
        const actualIndex = groceryList[category].indexOf(item);
        const itemEl = createItemElement(category, actualIndex, item);
        itemsListDiv.appendChild(itemEl);
    });

    categoryDiv.appendChild(headerDiv);
    categoryDiv.appendChild(itemsListDiv);

    return categoryDiv;
}

// Create an item element with all new fields
function createItemElement(category, actualIndex, item) {
    const itemDiv = document.createElement('div');
    itemDiv.className = `item ${item.checked ? 'checked' : ''}`;
    itemDiv.dataset.category = category;
    itemDiv.dataset.index = actualIndex;
    itemDiv.draggable = true;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'item-checkbox';
    checkbox.checked = item.checked;
    checkbox.addEventListener('change', () => {
        toggleItemChecked(category, actualIndex);
    });

    const detailsDiv = document.createElement('div');
    detailsDiv.className = 'item-details';
    
    const mainInfoDiv = document.createElement('div');
    mainInfoDiv.className = 'item-main-info';

    // Add staple star if marked
    if (item.staple) {
        const stapleSpan = document.createElement('span');
        stapleSpan.className = 'staple-star';
        stapleSpan.textContent = '⭐';
        stapleSpan.title = 'Staple item (commonly forgotten)';
        stapleSpan.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleStaple(category, actualIndex);
        });
        mainInfoDiv.appendChild(stapleSpan);
    }

    const nameSpan = document.createElement('span');
    nameSpan.className = 'item-name';
    nameSpan.textContent = item.name;
    mainInfoDiv.appendChild(nameSpan);

    detailsDiv.appendChild(mainInfoDiv);

    // Add quantity input field (editable)
    const qtyInput = document.createElement('input');
    qtyInput.type = 'number';
    qtyInput.className = 'item-qty';
    qtyInput.value = item.quantity;
    qtyInput.min = '1';
    qtyInput.addEventListener('change', () => {
        updateItemQuantity(category, actualIndex, qtyInput.value);
    });
    detailsDiv.appendChild(qtyInput);

    // Add unit display
    const unitSpan = document.createElement('span');
    unitSpan.className = 'item-unit';
    unitSpan.textContent = item.unit;
    detailsDiv.appendChild(unitSpan);

    // Add priority badge
    if (item.priority && item.priority !== 'normal') {
        const priorityDiv = document.createElement('div');
        priorityDiv.className = `item-priority ${item.priority}`;
        priorityDiv.textContent = item.priority === 'urgent' ? '🔴 Urgent' : '🔵 Can Wait';
        detailsDiv.appendChild(priorityDiv);
    }

    // Add notes if exist
    if (item.notes) {
        const notesDiv = document.createElement('div');
        notesDiv.className = 'item-notes';
        notesDiv.textContent = '📝 ' + item.notes;
        detailsDiv.appendChild(notesDiv);
    }

    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'item-actions';

    const editBtn = document.createElement('button');
    editBtn.className = 'btn btn-edit';
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', () => {
        openEditModal(category, actualIndex);
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-delete';
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
        deleteItem(category, actualIndex);
    });

    actionsDiv.appendChild(editBtn);
    actionsDiv.appendChild(deleteBtn);

    itemDiv.appendChild(checkbox);
    itemDiv.appendChild(detailsDiv);
    itemDiv.appendChild(actionsDiv);

    // Add drag event listeners
    itemDiv.addEventListener('dragstart', handleDragStart);
    itemDiv.addEventListener('dragend', handleDragEnd);
    itemDiv.addEventListener('dragover', handleDragOver);
    itemDiv.addEventListener('drop', handleDrop);

    return itemDiv;
}

// Drag and drop handlers
let draggedElement = null;

function handleDragStart(e) {
    draggedElement = e.currentTarget;
    e.currentTarget.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
}

function handleDragEnd(e) {
    e.currentTarget.classList.remove('dragging');
}

function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    if (this !== draggedElement && this.classList.contains('item')) {
        this.parentNode.insertBefore(draggedElement, this);
    }
}

function handleDrop(e) {
    e.preventDefault();
    e.stopPropagation();
}

// Toggle item checked status
function toggleItemChecked(category, index) {
    groceryList[category][index].checked = !groceryList[category][index].checked;
    saveGroceryList();
    renderGroceryList();
    updateProgress();
}

// Toggle staple status
function toggleStaple(category, index) {
    groceryList[category][index].staple = !groceryList[category][index].staple;
    saveGroceryList();
    renderGroceryList();
}

// Update item quantity
function updateItemQuantity(category, index, quantity) {
    const qty = Number.parseInt(quantity, 10);
    // Validate quantity is in safe range
    if (qty > 0 && qty <= 999) {
        groceryList[category][index].quantity = qty;
        saveGroceryList();
        updateProgress();
    } else {
        alert('Quantity must be between 1 and 999');
        renderGroceryList();
    }
}

// Delete an item
function deleteItem(category, index) {
    if (confirm('Delete this item?')) {
        groceryList[category].splice(index, 1);
        saveGroceryList();
        renderGroceryList();
        updateProgress();
    }
}

// Open edit modal
function openEditModal(category, index) {
    currentEditingItem = { category, index };
    const item = groceryList[category][index];

    document.getElementById('modalItemName').value = item.name;
    document.getElementById('modalItemQty').value = item.quantity;
    document.getElementById('modalItemUnit').value = item.unit;
    document.getElementById('modalItemNotes').value = item.notes;
    document.getElementById('modalItemPriority').value = item.priority;
    document.getElementById('modalItemStaple').checked = item.staple;

    itemModal.style.display = 'flex';
}

// Close modal
function closeModal() {
    itemModal.style.display = 'none';
    currentEditingItem = null;
}

// Save item changes from modal
function saveItemChanges(e) {
    e.preventDefault();
    if (!currentEditingItem) return;

    const { category, index } = currentEditingItem;
    const item = groceryList[category][index];

    const newName = document.getElementById('modalItemName').value.trim();
    const newQty = Number.parseInt(document.getElementById('modalItemQty').value, 10) || 1;
    const newUnit = document.getElementById('modalItemUnit').value;
    const newNotes = document.getElementById('modalItemNotes').value.trim();
    const newPriority = document.getElementById('modalItemPriority').value;

    // Validate inputs
    if (!newName || newName.length === 0) {
        alert('Item name cannot be empty');
        return;
    }
    
    if (newName.length > 100) {
        alert('Item name is too long (max 100 characters)');
        return;
    }
    
    if (newQty < 1 || newQty > 999) {
        alert('Quantity must be between 1 and 999');
        return;
    }
    
    if (newNotes.length > 200) {
        alert('Notes are too long (max 200 characters)');
        return;
    }

    item.name = newName;
    item.quantity = newQty;
    item.unit = newUnit;
    item.notes = newNotes;
    item.priority = newPriority;
    item.staple = document.getElementById('modalItemStaple').checked;

    saveGroceryList();
    renderGroceryList();
    updateProgress();
    closeModal();
}

// Add custom item
function addCustomItem() {
    const itemName = customItemName.value.trim();
    const category = categorySelect.value;
    const quantity = Number.parseInt(customItemQty.value, 10) || 1;
    const unit = customItemUnit.value;

    // Validate inputs
    if (!itemName || itemName.length === 0) {
        alert('Please enter an item name');
        return;
    }
    
    if (itemName.length > 100) {
        alert('Item name is too long (max 100 characters)');
        return;
    }

    if (!category) {
        alert('Please select a category');
        return;
    }
    
    if (quantity < 1 || quantity > 999) {
        alert('Quantity must be between 1 and 999');
        return;
    }

    if (!groceryList[category]) {
        groceryList[category] = [];
    }

    groceryList[category].push({
        name: itemName,
        quantity: quantity,
        unit: unit,
        price: 0,
        notes: '',
        priority: 'normal',
        staple: false,
        checked: false
    });

    saveGroceryList();
    renderGroceryList();
    updateProgress();

    // Clear inputs
    customItemName.value = '';
    customItemQty.value = '1';
    customItemUnit.value = 'pcs';
    categorySelect.value = '';
}

// Toggle shop mode
function toggleShopMode() {
    shopMode = !shopMode;
    shopModeBtn.classList.toggle('active', shopMode);
    shopModeStatus.style.display = shopMode ? 'block' : 'none';
    renderGroceryList();
}

// Reset the checklist
function resetChecklist() {
    Object.keys(groceryList).forEach(category => {
        groceryList[category].forEach(item => {
            item.checked = false;
        });
    });
    saveGroceryList();
    renderGroceryList();
    updateProgress();
    displayLastResetTime();
    shopMode = false;
    shopModeBtn.classList.remove('active');
    shopModeStatus.style.display = 'none';
}

// Print functionality
function printList() {
    globalThis.print();
}

// Copy unchecked items to clipboard
function copyListToClipboard() {
    let text = 'Weekly Indian Grocery Checklist\n\n';
    
    Object.keys(groceryList).forEach(category => {
        text += `${category}\n`;
        groceryList[category].forEach(item => {
            if (!item.checked) {
                text += `  ☐ ${item.name} (${item.quantity}${item.unit})`;
                if (item.notes) text += ` - ${item.notes}`;
                text += '\n';
            }
        });
        text += '\n';
    });

    navigator.clipboard.writeText(text).then(() => {
        alert('Unchecked items copied to clipboard!');
    });
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

// Handle search input
function handleSearch(e) {
    renderGroceryList();
}

// Setup event listeners
function setupEventListeners() {
    addCustomItemBtn.addEventListener('click', addCustomItem);
    resetBtn.addEventListener('click', resetChecklist);
    shopModeBtn.addEventListener('click', toggleShopMode);
    printBtn.addEventListener('click', printList);
    copyBtn.addEventListener('click', copyListToClipboard);
    searchInput.addEventListener('input', handleSearch);
    
    customItemName.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addCustomItem();
        }
    });

    itemForm.addEventListener('submit', saveItemChanges);
    closeModalBtn.addEventListener('click', closeModal);
    
    globalThis.addEventListener('click', (e) => {
        if (e.target === itemModal) {
            closeModal();
        }
    });
}

// Start the app
init();
