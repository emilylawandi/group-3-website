var savedUserInput = prompt("Hello! Who are you? Please introduce yourself c:");

console.log(savedUserInput);

document.getElementById("username").innerText = savedUserInput;

// tooltip
/* tooltip */

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })