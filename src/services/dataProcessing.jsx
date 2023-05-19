const dataProcessing = (value) => {
  let countries = {};
  let ages = {};
  let ageGroup = {};
  let countCountries = 0;
  let countFemale = 0;
  let countMale = 0;
  let totalAgeFemale = 0;
  let totalAgeMale = 0;
  let totalAge = 0;
  let countWomenOver18 = 0;
  let countPeople = 0;
  let averageAgeMen = 0;
  let averageAgeWomen = 0;
  let averageAge = 0;

  value.forEach((item) => {
    if (item.gender === "female") {
      countFemale++;
      totalAgeFemale += item.dob.age;
      if (item.dob.age > 18) {
        countWomenOver18++;
      }
      if (item.dob.age >= 18 && item.dob.age <= 24) {
        ageGroup["18-24"] = ageGroup["18-24"] ? ageGroup["18-24"] + 1 : 1;
      }
      if (item.dob.age >= 25 && item.dob.age <= 34) {
        ageGroup["25-34"] = ageGroup["25-34"] ? ageGroup["25-34"] + 1 : 1;
      }
      if (item.dob.age >= 35 && item.dob.age <= 44) {
        ageGroup["35-44"] = ageGroup["35-44"] ? ageGroup["35-44"] + 1 : 1;
      }
      if (item.dob.age >= 45 && item.dob.age <= 54) {
        ageGroup["45-54"] = ageGroup["45-54"] ? ageGroup["45-54"] + 1 : 1;
      }
      if (item.dob.age >= 55) {
        ageGroup["55+"] = ageGroup["55+"] ? ageGroup["55+"] + 1 : 1;
      }
    } else {
      countMale++;
      totalAgeMale += item.dob.age;
    }
    totalAge += item.dob.age;
    if (Object.prototype.hasOwnProperty.call(countries, item.nat)) {
      countries[item.nat]++;
    } else {
      countries[item.nat] = 1;
      countCountries++;
    }
    if (Object.prototype.hasOwnProperty.call(ages, `${item.dob.age} years`)) {
      ages[`${item.dob.age} years`]++;
    } else {
      ages[`${item.dob.age} years`] = 1;
    }
  });

  countPeople = countFemale + countMale;
  averageAgeMen = (totalAgeMale / countMale).toFixed(1);
  averageAgeWomen = (totalAgeFemale / countFemale).toFixed(1);
  averageAge = (totalAge / countPeople).toFixed(1);
  averageAgeMen = Number(averageAgeMen);
  averageAgeWomen = Number(averageAgeWomen);
  averageAge = Number(averageAge);

  return {
    averageAgeMen,
    averageAgeWomen,
    averageAge,
    countPeople,
    countMale,
    countFemale,
    countries,
    countCountries,
    countWomenOver18,
    ages,
    ageGroup,
  };
};

export default dataProcessing;
