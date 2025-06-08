
const flowerAmount = {
	"1": [ {amount: "1x", chance: 65}, {amount: "2x", chance: 30}, {amount: "4x", chance: 5} ]
}


const flowerTypes = {
	"1": [{type: "Red Rose", rarity: "(Common)"},{type: "Pink Rose", rarity: "(Common)"} , {type: "White Rose", rarity: "(Common)"}],
	"2": [{type: "Orange Marigold", rarity: "(Common)"}, {type: "Yellow Marigold", rarity: "(Common)"}, {type: "White Marigold", rarity: "(Common)"}],
	"3": [{type: "Red Hibiscus", rarity: "(Common)"},{type: "Pink Hibiscus", rarity: "(Common)"},{type: "Yellow Hibiscus", rarity: "(Common)"}],
	"4": [{type: "White Plumeria", rarity: "(Common)"},{type: "Pink Plumeria", rarity: "(Common)"},{type: "Red Plumeria", rarity: "(Common)"}],
	"5": [{type: "Purple Orchid", rarity: "(Common)"},{type: "White Orchid", rarity: "(Common)"},{type: "Yellow Orchid", rarity: "(Common)"}]
	
}

let flowerColour = '';


function rollAmount(options) {
    let rand = Math.floor(Math.random() * 100) + 1; // roll 1 to 100
	let cumulative = 0;
	for (const opt of options) {
		cumulative += opt.chance;
		if (rand <= cumulative) {
		  return opt.amount;
		}
	  }
	return options[options.length - 1].amount; 
}

function rollColour(type) { //randomize flower colours based on the clicked button
	const resultOptions = flowerTypes[type]; //get flower Type
	
	//randomize flower Type
    let rand = Math.floor(Math.random() * (resultOptions.length));
	
	flowerColour = resultOptions[rand];
	if(flowerColour)
		return flowerColour;
	return resultOptions[0]; 
   
}

function renderBreedingResult(amountResult, flowerName, flowerRarity) {
	const container = document.getElementById("results");
	const iconPath = 'icons/' + flowerName + '.png';
	const div = document.createElement("div");
	div.classList.add("result-entry");

	const img = document.createElement("img");
	img.src = iconPath;
	img.alt = flowerName;
	img.classList.add("flower-icon");

	const text = document.createElement("span");
	text.textContent = amountResult + ' ' + flowerName + ' ' + flowerRarity;

	div.appendChild(img);
	div.appendChild(text);
	container.appendChild(div);
}



function rollFlower(type) {
	//roll the flower amount and colour when button is clicked
    let colourResult = rollColour(type);
	let flowerColour = colourResult.type;
	let flowerRarity = colourResult.rarity;
    let amountResult = rollAmount(flowerAmount['1']);
	renderBreedingResult(amountResult, flowerColour, flowerRarity);

}
