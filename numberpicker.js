function myFunction() {
    var x, text;

    // Get the value of the input field with id="numb"
    x = document.getElementById("numb").value;

    // If x is Not a Number or less than one or greater than 10
    if (isNaN(x) || x < 1 || x > 50) {
        text = "Please enter a number from 1 to 50!!!";
    } else {
        text = "Thanks for doing it correctly";
    }
    document.getElementById("demo").innerHTML = text;
}