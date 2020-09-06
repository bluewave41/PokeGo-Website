module.exports = {
    'normal': 1,
    'fire': 2,
    'water': 3,
    'electric': 4,
    'grass': 5,
    'ice': 6,
    'fighting': 7,
    'poison': 8,
    'ground': 9,
    'flying': 10,
    'psychic': 11,
    'bug': 12,
    'rock': 13,
    'ghost': 14,
    'dragon': 15,
    'dark': 16,
    'steel': 17,
    'fairy': 18,
    1: 'normal',
    2: 'fire',
    3: 'water',
    4: 'electric',
    5: 'grass',
    6: 'ice',
    7: 'fighting',
    8: 'poison',
    9: 'ground',
    10: 'flying',
    11: 'psychic',
    12: 'bug',
    13: 'rock',
    14: 'ghost',
    15: 'dragon',
    16: 'dark',
    17: 'steel',
    18: 'fairy',
    typeChart: [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.5, 0, 1, 1, 0.5, 1],
        [1, 0.5, 0.5, 1, 2, 2, 1, 1, 1, 1, 1, 2, 0.5, 1, 0.5, 1, 2, 1],
        [1, 2, 0.5, 1, 0.5, 1, 1, 1, 2, 1, 1, 1, 2, 1, 0.5, 1, 1, 1],
        [1, 1, 2, 0.5, 0.5, 1, 1, 1, 0, 2, 1, 1, 1, 1, 0.5, 1, 1, 1],
        [1, 0.5, 2, 1, 0.5, 1, 1, 0.5, 2, 0.5, 1, 0.5, 2, 1, 0.5, 1, 0.5, 1],
        [1, 0.5, 0.5, 1, 2, 0.5, 1, 1, 2, 2, 1, 1, 1, 1, 2, 1, 0.5, 1],
        [2, 1, 1, 1, 1, 2, 1, 0.5, 1, 0.5, 0.5, 0.5, 2, 0, 1, 2, 2, 0.5],
        [1, 1, 1, 1, 2, 1, 1, 0.5, 0.5, 1, 1, 1, 0.5, 0.5, 1, 1, 0, 2],
        [1, 2, 1, 2, 0.5, 1, 1, 2, 1, 0, 1, 0.5, 2, 1, 1, 1, 2, 1],
        [1, 1, 1, 0.5, 2, 1, 2, 1, 1, 1, 1, 2, 0.5, 1, 1, 1, 0.5, 1],
        [1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 0.5, 1, 1, 1, 1, 0, 0.5, 1],
        [1, 0.5, 1, 1, 2, 1, 0.5, 0.5, 1, 0.5, 2, 1, 1, 0.5, 1, 2, 0.5, 0.5],
        [1, 2, 1, 1, 1, 2, 0.5, 1, 0.5, 2, 1, 2, 1, 1, 1, 1, 0.5, 1],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 0.5, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 0.5, 0],
        [1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1, 2, 1, 1, 2, 1, 0.5, 1, 0.5],
        [1, 0.5, 0.5, 0.5, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 0.5, 2],
        [1, 0.5, 1, 1, 1, 1, 2, 0.5, 1, 1, 1, 1, 1, 1, 2, 2, 0.5, 1],
    ],
    getTypeEffectiveness(move, defender) {
        let types = defender.getType();
        let type1 = this[types[0]];
        let type2 = this[types[1]];
        let moveType = this[move.type];
        let multiplier = this.typeChart[moveType-1][type1-1];
        if(type2) {
            multiplier *= this.typeChart[moveType-1][type2-1];
        }
        return multiplier;
    },
    /**
     * Returns a type that is resistant to the given type. Used for Conversion 2
     * @param {BattlePokemon} attacker Pokemon using the attack
     * @param {string} type name of the type
     */
    getResistantType(attacker, type) {
        let typeID = this[type];
        let values = this.typeChart[typeID-1];
        let validTypes = [];
        for(var i=0;i<values.length;i++) {
            if(values[i] < 1) {
                validTypes.push(this[i+1]);
            }
        }
        console.log(validTypes);
        validTypes = validTypes.filter(el => el != attacker.type1 && el != attacker.type2);
        if(validTypes.length == 0) {
            return {failed: true};
        }
        console.log(validTypes);
        return validTypes[Math.floor(Math.random() * validTypes.length)];
    }
}