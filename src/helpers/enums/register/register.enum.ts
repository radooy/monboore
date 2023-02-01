export enum Errors {
  emailAlreadyInUse = "Вече има регистриран потребител с този имейл",
  emailIsRequired = "Полето E-mail е задължително",
  emailShouldBeValid = "Моля въведете валиден имейл",
  passwordIsRequired = "Полето парола е задължително",
  passwordShouldBeAtleast = "Паролата трябва да бъде поне 8 символа",
  passwordShouldContain = "Паролата трябва да съдържа поне по една буква, цифра и специален символ",
  passwordsMustMatch = "Паролите трябва да съвпадат",
  rePasswordIsRequired = "Полето повтори паролата е задължително",
  rePasswordShouldBeAtleast = "Повтори паролата трябва да бъде поне 8 символа",
}

export enum PageTexts {
  register = "Регистрирайте се",
  createNewProfile = "Създайте нов потребителски профил",
  email = "E-mail",
  password = "Парола",
  rePassword = "Повтори паролата",
  agreeWithTerms = "Съгласявам се с общите условия",
  finish = "Завършване",
}

export enum TermsDialog {
  termsHeading = "Общи условия",
  consent = "Съгласявам се",
  terms = "Общите условия на сайта ще бъдат описани тук по-подробно от всякога.",
}
