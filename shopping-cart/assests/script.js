
let total = 0;


function addItem() {
  const itemName = document.getElementById('itemName').value;
  const itemPrice = parseFloat(document.getElementById('itemPrice').value);

  if (itemName && itemPrice) {
    total += itemPrice;
    document.getElementById('cartTotal').innerText = total.toFixed(2);
    alert(`${itemName} added to cart. Total: $${total.toFixed(2)}`);

    document.getElementById('itemName').value = '';
    document.getElementById('itemPrice').value = '';
  } else {
    alert('Please enter item name and price.');
  }
}
