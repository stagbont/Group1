/*===== MENU SHOW =====*/ 
const showMenu = (toggledId, navId) => {
      const toggle = document.getElementById(toggledId),
            nav = document.getElementById(navId);

      if(toggle && nav) {
            toggle.addEventListener('click', () => {
                  nav.classList.toggle('show');
            })
      }
}

showMenu('nav-toggle', 'nav-menu');

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
      // Active link
      navLink.forEach(n => n.classList.remove('active'));
      this.classList.add('active');

      // Remove menu mobile
      const navMenu = document.getElementById('nav-menu');
      navMenu.classList.remove('show');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

// Product Item 
const products = [
      {
            id: 1,      
            title: "Dashiki Top",
            category: 'Best Sellers',
            price: 79.99,
            img: "../img/product01.png",
      },
      {
            id: 2,      
            title: "Dashiki Top",
            category: 'Best Sellers',
            price: 79.99,
            img: "../img/product01.png",
      },
      {
            id: 3,      
            title: "Dashiki Top",
            category: 'Best Sellers',
            price: 79.99,
            img: "../img/product01.png",
      },
      {
            id: 4,      
            title: "Dashiki Top",
            category: 'Best Sellers',
            price: 79.99,
            img: "../img/product01.png",
      },
      {
            id: 5,      
            title: "Dashiki Top",
            category: 'Best Sellers',
            price: 79.99,
            img: "../img/product01.png",
      },
      {
            id: 6,      
            title: "Dashiki Top",
            category: 'Featured',
            price: 79.99,
            img: "../img/product01.png",
      },
      {
            id: 7,      
            title: "Dashiki Top",
            category: 'Featured',
            price: 79.99,
            img: "../img/product01.png",
      },
      {
            id: 8,      
            title: "Dashiki Top",
            category: 'New Arrival',
            price: 79.99,
            img: "../img/product01.png",
      },
      {
            id: 9,      
            title: "Dashiki Top",
            category: 'New Arrival',
            price: 79.99,
            img: "../img/product01.png",
      },
      {
            id: 10,      
            title: "Dashiki Top",
            category: 'New Arrival',
            price: 79.99,
            img: "../img/product01.png",
      },
]

const productContainer = document.querySelector('.products__container');
const filterBtns = document.querySelectorAll('.filter_button');

// load items
window.addEventListener("DOMContentLoaded", function () {
      displayProductsItems(products);
})
// filter items
filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function(e) {
            const category = e.currentTarget.dataset.id;
            const productCategory = products.filter(function (productItem) {
                  if (productItem.category === category) {
                        return productItem;
                  }
            })
            // console.log(productCategory);
            if (category === 'All') {
                  displayProductsItems(products);
            }

            else {
                  displayProductsItems(productCategory);
            }
      });
});

function displayProductsItems(productsItems) {
      let displayProducts = productsItems.map(function (item) {
            return `<div class="product__cart">
                         <a href="product__item.html" class="product__img">
                               <img src=${item.img}>
                         </a>
                         
                         <a href="product__item.html" class="product__data">
                               <h3 class="product__name">${item.title}</h3>
                               <span class="product__price">&#8373; ${item.price}</span>
                         </a>
 
                         <div class="add__to-cart">
                               Add to Cart
                         </div>
                   </div>`; 
       })
       displayProducts = displayProducts.join("");
       productContainer.innerHTML = displayProducts;
}