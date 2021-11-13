
const totalAmount = [];
const foodlist = [];
const pricelist = [];
const quanlist = [];
const amountlist = [];

const ofood = document.querySelector('#food');
const oprice = document.querySelector('#prilist');
const oquan = document.querySelector('#quanlist');
const oamount = document.querySelector('#amount');
const otamount = document.querySelector('#total');
const tbody = document.querySelector('tbody');
const tbody2 = document.querySelector('table').children[2];

const addFood = (name, price, quantity, amount) => {

	const td = document.createElement('td');
	const td2 = document.createElement('td');
	const td3 = document.createElement('td');
	const td4 = document.createElement('td');
	const tr = document.createElement('tr');

	td.append(name);
	td2.append(price);
	td3.append(quantity);
	td4.append(amount);
	tr.append(td);
	tr.append(td2);
	tr.append(td3);
	tr.append(td4);
	tbody.append(tr);
}

for (let btn of idadds) {
 	btn.addEventListener('click', function() {
 		const i = idadds.indexOf(btn);
 		const addedFood = idfoods[i].innerText;
 		const addedPrice = idprices[i].innerText;
 		const addedQuan = idquantities[i].value;
 		const amount = Number(addedPrice)*Number(addedQuan);
 		
 		addFood(addedFood, addedPrice, addedQuan, amount);

 		totalAmount.push(amount);
 		foodlist.push(addedFood);
 		pricelist.push(addedPrice);
 		quanlist.push(addedQuan);
 		amountlist.push(amount);

 		ofood.setAttribute("value",foodlist);
 		oprice.setAttribute("value", pricelist);
 		oquan.setAttribute("value", quanlist);
 		oamount.setAttribute("value", amountlist);

 		const sum = totalAmount.reduce((a,b) => {
 			return a + b;
 		}) 

 		tbody2.children[0].children[1].innerText = sum;

 		addData(sum);

 	})
}

// PURCHASE FUNCTION CODE
const addData = (value) => {
	otamount.setAttribute("value", value)
}