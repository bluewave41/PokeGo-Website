module.exports = function(number) {
	const common = [1, 4, 7, 10, 13, 16, 19, 21, 23, 25, 27, 29, 32, 35, 37, 39, 41, 43, 46, 48, 50, 52, 54, 56, 58, 60, 63, 66, 69, 72, 74, 77, 79, 81, 84, 86, 88, 90, 92, 96, 98, 100, 102, 104, 109, 116, 118, 120, 129, 133, 138, 140];
    const uncommon = [2, 5, 8, 11, 14, 17, 20, 22, 24, 26, 28, 30, 33, 36, 38, 40, 42, 44, 47, 49, 51, 53, 55, 57, 59, 61, 64, 67, 70, 73, 75, 78, 80, 82, 83, 85, 87, 89, 91, 93, 95, 97, 99, 101, 103, 105, 106, 107, 108, 110, 111, 114, 115, 117, 119, 121, 122, 123, 124, 125, 126, 127, 128, 132, 139, 141, 142, 147];
    const rare = [3, 6, 9, 12, 15, 18, 31, 34, 45, 62, 65, 68, 71, 76, 94, 112, 113, 130, 131, 134, 135, 136, 137, 143, 148, 149];
    const legendary = [144, 145, 146, 150, 151];
		
	let list = [];
		
    for(var x=0;x<this.number;x++) {
        let chance = Math.floor(Math.random() * 100);
        if(chance <= 45) {
			list.push(common[x]);
        }
        else if(chance <= 80) {
			list.push(uncommon[x]);
        }
        else if(chance <= 97) {
			list.push(rare[x]);
        }
        else {
			list.push(legendary[x]);
        }
    }
	return list;
}