// 1. Ixtiyoriy arrow function yarating va unga beriladigan argument promt yordamida kiritilgan son bo'lsin. Kiritilgan sonning raqamlari yig'indisi topilsin
// let number = prompt("")
const numberSum = (num) => {
  let sum = 0
  let arr = num.toString().split("")
  return arr.reduce((boshlangich, item) => boshlangich += +item, 0)
}
// console.log(numberSum(number));


// 2. Ixtiyoriy arrow function yarating va uning parametriga bi nechta sonlar berilsin. va o'sha sonlar yig'indisini arrayning element lari ko'rinishida ifodalang: masalan: [1, 22, 3] yigindisi: 26 result=> [2,6] 
const twoExample = (...numbers) => {
  let sum = numbers.reduce((bosh, item) => bosh += item, 0) + ""

  let newArr = Array.from(sum, Number)
  return newArr
}
// console.log(twoExample(1,2,3,4,5))


// 3.Promt yordamida ixtiyoriy son kiritilsin va o'sha sonning lvadradi palindrome yoki palindrome emasligi topilsin algorithm function ichida bo'lsin
const kvadratPalintrom = (son = 111) => {
  let square = Math.pow(son, 2)
  let palintrom = +square.toString().split("").reverse().join("")

  return palintrom === square ? "Palintrom" : "emas"
}

// console.log(kvadratPalintrom())



// 4.Ixtiyoriy 2 ta funciton yaratilsin 1-function ichida random sonning raqamlari yig'indisi topilsin va mana shu 1-function 2-funciton ni ichida ishlasin masala callback function yordamida bajarilsin 
const randomFn = () => {
  let random = Array.from(Math.floor(Math.random() * 100).toString().split(""), Number)
  let total = random.reduce((boshlangich, item) => boshlangich += item, 0)
  return total
}
// console.log(randomFn())
const collBackFn = (randomYigindi) => {
  return randomYigindi
}
// collBackFn(randomFn())




// 5.Promt va funciton yarating promt ichida yozilgan so'zning palindome yoki palindrome emasligi topilsin
// let text = prompt("so'z yozing")
const palindomeText = (text) => {
  let newText = text.split("").reverse().join("")
  return newText === text ? "palindome" : "palindome emas"
}
// console.log(palindomeText(text));



// 6. Ixtiyoriy object yarating => {a:1,b:22} value larinig yig'indisini toping => 23 value larining yigindising yig'indisini toping => 2 + 3 = 5
const totalValues = () => {
  let obj = {a:1,b:22, c: -5}
  let values = Object.values(obj)
  let total = values.reduce((boshlangich, item) => boshlangich += item, 0)
  return total
}
console.log(totalValues());