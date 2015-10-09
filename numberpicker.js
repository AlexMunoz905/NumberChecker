function myFunction() {
    var x, text;

    // Get the value of the input field with id="numb"
    x = document.getElementById("numb").value;

    // If x is Not a Number or less than one or greater than 10
    if (isNaN(x) || x < 1 || x > 50) {
      alert("Pick a number from 1-50!!!");
    } else {
        alert("Correct!");
    }
    document.getElementById("demo");
}
