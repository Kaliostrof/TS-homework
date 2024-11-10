//Задание 1 -----------------------

const totalPrice = (sum: {
  price: number;
  discount: number;
  isInstallment: boolean;
  months: number;
}): number => {
  const { price, discount, isInstallment, months } = sum;
  let total;
  if (isInstallment) {
    total = (price - (price * discount) / 100) / months;
  } else {
    total = price - (price * discount) / 100;
  }

  return total;
};

const price = totalPrice({
  price: 100000,
  discount: 25,
  isInstallment: true,
  months: 12,
});
console.log(price); // 6250
