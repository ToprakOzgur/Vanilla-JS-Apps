import Display from "./display.js";
import Customer from "./customer.js";

// check fields and hide the submit
document.addEventListener("DOMContentLoaded", function () {
  const display = new Display();
  display.checkFields();
  display.hideSubmit();
});
//add customer on submit
document
  .getElementById("customer-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = this.querySelector(".name");
    const course = this.querySelector(".course");
    const author = this.querySelector(".author");

    const customer = new Customer(name.value, course.value, author.value);
    // console.log(customer);

    const display = new Display();

    display.feedback(customer);
    display.clearFields();
  });
