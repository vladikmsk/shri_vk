/**
 * Создает экземпляр Машины
 * @this {Car}
 * @param {string} manufacturer Производитель
 * @param {string} model Модель
 * @param {number} year Год производство
 */
function Car(manufacturer, model, year) {
    this.manufacturer = manufacturer;
    this.model = model;
    var d = new Date();
	this.year = year || d.getFullYear();
	this.getCountry = getCountry;
}

// @TODO: если конструктор вызывается без указания текущего года, то подставлять текущий
// @TODO: реализовать методы вывода информации о машине: 

//функция для вывода информации об автомобиле
Car.prototype.getInfo = function(){
			return this.manufacturer + ' ' + this.model + ' ' + this.year;
	}
	
//Функция для вывода детальной информации об автомобиле	
Car.prototype.getDetailedInfo = function(){
			return 'Производитель: ' + this.manufacturer + '. Модель: ' + this.model + '. Год: ' + this.year;
	}

	
	
var bmw = new Car("BMW", "X5", 2010),
    audi = new Car("Audi", "Q5", 2011),
    toyota = new Car("Toyota", "Camry");
	
// console.log(audi.getInfo()); // BMW X5 2010
// console.log(audi.getDetailedInfo()); // Производитель: BMW. Модель: X5. Год: 2010
 //console.log('Car: ' + audi); // Car: BMW X5 2010


/**
 * Создает экземпляр Автосалона
 * @this {CarDealer}
 * @param {string} name Название автосалона
 */
function CarDealer(name) {
    this.name = name;
    this.cars = [];
}

var yandex = new CarDealer('Яндекс.Авто');

// @TODO: реализовать метод добавления машин в автосалон. Предусмотреть возможность добавления одной машины, нескольких машин.

//функция по заполнению списка авто дилера
CarDealer.prototype.add = function(){
	for(var i=0; i<arguments.length; i++)
	this.cars.push(arguments[i]);
}

yandex.add(toyota, audi, bmw);

//yandex
//    .add(toyota)
//    .add(bmw, audi);

// @TODO: реализовать метод установки цены на машину
/**
 * Установить цену на машину
 * @param {string} car идентификатор машины
 * @param {string} price стоимость
 */
// идентификатор машины составляется следующим образом "производитель модель год"
// стоимость машины может быть задана в двух валютах: йена и евро.

//новое свойство для установки цен у дилера
CarDealer.prototype.price = new Array();

//метод дилера для установки цены на авто у дилера
CarDealer.prototype.setPrice = function(carident, price){
			for (var i=0; i < this.cars.length; i++)
				if (this.cars[i].getInfo() == carident){
					this.price[i] = price;
				}
				else{ 
					price[i] = '0';
				}
}

yandex.setPrice('BMW X5 2010', '€2000');
yandex.setPrice('Audi Q5 2011', '€3000');
yandex.setPrice('Toyota Camry 2012', '?3000');
//console.log(yandex.price[0]);
//console.log(yandex.price[1]);

//yandex
//    .setPrice('BMW X5 2010', '€2000')
//    .setPrice('Audi Q5 2012', '€3000')
//    .setPrice('Toyota Camry 2012', '?3000');

// @TODO: реализовать вывод списка автомобилей в продаже, с фильтрацией по стране производителю, используя метод getCountry:
//функция для определения страны производителя
function getCountry() {
    switch (this.manufacturer.toLowerCase()) {
        case 'bmw':
		case 'audi':
            return 'Germany';
		case 'toyota':
            return 'Japan';
	}
}

//метод для вывода списка авто у дилера
CarDealer.prototype.list = function(){
	var cars_list='';
	for (var i=0; i < this.cars.length; i++)
		cars_list = cars_list + this.cars[i].getInfo() + ' ';
	return cars_list;	
}

//метод для вывода списка авто у дилера по странам
CarDealer.prototype.listByCountry = function(country){
	var cars_list='';
	for (var i=0; i < this.cars.length; i++)
		if (this.cars[i].getCountry() == country){
			cars_list = cars_list + this.cars[i].getInfo() + ' ';
		}
	return cars_list;	
}

//console.log(toyota.getCountry());
console.log('Список авто у дилера Yandex:');
console.log(yandex.list());
console.log('Подборка авто по стране Germany:');
console.log(yandex.listByCountry('Germany'));


//метод дилера для вывода списка авто с указанием цен в рублях
CarDealer.prototype.listPrices = function(yen_rur, eur_rur){
	var cars_list='';
	var price = 0;
	for (var i=0; i < this.cars.length; i++){
		if (this.cars[i].getCountry() == 'Germany'){
			price = this.price[i].substring(1)*eur_rur;
		}else{
			price = this.price[i].substring(1)*yen_rur;
		}
		cars_list = cars_list + this.cars[i].getInfo() + ' ' + price + ' rur ';
	}
	return cars_list;	
}



console.log('Список авто у дилера Yandex в рублях по курсу 20 рублей за йен, и 40 рублей за евро:');
console.log(yandex.listPrices('20','40'));

//yandex.list(); //BMW X5 2010, Audi Q5 2012, Toyota Camry 2012
//yandex.listByCountry('Germany'); //BMW X5 2010, Audi Q5 2012

// @TODO: бонус! выводить список машин с ценой в рублях.

//Подробнее: http://company.yandex.ru/job/vacancies/shri.xml