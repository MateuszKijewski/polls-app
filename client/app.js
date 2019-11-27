const generateElement = data => {
	const element = document.createElement('div');
	// element.innerHTML = ` id: ${data.id} <br> name:${data.username}`;
	console.log(data);
	// document.querySelector('.test').appendChild(element);
};

document.addEventListener('DOMContentLoaded', event => {
	const parent = document.querySelector('.test');
	// fetch('https://mkijewski.pythonanywhere.com/api/balance/operations')
	// 	.then(res => res.json())
	// 	.then(data => data.forEach(data => generateElement(data)));

	document.querySelector('.click').addEventListener('click', e => {
		e.preventDefault();

		fetch('https://mkijewski.pythonanywhere.com/api/balance/operations', {
			method: 'POST',
			body: JSON.stringify({
				amount: '400',
				source: 'macias huj',
				category: 'Shopping'
			}),
			headers: {
				'Content-Type': 'application/json',
				// eslint-disable-next-line
				'Authorization': 'Token 2bee860ff4560abd8a2b8e7663b96bd993bb1aa5'
			}
		})
			.then(res => console.log(res))
			.catch(err => console.log(err));
	});
});
