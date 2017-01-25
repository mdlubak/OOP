var GalaxyS6 = new Telefon('Samsung', 2200, 'czarny','', '10', '');
var iPhone6S = new Telefon('Apple', 3300, 'srebrny','USD', '10', '');
var OnePlusOne = new Telefon('OnePlus', 1100, 'bialy','EUR', '20', '');

function Telefon(brand, price, color, currency, warrantyPercent, warrantyCost) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.currency = currency || 'PLN';
	this.warrantyCost = getWarrantyCost(price, warrantyPercent);
	this.warrantyPercent = warrantyPercent;
}

function getWarrantyCost(price, warrantyPercent) {	
	return (warrantyPercent/100) * price;
}

Telefon.prototype.printInfo = function() {
	console.log('Marka telefonu to ' + this.brand + ", kolor to " + this.color + ', a cena to ' + this.price + this.currency +'.' + ' Przedłużona gwarancja: ' + this.warrantyCost );
}

GalaxyS6.printInfo();
iPhone6S.printInfo();
OnePlusOne.printInfo();