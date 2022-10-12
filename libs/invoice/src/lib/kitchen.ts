export function kitchen(): string {
    return 'kitchen';
}

export type Taste = 'spicy' / 'sweet' / 'sour'

export interface Country {
    name:string;
    language:string;
}

export interface Dish {
    taste: Taste;
    name:string;
    country:Country;
}

const dish:Dish = {
    taste: 'spicy';
    name:'hew';
    country: {
        name: 'things',
        language: 'why'
    }
}