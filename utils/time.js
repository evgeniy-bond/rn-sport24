export default function timeFromUTC(timeInMillieconds, mode) {
  const MONTH = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
  const DAY = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
  const MINUTE = ["минуту", "минут", "минуты"];
  const date = new Date(timeInMillieconds);
  const DEFAULT_FORMAT = `${date.getDate()} ${MONTH[date.getMonth()]} ${date.getFullYear()}, ${date.getHours() / 10 < 1 ? `0${date.getHours()}` : date.getHours()}:${date.getMinutes() / 10 < 1 ? `0${date.getUTCMinutes()}` : date.getUTCMinutes()}`;
  const DEFAULT_FORMAT_REVERSE = `${date.getHours() / 10 < 1 ? `0${date.getHours()}` : date.getHours()}:${date.getMinutes() / 10 < 1 ? `0${date.getUTCMinutes()}` : date.getUTCMinutes()}, ${date.getDate()} ${MONTH[date.getMonth()]} ${date.getFullYear()}`;
  const dateNow = new Date();
  const sevenDaysAgo = new Date(dateNow);
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
  const dateYear = dateNow.getFullYear();

  let relativeDate;
  if (date > dateNow) {
    relativeDate = DEFAULT_FORMAT
  }
  else if (date.getDate() === dateNow.getDate() && date.getMonth() === dateNow.getMonth() && date.getTime() < dateNow.getTime()) {
    relativeDate = `${date.getHours() / 10 < 1 ? `0${date.getHours()}` : date.getHours()}:${date.getMinutes() / 10 < 1 ? `0${date.getMinutes()}` : date.getMinutes()}`
  }
  else if (date.getDate() === dateNow.getDate() - 1 && date.getMonth() === dateNow.getMonth() || dateNow.getDate() - 1 === 0 && date.getMonth() === dateNow.getMonth() - 1) {
    relativeDate = `вчера, ${date.getHours() / 10 < 1 ? `0${date.getHours()}` : date.getHours()}:${date.getMinutes() / 10 < 1 ? `0${date.getMinutes()}` : date.getMinutes()}`
  }
  else if (date.getTime() >= sevenDaysAgo.getTime()) {
    relativeDate = `${DAY[date.getDay()]}, ${date.getHours() / 10 < 1 ? `0${date.getHours()}` : date.getHours()}:${date.getMinutes() / 10 < 1 ? `0${date.getMinutes()}` : date.getMinutes()}`
  }
  else if (date.getTime() < sevenDaysAgo.getTime() && date.getFullYear() === dateYear) {
    relativeDate = `${date.getDate()} ${MONTH[date.getMonth()]}`
  }
  else {
    relativeDate = `${date.getDate()} ${MONTH[date.getMonth()]} ${date.getFullYear()}`
  }

  const dateObject = {
    "withDay": `${date.getDate()} ${MONTH[date.getMonth()]} ${date.getFullYear()}, ${DAY[date.getDay()]}, ${date.getHours() / 10 < 1 ? `0${date.getHours()}` : date.getHours()}:${date.getMinutes() / 10 < 1 ? `0${date.getMinutes()}` : date.getMinutes()}`,
    "object": {
      time: `${date.getHours() / 10 < 1 ? `0${date.getHours()}` : date.getHours()}:${date.getMinutes() / 10 < 1 ? `0${date.getMinutes()}` : date.getMinutes()}`,
      date: `${date.getDate()} ${MONTH[date.getMonth()]}`,
      year: date.getFullYear(),
      day: date.getDate() / 10 < 1 ? `0${date.getDate()}` : date.getDate(),
      month: (1 + date.getMonth()) / 10 < 1 ? `0${1 + date.getMonth()}` : 1 + date.getMonth()
    },
    "relative": relativeDate,
    "relativeReverse": relativeDate,
    "DDmonthYYYY": `${date.getDate()} ${MONTH[date.getMonth()]} ${date.getFullYear()}`,
    "month": MONTH[date.getMonth()]
  };

  return dateObject[mode] || DEFAULT_FORMAT;
}

function getRelativePhrase(number, phraseArray) {
  if (number === 1 || number > 20 && number % 10 === 1) {
    return phraseArray[0]
  }
  else if (number === 0 || number > 4 && number < 21 || number > 20 && (number % 10 > 4 || number % 10 === 0)) {
    return phraseArray[1]
  }
  else {
    return phraseArray[2]
  }
}
