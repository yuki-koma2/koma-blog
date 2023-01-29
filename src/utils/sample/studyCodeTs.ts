


export const threeSumPerfImp = (nums: number[]): number[][] => {
    const resultArray: number[][] = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            break;
        }
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                resultArray.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) {
                    left++;
                }
                while (left < right && nums[right] === nums[right - 1]) {
                    right--;
                }
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return resultArray;
};
export const threeSum = (nums: number[]): number[][] => {
    const tmpArray: number[][] = [];
    const resultArray: number[][] = [];

    // ３つの数字を合計して0になる組み合わせを見つける
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (nums[i] + nums[j] + nums[k] === 0) {
                    tmpArray.push([nums[i], nums[j], nums[k]])
                }
            }
        }
    }
    for (let i = 0; i < tmpArray.length; i++) {
        const booleans = tmpArray.slice(i + 1, tmpArray.length).map(arr => {
            // [0,0,0]の時は特殊な処理が必要
            if (tmpArray[i][0] === 0 && tmpArray[i][1] === 0) {
                return arr[0] === 0 && arr[1] === 0
            }
            return arr.includes(tmpArray[i][0])
                && arr.includes(tmpArray[i][1])
                && arr.includes(tmpArray[i][2])
        });
        if (!booleans.some(v => v)) {
            resultArray.push(tmpArray[i])
        }
    }
    return resultArray
};


export const threeSumOld = (nums: number[]): number[][] => {
    const tmpArray: number[][] = [];
    const resultArray: number[][] = [];

    // ３つの数字を合計して0になる組み合わせを見つける
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (nums[i] + nums[j] + nums[k] === 0) {
                    tmpArray.push([nums[i], nums[j], nums[k]])
                }
            }
        }
    }
    // 一つもなければ空で返す
    if (tmpArray.length === 0) {
        return resultArray
    }
    console.log(tmpArray);
    // 重複する組み合わせを除去する。
    for (let i = 0; i < tmpArray.length; i++) {
        // console.log("i",tmpArray[i]);
        // console.log("length",tmpArray.length );
        // console.log("---------",tmpArray.length === i + 1);
        // console.log(tmpArray.length - 1);
        if (tmpArray.length === i + 1) {
            // console.log("i-", tmpArray[i-1]);
            for (let j = i - 1; j >= 0; j--) {
                console.log("j-", tmpArray[j]);
                console.log("j- i", tmpArray[i]);
                if (!(tmpArray[j].includes(tmpArray[i][0])
                    && tmpArray[j].includes(tmpArray[i][1])
                    && tmpArray[j].includes(tmpArray[i][2]))) {
                    resultArray.push(tmpArray[i])
                }
            }
        } else {
            for (let j = i + 1; j < tmpArray.length; j++) {
                // console.log("j+",tmpArray[i]);
                if (!(tmpArray[j].includes(tmpArray[i][0])
                    && tmpArray[j].includes(tmpArray[i][1])
                    && tmpArray[j].includes(tmpArray[i][2]))) {
                    resultArray.push(tmpArray[i])
                }
            }
        }
    }
    // 全てが重複OR一つしかなければそのまま返す
    if (tmpArray.length >= 1 && resultArray.length === 0) {
        resultArray.push(tmpArray[0])
    }
    return resultArray
};


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


export const isHappy = (n: number): boolean => {

    const set = new Set<number>();
    let current = n;
    while (current !== 1 && !set.has(current)) {
        set.add(current);
        let sum = 0;
        const str = current.toString();
        for (let i = 0; i < str.length; i++) {
            const digit = +str[i];
            sum += digit * digit;
        }
        current = sum;
    }
    return current === 1;
};
