class ProductList {
  constructor(container = '.products') {
    this.container = container;
    this.goods = [];
    this.allProducts = [];
    this._fetchProducts();
    this._render();
    this.calcTotalPrice();
  }

  _fetchProducts() {
    this.goods = [
      {id: 1, title: 'Notebook', price: 20000},
      {id: 2, title: 'Mouse', price: 1500},
      {id: 3, title: 'Keyboard', price: 5000},
      {id: 4, title: 'Gamepad', price: 4500},
    ]
  }

  _render() {
    const block = document.querySelector(this.container);

    for (let product of this.goods) {
      const productObject = new ProductItem(product);
      this.allProducts.push(productObject);
      block.insertAdjacentHTML('beforeend', productObject.render());
    }
  }

  // подсчёт суммы каталога
  calcTotalPrice() {
    let totalPrice = 0;
    this.goods.forEach((good) => {
      if (good.price !== undefined) {
        totalPrice += good.price;
      }
    });
    console.log(totalPrice);
  }

}

class ProductItem {
  constructor(product, img = 'https://placehold.it/200x150') {
    this.title = product.title;
    this.price = product.price;
    this.id = product.id;
    this.img = img;
  }

  render() {
    return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} \u20bd</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`;
  }
}
new ProductList();

class CartList {
  // здесь понадобятся: 
  // список товаров, которые записываются в массив при клике на товар в каталоге
  // подсчет общей стоимости и количества товаров в корзине
}

class CartItem {
  // здесь мы должны срендерить вывод товара корзины
  // потребуется кнопка удаления товара из корзины
}
