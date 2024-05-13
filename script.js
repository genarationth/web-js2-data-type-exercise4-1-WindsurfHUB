const product = {
    product_id: 1,
    product_name: 'phone',
    quantity_in_stock: 20,
    unit_price: '$1,299',
    product_description: {
        product_brand: 'singsong',
        size_or_quantity: '20inch Hologram',
        taste_or_scent: 'null',
        color: 'Black',
        additional_description:'Really gud phone..maybe? but confirm the future technology'
    }
}

console.log(product.product_id)
console.log(product.product_name)
console.log(product.quantity_in_stock)
console.log(product.unit_price)
console.log(product.product_description.product_brand)
console.log(product.product_description.size_or_quantity)
console.log(product.product_description.taste_or_scent)
console.log(product.product_description.color)
console.log(product.product_description.additional_description)