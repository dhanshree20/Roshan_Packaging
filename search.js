// Search functionality for all pages
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.querySelector('.nav-search input');
  const searchContainer = document.querySelector('.nav-search');
  
  if (!searchInput) return;
  
  // Create suggestions dropdown and append to body
  const suggestionsDiv = document.createElement('div');
  suggestionsDiv.className = 'search-suggestions';
  suggestionsDiv.id = 'searchSuggestions';
  suggestionsDiv.style.position = 'fixed';
  suggestionsDiv.style.zIndex = '10001';
  suggestionsDiv.style.visibility = 'visible';
  document.body.appendChild(suggestionsDiv);
  
  // Position the dropdown below the search input
  function positionSuggestions() {
    const rect = searchInput.getBoundingClientRect();
    suggestionsDiv.style.top = (rect.bottom + 5) + 'px';
    suggestionsDiv.style.left = rect.left + 'px';
    suggestionsDiv.style.width = rect.width + 'px';
  }
  
  // Update position on scroll and resize
  window.addEventListener('scroll', function() {
    if (suggestionsDiv.style.display === 'block') {
      positionSuggestions();
    }
  });
  
  window.addEventListener('resize', function() {
    if (suggestionsDiv.style.display === 'block') {
      positionSuggestions();
    }
  });
  
  // Search functionality
  searchInput.addEventListener('input', function() {
    const query = this.value.toLowerCase().trim();
    
    if (query.length === 0) {
      suggestionsDiv.style.display = 'none';
      return;
    }
    
    // Filter products based on search query
    const results = [];
    for (let id in products) {
      const product = products[id];
      if (
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.type.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
      ) {
        results.push({
          id: product.id,
          name: product.name,
          category: product.category
        });
      }
    }
    
    // Display results (max 8 suggestions)
    if (results.length > 0) {
      suggestionsDiv.innerHTML = '';
      results.slice(0, 8).forEach(product => {
        const suggestionItem = document.createElement('div');
        suggestionItem.className = 'suggestion-item';
        suggestionItem.innerHTML = `
          <div class="suggestion-content">
            <div class="suggestion-name">${product.name}</div>
            <div class="suggestion-category">${product.category}</div>
          </div>
        `;
        
        suggestionItem.addEventListener('click', function() {
          // Navigate to product detail page
          window.location.href = `product-detail.html?id=${product.id}`;
        });
        
        suggestionsDiv.appendChild(suggestionItem);
      });
      suggestionsDiv.style.display = 'block';
      positionSuggestions();
    } else {
      suggestionsDiv.innerHTML = '<div class="suggestion-item no-results">No products found</div>';
      suggestionsDiv.style.display = 'block';
      positionSuggestions();
    }
  });
  
  // Handle Enter key
  searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      const firstResult = suggestionsDiv.querySelector('.suggestion-item:not(.no-results)');
      if (firstResult) {
        firstResult.click();
      }
    }
  });
  
  // Close suggestions when clicking outside
  document.addEventListener('click', function(e) {
    if (!searchContainer.contains(e.target)) {
      suggestionsDiv.style.display = 'none';
    }
  });
  
  // Show suggestions on input focus
  searchInput.addEventListener('focus', function() {
    if (this.value.length > 0) {
      suggestionsDiv.style.display = 'block';
      positionSuggestions();
    }
  });
});