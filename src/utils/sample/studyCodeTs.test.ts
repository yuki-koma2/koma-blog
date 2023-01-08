import { romanToInt } from "./studyCodeTs";

describe('study code Ts test', function () {
    describe('roman to int', function () {
        it('III', function () {
            const s = 'III';
            const result = romanToInt(s);
            expect(result).toBe(3);
        });
        it('LVIII', function () {
            const s = 'LVIII';
            const result = romanToInt(s);
            expect(result).toBe(58);
        }   );
        it('MCMXCIV', function () {
            const s = 'MCMXCIV';
            const result = romanToInt(s);
            expect(result).toBe(1994);
        }   );
    });
});