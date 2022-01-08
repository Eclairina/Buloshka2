

class Header {
    
handlerOpenShoppingPage() {
    shoppingPage.render();
}
 render(count) {
        const html = `
           <div class="header-container">
           <div class="header-naz">Главная</div>
           <div class="header-naz">О нас</div>
           <div class="header-naz">Новости</div>
           <div class="header-naz">Франшизы</div>
<div class="header-naz" id="top">Контакты</div>
                <div class="header-counter" onclick="headerPage.handlerOpenShoppingPage();">
                   В вашей корзине ${count} товар(ов)
                   <div class="header-counter1"> Нажмите чтобы посмотреть </div>
                </div>
           </div>
        `;

        ROOT_HEADER.innerHTML = html;
    }
}

const headerPage = new Header();

const productsStore = localStorageUtil.getProducts();
headerPage.render(productsStore.length);


const anchors = document.querySelectorAll('a[href="#"]')

