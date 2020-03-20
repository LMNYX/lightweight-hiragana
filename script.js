var hiragana = {
	"i": "い",
	"u": "う",
	"e": "え",
	"o": "お",
	"ka": "か",
	"ki": "き",
	"ku": "く",
	"ke": "け",
	"ko": "こ",
	"sa": "さ",
	"shi": "し",
	"su": "す",
	"se": "せ",
	"so": "そ",
	"ta": "た",
	"chi": "ち",
	"tsu": "つ",
	"te": "て",
	"to": "と",
	"na": "な",
	"ni": "に",
	"nu": "ぬ",
	"ne": "ね",
	"ho": "ほ",
	"ma": "ま",
	"mi": "み",
	"mu": "む",
	"me": "め",
	"mo": "も",
	"ya": "や",
	"yu": "ゆ",
	"yo": "よ",
	"ra": "ら",
	"ri": "り",
	"ru": "る",
	"re": "れ",
	"ro": "ろ",
	"wa": "わ",
	"wo": "を",
	"n": "ん",
};
var currentsym = null;
var hiddentrans = false;

var getRandomProperty = function (obj) {
    var keys = Object.keys(obj);
    return keys[ keys.length * Math.random() << 0];
};
function setCurrentSymbol(f)
{
	currentsym = f;
}
function setVisibility(boo)
{
	hiddentrans = boo;
	if(boo)
	{
		document.querySelector('.symbol_trans').innerText = "      ";
	}
	else
	{
		document.querySelector('.symbol_trans').innerText = currentsym;
	}
}
function displayRandomHiragana()
{
	setCurrentSymbol(getRandomProperty(hiragana));
	document.querySelector('.symbol').innerText = hiragana[currentsym];
	if(hiddentrans)
	{
		document.querySelector('.symbol_trans').innerText = "      ";
	}
	else
	{
		document.querySelector('.symbol_trans').innerText = currentsym;
	}
}

window.onload = function()
{
	displayRandomHiragana();
}