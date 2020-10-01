// Form__subtitles class toogle
const name = document.querySelector("#name");
const company = document.querySelector("#company");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");

function siblAddClass(e) {
  const title = e.target.previousElementSibling;
  if (e.type == "focus") {
    title.classList.add("form__subtitle_active");
  } else if (e.type == "blur") {
    title.classList.remove("form__subtitle_active");
  }
}

name.addEventListener("focus", siblAddClass);
company.addEventListener("focus", siblAddClass);
email.addEventListener("focus", siblAddClass);
phone.addEventListener("focus", siblAddClass);
subject.addEventListener("focus", siblAddClass);
message.addEventListener("focus", siblAddClass);
name.addEventListener("blur", siblAddClass);
company.addEventListener("blur", siblAddClass);
email.addEventListener("blur", siblAddClass);
phone.addEventListener("blur", siblAddClass);
subject.addEventListener("blur", siblAddClass);
message.addEventListener("blur", siblAddClass);

// AJAX
// Не готов
const form = document.querySelector("#form");
// Сообщения взависимости от ответа сервера
const done = document.querySelector(".popup__done");
const error = document.querySelector(".popup__error");

form.addEventListener("submit", function (evt) {
  evt.preventDefault();

  const formData = {
    name: document.querySelector("#popupName").value,
    email: document.querySelector("#popupEmail").value,
  };

  const request = new XMLHttpRequest();

  function popupDone() {
    form.classList.toggle("popup__item_active");
    done.classList.toggle("popup__item_active");
  }
  function popupError() {
    form.classList.toggle("popup__item_active");
    error.classList.toggle("popup__item_active");
  }

  request.addEventListener("load", function () {
    if (request.readyState == 4) {
      if (request.status == 200) {
        popupDone();
      } else {
        popupError();
      }
    }
  });
  request.open("POST", "", true);
  request.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded; charset=UTF-8"
  );
  request.send(
    "name=" +
      encodeURIComponent(formData.name) +
      "&email=" +
      encodeURIComponent(formData.email)
  );
});
