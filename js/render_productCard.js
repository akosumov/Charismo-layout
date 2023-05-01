const productCard = document.querySelector('.product_card')

const productsList = [
	{
		img: '../img/product.png',
		reviews: '../img/5_star.png',
		title: 'DEKOHAIR (Dekopill 60мл.) — Hair loss lotion',
		price: '4000 Р',
		desk: `Lipoamino-acid elimination shampoo designed for normal to oily <br>scalp skin.
Regulates greasy and <br>normal hair grease and acid-alkaline balance.
Active ingredients: bubbly fucus, arginine, babassu oil`,
		id: 1,
	},
	{
		img: '../img/product.png',
		reviews: '../img/5_star.png',
		title: 'DEKOHAIR (Dekopill 60мл.) — Hair loss lotion',
		price: '4000 Р',
		desk: `Lipoamino-acid elimination shampoo designed for normal to oily <br>scalp skin.
Regulates greasy and <br>normal hair grease and acid-alkaline balance.
Active ingredients: bubbly fucus, arginine, babassu oil`,
		id: 2,
	},
	{
		img: '../img/product.png',
		reviews: '../img/5_star.png',
		title: 'DEKOHAIR (Dekopill 60мл.) — Hair loss lotion',
		price: '4000 Р',
		desk: `Lipoamino-acid elimination shampoo designed for normal to oily <br>scalp skin.
Regulates greasy and <br>normal hair grease and acid-alkaline balance.
Active ingredients: bubbly fucus, arginine, babassu oil`,
		id: 3,
	},
	{
		img: '../img/product.png',
		reviews: '../img/5_star.png',
		title: 'DEKOHAIR (Dekopill 60мл.) — Hair loss lotion',
		price: '4000 Р',
		desk: `Lipoamino-acid elimination shampoo designed for normal to oily <br>scalp skin.
Regulates greasy and <br>normal hair grease and acid-alkaline balance.
Active ingredients: bubbly fucus, arginine, babassu oil`,
		id: 4,
	},
]

const productsListHtml = productsList.map(item => {
	const htmlCard = `<div class="product" data-productid="${item.id}">
<div class="product_image">
<img src=${item.img} alt="product">
</div>
<a href="./reviews.html"><img src=${item.reviews} alt="reviews"></a>
<h2 class="product_title">${item.title}</h2>
<div class="price">${item.price}</div>
<div class="buy_button">
<button class="basket" id=${item.id}>To cart</button>
<button class="fast">Quick Order</button>
<button class="basket_mobile"><img src="./img/basket_mobile.png" alt="buy"></button>
<button class="loupe"><img src="./img/loupe.png" alt="check"></button>
</div>
</div>`
	const el = document.createElement('div')
	el.innerHTML = htmlCard
	return productCard.append(el)
})
