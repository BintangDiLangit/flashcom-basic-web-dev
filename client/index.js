let productList = [];


function renderProducts() {
    const productTable = document.getElementById('productTable');

    // Inner untuk memasukkan tag pada parent tagnya
    productTable.innerHTML = '';

    productList.forEach((product, index) => {
        // Logic
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${product.category}</td>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>${product.stock}</td>
            <td>
                <button onclick="deleteProduct(${index})">Delete</button>
            </td>
        `;

        productTable.appendChild(row)
    })
}

function addProduct(event) {
    event.preventDefault();  // Mencegah Form dari reloading page

    const categoryProduct = document.getElementById('categoryProduct').value;
    const productName = document.getElementById('productName').value;
    const price = document.getElementById('price').value;
    const productStock = document.getElementById('productStock').value;

    const newProduct = {
        category: categoryProduct,
        name: productName,
        price: price,
        stock: productStock
    }

    productList.push(newProduct);

    document.getElementById('productForm').reset();

    renderProducts();
}

function deleteProduct(index) {
    productList.splice(index, 1);
    renderProducts();
}

document.getElementById('productForm').addEventListener('submit', addProduct);