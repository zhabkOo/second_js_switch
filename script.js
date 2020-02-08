let userSymbol = prompt("Введите любой символ:");
console.log("Введённый пользователем символ: ", userSymbol);

if (userSymbol === null) {
  alert("Отменено ползователем");
} else {
  userSymbol === " "
    ? ((userSymbol = !!userSymbol),
      console.log(typeof userSymbol, userSymbol),
      alert(
        `Вы ввели пробел, а мы преобразовали его в ${typeof userSymbol} ${userSymbol}`
      ))
    : "" || userSymbol.length > 1
    ? ((userSymbol = " "), //Если пользователь ничего не ввел или ввел больше больше одного символа, использовать значение: " "
      alert(
        "Вы ничего не ввели, или ввели более одного символа, вовторите попытку"
      ))
    : (userSymbol = userSymbol.toLowerCase()),
    (randomNumAmountTrunc = ""), //заготовка под case "s": case "d": case "q": case "m":
    console.log("Введённый символ в нижнем регистре:", userSymbol);
  ///////////////////////////////////////////////////////////////////////
  // switch (userSymbol) {
  //   case "a":
  //   case "e":
  //   case "o":
  //     userSymbol = userSymbol.toUpperCase(); //Если символ равен "a", "e", "o" - преобразовать символ в верхний регистр
  //     console.log("Преобразовано в верхний регистр: ", userSymbol);
  //     break;
  //   case "x":
  //   case "y":
  //     alert(userSymbol + userSymbol); //Если символ равен "x", "y" - вывести alert'ом строку, которая будет содержать 2 таких символа
  //     break;
  //   case "s":
  //   case "d":
  //   case "q":
  //   case "m":
  //     randomNumAmountTrunc = Math.trunc(Math.random() + Math.random()); //здесь или 0 или 1
  //     /*Если симовол равен "s", "d", "q", "m" - сгенерировать два случайных числа и сложить их
  //     и отбросить дробную часть полученной суммы(в обьекте Math есть метод для этого). Создать
  //     новую переменную в которую записать либо этот результат если он не 0 либо значение по
  //     умолчанию 1.*/
  //     console.log(
  //       "Округленная сумма двух случайных чисел randomNumAmountTrunc = ",
  //       randomNumAmountTrunc
  //     );
  //     switch (randomNumAmountTrunc != 0) {
  //       case true:
  //         alert(
  //           `Переменная уже создана со значением, удовлетворяющим условиям: randomNumAmountTrunc = ${randomNumAmountTrunc}`
  //         );
  //         break;
  //       default:
  //         randomNumAmountTrunc = 1;
  //         alert(
  //           `Сгенерирован 0, значит записываем дефолтный 1: randomNumAmountTrunc = ${randomNumAmountTrunc}`
  //         );
  //         break;
  //     }
  //   default:
  //     //Во всех остальных случаях - сгенерировать 3 случайных числа и найти максимальное из них и вывести это число.
  //     alert(
  //       `Самое большое из трех случайных \nчисел от 0 до 1 = ${Math.max(
  //         Math.random(),
  //         Math.random(),
  //         Math.random()
  //       )}`
  //     );
  //     break;
  // }
}
