/** 
 * @description: Tranliteration of Tifinagh text to Latin / Arabic scripts.
 * @version: 1.0 (April 2024)
 * @author: Omar Rifki
 **/



//Equivalence tables ⵣ -> Latin / ع letters
const ⵣToL = {
	'ⴰ': 'a', 'ⴱ': 'b', 'ⴳ': 'g', 'ⴷ': 'd', 'ⴻ': 'e', 'ⴼ': 'f', 'ⴽ': 'k',
	'ⵀ': 'h', 'ⵄ': 'ɛ', 'ⵎ': 'm', 'ⵜ': 't', 'ⵞ': 'č', 'ⵟ': 'ṭ', 'ⵙ': 's',
	'ⵣ': 'z', 'ⵕ': 'ṛ', 'ⴹ': 'ḍ', 'ⵏ': 'n', 'ⵍ': 'l', 'ⵔ': 'r', 'ⵚ': 'ṣ',
	'ⵛ': 'c', 'ⵊ': 'j', 'ⵅ': 'x', 'ⵃ': 'ḥ', 'ⵡ': 'w', 'ⵖ': 'ɣ', 'ⵯ': 'ʷ',
	'ⵥ': 'ẓ', 'ⵇ': 'q', 'ⵢ': 'y', 'ⵉ': 'i', 'ⵓ': 'u', 'ⵒ': 'p', 'ⵠ': 'v'
};

const ⵣToع = {
	'ⴰ': 'v', //vowel: ا ,أ 
	'ⵉ': 'v', //vowel: إ ,ي 
	'ⵓ': 'v', //vowel: و ,ؤ
	'ⴻ': 'v', //vowel: ه 
	'ⵯ': 'ʷ',
	'ⴱ': 'ب', 'ⴷ': 'د', 'ⴼ': 'ف', 'ⴽ': 'ك', 'ⵀ': 'ه', 'ⵄ': 'ع', 'ⵎ': 'م', 'ⵜ': 'ت',
	'ⵟ': 'ط', 'ⵙ': 'س', 'ⵣ': 'ز', 'ⴹ': 'ض', 'ⵏ': 'ن', 'ⵍ': 'ل', 'ⵔ': 'ر', 'ⵚ': 'ص',
	'ⵛ': 'ش', 'ⵊ': 'ج', 'ⵅ': 'خ', 'ⵃ': 'ح', 'ⵡ': 'و', 'ⵖ': 'غ', 'ⵇ': 'ق', 'ⵢ': 'ي',
	'ⵒ': 'پ',
	'ⴳ': 'ڭ', //other forms: ڨ ,گ
	'ⵞ': 'چ', //other forms: تش ,ڜ
	'ⵕ': 'ڕ', //other forms: ڑ
	'ⵥ': 'ژ', //other forms: ڞ
	'ⵠ': 'ڥ' //other forms: ڤ ,ۋ 
};



//link with the HTML page
let inputText = document.getElementById('inputText');
let outputText = document.getElementById('outputText');
let isFurigana = document.querySelector('input[name="furi_okuri"]:checked').value;
//=1 Furigana style, otherwise Okurigana style
let isLatin = document.querySelector('input[name="latin_ara"]:checked').value;
//=1 to Latin alphabets, otherwise to Arabic abjad
inputText.addEventListener('input', addTranslit);

function listen_button() {
	isFurigana = document.querySelector('input[name="furi_okuri"]:checked').value;
	isLatin = document.querySelector('input[name="latin_ara"]:checked').value;
	input = inputText.value.toLowerCase();
	if (input.length != 0)
		addTranslit()
}

document.getElementById('small_font').onclick = function () {
	outputText.style.fontSize = "15px";
	addTranslit()
}

document.getElementById('medium_font').onclick = function () {
	outputText.style.fontSize = "25px";
	addTranslit()
}

document.getElementById('large_font').onclick = function () {
	outputText.style.fontSize = "35px";
	addTranslit()
}


//for debugging 
//let input = "ⴹⴹⴰⵕⵍⴱⵉⴹⴰ - ⵉⵙⴽⵔ ⵍⴰⵎⵉⵔ ⵏ ⵉⵎⵓⵎⵏⵏ, ⴱⴰⴱ ⵏ ⵡⴰⴷⴷⵓⵔ ⴰⴳⵍⵍⵉⴷ ⵎⵓⵃⵎⵎⴷ ⵡⵉⵙⵙ ⵚⴹⵉⵚ, ⴰⴷ ⵜ ⵉⵏⵚⵕ ⵕⴱⴱⵉ, ⵉⵎⴰⵏⵏ ⴷ ⴱⴰⴱ ⵏ ⵜⴰⵜⵜⵓⵢⵜ ⵜⴰⴳⵍⴷⴰⵏⵜ ⴰⵎⴽⴽⵓⵙⵓ ⵏ ⵜⴳⵍⴷⵉⵜ ⴰⴳⵍⴷⵓⵏ ⵎⵓⵍⴰⵢ ⵍⵃⴰⵙⴰⵏ, ⴷ ⴱⴰⴱ ⵏ ⵜⴰⵜⵜⵓⵢⵜ ⵜⴰⴳⵍⴷⴰⵏⵜ ⴰⴳⵍⴷⵓⵏ ⵎⵓⵍⴰⵢ ⵕⵛⵉⴷ, ⴷ ⴱⴰⴱ ⵏ ⵜⴰⵜⵜⵓⵢⵜ ⴰⴳⵍⴷⵓⵏ ⵎⵓⵍⴰⵢ ⵃⵎⴷ, ⴷ ⴱⴰⴱ ⵏ ⵜⴰⵜⵜⵓⵢⵜ ⴰⴳⵍⴷⵓⵏ ⵎⵓⵍⴰⵢ ⵙⵎⴰⵄⵉⵍ, ⴰⵙⵙ ⵏ ⵓⴽⵔⴰⵙ, ⵜⴰⵥⴰⵍⵍⵉⵜ ⵏ ⵄⵉⴷ ⵍⴼⵉⵟⵕ ⴷ ⵉⵙⵏⵓⴱⴳ ⵉⵙⵔⵖⵓⴷⵏ."
//let outputText = document.getElementById('test');
//let isFurigana = 1
//let isLatin = 0

function translitع(input, word, count) {
	if (ⵣToع[input] == 'v' && word == "") {
		if (input == 'ⴰ')
			return ('أ')
		else if (input == 'ⵓ')
			return ('ؤ')
		else if (input == 'ⵉ')
			return ('إ')
	} else if (ⵣToع[input] == 'v' && word != "") {
		if (input == 'ⴰ')
			return ('ا')
		else if (input == 'ⵓ')
			return ('و')
		else if (input == 'ⵉ')
			return ('ي')
	} else if (word[count - 1] == input) { //TODO. not working
		return ('ﹼ')
	} else {
		return (ⵣToع[input])
	}
}

function addTranslit() {
	input = inputText.value.toLowerCase();
	if (input.length == 0) {
		outputText.innerHTML = '';
		return;
	}

	let output = "<ruby>";
	let tifinagh_word = "";
	let translit_word = "";
	let is_empty = 1
	let count_letter = 1
	for (let i in input) {
		if (input[i] == ' ' || input[i] == '.' || input[i] == ',' || input[i] == ':') {
			output += tifinagh_word


			if (is_empty != 1) {
				//add transliteration
				output += "<rp>(</rp><rt>"
				if (isFurigana == 0)
					output += "<rtc>&nbsp;(" + translit_word + ")</rtc>"
				else
					output += translit_word
				output += "</rt><rp>)</rp>";

				//add ponctuation 
				if (input[i] == ' ') output += "&nbsp;"
				else if (input[i] == '\n') output += "</br>"
				else output += input[i]
			}

			//init variables
			tifinagh_word = "";
			translit_word = "";
			is_empty = 1
			count_letter = 1
		} else {
			tifinagh_word += input[i]
			if (isLatin == 1)
				translit_word += ⵣToL[input[i]]
			else
				translit_word += translitع(input[i], translit_word, count_letter)
			if (input[i] >= 'ⴰ' && input[i] <= 'ⵠ') is_empty = 0 //if a chatacter
			count_letter += 1
		}

	}
	output += "</ruby>";
	//outputText.style.fontSize = "25px"
	//outputText.style.fontSize = "x-large";
	outputText.innerHTML = output
}




