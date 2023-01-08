import { myAnswer } from "./studyCodeJs";

describe('sample code test', function () {
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