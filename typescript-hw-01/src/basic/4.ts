// * : void бо я нічого явно не повертаю і це логування
function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}
// * функція ніколи не закінчується та нічого не повертає. Функція, яка завжди викидає помилку
function customError(): never {
  throw new Error('Error');
}
