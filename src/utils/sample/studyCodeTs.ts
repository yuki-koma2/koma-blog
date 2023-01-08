const romanNumberMap = new Map<RomanString, number>(
    [
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000],
    ]);
export const romanToInt = (s: string): number => {
    let calc = 0;
    for (let i = 0; i < s.length; i++) {
        const roman = <RomanString>s[i]

        // CM,XC,IVの例外ケースへの対応
        // if (roman === 'C' || roman === 'X' || roman === 'I') {
        const nextRoman = <RomanString>s[i + 1]
        const twoRoman = roman + nextRoman;
        if (twoRoman === 'CM') {
            calc = calc + 900
            i++
        }
        else if (twoRoman === 'XC') {
            calc = calc + 90
            i++
        }
        else if (twoRoman === 'IV') {
            calc = calc + 4
            i++
        } else {
            const convertedNumber = romanNumberMap.get(roman) ?? 0;
            calc = calc + convertedNumber;
        }
        // }


    }
    return calc
};

type RomanString = 'I' | 'V' | 'X' | 'L' | 'C' | 'D' | 'M';


// type RomanNumberMap = {
//     [k in RomanString]: number;
// };
