
const sum = (a: number, b:number)=>a+b;
const invertedDiff = (a: number, b:number) => b-a;

export function highestCaloryCount(elvesCarrying: number[][]): number {
    return Math.max(...elvesCarrying.map((list) => list.reduce(sum, 0)));
}

export function highestNCaloryCounts(n: number, elvesCarrying: number[][]): number {
    return elvesCarrying.map((list) => list.reduce(sum, 0)).sort(invertedDiff).slice(0, n).reduce(sum, 0);
}