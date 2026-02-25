const vegetables = [
    // Summer Vegetables (May - September)
    { name: "Tomato", farmer: "Rajesh Kumar", location: "Nashik, Maharashtra", season: "Summer", details: "Juicy red tomatoes rich in lycopene and antioxidants. Essential for salads and curries." },
    { name: "Cucumber", farmer: "Priya Sharma", location: "Panchgani, Maharashtra", season: "Summer", details: "Hydrating cucumber with cooling properties. Perfect for summer salads and drinks." },
    { name: "Okra", farmer: "Vikram Singh", location: "Lonavala, Maharashtra", season: "Summer", details: "Nutritious okra rich in vitamins and minerals. Great for stir-fries and curries." },
    { name: "Bottle Gourd", farmer: "Deepak Verma", location: "Sangli, Maharashtra", season: "Summer", details: "Light and nutritious bottle gourd perfect for summer dishes. Low in calories." },
    { name: "Bitter Gourd", farmer: "Meera Desai", location: "Belgaum, Karnataka", season: "Summer", details: "Bitter gourd known for its medicinal properties and diabetes management benefits." },
    { name: "Pumpkin", farmer: "Arun Patel", location: "Shirdi, Maharashtra", season: "Summer", details: "Sweet pumpkin rich in beta-carotene. Great for soups and curries." },
    { name: "Corn", farmer: "Suresh Nair", location: "Coimbatore, Tamil Nadu", season: "Summer", details: "Sweet corn kernels packed with energy and fiber. Perfect for roasting and salads." },
    { name: "Bell Pepper", farmer: "Anjali Gupta", location: "Kumbale, Karnataka", season: "Summer", details: "Colorful bell peppers high in vitamin C. Adds flavor and nutrition to any dish." },
    { name: "Brinjal", farmer: "Mahesh Rao", location: "Belgaum, Karnataka", season: "Summer", details: "Purple brinjal rich in antioxidants and dietary fiber. Essential for Indian cuisine." },
    { name: "Green Beans", farmer: "Sunita Patel", location: "Indore, Madhya Pradesh", season: "Summer", details: "Fresh green beans loaded with protein and vitamins. Great for stir-fries." },
    { name: "Ridge Gourd", farmer: "Ramesh Kulkarni", location: "Mahabaleshwar, Maharashtra", season: "Summer", details: "Ridged gourd nutritious and low in calories. Perfect for Indian curries." },
    { name: "Zucchini", farmer: "Neha Sharma", location: "Pune, Maharashtra", season: "Summer", details: "Green zucchini versatile and healthy. Great for salads and grilled dishes." },
    { name: "Green Chili", farmer: "Harish Pandey", location: "Nashik, Maharashtra", season: "Summer", details: "Spicy green chili adding heat and flavor. Rich in vitamin C." },
    { name: "Long Gourd", farmer: "Kavya Nambiar", location: "Kottayam, Kerala", season: "Summer", details: "Long cylindrical gourd perfect for curries. Light and nutritious." },
    { name: "Snake Gourd", farmer: "Ravi Krishnan", location: "Thirupathi, Andhra Pradesh", season: "Summer", details: "Curly green snake gourd excellent for digestion. Mild and tender." },

    // Winter Vegetables (October - February)
    { name: "Spinach", farmer: "Asha Singh", location: "Bhilwara, Rajasthan", season: "Winter", details: "Iron-rich spinach perfect for winter health. Essential for blood building." },
    { name: "Cabbage", farmer: "Mohan Lal", location: "Jaipur, Rajasthan", season: "Winter", details: "Crunchy cabbage full of nutrients and fiber. Great for coleslaw." },
    { name: "Cauliflower", farmer: "Lakshmi Devi", location: "Udaipur, Rajasthan", season: "Winter", details: "White cauliflower nutritious and versatile. Perfect for gravies and curries." },
    { name: "Broccoli", farmer: "Yogesh Kumar", location: "Shimla, Himachal Pradesh", season: "Winter", details: "Green broccoli packed with vitamin C. Excellent for immunity." },
    { name: "Carrot", farmer: "Pradeep Sharma", location: "Kinnaur, Himachal Pradesh", season: "Winter", details: "Orange carrot rich in beta-carotene. Great for eyes and health." },
    { name: "Radish", farmer: "Sandeep Verma", location: "Mandi, Himachal Pradesh", season: "Winter", details: "Crunchy radish cooling and detoxifying. Perfect for salads." },
    { name: "Turnip", farmer: "Govind Patel", location: "Mehsana, Gujarat", season: "Winter", details: "White turnip nutritious root vegetable. Great for winter cooking." },
    { name: "Beetroot", farmer: "Sapna Dixit", location: "Baroda, Gujarat", season: "Winter", details: "Red beetroot rich in iron and antioxidants. Great for juice and salads." },
    { name: "Peas", farmer: "Rajendra Soni", location: "Vadodara, Gujarat", season: "Winter", details: "Green peas sweet and nutritious. Perfect for rice dishes and curries." },
    { name: "Fenugreek", farmer: "Meena Kumari", location: "Jaisalmer, Rajasthan", season: "Winter", details: "Aromatic fenugreek leaves with medicinal properties. Great for digestion." },
    { name: "Mustard Greens", farmer: "Balram Singh", location: "Bikaner, Rajasthan", season: "Winter", details: "Peppery mustard greens rich in calcium. Traditional winter vegetable." },
    { name: "Lettuce", farmer: "Nisha Kapoor", location: "Solan, Himachal Pradesh", season: "Winter", details: "Crisp lettuce leaves perfect for salads. Light and refreshing." },
    { name: "Kale", farmer: "Vikram Reddy", location: "Chikballapur, Karnataka", season: "Winter", details: "Nutritious kale superfood rich in vitamins. Great for smoothies." },
    { name: "Asian Greens", farmer: "Linda Chen", location: "Kalimpong, West Bengal", season: "Winter", details: "Tender Asian greens perfect for stir-fries. Mild flavor." },
    { name: "Celery", farmer: "Kamla Sharma", location: "Pahalgam, Jammu & Kashmir", season: "Winter", details: "Crisp celery stalk nutritious and refreshing. Great for soups." },

    // Monsoon Vegetables (June - September)
    { name: "Taro Root", farmer: "Gopal Nair", location: "Wayanad, Kerala", season: "Monsoon", details: "Starchy taro root nutritious staple. Great for monsoon cooking." },
    { name: "Colocasia", farmer: "Anita Das", location: "Thrissur, Kerala", season: "Monsoon", details: "Tender colocasia leaves nutritious and tasty. Traditional monsoon vegetable." },
    { name: "Elephant Foot Yam", farmer: "Sashi Kumar", location: "Ernakulam, Kerala", season: "Monsoon", details: "Large nutritious yam rich in minerals. Monsoon specialty." },
    { name: "Lady Finger", farmer: "Uma Sharma", location: "Guwahati, Assam", season: "Monsoon", details: "Tender lady's finger essential during monsoon. Nutritious and tasty." },
    { name: "Drumstick", farmer: "Mukundan Pillai", location: "Thirunelveli, Tamil Nadu", season: "Monsoon", details: "Nutrient-rich drumstick leaves powerful superfood. Used in traditional medicine." },
    { name: "Yam", farmer: "Parameshwaran Iyer", location: "Idukki, Kerala", season: "Monsoon", details: "Nutritious yam tuber great for monsoon season. Rich in starch." },
    { name: "Ginger", farmer: "Roshni Das", location: "Darjeeling, West Bengal", season: "Monsoon", details: "Pungent ginger root excellent for immunity. Monsoon essential." },
    { name: "Turmeric", farmer: "Suresh Rao", location: "Hyderabad, Telangana", season: "Monsoon", details: "Golden turmeric root medicinal and healing. Traditional monsoon ingredient." },

    // Year-Round Vegetables
    { name: "Onion", farmer: "Rajesh Patel", location: "Nashik, Maharashtra", season: "Year-Round", details: "Essential onion base for all cuisines. Available throughout the year." },
    { name: "Garlic", farmer: "Anil Kumar", location: "Mandsaur, Madhya Pradesh", season: "Year-Round", details: "Aromatic garlic essential flavor base. Used year-round in cooking." },
    { name: "Potato", farmer: "Jagdish Singh", location: "Shimla, Himachal Pradesh", season: "Year-Round", details: "Versatile potato staple food. Available throughout the year." },
    { name: "Beet Leaves", farmer: "Hemant Sharma", location: "Pune, Maharashtra", season: "Year-Round", details: "Nutritious beet leaves loaded with minerals and vitamins." },
    { name: "Coriander Leaves", farmer: "Pushpa Rani", location: "Indore, Madhya Pradesh", season: "Year-Round", details: "Fresh coriander leaves essential herb used in every meal." },
    { name: "Mint", farmer: "Vivek Singh", location: "Lucknow, Uttar Pradesh", season: "Year-Round", details: "Refreshing mint leaves used for drinks, garnish and cooking." },
    { name: "Green Onion", farmer: "Deepa Nair", location: "Kottayam, Kerala", season: "Year-Round", details: "Fresh green onions scallions for garnish and flavor enhancement." },
    { name: "Parsnip", farmer: "Sanjay Verma", location: "Meerut, Uttar Pradesh", season: "Year-Round", details: "Sweet parsnip root vegetable great for roasting and soups." },
    { name: "Leek", farmer: "Manoj Patel", location: "Anand, Gujarat", season: "Year-Round", details: "Mild leek vegetable perfect for soups, stews and cooking."}
];

const veggieList = document.getElementById('veggie-list');
const farmerInfo = document.getElementById('farmer-info');
const searchInput = document.getElementById('search-input');
const clearSearch = document.getElementById('clear-search');
const seasonBtns = document.querySelectorAll('.season-btn');

let selectedVeggie = null;
let selectedSeason = 'all';

// Populate vegetable list
function renderVegetables(filter = '') {
    veggieList.innerHTML = '';
    
    const filtered = vegetables.filter(veggie => {
        const matchesSearch = veggie.name.toLowerCase().includes(filter.toLowerCase());
        const matchesSeason = selectedSeason === 'all' || veggie.season === selectedSeason;
        return matchesSearch && matchesSeason;
    });

    if (filtered.length === 0) {
        veggieList.innerHTML = '<li style="grid-column: 1/-1; text-align: center; color: #999;">No vegetables found</li>';
        return;
    }

    filtered.forEach(veggie => {
        const li = document.createElement('li');
        li.textContent = veggie.name;
        li.dataset.veggieName = veggie.name;
        
        if (selectedVeggie && selectedVeggie.name === veggie.name) {
            li.classList.add('active');
        }
        
        li.addEventListener('click', () => selectVeggie(veggie, li));
        veggieList.appendChild(li);
    });
}

// Select a vegetable
function selectVeggie(veggie, element) {
    selectedVeggie = veggie;
    
    // Remove active class from all items
    document.querySelectorAll('#veggie-list li').forEach(item => {
        item.classList.remove('active');
    });
    
    // Add active class to clicked item
    element.classList.add('active');
    
    // Display farmer information
    displayFarmerInfo(veggie);
}

// Display farmer information
function displayFarmerInfo(veggie) {
    farmerInfo.innerHTML = `
        <h3>${veggie.name}</h3>
        <p><strong>🌾 Season:</strong> ${veggie.season}</p>
        <p><strong>👨‍🌾 Farmer:</strong> ${veggie.farmer}</p>
        <p><strong>📍 Location:</strong> ${veggie.location}</p>
        <p><strong>ℹ️ Details:</strong> ${veggie.details}</p>
    `;
}

// Search functionality
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value;
    renderVegetables(searchTerm);
    
    // Show/hide clear button
    if (searchTerm.length > 0) {
        clearSearch.classList.add('active');
    } else {
        clearSearch.classList.remove('active');
    }
});

// Clear search
clearSearch.addEventListener('click', () => {
    searchInput.value = '';
    clearSearch.classList.remove('active');
    renderVegetables();
});

// Season filter event listeners
seasonBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        seasonBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        // Update selected season
        selectedSeason = btn.dataset.season;
        // Re-render vegetables
        renderVegetables(searchInput.value);
    });
});

// Initial render
renderVegetables();
