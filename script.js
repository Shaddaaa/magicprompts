let prompts = [];
load();
function load() {
	let parts = p.split('\n');
	for (part of parts) {
		let x = part.split(',');
		for (let i = 0; i < parseInt(x[1]); i++) {
			prompts.push(x[0]);
		}
	}
}

function gimme() {
	console.log(prompts.length);
	let random = Math.floor(Math.random()*prompts.length);
	console.log(random);
	console.log(prompts[random]);
	document.body.innerHTML += "<br>" + prompts[random];
}