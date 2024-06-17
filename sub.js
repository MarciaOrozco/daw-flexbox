document.addEventListener("DOMContentLoaded", function () {
  // NOMBRE COMPLETO
  var fullName = document.querySelector('input[id="fullname"]');
  var fullNameError = document.querySelector('span[id="error-fullname"]');
  var welcome = document.getElementById("form-title");

  fullName.addEventListener("blur", function (event) {
    if (event.target.value.length <= 6) {
      fullNameError.textContent = "El nombre debe contener más de 6 caracteres";
      fullNameError.style.display = "flex";
      fullNameError.style.color = "red";
      fullName.style.border = "2px solid red";
    } else if (event.target.value.indexOf(" ") === -1) {
      fullNameError.textContent =
        "El nombre debe contener un espacio entre medio";
      fullNameError.style.display = "flex";
      fullNameError.style.color = "red";
      fullName.style.border = "2px solid red";
    } else {
      fullNameError.textContent = "";
      fullName.style.border = "2px solid darkgreen";
    }
  });

  fullName.addEventListener("focus", function (event) {
    fullNameError.textContent = "";
    fullName.style.border = "none";
  });

  fullName.addEventListener("input", function (event) {
    welcome.textContent = "HOLA " + event.target.value;
  });

  // EMAIL
  var email = document.querySelector('input[id="email"]');
  var emailError = document.querySelector('span[id="error-email"]');
  email.addEventListener("blur", function (event) {
    if (
      event.target.value.indexOf("@") === -1 ||
      event.target.value.indexOf(".") === -1 ||
      event.target.value.indexOf(" ") !== -1
    ) {
      emailError.textContent = "El email debe tener un formato válido";
      emailError.style.display = "flex";
      emailError.style.color = "red";
      email.style.border = "2px solid red";
    } else {
      emailError.textContent = "";
      email.style.border = "2px solid darkgreen";
    }
  });

  email.addEventListener("focus", function (event) {
    emailError.textContent = "";
    email.style.border = "none";
  });

  // EDAD
  var age = document.querySelector('input[id="age"]');
  var ageError = document.querySelector('span[id="error-age"]');
  age.addEventListener("blur", function (event) {
    if (parseInt(event.target.value, 10) >= 18) {
      ageError.textContent = "";
      age.style.border = "2px solid darkgreen";
    } else {
      ageError.textContent = "Debe ser mayor a 18 y ser un número entero";
      ageError.style.display = "flex";
      ageError.style.color = "red";
      age.style.border = "2px solid red";
    }
  });

  age.addEventListener("focus", function (event) {
    ageError.textContent = "";
    age.style.border = "none";
  });

  // TELEFONO
  var phone = document.querySelector('input[id="phone"]');
  var phoneError = document.querySelector('span[id="error-phone"]');
  phone.addEventListener("blur", function (event) {
    if (
      event.target.value.length < 7 ||
      event.target.value.indexOf(" ") !== -1 ||
      event.target.value.indexOf("-") !== -1 ||
      event.target.value.indexOf("()") !== -1
    ) {
      phoneError.textContent =
        "El número de teléfono debe tener al menos 7 dígitos, y no contener espacios, '-' ni '()'";
      phoneError.style.display = "flex";
      phoneError.style.color = "red";
      phone.style.border = "2px solid red";
    } else {
      phoneError.textContent = "";
      phone.style.border = "2px solid darkgreen";
    }
  });

  phone.addEventListener("focus", function (event) {
    phoneError.textContent = "";
    phone.style.border = "none";
  });

  // DIRECCION
  var address = document.querySelector('input[id="address"]');
  var addressError = document.querySelector('span[id="error-address"]');
  address.addEventListener("blur", function (event) {
    if (
      event.target.value.length < 5 ||
      !/\d/.test(event.target.value) ||
      event.target.value.indexOf(" ") === -1 ||
      !/[a-zA-Z]/.test(event.target.value)
    ) {
      addressError.textContent =
        "La dirección debe tener al menos 5 caracteres, con letras, números y un espacio";
      addressError.style.display = "flex";
      addressError.style.color = "red";
      address.style.border = "2px solid red";
    } else {
      addressError.textContent = "";
      address.style.border = "2px solid darkgreen";
    }
  });

  address.addEventListener("focus", function (event) {
    addressError.textContent = "";
    address.style.border = "none";
  });

  // CIUDAD
  var city = document.querySelector('input[id="city"]');
  var cityError = document.querySelector('span[id="error-city"]');
  city.addEventListener("blur", function (event) {
    if (event.target.value.length < 3) {
      cityError.textContent = "La ciudad debe contener al menos 3 caracteres";
      cityError.style.display = "flex";
      cityError.style.color = "red";
      city.style.border = "2px solid red";
    } else {
      cityError.textContent = "";
      city.style.border = "2px solid darkgreen";
    }
  });

  city.addEventListener("focus", function (event) {
    cityError.textContent = "";
    city.style.border = "none";
  });

  // CÓDIGO POSTAL
  var postalCode = document.querySelector('input[id="postal-code"]');
  var postalCodeError = document.querySelector('span[id="error-postal-code"]');
  postalCode.addEventListener("blur", function (event) {
    if (event.target.value.length < 3) {
      postalCodeError.textContent =
        "El Código Postal debe contener al menos 3 caracteres";
      postalCodeError.style.display = "flex";
      postalCodeError.style.color = "red";
      postalCode.style.border = "2px solid red";
    } else {
      postalCodeError.textContent = "";
      postalCode.style.border = "2px solid darkgreen";
    }
  });

  postalCode.addEventListener("focus", function (event) {
    postalCodeError.textContent = "";
    postalCode.style.border = "none";
  });

  // DNI
  var dni = document.querySelector('input[id="dni"]');
  var dniError = document.querySelector('span[id="error-dni"]');
  dni.addEventListener("blur", function (event) {
    if (event.target.value.length < 7 || event.target.value.length > 8) {
      dniError.textContent = "El DNI debe contener entre 7 u 8 dígitos";
      dniError.style.display = "flex";
      dniError.style.color = "red";
      dni.style.border = "2px solid red";
    } else {
      dniError.textContent = "";
      dni.style.border = "2px solid darkgreen";
    }
  });

  dni.addEventListener("focus", function (event) {
    dniError.textContent = "";
    dni.style.border = "none";
  });

  // CONTRASEÑA
  var password = document.querySelector('input[id="password"]');
  var passwordError = document.querySelector('span[id="error-password"]');
  password.addEventListener("blur", function (event) {
    if (
      event.target.value.length < 8 ||
      !/\d/.test(event.target.value) ||
      !/[a-zA-Z]/.test(event.target.value)
    ) {
      passwordError.textContent =
        "La clave debe contener al menos 8 caracteres y ser alfanumérica";
      passwordError.style.display = "flex";
      passwordError.style.color = "red";
      password.style.border = "2px solid red";
    } else {
      passwordError.textContent = "";
      password.style.border = "2px solid darkgreen";
    }
  });

  password.addEventListener("focus", function (event) {
    passwordError.textContent = "";
    password.style.border = "none";
  });

  // REPEAT PASSWORD
  var repeatPassword = document.querySelector('input[id="repeat-password"]');
  var repeatPasswordError = document.querySelector(
    'span[id="error-repeat-password"]'
  );
  repeatPassword.addEventListener("blur", function (event) {
    if (event.target.value !== password.value) {
      repeatPasswordError.textContent = "Las claves no coinciden";
      repeatPasswordError.style.display = "flex";
      repeatPasswordError.style.color = "red";
      repeatPassword.style.border = "2px solid red";
    } else {
      repeatPasswordError.textContent = "";
      repeatPassword.style.border = "2px solid darkgreen";
    }
  });

  repeatPassword.addEventListener("focus", function (event) {
    repeatPasswordError.textContent = "";
    repeatPassword.style.border = "none";
  });

  // FORM SUBMISSION
  var form = document.querySelector('form[id="signup-form"]');
  var modal = document.getElementById("modal");
  var modalMessage = document.getElementById("modal-message");
  var span = document.getElementsByClassName("close")[0];

  loadFormData();

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var inputs = form.getElementsByTagName("input");
    var errors = document.querySelectorAll("span.error");
    var allValid = true;
    var allCompleted = true;

    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].value === "") {
        allCompleted = false;
        alert("Por favor llenar todos los campos antes de enviar");
        return;
      }
    }

    errors.forEach(function (error) {
      if (error.textContent !== "") {
        allValid = false;
      }
    });

    if (allValid) {
      var formData = new FormData(form);
      var object = {};

      formData.forEach((value, key) => {
        object[key] = value;
      });

      fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: JSON.stringify(object),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then(() => {
          modalMessage.textContent = "Formulario enviado con éxito";
          modal.style.display = "block";

          formData.forEach((value, key) => {
            localStorage.setItem(key, value);

            modalMessage.innerHTML += `<p>${key}: ${value}</p>`;
          });
        })
        .catch((error) => {
          modalMessage.textContent =
            "Error al enviar el formulario. Intente nuevamente." + error;
          modal.style.display = "block";
        });
    } else {
      modalMessage.textContent =
        "Error al enviar el formulario. Debe revisar errores.";
      modal.style.display = "block";
    }
  });

  function loadFormData() {
    var inputs = form.querySelectorAll("input");
    inputs.forEach(function (input) {
      var value = localStorage.getItem(input.name);
      if (value) {
        input.value = value;
      }
    });
  }

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});
