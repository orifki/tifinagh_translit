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
	'ⴰ': 'ا', //
	'ⴱ': 'ب',
	'ⴳ': 'ݣ',
	'ⴷ': 'د',
	'ⴻ': 'ه', //
	'ⴼ': 'ف',
	'ⴽ': 'ك',
	'ⵀ': 'ه',
	'ⵄ': 'ع',
	'ⵎ': 'م',
	'ⵜ': 'ت',
	'ⵞ': 'چ', //تش, ڜ
	'ⵟ': 'ط',
	'ⵙ': 'س',
	'ⵣ': 'ز',
	'ⵕ': 'ڕ', //ڑ
	'ⴹ': 'ض',
	'ⵏ': 'ن',
	'ⵍ': 'ل',
	'ⵔ': 'ر',
	'ⵚ': 'ص',
	'ⵛ': 'ش',
	'ⵊ': 'ج',
	'ⵅ': 'خ',
	'ⵃ': 'ح',
	'ⵡ': 'و',
	'ⵖ': 'غ',
	'ⵯ': 'ʷ',
	'ⵥ': 'ژ', //ڞ
	'ⵇ': 'ق',
	'ⵢ': 'ي',
	'ⵉ': 'إ', //
	'ⵓ': 'و', //
	'ⵒ': 'پ',
	'ⵠ': 'ڥ' // ڤ, ۋ
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

let isFurigana = 1
let isLatin = 1
let output = "<ruby>";
if (isFurigana == 0) output += "<rbc>"

let tifinagh_word = "";
let latin_word = "";
let is_empty = 1
for (let i in input) {
	if (input[i] == ' ' || input[i] == '.' || input[i] == ',' || input[i] == ':') {
		output += tifinagh_word

		//add transliteration
		if (is_empty != 1) {
			output += "<rp>(</rp><rt>"
			if (isFurigana == 0)
				output += "&nbsp;(" + latin_word + ")"
			else
				output += latin_word
			output += "</rt><rp>)</rp>";
			if (isFurigana == 0) output += "</rbc><rbc>"
		}

		//add ponctuation 
		if (input[i] == ' ') output += "&nbsp;"
		//else if (input[i] == '\n') output += "</br>"
		else output += input[i]

		//init variables
		tifinagh_word = "";
		latin_word = "";
		is_empty = 1
	} else {
		tifinagh_word += input[i]
		//latin_word += tifinaghToLatin[input[i]]
		latin_word += tifinaghToArabic[input[i]]
		//	latin_word += tifinaghToLatin[input[i]] ?? "&nbsp;";
		if (input[i] >= 'ⴰ' && input[i] <= 'ⵠ') is_empty = 0
	}

}
if (isFurigana == 0) output += "</rbc>"
output += "</ruby>";
//outputText.style.fontSize = "25px"
outputText.style.fontSize = "x-large";
outputText.innerHTML = output
//}




