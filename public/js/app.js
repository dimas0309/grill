//INVOICE LINE CODE
const card = document.querySelectorAll('.card-body');
const len = card.length;
const buttons = [];
const names = [];
const prices = [];
const quantities = [];
const totals = [];
const foods = [];
const priceList = [];
const quantityList = [];
const netPriceList = [];
const tbody = document.querySelector('tbody');
const tbody2 = document.querySelector('table').children[2];

const input = document.querySelector('#total');
const input2 = document.querySelector('#food');
const input3 = document.querySelector('#prilist');
const input4 = document.querySelector('#quanlist');
const input5 = document.querySelector('#netpri');

for (let i = 0; i < len; i++){
	const button = card[i].children[4];
	const setId = button.setAttribute("id","order"+i);
    const getId = button.getAttribute("id");
    buttons.push(document.getElementById(getId));   
} 

for (let i = 0; i < len; i++){
	const name = card[i].children[0];
	const setName = name.setAttribute("id","name"+i);
	const getName = name.getAttribute("id");
	names.push(document.getElementById(getName));
}

for (let i = 0; i < len; i++){
	const price = card[i].children[1];
	const setPrice = price.setAttribute("id","price"+i);
	const getPrice = price.getAttribute("id");
	prices.push(document.getElementById(getPrice));
}

for (let i = 0; i < len; i++){
	const quantity = card[i].children[2];
	const setQuantity = quantity.setAttribute("id","quantity"+i);
	const getQuantity = quantity.getAttribute("id");
	quantities.push(document.getElementById(getQuantity));
}

const addFood = (name, price, quantity, netPrice) => {

	const td = document.createElement('td');
	const td2 = document.createElement('td');
	const td3 = document.createElement('td');
	const td4 = document.createElement('td');
	const tr = document.createElement('tr');

	td.append(name);
	td2.append(price);
	td3.append(quantity);
	td4.append(netPrice);
	tr.append(td);
	tr.append(td2);
	tr.append(td3);
	tr.append(td4);
	tbody.append(tr);
}

for (let button of buttons) {
 	button.addEventListener('click', function() {
 		const index = buttons.indexOf(button);
 		const nameText = names[index].innerText;
 		const priceText = prices[index].innerText;
 		const quanText = quantities[index].value;
 		const netPrice = Number(priceText)*Number(quanText);
 		
 		addFood(nameText, priceText, quanText, netPrice);

 		totals.push(netPrice);
 		foods.push(nameText);
 		priceList.push(priceText);
 		quantityList.push(quanText);
 		netPriceList.push(netPrice);

 		input2.setAttribute("value",foods);
 		input3.setAttribute("value", priceList);
 		input4.setAttribute("value", quantityList);
 		input5.setAttribute("value", netPriceList);

 		const sum = totals.reduce((a,b) => {
 			return a + b;
 		}) 

 		tbody2.children[0].children[1].innerText = sum;

 		addData(sum);

 	})
}

// PURCHASE FUNCTION CODE
const addData = (value) => {
	input.setAttribute("value", value)
}

 




 
 


 