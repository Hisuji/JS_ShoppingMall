function moveTop() {
    window.scrollTo(0, 0);
}

function addProduct() {
    const CART_LIST = 'cart_list';
    localStorage.setItem(CART_LIST, '');
}