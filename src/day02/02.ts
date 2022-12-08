export enum throws {
    rock = 1,
    paper = 2,
    scissors = 3
}

export enum result {
    win = 6,
    draw = 3,
    loss = 0
}

export function decide(elf: throws, me: throws): result {
    if (elf === me) return result.draw;
    if (elf === throws.rock && me === throws.paper ||
        elf === throws.paper && me === throws.scissors ||
        elf === throws.scissors && me === throws.rock)
        return result.win;
    return result.loss;
}

const mapping : Record<string, throws> = {
    'A': throws.rock,
    'B': throws.paper,
    'C': throws.scissors,
    'X': throws.rock,
    'Y': throws.paper,
    'Z': throws.scissors
}

export function decide2(elf: throws, end: result): throws {
    if(end === result.draw) return elf;
    switch (elf) {
        case throws.rock: {
            return end===result.win? throws.paper : throws.scissors;
        }
        case throws.paper: {
            return end===result.win? throws.scissors : throws.rock;
        }
        case throws.scissors: {
            return end===result.win? throws.rock : throws.paper;
        }
    }
}

const mapping2 : Record<string, result> = {
    'X': result.loss,
    'Y': result.draw,
    'Z': result.win
}

export function points(guide: string[]): number {
    return guide.map((value): [throws, throws] => [mapping[value.charAt(0)], mapping[value.charAt(2)]])
        .map((throwings) : number => decide(...throwings)+throwings[1])
        .reduce((a,b) => a+b, 0)
}

export function points2(guide: string[]): number {
    return guide.map((value): [throws, result] => [mapping[value.charAt(0)], mapping2[value.charAt(2)]])
        .map((decisions) : number => decide2(...decisions)+decisions[1])
        .reduce((a,b) => a+b, 0)
}