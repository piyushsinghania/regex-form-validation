// validation script here
const inputs = document.querySelectorAll("input");

const patterns = {
  username: /^[a-z\d]{5,12}$/i,
  telephone: /^\d{10}$/,
  password: /^[\w@-]{8,20}$/,
  slug: /^[a-z\d-]{8,20}$/,
  email: /^([a-z\d-\.]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
};

const validate = (field, pattern) => {
  if (pattern.test(field.value)) {
    field.className = "valid";
  } else {
    field.className = "invalid";
  }
};

inputs.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    // console.log(e.target.value);
    validate(e.target, patterns[e.target.attributes.name.value]);
  });
});
