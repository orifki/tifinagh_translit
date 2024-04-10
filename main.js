const tifinaghToLatin = {
	'ⴰ': 'a',
	'ⴱ': 'b',
	'ⴳ': 'g',
	'ⴷ': 'd',
	'ⴻ': 'e',
	'ⴼ': 'f',
	'ⴽ': 'k',
	'ⵀ': 'h',
	'ⵄ': 'ɛ',
	'ⵎ': 'm',
	'ⵜ': 't',
	'ⵞ': 'č',
	'ⵟ': 'ṭ',
	'ⵙ': 's',
	'ⵣ': 'z',
	'ⵕ': 'ṛ',
	'ⴹ': 'ḍ',
	'ⵏ': 'n',
	'ⵍ': 'l',
	'ⵔ': 'r',
	'ⵚ': 'ṣ',
	'ⵛ': 'c',
	'ⵊ': 'j',
	'ⵅ': 'x',
	'ⵃ': 'ḥ',
	'ⵡ': 'w',
	'ⵖ': 'ɣ',
	'ⵯ': 'ʷ',
	'ⵥ': 'ẓ',
	'ⵇ': 'q',
	'ⵢ': 'y',
	'ⵉ': 'i',
	'ⵓ': 'u',
	'ⵒ': 'p',
	'ⵠ': 'v',
	',': ','
};

const tifinaghToArabic = {
	'ⴰ': 'ا',
	'ⴱ': 'ب',
	'ⴳ': 'ج',
	'ⴷ': 'د',
	'ⴻ': 'e',
	'ⴼ': 'ف',
	'ⴽ': 'ك',
	'ⵀ': 'ه',
	'ⵄ': 'ɛ',
	'ⵎ': 'م',
	'ⵜ': 't',
	'ⵞ': 'č',
	'ⵟ': 'ط',
	'ⵙ': 'س',
	'ⵣ': 'ز',
	'ⵕ': 'ṛ',
	'ⴹ': 'ḍ',
	'ⵏ': 'ن',
	'ⵍ': 'ل',
	'ⵔ': 'ر',
	'ⵚ': 'ص',
	'ⵛ': '',
	'ⵊ': 'ج',
	'ⵅ': 'x',
	'ⵃ': 'ح',
	'ⵡ': 'و',
	'ⵖ': 'ɣ',
	'ⵯ': 'ʷ',
	'ⵥ': 'ẓ',
	'ⵇ': 'q',
	'ⵢ': 'ي',
	'ⵉ': 'إ',
	'ⵓ': 'u',
	'ⵒ': 'p',
	'ⵠ': 'v'
};


//let inputText = document.getElementById('inputText');
//let outputText = document.getElementById('outputText');
//inputText.addEventListener('input', addLatinScript);

let input = "ⴹⴹⴰⵕⵍⴱⵉⴹⴰ - ⵉⵙⴽⵔ ⵍⴰⵎⵉⵔ ⵏ ⵉⵎⵓⵎⵏⵏ, ⴱⴰⴱ ⵏ ⵡⴰⴷⴷⵓⵔ ⴰⴳⵍⵍⵉⴷ ⵎⵓⵃⵎⵎⴷ ⵡⵉⵙⵙ ⵚⴹⵉⵚ, ⴰⴷ ⵜ ⵉⵏⵚⵕ ⵕⴱⴱⵉ, ⵉⵎⴰⵏⵏ ⴷ ⴱⴰⴱ ⵏ ⵜⴰⵜⵜⵓⵢⵜ ⵜⴰⴳⵍⴷⴰⵏⵜ ⴰⵎⴽⴽⵓⵙⵓ ⵏ ⵜⴳⵍⴷⵉⵜ ⴰⴳⵍⴷⵓⵏ ⵎⵓⵍⴰⵢ ⵍⵃⴰⵙⴰⵏ, ⴷ ⴱⴰⴱ ⵏ ⵜⴰⵜⵜⵓⵢⵜ ⵜⴰⴳⵍⴷⴰⵏⵜ ⴰⴳⵍⴷⵓⵏ ⵎⵓⵍⴰⵢ ⵕⵛⵉⴷ, ⴷ ⴱⴰⴱ ⵏ ⵜⴰⵜⵜⵓⵢⵜ ⴰⴳⵍⴷⵓⵏ ⵎⵓⵍⴰⵢ ⵃⵎⴷ, ⴷ ⴱⴰⴱ ⵏ ⵜⴰⵜⵜⵓⵢⵜ ⴰⴳⵍⴷⵓⵏ ⵎⵓⵍⴰⵢ ⵙⵎⴰⵄⵉⵍ, ⴰⵙⵙ ⵏ ⵓⴽⵔⴰⵙ, ⵜⴰⵥⴰⵍⵍⵉⵜ ⵏ ⵄⵉⴷ ⵍⴼⵉⵟⵕ ⴷ ⵉⵙⵏⵓⴱⴳ ⵉⵙⵔⵖⵓⴷⵏ."
let outputText = document.getElementById('test');

//function addLatinScript() 
// {
//input = inputText.value.toLowerCase();
// if (input.length === 0) {
// 	outputText.innerHTML = '';
// 	//inputText.style.height = '5px';
// 	return;
// }
//inputText.style.height = (inputText.scrollHeight + 2) + "px";

let isFurigana = 0
let output = "<ruby>";
if (isFurigana == 0) {
	output += "<rbc>"
}

let tifinagh_word = "";
let latin_word = "";
for (let i in input) {

	if (input[i] == ' ' || input[i] == '.' || input[i] == ':') {
		output += tifinagh_word + "<rp>(</rp><rt>"
		if (isFurigana == 0 && latin_word != ' ') {
			output += "&nbsp;(" + latin_word + ")&nbsp;"
		} else {
			output += latin_word
		}
		output += "</rt><rp>)</rp>";
		if (isFurigana == 0) {
			output += "</rbc><rbc>"
		}
		output += input[i]
		tifinagh_word = "";
		latin_word = "";
	} else {
		tifinagh_word += input[i]
		if (input[i] != ',') {
			latin_word += tifinaghToLatin[input[i]] ?? "&nbsp;&nbsp;";
		}
	}

}
if (isFurigana == 0) {
	output += "</rbc>"
}
output += "</ruby>";
//outputText.style.fontSize = "25px"
outputText.style.fontSize = "x-large";
outputText.innerHTML = output
//}




