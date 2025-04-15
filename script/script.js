let victoriesInput = document.querySelector('.hero-data__victories')
let defeatsInput = document.querySelector('.hero-data__defeats')
let button = document.querySelector('.hero-data__button')
let classificationText = document.querySelector('.hero-classification')
let alertText = document.querySelector('.alert')
let image = document.querySelector('#hero-img')

let rankImages = [
    {rank: "Ferro", src: "../assets/images/iron.png"},
    {rank: "Bronze", src: "../assets/images/bronze.png"},
    {rank: "Prata", src: "../assets/images/silver.png"},
    {rank: "Ouro", src: "../assets/images/gold.png"},
    {rank: "Diamante", src: "../assets/images/diamond.png"},
    {rank: "Lendário", src: "../assets/images/legendary.png"},
    {rank: "Imortal", src: "../assets/images/immortal.png"}
]

function getVictories() {
    return victoriesInput.value
}

function getDefeats() {
    return defeatsInput.value
}

function getVictoryBalance(victories, defeats) {
	let result = victories - defeats;
	return result < 0 ? 0 : result;
}

function getRank(total) {

	let rank;
	if (total <= 10) {
		rank = "Ferro";
	} else if (total <= 20) {
		rank = "Bronze";
	} else if (total <= 50) {
		rank = "Prata";
	} else if (total <= 80) {
		rank = "Ouro";
	} else if (total <= 90) {
		rank = "Diamante";
	} else if (total <= 100) {
		rank = "Lendário";
	} else {
		rank = "Imortal";
	}

	return rank;
}

button.addEventListener('click', () => {
    let victories = getVictories()
    let defeats = getDefeats()
    let classification = getRank(getVictoryBalance(victories, defeats))
    let imageData = rankImages.find(img => img.rank === classification)

    if (victories === "" || defeats === "") {
        alertText.textContent = 'Preencha os campos vazios'
    } else {
        classificationText.textContent = `O Herói tem de saldo de ${getVictoryBalance(victories, defeats)} vitórias está no nível ${classification}`;
        image.setAttribute('src', `${imageData.src}`)
    }

})

