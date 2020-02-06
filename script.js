let userSymbol = prompt("Type random symbol:");
// console.log(userSymbol, userSymbol.length);

if (userSymbol != null) {
  switch (userSymbol == "" || userSymbol.length > 1) {
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
      alert("aaa");
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
}
