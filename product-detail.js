// Get product ID from URL parameters
function getProductId() {
  const params = new URLSearchParams(window.location.search);
  return params.get('id');
}

// Load product details
function loadProductDetails() {
  const productId = getProductId();
  
  if (!productId || !products[productId]) {
    document.body.innerHTML = '<div style="padding: 40px; text-align: center;"><h2>Product not found</h2><a href="products.html">Back to Products</a></div>';
    return;
  }

  const product = products[productId];

  // Update page title
  document.title = `${product.name} | Roshan Packaging`;

  // Set product name
  document.getElementById('product-name').textContent = product.name;

  // Set category and type
  document.getElementById('product-category').textContent = `Category: ${product.category}`;
  document.getElementById('product-type').textContent = `Type: ${product.type}`;

  // Set product image
  document.getElementById('product-image').src = product.image;
  document.getElementById('product-image').alt = product.name;

  // Set description
  document.getElementById('product-description').textContent = product.description;

  // Set features
  const featuresList = document.getElementById('product-features');
  featuresList.innerHTML = '';
  product.features.forEach(feature => {
    const li = document.createElement('li');
    li.textContent = feature;
    featuresList.appendChild(li);
  });

  // Set up "Yes I'm Interested" button
  const interestedBtn = document.getElementById('interested-btn');
  interestedBtn.addEventListener('click', () => {
    const productName = product.name;
    window.location.href = `contact.html?product=${encodeURIComponent(productName)}`;
  });
}



// Load product details when page loads
document.addEventListener('DOMContentLoaded', loadProductDetails);