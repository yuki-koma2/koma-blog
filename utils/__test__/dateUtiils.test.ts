import { getDaysSinceDate } from "../dateUtils";

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
});