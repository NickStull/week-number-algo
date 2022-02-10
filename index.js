// --------------- Date Functions -------------- //

const dateNow = Date.now()
console.log(dateNow) //Expected output: the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC

const currentDate = new Date(dateNow)
console.log(currentDate.toString()) //Expected output: the full date string in local time.

currentDate.setHours(00)
currentDate.setMinutes(00)
currentDate.setSeconds(00)
currentDate.setMilliseconds(000)

const primitive = currentDate[Symbol.toPrimitive]('number')
console.log(primitive)

const hopefullyJanOne = new Date(primitive)
console.log(hopefullyJanOne.toString())

currentDate.setHours(23)
currentDate.setMinutes(59)
currentDate.setSeconds(59)
currentDate.setMilliseconds(999)

const primitive2 = currentDate[Symbol.toPrimitive]('number')
console.log(primitive2)

const hopefullyDec = new Date(primitive2)
console.log(hopefullyDec.toString())


const day = currentDate.getDay()
// console.log(day) //Expected output: the day of the week (0–6) for the specified date according to local time.

const month = currentDate.getMonth()
// console.log(month) //Expected output: the month (0–11) in the specified date according to local time.

const date = currentDate.getDate()
// console.log(date) //Expected output: the day of the month (1–31) for the specified date according to local time.

const fullYear = currentDate.getFullYear()
// console.log(fullYear) //Expected output: the year (4 digits for 4-digit years) of the specified date according to local time.

const hours = currentDate.getHours()
// console.log(hours) //Expected output: the hour (0–23) in the specified date according to local time.

const minutes = currentDate.getMinutes()
// console.log(minutes) //Expected output: the minutes (0–59) in the specified date according to local time.

const seconds = currentDate.getSeconds()
// console.log(seconds) //Expected output: the seconds (0–59) in the specified date according to local time.

const milliseconds = currentDate.getMilliseconds()
// console.log(milliseconds) //Expected output: the milliseconds (0–999) in the specified date according to local time.



// --------------- Week Number Algo --------------- //

const testDate = new Date(Date.now()) // Replace Date.now() with any test date
// console.log(testDate) // Expected output: test date in millisecond form

const janFirst = new Date(fullYear,0,1,0)
// console.log(janFirst) //Expected output: Jan 1st of the current year at 00:00

const janFirstDayOfWeek = janFirst.getDay()
// console.log(janFirstDayOfWeek) //Expected output: the day of the week (0–6) for Jan 1st of current year. (added 1 because the)

const dayNumberOfYear = (Math.floor((testDate - janFirst) / 86400000)+1)
// console.log(dayNumberOfYear) //Expected output: number of days the current day is of the year. Floor rounds down to nearest whole. Adds 1 to include Jan 1st

const weekNumber = Math.ceil((dayNumberOfYear + janFirstDayOfWeek)/7)
// console.log(weekNumber) //Expected output: the week number (adds the days since the begginnig of the year plus an offset to account for jam 1st not landing on sunday). Math.ceil to round up
