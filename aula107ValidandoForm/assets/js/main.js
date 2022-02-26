class FormValidation {
  constructor() {
    this.form = document.querySelector("#form")
    this.events();
  }

  events() {
    this.form.addEventListener("submit", e => {
      this.handleSubmit(e);
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const inputValid = this.inputValid();
  }

  inputValid() {
    let validation = true;

    for (let removeErrorDuplicateText of this.form.querySelectorAll("#error-text")) {
      removeErrorDuplicateText.remove();
    }

    for (let input of this.form.querySelectorAll('.validar')) {
      const label = input.previousElementSibling.innerText;

      if (!input.value) {
        this.createError(input, `Campo ${label}, não pode estar em branco!`);
        validation = false;
      }

      if (input.classList.contains("cpf")) {
        if (!this.ValidaCPF(input)) validation = false;
      }
    }

    return validation;
  }

  ValidaCPF(input) {
    const cpf = new ValidaCPF(input.value)

    if (!cpf.valida()) {
      this.criaErro(input, "CPF Inválido");
      return false;
    }

    return true
  }

  createError(input, message) {
    const div = document.createElement('div');
    div.innerHTML = message;
    div.id = 'error-text';

    // input.insertAdjacentHTML('afterend', div);
    input.after(div);
  }
}

const valida = new FormValidation();
