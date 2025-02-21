import './index.scss';

// images

import img1 from "./assets/images/01.jpg";
import img2 from "./assets/images/02.jpg";
import img3 from "./assets/images/03.jpg";
import img4 from "./assets/images/04.jpg";
import img5 from "./assets/images/05.jpg";
import img6 from "./assets/images/06.jpg";
import img7 from "./assets/images/07.jpg";
import img8 from "./assets/images/08.jpg";
import img9 from "./assets/images/09.jpg";
import img10 from "./assets/images/10.jpg";
import img11 from "./assets/images/11.jpg";
import img12 from "./assets/images/12.jpg";

document.addEventListener("DOMContentLoaded", () => {

    const productsContainer = document.getElementById('products');

    const products = [
        {
            name: 'Black sneakers',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: img1,
            price: "$98"
        }
        ,
        {
            name: 'Light bulb',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: img2,
            price: "$5"
        },
        {
            name: 'Table',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: img3,
            price: "$134"
        },
        {
            name: 'Chair',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: img4,
            price: "$110"
        },
        {
            name: 'White sneakers',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: img5,
            price: "$134"
        },
        {
            name: 'Prickly',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: img6,
            price: "$144"
        },
        {
            name: 'Camera',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: img7,
            price: "$75"
        },
        {
            name: 'CBD',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: img8,
            price: "$34"
        },
        {
            name: 'Eye liner',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: img9,
            price: "$15"
        },
        {
            name: 'Deserts',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: img10,
            price: "$123"
        },
        {
            name: 'Queen of Seduction',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: img11,
            price: "$250"
        },
        {
            name: 'Pen',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: img12,
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