var band_1_tax, band_2_tax, band_3_tax, band_4_tax, band_5_tax, band_6_tax, previous_tax_0, previous_tax_1, previous_tax_2, previous_tax_3, previous_tax_4, previous_tax_5, rate_1, rate_2, rate_3, rate_4, rate_5, rate_6, tax, taxable_income;

function staff_salary_details() {
  /*
  This function collects tax payer's details and returns annual taxable income.
   */
  var NHF, TCRA, allowed_percentage, base_allowance, pension, total_income, user_NHF, user_annual_13th_month, user_annual_B, user_annual_H, user_annual_Leave_allowance, user_annual_T, user_annual_basic, user_annual_gross, user_annual_housing, user_annual_transport;
  user_annual_gross = Number.parseFloat(input("Enter Your Annual Gross Earnings: "));
  user_annual_B = Number.parseFloat(input("Enter Percentage of Basic Salary: "));
  user_annual_H = Number.parseFloat(input("Enter Percentage of Housing Salary: "));
  user_annual_T = Number.parseFloat(input("Enter Percentage of Transport Salary: "));
  user_annual_Leave_allowance = Number.parseFloat(input("Enter Annual Leave Allowance: "));
  user_annual_13th_month = Number.parseFloat(input("Enter 13th Month Allowance: "));
  user_NHF = input(" Do You Have NHF? 'Yes or No': ").upper();
  user_annual_basic = user_annual_B / 100;
  user_annual_housing = user_annual_H / 100;
  user_annual_transport = user_annual_T / 100;

  if (user_NHF === "YES") {
    NHF = 2.5 / 100 * (user_annual_gross * user_annual_basic);
  } else {
    NHF = 0;
  }

  total_income = user_annual_gross + user_annual_Leave_allowance + user_annual_13th_month;
  pension = 8 / 100 * (user_annual_gross * user_annual_basic + user_annual_gross * user_annual_housing + user_annual_gross * user_annual_transport);
  base_allowance = 200000;
  allowed_percentage = 20 / 100;
  TCRA = base_allowance + allowed_percentage * (total_income - pension - NHF);
  taxable_income = total_income - TCRA - pension - NHF;
  return taxable_income;
}

taxable_income = staff_salary_details();
rate_1 = 0.07;

if (taxable_income > 0 && taxable_income <= 300000) {
  previous_tax_0 = 0;
  band_1_tax = taxable_income * rate_1 + previous_tax_0;
  tax = band_1_tax;
}

rate_2 = 0.11;

if (taxable_income > 300000 && taxable_income <= 600000) {
  previous_tax_1 = rate_1 * 300000;
  band_2_tax = (taxable_income - 300000) * rate_2 + previous_tax_1;
  tax = band_2_tax;
}

rate_3 = 0.15;

if (taxable_income > 600000 && taxable_income <= 1100000) {
  previous_tax_2 = rate_1 * 300000 + rate_2 * 300000;
  band_3_tax = (taxable_income - 300000 - 300000) * rate_3 + previous_tax_2;
  tax = band_3_tax;
}

rate_4 = 0.19;

if (taxable_income > 1100000 && taxable_income <= 1600000) {
  previous_tax_3 = rate_1 * 300000 + rate_2 * 300000 + rate_3 * 500000;
  band_4_tax = (taxable_income - 300000 - 300000 - 500000) * rate_4 + previous_tax_3;
  tax = band_4_tax;
}

rate_5 = 0.21;

if (taxable_income > 1600000 && taxable_income <= 3200000) {
  previous_tax_4 = rate_1 * 300000 + rate_2 * 300000 + rate_3 * 500000 + rate_4 * 500000;
  band_5_tax = (taxable_income - 300000 - 300000 - 500000 - 500000) * rate_5 + previous_tax_4;
  tax = band_5_tax;
}

rate_6 = 0.24;

if (taxable_income > 3200000) {
  previous_tax_5 = rate_1 * 300000 + rate_2 * 300000 + rate_3 * 500000 + rate_4 * 500000 + rate_5 * 1600000;
  band_6_tax = (taxable_income - 300000 - 300000 - 500000 - 500000 - 1100000) * rate_6 + previous_tax_5 - 120000;
  tax = band_6_tax;
}

console.log(tax / 12);
