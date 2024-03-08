module.exports = productDeailsById = (products, id) => {
    id = parseInt(id);
    const productsList = JSON.parse(products)
    const productDetails = productsList.find(product => product.id === id);
    return productDetails
}
