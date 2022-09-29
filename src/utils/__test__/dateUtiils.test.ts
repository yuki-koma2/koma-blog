import { calculateDaysBetweenDates, getDaysSinceDate, parseDate } from "../dateUtils";

describe('date util test', function () {
    describe('#getDaysSinceDate', function () {
           it('should return 0 if date is today', function () {
                const date = new Date();
                const days = getDaysSinceDate(date);
                expect(days).toBe(0);
            });
            it('should return 1 if date is yesterday', function () {
                const date = new Date();
                date.setDate(date.getDate() - 1);
                const days = getDaysSinceDate(date);
                expect(days).toBe(1);
            });
            it('should return 2 if date is 2 days ago', function () {
                const date = new Date();
                date.setDate(date.getDate() - 2);
                const days = getDaysSinceDate(date);
                expect(days).toBe(2);
            });
    });
    describe('#calculateDaysBetweenDates', function () {
        it('should return 0 if dates are the same', function () {
            const date1 = new Date();
            const date2 = new Date();
            const days = calculateDaysBetweenDates(date1, date2);
            expect(days).toBe(0);
        });
        it('should return 1 if dates are 1 day apart', function () {
            const date1 = new Date();
            const date2 = new Date();
            date2.setDate(date2.getDate() + 1);
            const days = calculateDaysBetweenDates(date1, date2);
            expect(days).toBe(1);
        });
        it('should return 2 if dates are 2 days apart', function () {
            const date1 = new Date();
            const date2 = new Date();
            date2.setDate(date2.getDate() + 2);
            const days = calculateDaysBetweenDates(date1, date2);
            expect(days).toBe(2);
        });
    });
    describe('#parseDate', function () {
        it('should return a date object', function () {
            const actual = parseDate('2020-01-01T00:00:00.000Z');
            expect(actual).toBeInstanceOf(Date);
        });
        it('should return a date object with the correct year', function () {
            const actual = parseDate('2020-01-01T00:00:00.000Z');
            expect(actual?.getFullYear()).toBe(2020);
        });
        it('should return a date object with the correct month', function () {
            const actual = parseDate('2020-01-01T00:00:00.000Z');
            expect(actual?.getMonth()).toBe(0);
        });
        it('should return a date object with the correct day', function () {
            const actual = parseDate('2020-01-01T00:00:00.000Z');
            expect(actual?.getDate()).toBe(1);
        });
        it('should return null if date is invalid', function () {
            const actual = parseDate('invalid');
            expect(actual).toBe(null);
        });
        it('should return null if dateString is empty', function () {
            const actual = parseDate('');
            expect(actual).toBe(null);
        });
        it('should return date object with correct date time', function () {
            const actual = parseDate('2020-08-19T15:19:24.191Z');
            expect(actual?.getFullYear()).toBe(2020);
            expect(actual?.getMonth()).toBe(7);
            expect(actual?.getDate()).toBe(19);
            expect(actual?.getHours()).toBe(15);
            expect(actual?.getMinutes()).toBe(19);
            expect(actual?.getSeconds()).toBe(24);
            expect(actual?.getMilliseconds()).toBe(191);
        });
        it('should return date object when passed converted from date object ', function () {
            const today = new Date();
            const actual = parseDate(today.toISOString());
            expect(actual?.getFullYear()).toBe(today.getFullYear());
            expect(actual?.getMonth()).toBe(today.getMonth());
            expect(actual?.getDate()).toBe(today.getDate());
        });

    });
});
