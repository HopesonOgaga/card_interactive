// dom
const thank_card = document.querySelector(".thank_you");
const form_card = document.querySelector(".form_card");
const cvc_display = document.querySelector(".cvc_data");
const display_number = document.querySelector(".number_display");
const display_name = document.querySelector(".name_val");
const display_date = document.querySelector(".date_value");
const span_month = document.querySelector(".span_month");
const span_year = document.querySelector(".span_year");
// btn
const enter_btn = document.querySelector(".btn_enter");
//value
const card_number = document.querySelector(".card_number");
const month = document.querySelector(".mm");
const year = document.querySelector(".yy");
const cvc_input = document.querySelector(".cvc_input");
const card_value_text = document.querySelector(".cardholder_display");
//month_blank

const month_info = document.querySelector(".month_blank");
const number_format = document.querySelector(".numbers_format");
const cvc_value = document.querySelector('.cvc_value')

// functions
// hidden

thank_card.classList.add("hidden");
month_info.classList.add("hidden");
number_format.classList.add("hidden");
cvc_value.classList.add('hidden')
// text value
card_value_text.addEventListener("input", function (evt) {
  display_name.textContent = `${evt.target.value}`;
  if (display_name.textContent === "") {
    display_name.textContent = "felicia lerie";
  }
});

// number value
card_number.addEventListener("input", function (e) {
  display_number.textContent = e.target.value;
  if (display_number.textContent === "") {
    display_number.textContent = "0000 0000 0000 0000";
  }
});
//span
month.addEventListener("input", function (e) {
  span_month.textContent = e.target.value;
  if (span_month.textContent === "") {
    span_month.textContent = "09";
    month_info.classList.remove("hidden");
  } else {
    month_info.classList.add("hidden");
  }
});
year.addEventListener("input", function (e) {
  span_year.textContent = e.target.value;
  if (span_year.textContent === "") {
    span_year.textContent = "00";
    month_info.classList.remove("hidden");
  } else {
    month_info.classList.add("hidden");
  }
});
// cvc
cvc_input.addEventListener("input", function (e) {
  cvc_display.textContent = e.target.value;
  if (cvc_display.textContent === "") {
    cvc_display.textContent = "000";
    cvc_value.classList.remove('hidden')
  }else{
    cvc_value.classList.add('hidden')
  }
});
// date and year

enter_btn.addEventListener("click", function () {
  console.log(value_text());
});

thank_card.classList.add("hidden");

// Add an input event listener to card_value_text
