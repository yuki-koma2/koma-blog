import { longestCommonPrefix, romanToInt, threeSum } from "./studyCodeTs";

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
        it('should c', function () {
            const strs = ["cir","car"]
            const actual = longestCommonPrefix(strs);
            expect(actual).toBe("c")
        });
    });

    describe(' 3Sum', function () {
        it('should [[-1,-1,2],[-1,0,1]]', function () {
            const  nums = [-1,0,1,2,-1,-4];
            const actual = threeSum(nums);
            expect(actual.length).toBe(2)
            // expect(actual[0]).toContainEqual([-1,-1,2])
            expect(actual[0]).toStrictEqual([-1, 2, -1])
            // expect(actual[1]).toContainEqual([-1,0,1])
            expect(actual[1]).toStrictEqual([0, 1, -1])
        });

        it('should []', function () {
            const  nums = [0,1,1]
            const actual = threeSum(nums);
            expect(actual).toStrictEqual([])
        });

        it('should [[0,0,0]]', function () {
            const  nums =  [0,0,0]
            const actual = threeSum(nums);
            expect(actual).toStrictEqual([[0,0,0]])
        });
        it('should [[0,0,0]] if 4', function () {
            const  nums =  [0,0,0,0]
            const actual = threeSum(nums);
            expect(actual).toStrictEqual([[0,0,0]])
        });
        it('should [[-2,0,2],[-2,1,1]]', function () {
            const nums = [-2,0,1,1,2]
            const actual = threeSum(nums);
            expect(actual.length).toBe(2)
            expect(actual[0]).toStrictEqual([-2,0,2])
            // expect(actual[1]).toStrictEqual([-2,1,1])
        });
        it('has 0,0,0', function () {
            const nums = [3,0,3,2,-4,0,-3,2,2,0,-1,-5]
            const actual = threeSum(nums);
            expect(actual.length).toBe(4)
            expect(actual[0]).toStrictEqual([0,0,0])
        });
    });
});