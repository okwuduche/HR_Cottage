function staffSalaryDetails() {
  /*
  This function collects tax payer's details and returns annual taxable income.
  */

  let userAnnualGross = parseFloat(prompt("Enter Your Annual Gross Earnings: "));
  let userAnnualB = parseFloat(prompt("Enter Percentage of Basic Salary: "));
  let userAnnualH = parseFloat(prompt("Enter Percentage of Housing Salary: "));
  let userAnnualT = parseFloat(prompt("Enter Percentage of Transport Salary: "));
  let userAnnualLeaveAllowance = parseFloat(prompt("Enter Annual Leave Allowance: "));
  let userAnnual13thMonth = parseFloat(prompt("Enter 13th Month Allowance: "));
  let userNHF = prompt("Do You Have NHF? 'Yes or No': ").toUpperCase();

  let userAnnualBasic = userAnnualB / 100;
  let userAnnualHousing = userAnnualH / 100;
  let userAnnualTransport = userAnnualT / 100;

  let NHF;
  if (userNHF === 'YES') {
      NHF = (2.5 / 100) * (userAnnualGross * userAnnualBasic);
  } else {
      NHF = 0;
  }

  let totalIncome = userAnnualGross + userAnnualLeaveAllowance + userAnnual13thMonth;

  let pension = (8 / 100) * ((userAnnualGross * userAnnualBasic) + 
                             (userAnnualGross * userAnnualHousing) + 
                             (userAnnualGross * userAnnualTransport));

  let baseAllowance = 200000;
  let allowedPercentage = 20 / 100;

  let TCRA = baseAllowance + (allowedPercentage * (totalIncome - pension - NHF));
  let taxableIncome = totalIncome - TCRA - pension - NHF;
  return taxableIncome;
}

let taxableIncome = staffSalaryDetails(); // used function to collect tax payer's details

let rate1 = 0.07;
let rate2 = 0.11;
let rate3 = 0.15;
let rate4 = 0.19;
let rate5 = 0.21;
let rate6 = 0.24;
let tax;

if (taxableIncome > 0 && taxableIncome <= 300000) {
  let previousTax0 = 0;
  let band1Tax = (taxableIncome * rate1) + previousTax0;
  tax = band1Tax;
}

if (taxableIncome > 300000 && taxableIncome <= 600000) {
  let previousTax1 = rate1 * 300000;
  let band2Tax = ((taxableIncome - 300000) * rate2) + previousTax1;
  tax = band2Tax;
}

if (taxableIncome > 600000 && taxableIncome <= 1100000) {
  let previousTax2 = (rate1 * 300000) + (rate2 * 300000);
  let band3Tax = ((taxableIncome - 300000 - 300000) * rate3) + previousTax2;
  tax = band3Tax;
}

if (taxableIncome > 1100000 && taxableIncome <= 1600000) {
  let previousTax3 = (rate1 * 300000) + (rate2 * 300000) + (rate3 * 500000);
  let band4Tax = ((taxableIncome - 300000 - 300000 - 500000) * rate4) + previousTax3;
  tax = band4Tax;
}

if (taxableIncome > 1600000 && taxableIncome <= 3200000) {
  let previousTax4 = (rate1 * 300000) + (rate2 * 300000) + (rate3 * 500000) + (rate4 * 500000);
  let band5Tax = ((taxableIncome - 300000 - 300000 - 500000 - 500000) * rate5) + previousTax4;
  tax = band5Tax;
}

if (taxableIncome > 3200000) {
  let previousTax5 = (rate1 * 300000) + (rate2 * 300000) + (rate3 * 500000) + (rate4 * 500000) + (rate5 * 1600000);
  let band6Tax = ((taxableIncome - 300000 - 300000 - 500000 - 500000 - 1100000) * rate6) + previousTax5 - 120000;
  tax = band6Tax;
}

console.log(tax / 12);
alert('Your Monthly PAYE is: ' + tax / 12);

