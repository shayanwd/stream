import moment from "moment-timezone";

export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const getNonNullValue = (value) => {
  if (value != "") {
    return value;
  } else {
    return undefined;
  }
};

export function filterEmptyFields(object) {
  Object.keys(object).forEach((key) => {
    if (empty(object[key])) {
      delete object[key];
    }
  });
  return object;
}

export function empty(value) {
  return (
    value === "" ||
    value === null ||
    value === undefined ||
    value === "undefined"
  );
}

export const isImage = (file) => {
  const validImageTypes = ["image/gif", "image/jpeg", "image/jpg", "image/png"];
  if (validImageTypes.includes(file.file.type)) return true;
  return false;
};

export const randomString = (length) => {
  let result = "";
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const formatDateWithTz = (date, formate) => {
  const timezone = localStorage.getItem("timezone");
  // if(!timezone) timezone = 'DEFAULT TIMEZONE'
  let tz = "";
  let df = "MMM DD YYYY";
  if (timezone) {
    let timeZoneArr = timezone.split("@");
    if (timeZoneArr[0]) {
      tz = timeZoneArr[0];
    }
    if (timeZoneArr[1]) {
      df = timeZoneArr[1];
    }
  }
  return moment(date)
    .tz(tz)
    .format(formate ?? df);
};
