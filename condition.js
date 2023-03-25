const hour = new Date().getHours();
let greeting;

if (hour < 10) {
    greeting = "¡Buenos dias!";
}

else if (hour < 20) {
    greeting = "Buenas tardes";
}
else {
    greeting = "¡Buenas noches!";
}

document.getElementById("demo").innerHTML = greeting;