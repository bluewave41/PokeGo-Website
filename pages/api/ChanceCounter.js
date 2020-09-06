module.exports = {
    getNumberOfTimes() {
        let chance = Math.random();
        if(chance < .375) {
            return 2;
        }
        else if(chance < .75) {
            return 3;
        }
        else if(chance < .875) {
            return 4;
        }
        else {
            return 5;
        }
    }
}