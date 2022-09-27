import { calculateDaysBetweenDates, getDaysSinceDate } from "../dateUtils";

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
});