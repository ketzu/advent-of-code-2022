

export function overlap(first: string, ...second: string[]) {
    const filtersets = second.map(list => new Set(list.split("")));
    return first.split("").filter(x => filtersets.map(y => y.has(x)).reduce((a,b) => a && b, true))[0];
}

export function points(character: string): number {
    if(character <= 'Z') return character.charCodeAt(0) - 38;
    return character.charCodeAt(0) - 96;
}

export function halfes(fullstring: string): [string, string] {
    const half = fullstring.length / 2;
    return [fullstring.substring(0, half), fullstring.substring(half)];
}

export function overlappingPoint(rucksack: string) : number {
    return points(overlap(...halfes(rucksack)));
}

export function overlappingBadges(rucksacks: [string, string, string]) : number {
    return points(overlap(...rucksacks));
}

export function task1(rucksacks: string[]) : number {
    return rucksacks.map(overlappingPoint).reduce((a,b) => a+b, 0)
}

export function task2(rucksacks: [string, string, string][]) : number {
    return rucksacks.map(overlappingBadges).reduce((a,b) => a+b, 0)
}