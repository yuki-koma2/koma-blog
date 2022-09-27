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