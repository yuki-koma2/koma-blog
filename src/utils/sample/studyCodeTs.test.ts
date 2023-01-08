import { romanToInt } from "./studyCodeTs";

describe('study code Ts test', function () {
    describe('roman to int', function () {
        // Input: s = "III"
        // Output: 3
        // Explanation: III = 3.
        it('III', function () {
            const s = 'III';
            const result = romanToInt(s);
            expect(result).toBe(3);
        });
        // Input: s = "LVIII"
        // Output: 58
        // Explanation: L = 50, V= 5, III = 3.
        it('LVIII', function () {
            const s = 'LVIII';
            const result = romanToInt(s);
            expect(result).toBe(58);
        }   );
       // Input: s = "MCMXCIV"
        // Output: 1994
        // Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
        it('MCMXCIV', function () {
            const s = 'MCMXCIV';
            const result = romanToInt(s);
            expect(result).toBe(1994);
        }   );
    });
    
});