export function factorial(input: number): number {
    if(input < 0) {
        throw new Error("Factorial is not defined for negative numbers");
    }
    
    let result = 1;
    for (let i = 1; i <= input; i++) {
        result *= i;
    }
    return result;
}