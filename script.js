let userSymbol = prompt("Введите любой символ:");
console.log("Введённый пользователем символ: ", userSymbol);

if (userSymbol === null) {
  alert("Отменено ползователем");
} else {
  // console.log(typeof userSymbol, userSymbol),
  // alert(
  userSymbol =
    userSymbol === " " //если пробел
      ? (userSymbol = !!userSymbol) //в переменную userSymbol запишется пробел в булевом - "true"
      : userSymbol === "" || userSymbol.length > 1 //иначе проверяем на пустой ввод или больше 2 символов
      ? (userSymbol = " ") //если правда в переменную запишется пробел
      : (userSymbol = userSymbol.toLowerCase()); //если ложь то введенный один символ преобразуем в нижний регистр

  console.log("userSymbol: ", userSymbol, "Typeof: ", typeof userSymbol);

  //////////////////////////////////
  let randomNumAmountTrunc = "";
  switch (userSymbol) {
    case "a":
    case "e":
    case "o":
      userSymbol = userSymbol.toUpperCase(); //Если символ равен "a", "e", "o" - преобразовать символ в верхний регистр
      console.log("Преобразовано в верхний регистр: ", userSymbol);
      break;
    case "x":
    case "y":
      alert(userSymbol + userSymbol); //Если символ равен "x", "y" - вывести alert'ом строку, которая будет содержать 2 таких символа
      break;
    case "s":
    case "d":
    case "q":
    case "m":
      randomNumAmountTrunc = Math.trunc(Math.random() + Math.random()); //здесь или 0 или 1
      /*Если симовол равен "s", "d", "q", "m" - сгенерировать два случайных числа и сложить их
      и отбросить дробную часть полученной суммы(в обьекте Math есть метод для этого). Создать
      новую переменную в которую записать либо этот результат если он не 0 либо значение по
      умолчанию 1.*/
      console.log(
        "Округленная сумма двух случайных чисел randomNumAmountTrunc = ",
        randomNumAmountTrunc
      );
      switch (randomNumAmountTrunc != 0) {
        case true:
          alert(
            `Переменная уже создана со значением, удовлетворяющим условиям: randomNumAmountTrunc = ${randomNumAmountTrunc}`
          );
          break;
        default:
          randomNumAmountTrunc = 1;
          alert(
            `Сгенерирован 0, значит записываем дефолтный 1: randomNumAmountTrunc = ${randomNumAmountTrunc}`
          );
          break;
      }
    default:
    //   //Во всех остальных случаях - сгенерировать 3 случайных числа и найти максимальное из них и вывести это число.
    //   alert(
    //     `Самое большое из трех случайных \nчисел от 0 до 1 = ${Math.max(
    //       Math.random(),
    //       Math.random(),
    //       Math.random()
    //     )}`
    //   );
  }
}
