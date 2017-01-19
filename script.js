var GalaxyS6 = new Telefon('Samsung', 2200, 'czarny');
var iPhone6S = new Telefon('Apple', 3300, 'srebrny');
var OnePlusOne = new Telefon('OnePlus', 1100, 'bialy');

function Telefon(marka, cena, kolor) {
	this.marka = marka;
	this.cena = cena + ' PLN';
	this.kolor = kolor;
}

Telefon.prototype.printInfo = function() {
	console.log('Marka telefonu to ' + this.marka + ", kolor to " + this.kolor + ', a cena to ' + this.cena + '.');
}

GalaxyS6.printInfo();
iPhone6S.printInfo();
OnePlusOne.printInfo();