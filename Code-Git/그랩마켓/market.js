const data = [
    {
        name: '농구공 1호',
        price: '10000',
        seller: '그랩1',
        imgUrl: 'products/basketball1.jpeg'
    },
    {
        name: '농구공 2호',
        price: '20000',
        seller: '그랩2',
        imgUrl: 'products/basketball2.jpg'
    }, {
        name: '농구공 3호',
        price: '30000',
        seller: '그랩3',
        imgUrl: 'products/basketball3.jpg'
    }, {
        name: '덤벨 1호',
        price: '80000',
        seller: '그랩4',
        imgUrl: 'products/dumbell1.jpeg'
    },
    {
        name: '덤벨 2호',
        price: '90000',
        seller: '그랩5',
        imgUrl: 'products/dumbell2.jpeg'
    }, {
        name: '키보드 1호',
        price: '10000',
        seller: '그랩7',
        imgUrl: 'products/keyboard1.jpg'
    }, {
        name: '키보드 2호',
        price: '1000000',
        seller: '그랩8',
        imgUrl: 'products/keyboard2.jpg'
    },
    {
        name: '덤벨 2호',
        price: '90000',
        seller: '그랩5',
        imgUrl: 'products/dumbell2.jpeg'
    }, {
        name: '키보드 1호',
        price: '10000',
        seller: '그랩7',
        imgUrl: 'products/keyboard1.jpg'
    }, {
        name: '키보드 2호',
        price: '1000000',
        seller: '그랩8',
        imgUrl: 'products/keyboard2.jpg'
    },
{
        name: '농구공 1호',
        price: '10000',
        seller: '그랩1',
        imgUrl: 'products/basketball1.jpeg'
    },
    {
        name: '농구공 2호',
        price: '20000',
        seller: '그랩2',
        imgUrl: 'products/basketball2.jpg'
    }, {
        name: '농구공 3호',
        price: '30000',
        seller: '그랩3',
        imgUrl: 'products/basketball3.jpg'
    }, {
        name: '덤벨 1호',
        price: '80000',
        seller: '그랩4',
        imgUrl: 'products/dumbell1.jpeg'
    },
    {
        name: '덤벨 2호',
        price: '90000',
        seller: '그랩5',
        imgUrl: 'products/dumbell2.jpeg'
    }, {
        name: '키보드 1호',
        price: '10000',
        seller: '그랩7',
        imgUrl: 'products/keyboard1.jpg'
    }, {
        name: '키보드 2호',
        price: '1000000',
        seller: '그랩8',
        imgUrl: 'products/keyboard2.jpg'
    },
    {
        name: '덤벨 2호',
        price: '90000',
        seller: '그랩5',
        imgUrl: 'products/dumbell2.jpeg'
    }, {
        name: '키보드 1호',
        price: '10000',
        seller: '그랩7',
        imgUrl: 'products/keyboard1.jpg'
    }, {
        name: '키보드 2호',
        price: '1000000',
        seller: '그랩8',
        imgUrl: 'products/keyboard2.jpg'
    },
]

let itemNumber = 1;

data.map((e, i) => {
    
    const productCard = document.createElement('li');
    productCard.classList.add('product-card');
    const productImgWrapper = document.createElement('div');
    productImgWrapper.classList.add('product-img-wrapper');
    const productImg = document.createElement('img');
    productImg.setAttribute('src', e.imgUrl);
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
    const productName = document.createElement('span');
    productName.classList.add('product-name');
    productName.textContent = e.name;
    const productPrice = document.createElement('span');
    productPrice.innerHTML = `<strong>${e.price}원</strong>`;
    const productSeller = document.createElement('div');
    productSeller.classList.add('product-seller');
    const sellerProfile = document.createElement('div');
    sellerProfile.classList.add('seller-profile');
    const avatarImg = document.createElement('img');
    avatarImg.setAttribute('src', 'icons/avatar.png');
    const sellerName = document.createElement('span');
    sellerName.classList.add('seller-name');
    sellerName.textContent = e.seller;

    productImgWrapper.appendChild(productImg);
    sellerProfile.appendChild(avatarImg);
    productSeller.appendChild(sellerProfile);
    productSeller.appendChild(sellerName);
    productInfo.appendChild(productName);
    productInfo.appendChild(productPrice);
    productInfo.appendChild(productSeller);
    productCard.appendChild(productImgWrapper);
    productCard.appendChild(productInfo);
//products > productsRow > productCard

    const products = document.querySelector('.products');
    if ((i++) % 5 == 0) {
        const productsRow = document.createElement('ul');

        productsRow.classList.add('products-row');
        productsRow.classList.add(`products-row${itemNumber}`);
        productsRow.appendChild(productCard);
        products.appendChild(productsRow);
        itemNumber++;
    }
    else{
        const row = document.querySelector(`.products-row${itemNumber - 1}`);
        row.appendChild(productCard);
    }
})
