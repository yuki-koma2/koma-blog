import { longestCommonPrefix, romanToInt } from "./studyCodeTs";

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
    describe('Longest Common Prefix', function () {

        it('should fl', function () {
            const strs = ["flower","flow","flight"]
            const actual = longestCommonPrefix(strs);
            expect(actual).toBe("fl")
        });
        it('should empty', function () {
            const strs = ["dog","racecar","car"]
            const actual = longestCommonPrefix(strs);
            expect(actual).toBe("")
        });
    });
});