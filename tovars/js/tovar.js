// Получение элементов
const addToCartButtons = document.querySelectorAll('#products button');
const cartList = document.querySelector('#cart-list');
const totalPriceElement = document.querySelector('#total-price');
const checkoutButton = document.querySelector('#checkout-button');

// Массив для хранения товаров в корзине
const cartItems = [];

// Добавление обработчиков событий к кнопкам "В корзину"
addToCartButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    // Получение ID товара
    const id = event.target.dataset.id;

    // Добавление товара в корзину
    try {
      addItemToCart(id);
    } catch (error) {
      alert(`Ошибка при добавлении товара: ${error.message}`);
    }
  });
});

// Функция для добавления товара в корзину
function addItemToCart(id) {
  // Поиск товара по ID
  const product = document.querySelector(`.product[data-id="${id}"]`);
  if (!product) {
    throw new Error(`Товар с ID ${id} не найден.`);
  }

  const itemName = product.querySelector('h3').textContent;
  const itemPrice = parseInt(product.querySelector('p:nth-child(4)').textContent.slice(0));
  const itemImage = product.querySelector('img').src;

  // Создание нового элемента списка для товара
  const listItem = document.createElement('li');
  listItem.classList.add('cart-item');

  // Добавление названия и изображения товара в элемент списка
  const itemInfo = document.createElement('div');
  itemInfo.classList.add('item-info');
  const itemNameElement = document.createElement('p');
  itemNameElement.textContent = itemName;
  const itemImageElement = document.createElement('img');
  itemImageElement.src = itemImage;
  itemInfo.appendChild(itemNameElement);
  itemInfo.appendChild(itemImageElement);
  listItem.appendChild(itemInfo);

  // Добавление цены товара в элемент списка
  const itemPriceElement = document.createElement('p');
  itemPriceElement.classList.add('item-price');
  itemPriceElement.textContent = `$${itemPrice}`;
  listItem.appendChild(itemPriceElement);

  // Добавление товара в массив товаров в корзине
  cartItems.push({
    id: id,
    name: itemName,
    price: itemPrice,
    image: itemImage,
    quantity: 1,
  });

  // Отображение обновленного списка товаров в корзине
  updateCartList();

  // Обновление общей стоимости
  updateTotalPrice();
}

// Функция для обновления списка товаров в корзине
function updateCartList() {
  // Очистка существующего списка товаров
  cartList.innerHTML = '';

  // Перебор товаров в корзине и добавление их в список
  cartItems.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.classList.add('cart-item');

    // Добавление названия и изображения товара в элемент списка
    const itemInfo = document.createElement('div');
    itemInfo.classList.add('item-info');
    const itemNameElement = document.createElement('p');
    itemNameElement.textContent = item.name;
    const itemImageElement = document.createElement('img');
    itemImageElement.src = item.image;
    itemInfo.appendChild(itemNameElement);
    itemInfo.appendChild(itemImageElement);
    listItem.appendChild(itemInfo);

    // Добавление цены товара в элемент списка
    const itemPriceElement = document.createElement('p');
    itemPriceElement.classList.add('item-price');
    itemPriceElement.textContent = `Цена: ${item.price} ₽`;
    listItem.appendChild(itemPriceElement);

    cartList.appendChild(listItem);
    // Добавление кнопки удаления в элемент списка
    const removeButton = document.createElement('button');
    removeButton.removeAttribute('id');
    removeButton.textContent = 'Удалить';
    removeButton.classList.add('remove-button');
    listItem.appendChild(removeButton);

    cartList.appendChild(listItem);

    // Добавление обработчика события для кнопки удаления
    removeButton.addEventListener('click', (event) => {
      const id = event.target.dataset.id;

      // Удаление товара из массива товаров в корзине
      const index = cartItems.findIndex((item) => item.id === id);
      cartItems.splice(index, 1);

      // Отображение обновленного списка товаров в корзине
      updateCartList();

      // Обновление общей стоимости
      updateTotalPrice();
    });
  });
};


// Функция для обновления общей стоимости
function updateTotalPrice() {
  // Вычисление общей стоимости
  let totalPrice = 0;
  cartItems.forEach((item) => {
    totalPrice += item.price * item.quantity;
  });

  // Отображение общей стоимости
  totalPriceElement.textContent = `Общая стоимость: ${totalPrice.toFixed(2)} ₽`;
}

// Добавление обработчика события к кнопке оформления заказа
checkoutButton.addEventListener('click', (event) => {
  // Выполнение действий по оформлению заказа, таких как отправка товаров на сервер или отображение формы оплаты
  // ...
});

// Получение кнопки очистки корзины
const clearCartButton = document.querySelector('#clear-cart-button');

// Проверка наличия кнопки очистки корзины
if (clearCartButton) {
  // Добавление обработчика события к кнопке очистки корзины
  clearCartButton.addEventListener('click', (event) => {
    // Очистка массива товаров в корзине
    cartItems.length = 0;

    // Отображение обновленного списка товаров в корзине
    updateCartList();

    // Обновление общей стоимости
    updateTotalPrice();
  });
}


const cart = document.getElementById('cart');
// Добавление обработчика события к кнопке
function view(){     
    if (cart.style.display == "block"){
        cart.style.display = "none" } 
    else{
        cart.style.display = "block"   
    }
}; 


// Получение элемента с главной картинкой
const smallImage = document.getElementById('miniimg');
console.log(smallImage);

// Получение элемента с маленькой картинкой
const mainImage = document.querySelector('.product .image img');
console.log(mainImage);
// Добавление обработчика события к маленькой картинке
smallImage.addEventListener('click', (event) => {
  // Установка источника главной картинки на источник маленькой картинки
  mainImage.src = smallImage.src;

});
