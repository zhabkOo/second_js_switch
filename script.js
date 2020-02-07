let userSymbol = prompt("Type random symbol:");
// console.log(userSymbol, userSymbol.length);

if (userSymbol != null) {
  switch (userSymbol === "" || userSymbol.length > 1) {
    // case " ":
    //     alert(!!userSymbol);
    //     break;
    case true:
      userSymbol = " ";
      console.log("nothing or > 1. userSymbol:", userSymbol, typeof userSymbol);
      break;
    case false:
      userSymbol = userSymbol.toLowerCase();
      console.log(
        "if !nothing or <= 1. userSymbol:",
        userSymbol,
        typeof userSymbol
      );
      break;
    default:
      alert("Something went wrong, pleasy try again");
      break;
  }
} else {
  alert("Ohrana otmena");
}

switch (userSymbol) {
  case "a":
  case "e":
  case "o":
    userSymbol = userSymbol.toUpperCase();
    console.log(userSymbol);
    break;
  case "x":
  case "y":
    alert(userSymbol + userSymbol);
    break;
  case "s":
  case "d":
  case "q":
  case "m":
    var randomNumAmountTrunc = Math.trunc(Math.random() + Math.random());
    console.log(
      "Округленная сумма двух случайных чисел randomNumAmountTrunc = ",
      randomNumAmountTrunc
    );
    switch (randomNumAmountTrunc != 0) {
      case true:
        console.log(
          "Переменная уже создана со значением, удовлетворяющим условиям: randomNumAmountTrunc = ",
          randomNumAmountTrunc
        );
        break;
      default:
        randomNumAmountTrunc = 1;
        console.log(
          "Сгенерирован 0, значит записываем дефолтный 1: randomNumAmountTrunc =",
          randomNumAmountTrunc
        );
        break;
    }
    break;
  default:
    alert(Math.max(Math.random(), Math.random(), Math.random()));
    break;
}
