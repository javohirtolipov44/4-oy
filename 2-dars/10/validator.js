export function username(username) {
  if (username.length >= 3 && username.length <= 15) {
    return "to'g'ri username";
  } else {
    return "noto'g'ri username";
  }
}

export function age(age) {
  if (age >= 18 && age <= 120) {
    return "to'g'ri yosh";
  } else {
    return "noto'g'ri yosh";
  }
}
