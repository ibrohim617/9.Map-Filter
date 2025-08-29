
const products = [
    {
        img: 'img/img1.png',
        name: "Mars rug",
        price: 100,
        coins: "Coins",
        stock: 24
    },
    {
        img: 'img/img2.png',
        name: "Keyboard sticker",
        price: 135,
        coins: "Coins",
        stock: 11
    },
    {
        img: 'img/img3.png',
        name: "Smart watch",
        price: 899,
        coins: "Coins",
        stock: 4
    },
    {
        img: 'img/img4.png',
        name: "Wireless keyboard",
        price: 350,
        coins: "Coins",
        stock: 6
    },
    {
        img: 'img/img5.png',
        name: "Mouse",
        price: 3599,
        coins: "Coins",
        stock: 9
    },
    {
        img: 'img/img6.png',
        name: "AirPods",
        price: 4999,
        coins: "Coins",
        stock: 11
    },
    {
        img: 'img/img7.png',
        name: "Powerbank",
        price: 899,
        coins: "Coins",
        stock: 6
    },
    {
        img: 'img/img8.png',
        name: "USB flash drive",
        price: 299,
        coins: "Coins",
        stock: 21
    },
    {
        img: 'img/img9.png',
        name: "Smartphone",
        price: 3699,
        coins: "Coins",
        stock: 2
    },
    {
        img: 'img/img10.png',
        name: "Playstation 5",
        price: 7449,
        coins: "Coins",
        stock: 0, // "Uzatuv tovarga otdelno buyurtma berish mumkin" deb yozilgani uchun 0 qildim
    },
    {
        img: 'img/img11.png',
        name: "Yandex Station",
        price: 1999,
        coins: "Coins",
        stock: 4
    },
    {
        img: 'img/img12.png',
        name: "Planshet Samsung",
        price: 4999,
        coins: "Coins",
        stock: 24
    }
];



let mainCard = document.querySelector('#mainCard')




function renderList(item) {

    item.forEach(product => {
        let div = document.createElement('div')
        div.classList.add('card', 'bg-base-200', 'w-[290px]' , 'flex' , 'flex-col' , 'items-center' )
        div.innerHTML = `
<img class="flex items-center w-max " src="${product.img}" alt="">
<h2>${product.name}</h2>

    
    
    `
        mainCard.append(div)

    });


}
renderList(products)
  let input = document.querySelector('#input');

  input.addEventListener('input', (e) => {
      mainCard.innerHTML = '';
         console.log(e.target.value);
          let qwerly = e.target.value;
    
          const filtred = products.filter(fil => fil.name.toLowerCase().includes(qwerly));
    
         console.log(filtred);
    
          renderList(filtred);
    
})
