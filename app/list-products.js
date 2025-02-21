import './index.scss';

// images
import enginakyurt from "./assets/images/pexels-enginakyurt-4458519.jpg";
import quangVietNguyen from "./assets/images/pexels-quang-viet-nguyen-107013384-9561297.jpg";
import yaazhini from "./assets/images/pexels-yaazhini-17307532.jpg";

document.addEventListener("DOMContentLoaded", () => {

    const productsContainer = document.getElementById('products');

    const products = [
        {
            name: 'Fujfilm Camera',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: enginakyurt,
            price: "$54"
        },
        {
            name: 'Canon Camera',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: quangVietNguyen,
            price: "$54"
        },
        {
            name: 'Nikon Camera',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: yaazhini,
            price: "$54"
        }
        ,
        {
            name: 'Black sneakers',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: "./assets/images/01.jpg",
            price: "$98"
        }
        ,
        {
            name: 'Light bulb',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: "./assets/images/02.jpg",
            price: "$5"
        },
        {
            name: 'Table',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: "./assets/images/03.jpg",
            price: "$134"
        },
        {
            name: 'Chair',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: "./assets/images/04.jpg",
            price: "$110"
        },
        {
            name: 'White sneakers',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: "./assets/images/05.jpg",
            price: "$134"
        },
        {
            name: 'Prickly',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: "./assets/images/06.jpg",
            price: "$144"
        },
        {
            name: 'Camera',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: "./assets/images/07.jpg",
            price: "$75"
        },
        {
            name: 'CBD',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: "./assets/images/08.jpg",
            price: "$34"
        },
        {
            name: 'Eye liner',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: "./assets/images/09.jpg",
            price: "$15"
        },
        {
            name: 'Deserts',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: "./assets/images/10.jpg",
            price: "$123"
        },
        {
            name: 'Queen of Seduction',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: "./assets/images/11.jpg",
            price: "$250"
        },
        {
            name: 'Pen',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: "./assets/images/12.jpg",
            price: "$1"
        }
    ];

    products.forEach(product => {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        
        const img = document.createElement('img');
        img.classList.add('card-img-top');
        img.src = product.image;
        img.alt = product.name;
        img.style.maxWidth = '100%'; 
        img.style.maxHeight = '200px';
        img.style.objectFit = 'cover'

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const title = document.createElement('h4');
        title.classList.add('card-title');
        title.textContent = product.name;

        const description = document.createElement('p');
        description.classList.add('card-text');
        description.textContent = product.description;

        const price = document.createElement('span');
        price.textContent = product.price

        const addToCart = document.createElement('button');
        addToCart.classList.add('btn');
        addToCart.classList.add('btn-success');
        addToCart.classList.add('float-end');
        addToCart.textContent = "Add to cart";

        cardBody.appendChild(title);
        cardBody.appendChild(description);
        cardBody.append(price)
        cardBody.appendChild(addToCart);
        cardDiv.appendChild(img);
        cardDiv.appendChild(cardBody);

        productsContainer.appendChild(cardDiv);
    });
});