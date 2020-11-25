let $contactForm = document.querySelector("#contact-form");

$contactForm.addEventListener("submit", function(event){
  event.preventDefault();

  let $formElements = $contactForm.elements;

  let formData = {
    name: $formElements.name.value,
    email: $formElements.email.value,
    message: $formElements.message.value
  };

  console.log($formElements);
  console.log(formData);

  $contactForm.reset();
});
