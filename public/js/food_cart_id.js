
const card = document.querySelectorAll('.card-body');
const len = card.length;

const idfoods = [];
const idprices = [];
const idquantities = [];
const idadds = [];
const iddeletes = [];


const foodid = () => {
	for (let i = 0; i < len; i++){
	    const name = card[i].children[0];
		const setName = name.setAttribute("id","food"+0+i);
		const getName = name.getAttribute("id");
		idfoods.push(document.getElementById(getName));
	}
}

const priceid = () => {
	for (let i = 0; i < len; i++){
	    const price = card[i].children[1];
		const setPrice = price.setAttribute("id","price"+1+i);
		const getPrice = price.getAttribute("id");
		idprices.push(document.getElementById(getPrice));
	}
}

const quantityid = () => {
	for (let i = 0; i < len; i++){
	    const qty = card[i].children[2];
		const setQty = qty.setAttribute("id","qty"+2+i);
		const getQty = qty.getAttribute("id");
		idquantities.push(document.getElementById(getQty));
	}
}

const addid = () => {
	for (let i = 0; i < len; i++){
	    const add = card[i].children[4].children[0];
		const setAdd = add.setAttribute("id","add"+4+0+i);
		const getAdd = add.getAttribute("id");
		idadds.push(document.getElementById(getAdd));
	}
}

const deleteid = () => {
	for (let i = 0; i < len; i++){
	    const del = card[i].children[4].children[1];
		const setDel = del.setAttribute("id","add"+4+1+i);
		const getDel = del.getAttribute("id");
		iddeletes.push(document.getElementById(getDel));
	}
}

foodid();
priceid();
quantityid();
addid();
deleteid();
