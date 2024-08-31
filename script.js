window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
        navbar.style.position = 'fixed';
    } else {
        navbar.style.position = '';
    }
});

//using database
// let idx = 0;

// fetch('./Database/db.json')
//     .then(response => response.json())
//     .then(function (data) {
//         console.log(data);
//         const items = document.querySelector(".items");
//         for (let i = 0; i < data.length; i++) {
//             const child = document.createElement('div');
//             child.classList.add('item', `item-${idx + 1}`);
//             child.innerHTML = `
//         <div class="item-img item-img-1"></div>
//         <div class="item-text">
//           <div class="item-text-details">
//             <h4>${data[i].product}</h4> 
//             <p>${data[i].seller}</p>    
//           </div>
//           <div class="item-cart-flex">
//             <p>${data[i].price}</p>     
//             <i class="fa fa-shopping-cart" aria-hidden="true"></i>
//           </div>
//         </div>`;
//             idx++;

//             items.appendChild(child);
//         }
//     });

// slider
const slider = document.querySelectorAll('.slider');
for (let i = 0; i < slider.length; i++) {
    slider[i].style.left = `${i * 100}%`;
}

let count = 0;
function slideShow() {
    for (let i = 0; i < slider.length; i++) {
        slider[i].style.transform = `translateX(-${count * 100}%)`;
    }
    count++;
    if (count == slider.length) {
        count = 0;
    }
    setTimeout(slideShow, 3000);
}

slideShow();


// cart checkout
document.querySelectorAll('.fa-shopping-cart').forEach(cartIcon => {
    cartIcon.addEventListener('click', function () {
        const parent = cartIcon.closest('.item');
        const product = parent.querySelector('.item-text-details h4').textContent;
        const price = parent.querySelector('.item-cart-flex p').textContent;

        const cartItem = {
            product: product,
            price: price
        };

        // problem how to send this data to cart.js
    });
});

localStorage.clear();