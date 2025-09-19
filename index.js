const moment = require("moment");

const birthDate = "2005-08-25";

const dob = moment(birthDate, "YYYY-MM-DD");
const today = moment();

const diff = moment.duration(today.diff(dob));

const years = diff.years();
const months = diff.months();
const days = diff.days();

console.log("Your age is " + years + " years, " + months + " months, and " + days + " days.");