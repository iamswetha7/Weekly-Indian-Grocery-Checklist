# 🛒 Weekly Indian Grocery Checklist

A simple, clean, and efficient web application for organizing your weekly Indian grocery shopping. Built with vanilla HTML, CSS, and JavaScript - no external dependencies required.

## Features

### Core Functionality

- **Pre-loaded Items**: 31 carefully selected Indian grocery items across 8 categories
- **Checkbox System**: Click to mark items as purchased
- **Inline Quantity Editing**: Adjust quantities directly from the list
- **Search & Filter**: Quickly find items by name
- **Custom Items**: Add your own items to any category

### Shopping Experience

- **Shop Mode**: Toggle to show only items you still need to buy (hides checked items)
- **Print Support**: Generate a clean, printable shopping list
- **Copy to Clipboard**: Export unchecked items as text for easy sharing

### Organization & Tracking

- **8 Categories**:
  - Dals & Lentils
  - Rice & Grains
  - Spices & Masalas
  - Flours & Dry Goods
  - Oils & Condiments
  - Dairy
  - Fresh Produce
  - Frozen & Ready-to-Cook

- **Priority Flags**: Mark items as 🔴 Urgent or 🔵 Can Wait
- **Staple Stars**: ⭐ Mark commonly forgotten essentials
- **Progress Tracking**: Visual progress bar and counter showing collected items
- **Item Details**: Edit notes, unit quantities, and priority for each item
- **Drag & Drop**: Reorder items within categories

### Data Persistence

- **LocalStorage**: All changes automatically save to browser storage
- **Weekly Reset**: Track when you last reset your checklist with timestamp display
- **Resume Shopping**: Your list persists across browser sessions

## Getting Started

### Installation

Simply download or clone the repository and open `index.html` in your web browser:

```bash
git clone <repository-url>
cd grocery-checklist
# Open index.html in your browser
```

### Usage

1. **Browse Items**: View pre-loaded items organized by category
2. **Check Items**: Click the checkbox when you've purchased an item
3. **Update Quantities**: Click on quantity numbers to change amounts
4. **Add Custom Items**:
   - Enter item name
   - Select category
   - Set quantity and unit
   - Click "Add Item"
5. **Search**: Use the search bar to find specific items
6. **Shop Mode**: Toggle to see only items you still need
7. **Print**: Click "Print" for a clean shopping list
8. **Copy**: Click "Copy List" to copy unchecked items to clipboard
9. **Reset**: Click "Reset Weekly" to uncheck all items and start fresh

## File Structure

```
grocery-checklist/
├── index.html      # Main HTML structure
├── style.css       # Styling and responsive design
├── script.js       # App logic and functionality
└── README.md       # This file
```

## Technologies Used

- **HTML5**: Semantic markup with modular structure
- **CSS3**: Responsive grid layout, flexbox, and media queries
- **JavaScript (Vanilla)**: No frameworks, pure ES6+ JavaScript
- **LocalStorage API**: Browser-based data persistence

## Design Philosophy

- **Clean & Minimal**: Clutter-free interface with muted, warm color palette
- **Accessible**: Responsive design works on mobile, tablet, and desktop
- **Fast**: No external dependencies means instant loading
- **Intuitive**: Familiar UI patterns for easy navigation

## Color Scheme

- **Primary Background**: #f8f6f3 (warm light neutral)
- **Progress Bar**: Muted brown gradient (#b39d91 to #8b7f78)
- **Accent Colors**: Warm browns (#9e8a7e, #a89482)
- **Text**: #5a5450 (dark warm neutral)

## Responsive Breakpoints

- **Desktop**: Full layout with side-by-side elements
- **Tablet** (768px and below): Optimized grid layout
- **Mobile** (480px and below): Single column, touch-friendly buttons

## Features at a Glance

| Feature          | Details                                                  |
| ---------------- | -------------------------------------------------------- |
| Pre-loaded Items | 31 items across 8 categories                             |
| Categories       | Dals, Rice, Spices, Flours, Oils, Dairy, Produce, Frozen |
| Units Supported  | pcs, kg, g, L, ml                                        |
| Total Items      | Dynamic - grows as you add custom items                  |
| Search           | Real-time filtering by item name                         |
| Progress         | Visual bar + counter showing completion status           |
| Export           | Print-friendly format, copy to clipboard                 |
| Data Save        | Automatic LocalStorage persistence                       |
| Reset Track      | Timestamps show when you last reset                      |

## Browser Support

Works on all modern browsers that support:

- LocalStorage API
- ES6 JavaScript
- CSS Grid & Flexbox

Tested on:

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## Tips for Best Use

1. **Use Staple Stars** (⭐): Mark items you always forget to buy (like cilantro!)
2. **Set Priorities**: Mark urgent items to buy first
3. **Add Notes**: Click Edit to add notes like "buy from Apna Bazar"
4. **Adjust Quantities**: Customize quantities based on your family size
5. **Print Before Shopping**: Get a hardcopy of your list

## Data Structure

Each item contains:

```javascript
{
  name: "Item Name",
  quantity: 1,
  unit: "kg",
  notes: "Optional notes",
  priority: "normal", // "normal", "urgent", or "wait"
  staple: false,      // marked with ⭐
  checked: false      // purchased status
}
```

## Future Enhancement Ideas

- Weekly purchase history
- Category rearrangement
- Seasonal item templates
- Shared lists (export/import)
- Budget tracking integration
- Mobile app version

## License

Free to use and modify for personal or commercial purposes.

## Contributing

Feel free to fork, modify, and improve this app for your needs!

---

**Happy Shopping! 🛒**
