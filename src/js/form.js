const inputs = document.querySelectorAll('.form-control input');
const labels = document.querySelectorAll('.form-control label');

/* -------------------------------- Start - Form : Animation -------------------------------- */

labels.forEach(label => {
	label.innerHTML = label.innerText
		.split('')
		.map((letter, idx) => `<span style="
				transition-delay: ${idx * 50}ms
			">${letter}</span>`)
		.join('');
});

/* -------------------------------- End - Form : Animation -------------------------------- */