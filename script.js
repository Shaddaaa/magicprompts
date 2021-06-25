let prompts = [];
let sets = [];
load();
function load() {
	let parts = p.split('\n');
	for (part of parts) {
		let x = part.split(',');
		for (let i = 0; i < parseInt(x[1]); i++) {
			prompts.push(x[0]);
		}
	}
	let setparts = s.split('\n');
	for (part of setparts) {
		sets.push(part);
	}
}

function gimme() {
	let prompt = prompts[Math.floor(Math.random()*prompts.length)];
	if (prompt==="Random Set") {
		prompt = "Set: " + sets[Math.floor(Math.random()*sets.length)];
	}
	document.body.innerHTML += "<br>" + prompt;
}