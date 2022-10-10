let ownerInput = document.getElementById('validationCustom01');
let insuranceTypeInput = document.getElementById('validationCustom02');
let amountInput = document.getElementById('validationCustom03');
let periodInput = document.getElementById('validationCustom04');
let birthDateInput = document.getElementById('validationCustom05');
let TitleInput = document.getElementById('validationCustom06');
let firstNameInput = document.getElementById('validationCustom07');
let lastNameInput = document.getElementById('validationCustom08');
let emailInput = document.getElementById('validationCustom09');
let phoneNumberInput = document.getElementById('validationCustom10');
let postCodeInput = document.getElementById('validationCustom11');
let totalInsurance = document.getElementById('totalInsurance');
let coverage = document.getElementById('totalInsuranceCovage');
let covageYear = document.getElementById('covageYear');

document.getElementById("submit").addEventListener('click', function(){
  event.preventDefault();
  const owner = ownerInput.value;
  const insuranceType = insuranceTypeInput.value;
  const amount = amountInput.value;
  const time = Number(periodInput.value.split(' ')[0]);
  const birthDate = birthDateInput.value;
  const Title = TitleInput.value;
  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;
  const email = emailInput.value;
  const phoneNumber = phoneNumberInput.value;
  const postCode = postCodeInput.value;
  const name = `${Title}. ${firstName} ${lastName}`;
  const coverAgeAmount = time*12*10;
  
  totalInsurance.textContent = amount;
  coverage.textContent = `£${coverAgeAmount}`;
  covageYear.textContent = time;

  ownerInput.value = "";
  insuranceTypeInput.value = "";
  amountInput.value = "";
  amountInput.value = "";
  birthDateInput.value = "";
  periodInput.value = "";
  TitleInput.value = "";
  firstNameInput.value = "";
  lastNameInput.value = "";
  emailInput.value = "";
  phoneNumberInput.value = "";
  postCodeInput.value = "";

})



/// validition
// (() => {
//     'use strict'
//     // Fetch all the forms we want to apply custom Bootstrap validation styles to
//     const forms = document.querySelectorAll('.needs-validation')
//     // const datapicker = document.querySelector('#datepicker');
//     // Loop over them and prevent submission
//     Array.from(forms).forEach(form => {
//       form.addEventListener('submit', event => {
//         if (!form.checkValidity()) {
//           event.preventDefault()
//           event.stopPropagation()
//         }
  
//         form.classList.add('was-validated')
//       }, false)
//     })
//   })()
