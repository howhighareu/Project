// Бургер
const burger = document.getElementById("burger")
const nav = document.getElementById("nav")

burger.addEventListener("click", function () {
  nav.classList.toggle("nav--active")
  burger.classList.toggle("burger--active")
  document.body.classList.toggle("stop-scroll")
})

// Модальное окно
const callFromBtn = document.getElementById("call-form")
const modalCallForm = document.getElementById("modal-call-form")

// Открытие модального окна
callFromBtn.addEventListener("click", function () {
  modalCallForm.classList.add("modal-parent--open")
})

// Закрытие модального окна
modalCallForm.querySelector(".modal").addEventListener("click", function (event) {
  event._isClick = true
})
modalCallForm.addEventListener("click", function (event) {
  if (event._isClick === true) return
  modalCallForm.classList.remove("modal-parent--open")
})

// Закрытие при нажатии на Esc
window.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    modalCallForm.classList.remove("modal-parent--open")
  }
})

// Галерея
const swiper = new Swiper("#gallery", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,

  navigation: {
    prevEl: "#gallery-prev",
    nextEl: "#gallery-next"
  }
})

"form__input1"

// Валидация модального окна

function validation(form) {

  function removeError(input) {
      const parent = input.parentNode;

      if (parent.classList.contains('error')) {
          parent.querySelector('.error-label').remove()
          parent.classList.remove('error')
      }
  }

  function createError(input, text) {
      const parent = input.parentNode;
      const errorLabel = document.createElement('label')

      errorLabel.classList.add('error-label')
      errorLabel.textContent = text

      parent.classList.add('error')

      parent.append(errorLabel)
  }


  let result = true;

  const allInputs = form.querySelectorAll('input');

  for (const input of allInputs) {

      removeError(input)

      if (input.dataset.minLength) {
          if (input.value.length < input.dataset.minLength) {
              removeError(input)
              createError(input, `Минимальное кол-во символов: ${input.dataset.minLength}`)
              result = false
          }
      }

      if (input.dataset.maxLength) {
          if (input.value.length > input.dataset.maxLength) {
              removeError(input)
              createError(input, `Максимальное кол-во символов: ${input.dataset.maxLength}`)
              result = false
          }
      }

      if (input.dataset.required == "true") {
          if (input.value == "") {
              removeError(input)
              createError(input, 'Поле не заполнено!')
              result = false
          }
      }

  }

  return result
}


document.getElementById('add-form').addEventListener('submit', function(event) {
  event.preventDefault()

  if (validation(this) == true) {
      alert('Форма проверена успешно!')
  }

})
