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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEZvcm1fX3N1YnRpdGxlcyBjbGFzcyB0b29nbGVcclxuY29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmFtZVwiKTtcclxuY29uc3QgY29tcGFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29tcGFueVwiKTtcclxuY29uc3QgZW1haWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VtYWlsXCIpO1xyXG5jb25zdCBwaG9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGhvbmVcIik7XHJcbmNvbnN0IHN1YmplY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N1YmplY3RcIik7XHJcbmNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lc3NhZ2VcIik7XHJcblxyXG5mdW5jdGlvbiBzaWJsQWRkQ2xhc3MoZSkge1xyXG4gIGNvbnN0IHRpdGxlID0gZS50YXJnZXQucHJldmlvdXNFbGVtZW50U2libGluZztcclxuICBpZiAoZS50eXBlID09IFwiZm9jdXNcIikge1xyXG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcImZvcm1fX3N1YnRpdGxlX2FjdGl2ZVwiKTtcclxuICB9IGVsc2UgaWYgKGUudHlwZSA9PSBcImJsdXJcIikge1xyXG4gICAgdGl0bGUuY2xhc3NMaXN0LnJlbW92ZShcImZvcm1fX3N1YnRpdGxlX2FjdGl2ZVwiKTtcclxuICB9XHJcbn1cclxuXHJcbm5hbWUuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIHNpYmxBZGRDbGFzcyk7XHJcbmNvbXBhbnkuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIHNpYmxBZGRDbGFzcyk7XHJcbmVtYWlsLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCBzaWJsQWRkQ2xhc3MpO1xyXG5waG9uZS5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgc2libEFkZENsYXNzKTtcclxuc3ViamVjdC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgc2libEFkZENsYXNzKTtcclxubWVzc2FnZS5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgc2libEFkZENsYXNzKTtcclxubmFtZS5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCBzaWJsQWRkQ2xhc3MpO1xyXG5jb21wYW55LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIHNpYmxBZGRDbGFzcyk7XHJcbmVtYWlsLmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIHNpYmxBZGRDbGFzcyk7XHJcbnBob25lLmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIHNpYmxBZGRDbGFzcyk7XHJcbnN1YmplY3QuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgc2libEFkZENsYXNzKTtcclxubWVzc2FnZS5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCBzaWJsQWRkQ2xhc3MpO1xyXG5cclxuLy8gQUpBWFxyXG4vLyDQndC1INCz0L7RgtC+0LJcclxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybVwiKTtcclxuLy8g0KHQvtC+0LHRidC10L3QuNGPINCy0LfQsNCy0LjRgdC40LzQvtGB0YLQuCDQvtGCINC+0YLQstC10YLQsCDRgdC10YDQstC10YDQsFxyXG5jb25zdCBkb25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fZG9uZVwiKTtcclxuY29uc3QgZXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19lcnJvclwiKTtcclxuXHJcbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gIGNvbnN0IGZvcm1EYXRhID0ge1xyXG4gICAgbmFtZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwb3B1cE5hbWVcIikudmFsdWUsXHJcbiAgICBlbWFpbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwb3B1cEVtYWlsXCIpLnZhbHVlLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHJcbiAgZnVuY3Rpb24gcG9wdXBEb25lKCkge1xyXG4gICAgZm9ybS5jbGFzc0xpc3QudG9nZ2xlKFwicG9wdXBfX2l0ZW1fYWN0aXZlXCIpO1xyXG4gICAgZG9uZS5jbGFzc0xpc3QudG9nZ2xlKFwicG9wdXBfX2l0ZW1fYWN0aXZlXCIpO1xyXG4gIH1cclxuICBmdW5jdGlvbiBwb3B1cEVycm9yKCkge1xyXG4gICAgZm9ybS5jbGFzc0xpc3QudG9nZ2xlKFwicG9wdXBfX2l0ZW1fYWN0aXZlXCIpO1xyXG4gICAgZXJyb3IuY2xhc3NMaXN0LnRvZ2dsZShcInBvcHVwX19pdGVtX2FjdGl2ZVwiKTtcclxuICB9XHJcblxyXG4gIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHJlcXVlc3QucmVhZHlTdGF0ZSA9PSA0KSB7XHJcbiAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICBwb3B1cERvbmUoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBwb3B1cEVycm9yKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuICByZXF1ZXN0Lm9wZW4oXCJQT1NUXCIsIFwiXCIsIHRydWUpO1xyXG4gIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihcclxuICAgIFwiQ29udGVudC1UeXBlXCIsXHJcbiAgICBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD1VVEYtOFwiXHJcbiAgKTtcclxuICByZXF1ZXN0LnNlbmQoXHJcbiAgICBcIm5hbWU9XCIgK1xyXG4gICAgICBlbmNvZGVVUklDb21wb25lbnQoZm9ybURhdGEubmFtZSkgK1xyXG4gICAgICBcIiZlbWFpbD1cIiArXHJcbiAgICAgIGVuY29kZVVSSUNvbXBvbmVudChmb3JtRGF0YS5lbWFpbClcclxuICApO1xyXG59KTsiXSwiZmlsZSI6Im1haW4uanMifQ==
