// NOTE: this is practice for GitHub copilot.
export const calculateDaysBetweenDates = (date1: Date, date2: Date) => {
  return Math.abs(date1.getTime() - date2.getTime()) / (1000 * 3600 * 24);
};

export const getDaysSinceDate = (date: Date) => {
  const today = new Date();
  return calculateDaysBetweenDates(date, today);
};

export const getDaysUntilDate = (date: Date) => {
  const today = new Date();
  return calculateDaysBetweenDates(today, date);
};

export const getDaysBetweenDates = (date1: Date, date2: Date) => {
  return calculateDaysBetweenDates(date1, date2);
};

export const getToday = () => {
  return new Date();
};

export const getTomorrow = () => {
  const today = new Date();
  return new Date(today.setDate(today.getDate() + 1));
};

export const getYesterday = () => {
  const today = new Date();
  return new Date(today.setDate(today.getDate() - 1));
};

export const getDaysAgo = (daysAgo: number) => {
  const today = new Date();
  return new Date(today.setDate(today.getDate() - daysAgo));
};

export const getDaysFromNow = (daysFromNow: number) => {
  const today = new Date();
  return new Date(today.setDate(today.getDate() + daysFromNow));
};

export const getDaysFromNowString = (daysFromNow: number) => {
  const date = getDaysFromNow(daysFromNow);
  return date.toISOString().split('T')[0];
};

export const getDaysAgoString = (daysAgo: number) => {
  const date = getDaysAgo(daysAgo);
  return date.toISOString().split('T')[0];
};

export const getTomorrowString = () => {
  const date = getTomorrow();
  return date.toISOString().split('T')[0];
};

export const getYesterdayString = () => {
  const date = getYesterday();
  return date.toISOString().split('T')[0];
};

export const getTodayString = () => {
  const date = getToday();
  return date.toISOString().split('T')[0];
};

export const getDateString = (date: Date) => {
  return date.toISOString().split('T')[0];
};

export const getDayString = (date: Date) => {
  return date.toISOString().split('T')[0];
};

export const getMonthString = (date: Date) => {
  return date.toISOString().split('T')[0];
};

export const getYearString = (date: Date) => {
  return date.toISOString().split('T')[0];
};

/**
 * @param {string} dateString - date string formatted as ISO String. ex 2020-08-22T15:19:24.191Z
 * @returns {Date} - date object
 */
export const parseDate = (dateString: string) => {
  console.log("dateString", dateString);
  // NOTE: if dateString is not ISO String, this function will return null.
  // NOTE: if invalid format, return null
  if (!dateString.match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/)) {
    return null;
  }
  // NOTE: if dateString is Empty String, this function will return null.
  if (!dateString) {
    return null;
  }
// NOTE: そのままDateオブジェクトに変換すると、日本時間になってしまうので、UTCに変換する。
  const [splitDate, splitTime] = dateString.split('T');
  const [year, month, date] = splitDate.split('-').map(Number);
  const [hours, minutes, secondsWithMilli] = splitTime.split(':');
  const _hours = Number(hours);
  const _minutes = Number(minutes);
  const [seconds, milliseconds] = secondsWithMilli.split('Z')[0].split('.').map(Number);
  return new Date(year, month - 1, date, _hours, _minutes, seconds, milliseconds);
}

export const isToday = (date: Date) => {
  const today = getToday();
  return date.toISOString().split('T')[0] === today.toISOString().split('T')[0];
}