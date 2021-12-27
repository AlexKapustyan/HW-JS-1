// Домашнее задание №6



// Задача №1
// Создайте объект с тремя методами и двумя свойствами:
// firstOperand - хранит значение первого операнда
// secondOperand - хранит значение второго операнда
// setValues() запрашивает два значения при помощи prompt, сохраняет их значение, приведенное к числу, в firstOperand и  secondOperand.
// sumValues() возвращает сумму введенных свойств.
// multiplyValues() возвращает произведение введенных свойств.
// Сделать проверку в методах sumValues и multiplyValues на наличие чисел, если хотя бы одно число не указано, выводить в консоль сообщение ‘Числа не заданы’.

operator = {
	firstOperand: 0,
	secondOperand: 0,

	setValues() {
			this.firstOperand = +prompt('Введите первое число')
			this.secondOperand = +prompt('Введите второе число')
	},

	sumValues() {
			if (this.checkOperands()) {
					return this.firstOperand + this.secondOperand
			}
	},

	multiplyValues() {
			if (this.checkOperands()) {
					return this.firstOperand * this.secondOperand
			}
	},

	checkOperands() {
			if (isNaN(this.firstOperand) || isNaN(this.secondOperand) || !(this.firstOperand) || !(this.secondOperand)){
					console.log('Числа не установлены')
					return false
			}
			return true
	}
}

operator.setValues()

console.log('Сумма чисел равна:')
console.log(operator.sumValues())

console.log('Произведение чисел:')
console.log(operator.multiplyValues())



//==============================================================================================================================================================================================//

// Задача №2
// Написать функцию-конструктор calculatorMaker. При вызове как конструктор функция calculatorMaker в качестве аргументов должна принимать 2 числа (первый аргумент – начальное значение первого операнда, второй аргумент – начальное значение второго операнда, дефолтное значение которых равняется 0) и возвращать объект со следующими полями:
// firstOperand
// secondOperand
// history
// и унаследованными методами:
// addition
// subtraction
// multiplication
// division
// showHistory
// Поля firstOperand и secondOperand – переменные, в которых лежат значения, над которыми мы будем производить математические операции (могут быть только числом). Их начальное значение задается аргументами при вызове функции-конструктора.
// Поле history – массив строк, в котором будут храниться все операции, произведенные этим экземпляром конструктора calculatorMaker в виде строк.
// Пример массива history:
// [‘5*8’, ‘5-8’, ‘5/8’]
// Методы addition, subtraction, multiplication, division – сделать унаследованными и реализовать следующий функционал:
// Метод addition – производит сложение операндов
// Метод subtraction – производит вычитание операндов
// Метод multiplication – производит умножение операндов
// Метод division – производит деление операндов
// Все эти методы должны возвращать число (результат операции)
// Все эти методы должны добавлять сообщение о своём вызове в массив history
// Метод showHistory – сделать унаследованным и реализовать следующую логику работы функции.
// Метод должен выводить в консоль сообщение ‘Список операций, выполненный этим экземпляром: ’ и далее выводит в консоль все сообщения из массива history, каждый элемент с новой строки.
// Если в массив history пуст, то выводить в консоль следующее сообщение: ‘Список операций – пуст’.


function CalculatorMaker(firstOperand = 0, secondOperand = 0) {
	this.firstOperand = typeof(firstOperand) === 'number' ? firstOperand : 0
	this.secondOperand = typeof(secondOperand) === 'number' ? secondOperand : 0
	this.history = []

	this.addition = function () {
			this.log(`${this.firstOperand} + ${this.secondOperand}`)
			return this.firstOperand + this.secondOperand
	}

	this.subtraction = function () {
			this.log(`${this.firstOperand} - ${this.secondOperand}`)
			return this.firstOperand - this.secondOperand
	}

	this.multiplication = function () {
			this.log(`${this.firstOperand} * ${this.secondOperand}`)
			return this.firstOperand * this.secondOperand
	}

	this.division = function () {
			this.log(`${this.firstOperand} / ${this.secondOperand}`)
			return this.secondOperand !== 0
					? this.firstOperand / this.secondOperand
					: 'На 0 делить нельзя'
	}

	this.log = function (message) {
			if (message.length) {
					this.history.push(message)
			}
	}

	this.showHistory = function () {
			if (this.history.length) {
					this.history.forEach(historyItem => console.log(historyItem))
			}
			else {
					console.log('Список операций пуст')
			}
	}
}

var calculator = new CalculatorMaker(5, 2)

console.log('Результаты операций:')
console.log(calculator.addition())
console.log(calculator.subtraction())
console.log(calculator.multiplication())
console.log(calculator.division())

console.log('Список операций:')
calculator.showHistory()