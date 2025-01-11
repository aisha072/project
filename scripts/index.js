// const searchInput = document.getElementById('search-container');
// const searchOptions = document.getElementById('search-options');

// // Example data for the dropdown
// const options = [
//     "Electronics",
//     "Clothing",
//     "Shoes",
//     "Watches",
//     "Books",
//     "Toys",
//     "Home Decor",
//     "Furniture",
//     "Groceries"
// ];

// // Populate the search options
// options.forEach(option => {
//     const div = document.createElement('div');
//     div.textContent = option;
//     div.addEventListener('click', () => {
//         searchInput.value = option;
//         searchOptions.style.display = 'none'; // Hide options after selection
//     });
//     searchOptions.appendChild(div);
// });

// // Show/hide search options on input focus
// searchInput.addEventListener('focus', () => {
//     searchOptions.style.display = 'block';
// });

// searchInput.addEventListener('blur', () => {
//     setTimeout(() => searchOptions.style.display = 'none', 200);
// });

// // Filter options as the user types
// searchInput.addEventListener('input', (e) => {
//     const query = e.target.value.toLowerCase();
//     const filteredOptions = options.filter(option =>
//         option.toLowerCase().includes(query)
//     );

//     // Update the options display
//     searchOptions.innerHTML = '';
//     filteredOptions.forEach(option => {
//         const div = document.createElement('div');
//         div.textContent = option;
//         div.addEventListener('click', () => {
//             searchInput.value = option;
//             searchOptions.style.display = 'none';
//         });
//         searchOptions.appendChild(div);
//     });

//     searchOptions.style.display = filteredOptions.length ? 'block' : 'none';
// });
// const searchInput = document.getElementById('search-container');
// const searchOptions = document.getElementById('search-options');
// const searchIcon = document.getElementById('search-icon');
// const clearButton = document.getElementById('clear-button');

// // Example data for the dropdown
// const options = [
//     "Electronics",
//     "Clothing",
//     "Shoes",
//     "Watches",
//     "Books",
//     "Toys",
//     "Home Decor",
//     "Furniture",
//     "Groceries"
// ];

// // Populate the search options
// const populateOptions = (filteredOptions) => {
//     searchOptions.innerHTML = '';
//     filteredOptions.forEach(option => {
//         const div = document.createElement('div');
//         div.textContent = option;
//         div.addEventListener('click', () => {
//             searchInput.value = option;
//             searchOptions.style.display = 'none';
//         });
//         searchOptions.appendChild(div);
//     });
// };

// // Initial population of all options
// populateOptions(options);

// // Show/hide search options on input focus
// searchInput.addEventListener('focus', () => {
//     searchOptions.style.display = 'block';
// });

// searchInput.addEventListener('blur', () => {
//     setTimeout(() => searchOptions.style.display = 'none', 200); // Delay for option selection
// });

// // Filter options as the user types
// searchInput.addEventListener('input', (e) => {
//     const query = e.target.value.toLowerCase();
//     const filteredOptions = options.filter(option =>
//         option.toLowerCase().includes(query)
//     );

//     // Update the dropdown display
//     populateOptions(filteredOptions);
//     searchOptions.style.display = filteredOptions.length ? 'block' : 'none';
// });

// // Search functionality when clicking the search icon
// searchIcon.addEventListener('click', () => {
//     const searchQuery = searchInput.value.trim();
//     if (searchQuery) {
//         alert(`Searching for: ${searchQuery}`);
//     } else {
//         alert('Please enter a search term.');
//     }
// });

// // Clear the input and dropdown when clicking the clear button
// clearButton.addEventListener('click', () => {
//     searchInput.value = '';
//     searchOptions.style.display = 'none';
// });
const searchInput = document.getElementById('search-container');
const searchOptions = document.getElementById('search-options');
const searchIcon = document.getElementById('search-icon');
const clearButton = document.getElementById('clear-button');

// Example data for the dropdown
const options = [
    "Electronics",
    "Clothing",
    "Shoes",
    "Watches",
    "Books",
    "Toys",
    "Home Decor",
    "Furniture",
    "Groceries"
];

// Populate dropdown options
const populateOptions = (filteredOptions) => {
    searchOptions.innerHTML = ''; // Clear existing options
    if (filteredOptions.length === 0) {
        searchOptions.style.display = 'none'; // Hide dropdown if no options
        return;
    }

    filteredOptions.forEach(option => {
        const optionDiv = document.createElement('div');
        optionDiv.textContent = option;
        optionDiv.addEventListener('click', () => {
            searchInput.value = option; // Set input value
            searchOptions.style.display = 'none'; // Hide options
        });
        searchOptions.appendChild(optionDiv);
    });
    searchOptions.style.display = filteredOptions.length ? 'block' : 'none'; // Show if options exist
};

// Show dropdown and filter options when typing
searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const filteredOptions = options.filter(option =>
        option.toLowerCase().includes(query)
    );
    populateOptions(filteredOptions);
});

// Show all options when input is focused
searchInput.addEventListener('focus', () => {
    populateOptions(options);
});

// Hide dropdown when input loses focus (with a short delay)
searchInput.addEventListener('blur', () => {
    setTimeout(() => {
        searchOptions.style.display = 'none';
    }, 200); // Delay for clicks to register
});

// Handle search action
searchIcon.addEventListener('click', () => {
    const searchQuery = searchInput.value.trim();
    if (searchQuery) {
        alert(`Searching for: ${searchQuery}`);
    } else {
        alert('Please enter a search term.');
    }
});

// Clear input and hide dropdown
clearButton.addEventListener('click', () => {
    searchInput.value = ''; // Clear input
    searchOptions.style.display = 'none'; // Hide dropdown
});