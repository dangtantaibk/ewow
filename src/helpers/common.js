/**
 * Hidden email
 *
 * @param {string} email
 * @return {string}
 */
import moment from 'moment';

export function hideEmail(email) {
  let hiddenEmail = '';
  for (let i = 0; i < email.length; i++) {
    if (i < email.indexOf('@')) {
      if (email.indexOf('@') > 5) {
        switch (i) {
          case 0:
          case 1:
            hiddenEmail += email[i];
            break;
          case email.indexOf('@') - 1:
          case email.indexOf('@') - 2:
            hiddenEmail += email[i];
            break;
          default:
            hiddenEmail += '*';
        }
      } else {
        switch (i) {
          case 0:
            hiddenEmail += email[i];
            break;
          case email.indexOf('@') - 1:
            hiddenEmail += email[i];
            break;
          default:
            hiddenEmail += '*';
        }
      }
    } else {
      hiddenEmail += email[i];
    }
  }
  return hiddenEmail;
}

/**
 * Validate email
 *
 * @param {string} email
 * @return {boolean}
 */
export function validateEmail(email: string) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

/**
 * Validate phone number
 *
 * @param {string} phoneNumber
 * @return {boolean}
 */
export function validatePhoneNumber(phoneNumber: string) {
  const phoneno = /^\d{10}$/ || /^\d{11}$/;
  return phoneno.test(String(phoneNumber).toLowerCase());
}

/**
 * Convert string 0:00 to seconds
 *
 * @param {string} timeString
 * @return number
 */
export function convertStringToSeconds(timeString: string): number {
  const time = timeString.split(':');
  let seconds;
  try {
    seconds = +time[0] * 60 + +time[1];
  } catch (e) {
    seconds = 0;
  }

  return seconds;
}

export const formatDate = (dateString, format = 'hh:mm, DD/MM/YY') => {
  var date = moment(dateString, "YYYY-MM-DD' 'hh:mm:ss");
  return date.format(format);
};

export const formatDateToRouteString = dateNow => {
  var days = ['Chủ nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'];
  var date = moment(dateNow);

  var day = days[dateNow.getDay()];
  return 'Tuyến ' + day + ' Ngày ' + date.format('DD/MM/YYYY');
};

export function VND(n, currency = '') {
  return (
    n
      .toFixed(2)
      .replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
      .replace('.00', '')
      .replace(',', '.') + currency
  );
}

export const getDistanceWithKmOrMeter = distance => {
  if (!distance) {
    return '0m';
  }
  if (distance < 1000) {
    return distance.toFixed(0) + 'm';
  }
  return (distance / 1000).toFixed(1) + 'km';
};
