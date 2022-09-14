exports.evaluateDiscount = (points) => {

  if ((points => 5) && (points < 20)) {
    const discount = "5";
    return discount;
  } else if ((points => 20) && (points < 29)) {
    const discount = "10";
    return discount;
  } else if (points > 30) {
    const discount = "15%";
    return discount;
  }

};
