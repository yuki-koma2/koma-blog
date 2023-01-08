export const longestCommonPrefix = (strs: string[]): string => {
    let commonPref = "";

    const firstString = strs[0];
    for (let i = 0; i < firstString.length; i++) {
        const booleans = strs.map(value => {
                return value[i] === firstString[i]
            }
        );
        if (booleans.every(v => v)) {
            commonPref = commonPref + firstString[i]
        } else {
          break;
        }
    }
    return commonPref
};

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

        // CM,XC,IVの例外ケースへの対応 パフォーマンス考慮するほどではなさそう。
        const nextRoman = <RomanString>s[i + 1]
        const twoRoman = roman + nextRoman;
        // リファクタするならここ
        switch (twoRoman) {
            case 'CM':
                calc = calc + 900
                i++
                break;
            case 'CD':
                calc = calc + 400
                i++
                break;
            case 'XC':
                calc = calc + 90
                i++
                break;
            case 'XL':
                calc = calc + 40
                i++
                break;
            case 'IX':
                calc = calc + 9
                i++
                break;
            case 'IV':
                calc = calc + 4
                i++
                break;
            default:
                const convertedNumber = romanNumberMap.get(roman) ?? 0;
                calc = calc + convertedNumber;
        }
    }
    return calc
};

type RomanString = 'I' | 'V' | 'X' | 'L' | 'C' | 'D' | 'M';