
const disable = () => {
	for (let btndel of iddeletes){
		btndel.disabled = true
	}
}

const add = () => {
	for (let btn of idadds){
		btn.addEventListener('click', function() {	
		   const i = idadds.indexOf(btn);
		   btn.disabled = true;
		   iddeletes[i].disabled = false;
		})
	}
}

const del = () => {
	for (let btndel of iddeletes){
		btndel.addEventListener('click', function() {
			const i = iddeletes.indexOf(btndel);
			btndel.disabled = true
			idadds[i].disabled = false;
		})
	}
}

disable();
add();
del();







         