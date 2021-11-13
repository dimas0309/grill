
const delfood = () => {
	for (let btn of iddeletes){
		btn.addEventListener('click', function() {
			const i = iddeletes.indexOf(btn)
			const name = idfoods[i].innerText;
			const idx = foodlist.indexOf(name);
			const del = tbody.children[idx + 1].remove();
			foodlist.splice(idx, 1);
			pricelist.splice(idx, 1);
			quanlist.splice(idx, 1);
			amountlist.splice(idx, 1);
			totalAmount.splice(idx, 1);

			ofood.setAttribute("value",foodlist);
 		    oprice.setAttribute("value", pricelist);
 		    oquan.setAttribute("value", quanlist);
 		    oamount.setAttribute("value", amountlist);

			const sub = totalAmount.reduce((a,b) => {
 			return a + b;
 		}) 

 		tbody2.children[0].children[1].innerText = sub;

 		addData(sub);

		})
	}
}

delfood();