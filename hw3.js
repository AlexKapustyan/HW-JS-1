// Домашнее задание №3



// Задача №1
// Написать функцию, которая в качестве формальных параметров принимает неограниченное количество аргументов. В функции произвести проверку является ли переданный аргумент массивом. Из аргументов, которые являются массивами, сделать один общий массив. Добавить строку ‘Start’ в начало массива, строку ‘The End’ в конец массива. Вернуть результирующий массив в обратной последовательности (Первый элемент – последний, а последний - первый).
// Пример аргументов:
// Null, 123, ‘JS’, [‘Nastya’, ‘Dima’, ‘Max’, ‘Masha’], undefined, {}, true, [‘Sasha’, ‘Denis’, ‘Marina’]

function argum(...arg) {
	var arrArg = Array.from(arg)
	var array = []
	for (var i = 0; i < arrArg.length; i++) {
		if (Array.isArray(arrArg[i])) {
			array.push(arrArg[i])
			var arrayResult = array.flat()
			arrayResult.unshift('Start')
			arrayResult.push('The End')
			arrayResult.reverse()
		}
	}
	return console.log(arrayResult)
}

argum(null, 123, 'JS', ['Nastya', 'Dima', 'Max', 'Masha'], undefined, {}, true, ['Sasha', 'Denis', 'Marina'])


//==============================================================================================================================================================================================//


// Задача №2
// Написать функцию, которая в качестве аргументов принимает два массива, первый – массив чисел, второй – массив строк. Производит проверку равна ли длинная первого массива, длине второго массива. Если результат отрицательный, то вернуть строку “Массивы имеют разную длину”. Если результат положительный, то отсортировать массив чисел по возрастанию и с помощью метода splice добавить все элементы массива со строками в середину массива с числами (чтобы в результате получился одномерный массив). Вернуть первую половину результирующего массива используя метод slice.
// Пример массивов:
// [73, 4, 11, 234, 58, 134]
// ['js', 'css', 'jq’, ‘html’, ‘vue’, ‘bootstrap’]

function checkLengthArray() {
	var arrayFirst = [73, 4, 11, 234, 58, 134]
	var arrraySecond = ['js', 'css', 'jq', 'html', 'vue', 'bootstrap']
	if (arrayFirst.length === arrraySecond.length) {
		arrayFirst.sort(function (a, b) {
			return newArray = a - b
		})
	} else {
		return ('Массивы имеют разную длину')
	}
	var middleEl = arrayFirst[Math.floor(arrayFirst.length / 2)]
	arrayFirst.indexOf(middleEl)
	for (var i = 0; i < arrraySecond.length; i++) {
		arrayFirst.splice(arrayFirst.indexOf(middleEl), 0, arrraySecond[i])
	}
	return arrayFirst
}



//==============================================================================================================================================================================================//


// Задача №3
// Написать функцию, которая принимает в качестве аргумента строку произвольной длины и число (n) – до какого символа обрезать строку.
// Реализуйте сравнение длины строки и переданного вторым аргументом числа. Если длина строки превышает n, то вернуть строку, состоящую из первых n символов строки и добавить троеточия в конце. Если меньше, вернуть начальную строку, в которой, заменены все пробелы на “-” и первая и последняя буквы являются заглавными.

function comparisonOfStringLength(string, number) {
	var string = String
	var n = Number

	if (string.length > n) {
		var str = string.substring(0, n)
		console.log(`${str}...`)
	} else {
		var str2 = string[0].toUpperCase() + string.slice(1);
		var str3 = str2.slice(0, - 1) + str2.slice(-1).toUpperCase()
		str4 = str3.replace(/ /gi, "-")
		return str4
	}
}



//==============================================================================================================================================================================================//


// Задача №4
// Напишите функцию, которая принимает первым аргументом фразу, а вторым аргументом – слово (часть заданной фразы). Вырежьте из фразы заданное слово и верните строку которая осталась.
// Реализовать тремя различными способами:
// Substr
// Substring
// Slice

//Метод Splice
function cutWord(phrase, word) {
	var phrase
	var word
	var formatPhrase = phrase.split(' ')
	if (formatPhrase.includes(word)) {
		var indexWord = formatPhrase.indexOf(word)
		formatPhrase.splice(indexWord, 1)
		var resultPhrase = formatPhrase.join(' ')
	}
	return resultPhrase
}

cutWord('Hi Andru, how are you?', 'are')

//Для решения задачи остальными методами все равно приходится использовать метод Splice. По крайней мере в моем случае(((


