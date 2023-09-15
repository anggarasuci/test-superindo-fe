const getMonthName = (value: string) => {
  let result = "";
  switch (value) {
    case "01":
      result = "JAN";
      break;
    case "02":
      result = "FEB";
      break;
    case "03":
      result = "MAR";
      break;
    case "04":
      result = "APR";
      break;
    case "05":
      result = "MEI";
      break;
    case "06":
      result = "JUN";
      break;
    case "07":
      result = "JUL";
      break;
    case "08":
      result = "AGT";
      break;
    case "09":
      result = "SEP";
      break;
    case "10":
      result = "OKT";
      break;
    case "11":
      result = "NOV";
      break;
    case "12":
      result = "DES";
      break;
    default:
      result = "";
      break;
  }
  return result;
};

const getDisplayMonthYear = (value: string) => {
  //yyyy-mm-dd
  const month = getMonthName(value?.substring(5, 7));
  const year = value?.substring(0, 4);
  const result = `${month} ${year}`;
  return result;
};

export const DateConverter = {
  getMonthName,
  getDisplayMonthYear,
};
