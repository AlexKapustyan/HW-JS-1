
//Домашнее задание №1



// Задача №1
// Перебрать элементы массива, произвести проверку на NaN. Если элемент является NaN, заменить его на null. По завершению цикла вывести в консоль сообщение ‘Проверка и изменение массива завершена’ и получившийся массив на следующей строке.
// Реализовать с помощью цикла for
// Реализовать с помощью цикла while
// Пример массива для преобразований:
// [16, true, 'MetraBit', NaN, {name: 'UserName', hobby: 'JS'}, 30, NaN, null, false, 'Vue']

//Реализовать с помощью цикла for
var x = [16, true, 'MetraBit', NaN, { name: 'UserName', hobby: 'JS' }, 30, NaN, null, false, 'Vue']
for (var i = 1; i < x.length; i++) {
	if (x[i] !== x[i]) {
		x[i] = null;
	}
}
console.log('Проверка и изменение массива завершена')
console.log(x)

//Реализовать с помощью цикла while
var x = [16, true, 'MetraBit', NaN, { name: 'UserName', hobby: 'JS' }, 30, NaN, null, false, 'Vue']
var i = 0
while (i < x.length) {
	i++;
	if (x[i] !== x[i]) {
		x[i] = null;
	}
}
console.log('Проверка и изменение массива завершена')
console.log(x)
//====================================================================================================//

// Задача №2
// Перебрать массив, посчитать сколько в массиве чисел кратных трем и вывести в консоль сообщение ‘В данном массиве n чисел кратных 3’, если они есть. Если нет чисел кратных 3, вывести сообщение ‘В данном массиве нет чисел кратных 3’
// n – количество чисел
// Пример массива: 
// [45, '246', 73, '4', 15, 36, 17, 89, '49', 167, 123]
// Использовать темплейтный литерал
// Реализовать с помощью цикла for
// Реализовать с помощью цикла while

// Реализовать с помощью цикла for
var x = [45, '246', 73, '4', 15, 36, 17, 89, '49', 167, 123]
var n = 0
for (var i = 0; i < x.length; i++) {
	if (x[i] % 3 === 0 && x[i] !== String(x[i])) {
		n++
	}
}
if (n > 0) {
	console.log(`В данном массиве ${n} чисел кратных 3`)
} else {
	console.log(`В данном массиве нет чисел кратных 3`)
}

// Реализовать с помощью цикла while
var x = [45, '246', 73, '4', 15, 36, 17, 89, '49', 167, 123]
var n = 0
var i = 0
while (i < x.length) {
	i++
	if (x[i] % 3 === 0 && x[i] !== String(x[i])) {
		n++
	}
}
if (n > 0) {
	console.log(`В данном массиве ${n} чисел кратных 3`)
} else {
	console.log(`В данном массиве нет чисел кратных 3`)
}

//===============================================================================================================//

// Задача №3
// Написать функцию, которая принимает в качестве входного параметра массив, в котором находятся элементы следующих типов: строка, число, логическое значение(булиан), null и объект. Посчитать количество элементов каждого типа и вывести в консоль в следующем формате:
// String: n
// Number: n
// Boolean: n
// Null: n
// Object: n
// n – число элементов этого типа в массиве
// Пример массива: 
// [16, true, 'MetraBit', NaN, {name: 'UserName', hobby: 'JS'}, 30, NaN, null, false, 'Vue']

var array = [16, true, 'MetraBit', NaN, { name: 'UserName', hobby: 'JS' }, 30, NaN, null, false, 'Vue']
function chekFunc() {
	var arrayString = 0
	var arrayNumber = 0
	var arrayBoolean = 0
	var arrayNull = 0
	var arrayObject = 0

	for (var i = 0; i < array.length; i++) {
		if (typeof array[i] === 'string') {
			arrayString++
		}
		if (typeof array[i] === 'number') {
			arrayNumber++
		}
		if (typeof array[i] === 'boolean') {
			arrayBoolean++
		}
		if (typeof array[i] === 'null') {
			arrayNull++
		}
		if (typeof array[i] === 'object') {
			arrayObject++
		}
	}
	console.log(`
     String: ${arrayString}
	 Number: ${arrayNumber}
	 Boolean: ${arrayBoolean}
	 Null: ${arrayNull}
	 Object: ${arrayObject}
  `)
}

chekFunc()




//==============================================================================================================//

// Задача №4
// Написать функцию, которая принимает два аргумента. Первый аргумент - имя пользователя (строка). Второй аргумент – сообщение приветствия. Функция должна возвращать строку, объединяющую имя и сообщения приветствия.
// Реализовать функцию используя function declaration
// Реализовать функцию используя function expression
// Использовать оператор return

// Реализовать функцию используя function declaration
var name = 'Alex'
var say = 'Hi'

function sayHi(name, say) {
	console.log(`${name}, ${say}`)
}

sayHi(name, say)

// Реализовать функцию используя function declaration
// Использовать оператор return
var name = 'Alex'
var say = 'Hi'

function sayHi(name, say) {
	return (`${name}, ${say}`)
}

sayHi(name, say)


// Реализовать функцию используя function expression
var nameSay = function () {
	var name = 'Alex'
	var say = 'Hi'
	console.log(`${name}, ${say}`)
}

nameSay()
