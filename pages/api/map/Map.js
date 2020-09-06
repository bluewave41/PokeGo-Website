const Jimp = require('jimp');
const Utilities = require('./Utilities');
const PokemonUtilities = require('./PokemonUtilities');
const Discord = require('discord.js');
const RouteMap = require('./RouteMap');
const SpriteList = require('./SpriteList');
const RocketTrainer = require('./RocketTrainer');

class Map {
    constructor(map) {
        if(!map) {
            this.spriteList = new SpriteList();
            this.encounterMap;
            this.init();
            this.actionChances = this.determineActionChances();
            this.firstCatch = true; //used to give ticket on first catch
        }
        else {
            this.spriteList = new SpriteList(map.spriteList);
            this.encounterMap = map.encounterMap;
            this.numberOfPokemon = map.numberOfPokemon;
            this.actionChances = map.actionChances;
            this.firstCatch = map.firstCatch;
            this.route = map.route;
            this.routeData = map.routeData;
        }
    }
    determineActionChances() {
        switch(this.spriteList.getTotalSprites()) {
            case 1:
            case 2:
                return 1;
            case 3:
            case 4:
                return 2;
            default:
                return 3;
        }
    }
    init() {
        this.setRouteData();
        this.selectPokemon();
        this.selectEncounters();
        this.selectPokeStops();
        this.selectRocketEncounters();
        //select positions once everything is added
        this.selectPositions();
    }
    setRouteData() {
        this.route = RouteMap[Math.floor(Math.random() * RouteMap.length)]; //get random route string
        this.routeData = require(`./map/routes/${this.route}/map.js`);
    }
    selectPokemon() {
        let rand = Math.floor(Math.random() * 100);
        if(rand < 50) {
            this.numberOfPokemon = 1;
        }
        else if(rand < 80) {
            this.numberOfPokemon = 2;
        }
        else if(rand < 90) {
            this.numberOfPokemon = 3;
        }
        else {
            this.numberOfPokemon = 4;
        }
        if(this.numberOfPokemon > this.routeData.zones.length) { //if we don't have 4 zones on the map
            this.numberOfPokemon = this.routeData.zones.length;
        }
    }
    selectPokeStops() {
        if(Math.floor(Math.random() * 100) < 50) {
            return;
        }
        this.spriteList.addPokeStop();
    }
    selectRocketEncounters() {
        if(this.numberOfPokemon < this.routeData.zones.length) {
            this.spriteList.addRocket(new RocketTrainer());
        }
    }
    /**
     * Map options:
     * color
     * showImage: true,
     * action
     * wentHome
     * thumbnail
     * @param {*} mapOptions 
     */
    async getEmbed(mapOptions) {
        let action = '';
        const searchEmbed = new Discord.MessageEmbed()
        .setTitle("Map")

        if(this.actionChances == 0) {
            mapOptions.showImage = false;
            mapOptions.wentHome = true;
        }

        if(mapOptions.action) {
            action = `**${mapOptions.action}**\n`;
            searchEmbed.setDescription(action);
        }
        if(mapOptions.wentHome) {
            action = `**${mapOptions.action}**\nYou got tired and went home.`;
            searchEmbed.setDescription(action);
        }
        if(mapOptions.thumbnail) {
            searchEmbed.attachFiles({name: `stop.png`, attachment: mapOptions.thumbnail})
            searchEmbed.setThumbnail(`attachment://stop.png`)
        }
        
        if(mapOptions.showImage) {
            let map = await Jimp.read(`./map/routes/${this.route}/map.png`);
            let description = '';
            let index = 1;
            for(var i=0;i<this.spriteList.pokemon.length;i++) {
                let pokemon = this.spriteList.pokemon[i];
                let pokemonSprite = await Jimp.read(`./map/sprites/resized/${pokemon.pokemonID}.png`);
                map.composite(pokemonSprite, pokemon.y*16, pokemon.x*16);
                description += index++ + ': ' + pokemon.displayName + '\n';
            }
            for(var i=0;i<this.spriteList.pokestops.length;i++) {
                let stop = this.spriteList.pokestops[i];
                let stopSprite = await Jimp.read(`./map/items/pokestop.png`);
                map.composite(stopSprite, stop.y*16, stop.x*16);
                description += index++ + ': PokeStop\n';
            }
            for(var i=0;i<this.spriteList.rockets.length;i++) {
                let rocket = this.spriteList.rockets[i];
                let rocketSprite = await Jimp.read(`./map/sprites/grunt.png`);
                map.composite(rocketSprite, rocket.y*16, rocket.x*16);
                description += index++ + ': Grunt\n';
            }
            if(this.firstCatch) {
                description += 'Catch a Pokemon to get your travel ticket back!\n';
            }
            searchEmbed.setDescription(action + ':battery: Action chances: ' + this.actionChances + '\n' + description)
            searchEmbed.attachFiles({name: `image.png`, attachment: await map.getBufferAsync(Jimp.MIME_PNG)})
            searchEmbed.setImage(`attachment://image.png`)
        }
        return searchEmbed;
    }
    selectPositions() {
        let zones = Utilities.shuffle(this.routeData.zones.slice(0));
        let itemLocations = require(`./map/routes/${this.route}/ItemLocations`);
        itemLocations = Utilities.shuffle(itemLocations.slice(0));
        for(var i=0;i<this.spriteList.pokemon.length;i++) {
            let pokemon = this.spriteList.pokemon[i];
            let zone = zones.pop();
            pokemon.setPosition(zone.zoneID, zone.middle[0], zone.middle[1]);
        }
        for(var i=0;i<this.spriteList.pokestops.length;i++) {
            let stop = this.spriteList.pokestops[i];
            let middle = itemLocations.pop();
            stop.setPosition(middle[0], middle[1]);
        }
        for(var i=0;i<this.spriteList.rockets.length;i++) {
            let rocket = this.spriteList.rockets[i];
            let zone = zones.pop();
            rocket.setPosition(zone.zoneID, this.route, zone.middle[0], zone.middle[1]);
        }
    }
    selectEncounters() {
        const common = [1, 4, 7, 10, 13, 16, 19, 21, 23, 25, 27, 29, 32, 35, 37, 39, 41, 43, 46, 48, 50, 52, 54, 56, 58, 60, 63, 66, 69, 72, 74, 77, 79, 81, 84, 86, 88, 90, 92, 96, 98, 100, 102, 104, 109, 116, 118, 120, 129, 133, 138, 140];
        const uncommon = [2, 5, 8, 11, 14, 17, 20, 22, 24, 26, 28, 30, 33, 36, 38, 40, 42, 44, 47, 49, 51, 53, 55, 57, 59, 61, 64, 67, 70, 73, 75, 78, 80, 82, 83, 85, 87, 89, 91, 93, 95, 97, 99, 101, 103, 105, 106, 107, 108, 110, 111, 114, 115, 117, 119, 121, 122, 123, 124, 125, 126, 127, 128, 132, 139, 141, 142, 147];
        const rare = [3, 6, 9, 12, 15, 18, 31, 34, 45, 62, 65, 68, 71, 76, 94, 112, 113, 130, 131, 134, 135, 136, 137, 143, 148, 149];
        const legendary = [144, 145, 146, 150, 151];
        for(var x=0;x<this.numberOfPokemon;x++) {
            let chance = Math.floor(Math.random() * 100);
            if(chance <= 45) {
                this.spriteList.addPokemon(PokemonUtilities.generateWildPokemon(common[Math.floor(Math.random() * common.length)], 5));
            }
            else if(chance <= 80) {
                this.spriteList.addPokemon(PokemonUtilities.generateWildPokemon(uncommon[Math.floor(Math.random() * uncommon.length)], 5));
            }
            else if(chance <= 97) {
                this.spriteList.addPokemon(PokemonUtilities.generateWildPokemon(rare[Math.floor(Math.random() * rare.length)], 5));
            }
            else {
                this.spriteList.addPokemon(PokemonUtilities.generateWildPokemon(legendary[Math.floor(Math.random() * legendary.length)], 5));
            }
        }
    }
    useActionChance() {
        this.actionChances--;
    }
}

module.exports = Map;