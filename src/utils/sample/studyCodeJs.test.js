import { myAnswer } from "./studyCodeJs";

describe('sample code test', function () {
    describe('料金計算', function () {
        it('何時に釣り合いがとれるのか', function () {
            for (let i = 0; i < 100; i++) {
                const sums = 605 + 330 * i;
                console.log(sums +"円," +(1 + i/2)+"時間");
                if (3520 < sums) {
                    console.log((1+i/2 )+"時間");
                    console.log((11 +1+i/2 )+"時にでるとよさそう");
                    break
                }
            }
        });

    });

    describe('fibonacci', function () {
        it('should return 1', function () {
            expect(1).toBe(1)
        });
        it('should return 0', function () {
            expect(myAnswer.fibonacci(0)).toBe(0)
        });
        it('should return 1', function () {
            expect(myAnswer.fibonacci(1)).toBe(1)
        });
        it('should return 1', function () {
            expect(myAnswer.fibonacci(2)).toBe(1)
        });
        it('should return 2', function () {
            expect(myAnswer.fibonacci(3)).toBe(2)
        });
        it('should return 3', function () {
            expect(myAnswer.fibonacci(4)).toBe(3)
        });
        it('should return 5', function () {
            expect(myAnswer.fibonacci(5)).toBe(5)
        });
    });
});
