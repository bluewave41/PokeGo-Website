const ChanceCounter = require('./ChanceCounter');
const TypeChart = require('./TypeChart');

/**
 * {afterEffects: 'damage'} must be effect
 */

module.exports = {
    "-1":"NONE",
    "1":"POUND",
    "2":"KARATE_CHOP",
    "3":"DOUBLE_SLAP",
    "4":"COMET_PUNCH",
    "5":"MEGA_PUNCH",
    "6":"PAY_DAY",
    "7":"FIRE_PUNCH",
    "8":"ICE_PUNCH",
    "9":"THUNDER_PUNCH",
    "10":"SCRATCH",
    "11":"VICE_GRIP",
    "12":"GUILLOTINE",
    "13":"RAZOR_WIND",
    "14":"SWORDS_DANCE",
    "16":"GUST",
    "17":"WING_ATTACK",
    "18":"WHIRLWIND",
    "20":"BIND",
    "21":"SLAM",
    "22":"VINE_WHIP",
    "23":"STOMP",
    "24":"DOUBLE_KICK",
    "25":"MEGA_KICK",
    "26":"JUMP_KICK",
    "27":"ROLLING_KICK",
    "28":"SAND_ATTACK",
    "29":"HEADBUTT",
    "30":"HORN_ATTACK",
    "31":"FURY_ATTACK",
    "32":"HORN_DRILL",
    "33":"TACKLE",
    "34":"BODY_SLAM",
    "35":"WRAP",
    "36":"TAKE_DOWN",
    "37":"THRASH",
    "38":"DOUBLE_EDGE",
    "39":"TAIL_WHIP",
    "40":"POISON_STING",
    "41":"TWINEEDLE",
    "42":"PIN_MISSILE",
    "43":"LEER",
    "44":"BITE",
    "45":"GROWL",
    "46":"ROAR",
    "47":"SING",
    "48":"SUPERSONIC",
    "49":"SONIC_BOOM",
    "50":"DISABLE",
    "51":"ACID",
    "52":"EMBER",
    "53":"FLAMETHROWER",
    "54":"MIST",
    "55":"WATER_GUN",
    "56":"HYDRO_PUMP",
    "58":"ICE_BEAM",
    "59":"BLIZZARD",
    "60":"PSYBEAM",
    "61":"BUBBLE_BEAM",
    "62":"AURORA_BEAM",
    "63":"HYPER_BEAM",
    "64":"PECK",
    "65":"DRILL_PECK",
    "66":"SUBMISSION",
    "67":"LOW_KICK",
    "68":"COUNTER",
    "69":"SEISMIC_TOSS",
    "70":"STRENGTH",
    "71":"ABSORB",
    "72":"MEGA_DRAIN",
    "73":"LEECH_SEED",
    "74":"GROWTH",
    "75":"RAZOR_LEAF",
    "76":"SOLAR_BEAM",
    "77":"POISON_POWDER",
    "78":"STUN_SPORE",
    "79":"SLEEP_POWDER",
    "80":"PETAL_DANCE",
    "81":"STRING_SHOT",
    "82":"DRAGON_RAGE",
    "83":"FIRE_SPIN",
    "84":"THUNDER_SHOCK",
    "85":"THUNDERBOLT",
    "86":"THUNDER_WAVE",
    "87":"THUNDER",
    "88":"ROCK_THROW",
    "89":"EARTHQUAKE",
    "90":"FISSURE",
    "91":"DIG",
    "92":"TOXIC",
    "93":"CONFUSION",
    "94":"PSYCHIC",
    "95":"HYPNOSIS",
    "96":"MEDITATE",
    "97":"AGILITY",
    "98":"QUICK_ATTACK",
    "99":"RAGE",
    "100":"TELEPORT",
    "101":"NIGHT_SHADE",
    "102":"MIMIC",
    "103":"SCREECH",
    "104":"DOUBLE_TEAM",
    "105":"RECOVER",
    "106":"HARDEN",
    "107":"MINIMIZE",
    "108":"SMOKESCREEN",
    "109":"CONFUSE_RAY",
    "110":"WITHDRAW",
    "111":"DEFENSE_CURL",
    "112":"BARRIER",
    "113":"LIGHT_SCREEN",
    "114":"HAZE",
    "115":"REFLECT",
    "116":"FOCUS_ENERGY",
    "118":"METRONOME",
    "119":"MIRROR_MOVE",
    "120":"SELF_DESTRUCT",
    "121":"EGG_BOMB",
    "122":"LICK",
    "123":"SMOG",
    "124":"SLUDGE",
    "125":"BONE_CLUB",
    "126":"FIRE_BLAST",
    "127":"WATERFALL",
    "128":"CLAMP",
    "129":"SWIFT",
    "130":"SKULL_BASH",
    "131":"SPIKE_CANNON",
    "132":"CONSTRICT",
    "133":"AMNESIA",
    "134":"KINESIS",
    "135":"SOFT_BOILED",
    "136":"HIGH_JUMP_KICK",
    "137":"GLARE",
    "138":"DREAM_EATER",
    "139":"POISON_GAS",
    "140":"BARRAGE",
    "141":"LEECH_LIFE",
    "142":"LOVELY_KISS",
    "143":"SKY_ATTACK",
    "144":"TRANSFORM",
    "145":"BUBBLE",
    "146":"DIZZY_PUNCH",
    "147":"SPORE",
    "149":"PSYWAVE",
    "150":"SPLASH",
    "151":"ACID_ARMOR",
    "152":"CRABHAMMER",
    "153":"EXPLOSION",
    "154":"FURY_SWIPES",
    "155":"BONEMERANG",
    "156":"REST",
    "157":"ROCK_SLIDE",
    "158":"HYPER_FANG",
    "159":"SHARPEN",
    "160":"CONVERSION",
    "161":"TRI_ATTACK",
    "162":"SUPER_FANG",
    "163":"SLASH",
    "164":"SUBSTITUTE",
    "170":"MIND_READER",
    "171":"NIGHTMARE",
    "172":"FLAME_WHEEL",
    "173":"SNORE",
    "174":"CURSE",
    "175":"FLAIL",
    "176":"CONVERSION_2",
    "179":"REVERSAL",
    "180":"SPITE",
    "181":"POWDER_SNOW",
    "182":"PROTECT",
    "183":"MACH_PUNCH",
    "184":"SCARY_FACE",
    "185":"FEINT_ATTACK",
    "187":"BELLY_DRUM",
    "188":"SLUDGE_BOMB",
    "189":"MUD_SLAP",
    "191":"SPIKES",
    "192":"ZAP_CANNON",
    "193":"FORESIGHT",
    "194":"DESTINY_BOND",
    "195":"PERISH_SONG",
    "196":"ICY_WIND",
    "197":"DETECT",
    "198":"BONE_RUSH",
    "199":"LOCK_ON",
    "200":"OUTRAGE",
    "201":"SANDSTORM",
    "202":"GIGA_DRAIN",
    "203":"ENDURE",
    "204":"CHARM",
    "205":"ROLLOUT",
    "206":"FALSE_SWIPE",
    "207":"SWAGGER",
    "209":"SPARK",
    "210":"FURY_CUTTER",
    "212":"MEAN_LOOK",
    "214":"SLEEP_TALK",
    "219":"SAFEGUARD",
    "222":"MAGNITUDE",
    "223":"DYNAMIC_PUNCH",
    "224":"MEGAHORN",
    "225":"DRAGON_BREATH",
    "226":"BATON_PASS",
    "227":"ENCORE",
    "228":"PURSUIT",
    "229":"RAPID_SPIN",
    "230":"SWEET_SCENT",
    "231":"IRON_TAIL",
    "232":"METAL_CLAW",
    "233":"VITAL_THROW",
    "235":"SYNTHESIS",
    "236":"MOONLIGHT",
    "238":"CROSS_CHOP",
    "239":"TWISTER",
    "240":"RAIN_DANCE",
    "241":"SUNNY_DAY",
    "242":"CRUNCH",
    "243":"MIRROR_COAT",
    "244":"PSYCH_UP",
    "245":"EXTREME_SPEED",
    "246":"ANCIENT_POWER",
    "247":"SHADOW_BALL",
    "248":"FUTURE_SIGHT",
    "250":"WHIRLPOOL",
    "252":"FAKE_OUT",
    "253":"UPROAR",
    "254":"STOCKPILE",
    "255":"SPIT_UP",
    "256":"SWALLOW",
    "257":"HEAT_WAVE",
    "258":"HAIL",
    "260":"FLATTER",
    "261":"WILL_O_WISP",
    "262":"MEMENTO",
    "264":"FOCUS_PUNCH",
    "266":"FOLLOW_ME",
    "268":"CHARGE",
    "269":"TAUNT",
    "270":"HELPING_HAND",
    "271":"TRICK",
    "272":"ROLE_PLAY",
    "275":"INGRAIN",
    "276":"SUPERPOWER",
    "277":"MAGIC_COAT",
    "278":"RECYCLE",
    "279":"REVENGE",
    "280":"BRICK_BREAK",
    "281":"YAWN",
    "282":"KNOCK_OFF",
    "283":"ENDEAVOR",
    "286":"IMPRISON",
    "287":"REFRESH",
    "288":"GRUDGE",
    "291":"DIVE",
    "293":"CAMOUFLAGE",
    "297":"FEATHER_DANCE",
    "299":"BLAZE_KICK",
    "300":"MUD_SPORT",
    "303":"SLACK_OFF",
    "304":"HYPER_VOICE",
    "305":"POISON_FANG",
    "306":"CRUSH_CLAW",
    "309":"METEOR_MASH",
    "310":"ASTONISH",
    "312":"AROMATHERAPY",
    "313":"FAKE_TEARS",
    "314":"AIR_CUTTER",
    "316":"ODOR_SLEUTH",
    "317":"ROCK_TOMB",
    "318":"SILVER_WIND",
    "319":"METAL_SOUND",
    "321":"TICKLE",
    "322":"COSMIC_POWER",
    "324":"SIGNAL_BEAM",
    "325":"SHADOW_PUNCH",
    "326":"EXTRASENSORY",
    "327":"SKY_UPPERCUT",
    "328":"SAND_TOMB",
    "329":"SHEER_COLD",
    "330":"MUDDY_WATER",
    "331":"BULLET_SEED",
    "332":"AERIAL_ACE",
    "333":"ICICLE_SPEAR",
    "334":"IRON_DEFENSE",
    "335":"BLOCK",
    "337":"DRAGON_CLAW",
    "339":"BULK_UP",
    "340":"BOUNCE",
    "341":"MUD_SHOT",
    "343":"COVET",
    "345":"MAGICAL_LEAF",
    "346":"WATER_SPORT",
    "347":"CALM_MIND",
    "348":"LEAF_BLADE",
    "349":"DRAGON_DANCE",
    "350":"ROCK_BLAST",
    "351":"SHOCK_WAVE",
    "352":"WATER_PULSE",
    "355":"ROOST",
    "356":"GRAVITY",
    "357":"MIRACLE_EYE",
    "358":"WAKE_UP_SLAP",
    "359":"HAMMER_ARM",
    "360":"GYRO_BALL",
    "361":"HEALING_WISH",
    "362":"BRINE",
    "363":"NATURAL_GIFT",
    "364":"FEINT",
    "365":"PLUCK",
    "366":"TAILWIND",
    "367":"ACUPRESSURE",
    "370":"CLOSE_COMBAT",
    "371":"PAYBACK",
    "372":"ASSURANCE",
    "374":"FLING",
    "376":"TRUMP_CARD",
    "378":"WRING_OUT",
    "380":"GASTRO_ACID",
    "381":"LUCKY_CHANT",
    "382":"ME_FIRST",
    "383":"COPYCAT",
    "384":"POWER_SWAP",
    "385":"GUARD_SWAP",
    "386":"PUNISHMENT",
    "387":"LAST_RESORT",
    "388":"WORRY_SEED",
    "389":"SUCKER_PUNCH",
    "390":"TOXIC_SPIKES",
    "392":"AQUA_RING",
    "393":"MAGNET_RISE",
    "394":"FLARE_BLITZ",
    "396":"AURA_SPHERE",
    "397":"ROCK_POLISH",
    "398":"POISON_JAB",
    "399":"DARK_PULSE",
    "400":"NIGHT_SLASH",
    "401":"AQUA_TAIL",
    "402":"SEED_BOMB",
    "403":"AIR_SLASH",
    "404":"X_SCISSOR",
    "405":"BUG_BUZZ",
    "406":"DRAGON_PULSE",
    "407":"DRAGON_RUSH",
    "408":"POWER_GEM",
    "410":"VACUUM_WAVE",
    "413":"BRAVE_BIRD",
    "414":"EARTH_POWER",
    "415":"SWITCHEROO",
    "416":"GIGA_IMPACT",
    "417":"NASTY_PLOT",
    "418":"BULLET_PUNCH",
    "419":"AVALANCHE",
    "420":"ICE_SHARD",
    "421":"SHADOW_CLAW",
    "422":"THUNDER_FANG",
    "423":"ICE_FANG",
    "424":"FIRE_FANG",
    "426":"MUD_BOMB",
    "427":"PSYCHO_CUT",
    "428":"ZEN_HEADBUTT",
    "429":"MIRROR_SHOT",
    "430":"FLASH_CANNON",
    "435":"DISCHARGE",
    "436":"LAVA_PLUME",
    "437":"LEAF_STORM",
    "438":"POWER_WHIP",
    "440":"CROSS_POISON",
    "441":"GUNK_SHOT",
    "442":"IRON_HEAD",
    "443":"MAGNET_BOMB",
    "444":"STONE_EDGE",
    "445":"CAPTIVATE",
    "446":"STEALTH_ROCK",
    "450":"BUG_BITE",
    "451":"CHARGE_BEAM",
    "452":"WOOD_HAMMER",
    "453":"AQUA_JET",
    "458":"DOUBLE_HIT",
    "469":"WIDE_GUARD",
    "472":"WONDER_ROOM",
    "473":"PSYSHOCK",
    "474":"VENOSHOCK",
    "476":"RAGE_POWDER",
    "477":"TELEKINESIS",
    "479":"SMACK_DOWN",
    "480":"STORM_THROW",
    "481":"FLAME_BURST",
    "482":"SLUDGE_WAVE",
    "483":"QUIVER_DANCE",
    "484":"HEAVY_SLAM",
    "485":"SYNCHRONOISE",
    "486":"ELECTRO_BALL",
    "487":"SOAK",
    "488":"FLAME_CHARGE",
    "489":"COIL",
    "490":"LOW_SWEEP",
    "491":"ACID_SPRAY",
    "495":"AFTER_YOU",
    "496":"ROUND",
    "498":"CHIP_AWAY",
    "499":"CLEAR_SMOG",
    "500":"STORED_POWER",
    "501":"QUICK_GUARD",
    "502":"ALLY_SWITCH",
    "504":"SHELL_SMASH",
    "505":"HEAL_PULSE",
    "506":"HEX",
    "507":"SKY_DROP",
    "509":"CIRCLE_THROW",
    "512":"ACROBATICS",
    "513":"REFLECT_TYPE",
    "514":"RETALIATE",
    "515":"FINAL_GAMBIT",
    "516":"BESTOW",
    "517":"INFERNO",
    "523":"BULLDOZE",
    "525":"DRAGON_TAIL",
    "526":"WORK_UP",
    "528":"WILD_CHARGE",
    "529":"DRILL_RUN",
    "530":"DUAL_CHOP",
    "531":"HEART_STAMP",
    "534":"RAZOR_SHELL",
    "536":"LEAF_TORNADO",
    "537":"STEAMROLLER",
    "540":"PSYSTRIKE",
    "542":"HURRICANE",
    "556":"ICICLE_CRASH",
    "562":"BELCH",
    "563":"ROTOTILLER",
    "565":"FELL_STINGER",
    "572":"PETAL_BLIZZARD",
    "573":"FREEZE_DRY",
    "574":"DISARMING_VOICE",
    "577":"DRAINING_KISS",
    "580":"GRASSY_TERRAIN",
    "581":"MISTY_TERRAIN",
    "583":"PLAY_ROUGH",
    "585":"MOONBLAST",
    "589":"PLAY_NICE",
    "598":"EERIE_IMPULSE",
    "599":"VENOM_DRENCH",
    "602":"MAGNETIC_FLUX",
    "604":"ELECTRIC_TERRAIN",
    "608":"BABY_DOLL_EYES",
    "609":"NUZZLE",
    "667":"HIGH_HORSEPOWER",
    "671":"SPOTLIGHT",
    "673":"LASER_FOCUS",
    "682":"BURN_UP",
    "707":"STOMPING_TANTRUM",
    "TACKLE":{
        "id":33,
        "name":"Tackle",
        "power":40,
        "pp":35,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"normal",
        "priority":0
    },
    "GROWL":{
        "id":45,
        "name":"Growl",
        "power":null,
        "pp":40,
        "accuracy":100,
        "typeOfMove":"status",
        "type":"normal",
        "targetStatChange":{
            "atk":-1
        },
        "priority":0
    },
    "LEECH_SEED":{
        "id":73,
        "name":"Leech Seed",
        "power":null,
        "pp":10,
        "accuracy":90,
        "typeOfMove":"status",
        "type":"grass",
        "priority":0,
        "effect":function(battle, attacker, target, opponentMove) {
            if(target.options.activeTraps.leechSeed == 1 || target.getType().includes('grass')) {
                return {failed: true};
            }
            target.options.activeTraps.leechSeed = 1;
            return {effectMessage: target.name + ' was seeded!'};
        }
    },
    "VINE_WHIP":{
        "id":22,
        "name":"Vine Whip",
        "power":45,
        "pp":25,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"grass",
        "priority":0
    },
    "SLEEP_POWDER":{
        "id":79,
        "name":"Sleep Powder",
        "power":null,
        "pp":15,
        "accuracy":75,
        "typeOfMove":"status",
        "type":"grass",
        "status":"sleep",
        "chance":100,
        "priority":0
    },
    "POISON_POWDER":{
        "id":77,
        "name":"Poison Powder",
        "power":null,
        "pp":35,
        "accuracy":75,
        "typeOfMove":"status",
        "type":"poison",
        "status":"poison",
        "chance":100,
        "priority":0
    },
    "TAKE_DOWN":{
        "id":36,
        "name":"Take Down",
        "power":90,
        "pp":20,
        "accuracy":85,
        "typeOfMove":"physical",
        "type":"normal",
        "recoil":0.25,
        "priority":0
    },
    "RAZOR_LEAF":{
        "id":75,
        "name":"Razor Leaf",
        "power":55,
        "pp":25,
        "accuracy":95,
        "typeOfMove":"physical",
        "type":"grass",
        "critRatio":true,
        "priority":0
    },
    "SWEET_SCENT":{
        "id":230,
        "name":"Sweet Scent",
        "power":null,
        "pp":20,
        "accuracy":100,
        "typeOfMove":"status",
        "type":"normal",
        "targetStatChange":{
            "evasion":-1
        },
        "priority":0
    },
    "GROWTH":{
        "id":74,
        "name":"Growth",
        "power":null,
        "pp":20,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"normal",
        "targetsUser":true,
        "update":function(battle, attacker, target, opponentMove) {
            let copy = {...this};
            if(battle.options.weather == 'sun') {
                copy.userStatChange = {
                    'atk': 2,
                    'spatk': 2
                };
            }
            else {
                copy.userStatChange = {
                    'atk': 1,
                    'spatk': 1
                }
            }
            return copy;
        },
        "priority":0
    },
    "DOUBLE_EDGE":{
        "id":38,
        "name":"Double Edge",
        "power":120,
        "pp":15,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"normal",
        "recoil":0.33,
        "priority":0
    },
    "WORRY_SEED":{
        "id":388,
        "name":"Worry Seed",
        "power":null,
        "pp":10,
        "accuracy":100,
        "typeOfMove":"status",
        "type":"grass",
        "effect":function(battle, attacker, target, opponentMove) {
            target.ability = 'insomnia';
        },
        "priority":0
    },
    "SYNTHESIS":{
        "id":235,
        "name":"Synthesis",
        "power":null,
        "pp":5,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"grass",
        "targetsUser":true,
        "effect":function(battle, attacker, target, opponentMove) {
            let multiplier = 0;
            switch(battle.options.weather) {
                case 'sun':
                    multiplier = 2/3;
                break;
                case 'rain':
                    multiplier = 1/4;
                break;
                case 'sandstorm':
                    multiplier = 1/4;
                break;
                case 'hail':
                    multiplier = 1/4;
                break;
                default:
                    multiplier = 1/2;
                break;
            }
            let recoverHP = Math.floor(attacker.maxHP * multiplier);
            attacker.addHP(recoverHP);
        },
        "priority":0
    },
    "SEED_BOMB":{
        "id":402,
        "name":"Seed Bomb",
        "power":80,
        "pp":15,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"grass",
        "priority":0
    },
    "SOLAR_BEAM":{
        "id":76,
        "name":"Solar Beam",
        "power":120,
        "pp":10,
        "accuracy":100,
        "typeOfMove":"special",
        "type":"grass",
        "chargeTurn":true,
        "effect":function(battle, attacker, target, opponentMove) {
            let copy = {...this};
            switch(battle.options.weather) {
                case 'sun':
                    return {afterEffects: 'damage', move: copy};
                case 'rain':
                    copy.power /= 2;
                    break;
                case 'hail':
                    copy.power /=2;
                    break;
                case 'sandstorm':
                    copy.power /=2;
                    break;
            }
            if(!attacker.continuousMove) {
                attacker.continuousMove = this.id;
                return {effectMessage: attacker.name + ' took in sunlight!'}
            }
            else {
                attacker.continuousMove = null;
                return {afterEffects: 'damage', move: copy};
            }
        },
        "update":function(battle, attacker, target, opponentMove) {
            let copy = {...this};
            if(battle.options.weather == 'sun' || attacker.continuousMove) {
                copy.chargeTurn = false;
            }
            return copy;
        },
        "priority":0
    },
    "PETAL_DANCE":{
        "id":80,
        "name":"Petal Dance",
        "power":1,
        "pp":10,
        "accuracy":100,
        "typeOfMove":"special",
        "type":"grass",
        "effect":function(battle, attacker, target, opponentMove) {
            //NOTE: stops if it can't be performed
            //NOTE: disrupting on last turn still causes confusion
            if(!attacker.continuousMove) {
                let turns = Math.floor(Math.random() * 2) + 1; //2_3 turns
                attacker.continuousMove = this.id;
                attacker.options.turnCounter = turns; //not sure about this
                return {afterEffects: 'damage'};
            }
            if(attacker.options.turnCounter != 0) {
                attacker.options.turnCounter--;
                return {afterEffects: 'damage'};
            }
            else {
                attacker.applyStatusEffect('confuse', false);
                attacker.continuousMove = null;
                battle.moveMessage.addMessage(attacker.name + ' was confused!');
                return {afterEffects: 'damage'};
            }
        },
        "priority":0
    },
    "PETAL_BLIZZARD":{
        "id":572,
        "name":"Petal Blizzard",
        "power":90,
        "pp":15,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"grass",
        "priority":0
    },
    "SCRATCH":{
        "id":10,
        "name":"Scratch",
        "power":40,
        "pp":35,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"normal",
        "priority":0
    },
    "EMBER":{
        "id":52,
        "name":"Ember",
        "power":40,
        "pp":25,
        "accuracy":100,
        "typeOfMove":"special",
        "type":"fire",
        "status":"burn",
        "chance":10,
        "priority":0
    },
    "SMOKESCREEN":{
        "id":108,
        "name":"Smokescreen",
        "power":null,
        "pp":20,
        "accuracy":100,
        "typeOfMove":"status",
        "type":"normal",
        "targetStatChange":{
            "accuracy":-1
        },
        "priority":0
    },
    "DRAGON_RAGE":{
        "id":82,
        "name":"Dragon Rage",
        "power":null,
        "pp":10,
        "accuracy":100,
        "typeOfMove":"special",
        "type":"dragon",
        "damage":40,
        "priority":0
    },
    "SCARY_FACE":{
        "id":184,
        "name":"Scary Face",
        "power":null,
        "pp":10,
        "accuracy":100,
        "typeOfMove":"status",
        "type":"normal",
        "targetStatChange":{
            "speed":-2
        },
        "priority":0
    },
    "FIRE_FANG":{
        "id":424,
        "name":"Fire Fang",
        "power":65,
        "pp":15,
        "accuracy":95,
        "typeOfMove":"physical",
        "type":"fire",
        "status":"burn",
        "chance":10,
        "priority":0
    },
    "FLAME_BURST":{
        "id":481,
        "name":"Flame Burst",
        "power":70,
        "pp":15,
        "accuracy":100,
        "typeOfMove":"special",
        "type":"fire",
        "priority":0
    },
    "SLASH":{
        "id":163,
        "name":"Slash",
        "power":70,
        "pp":20,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"normal",
        "critRatio":true,
        "priority":0
    },
    "FLAMETHROWER":{
        "id":53,
        "name":"Flamethrower",
        "power":90,
        "pp":15,
        "accuracy":100,
        "typeOfMove":"special",
        "type":"fire",
        "status":"burn",
        "chance":10,
        "priority":0
    },
    "FIRE_SPIN":{
        "id":83,
        "name":"Fire Spin",
        "power":35,
        "pp":15,
        "accuracy":85,
        "typeOfMove":"special",
        "type":"fire",
        "constrict":true,
        "priority":0,
        "effect":function(battle, attacker, target, opponentMove) {
            let copy = {...this};
            if(!attacker.continuousMove) {
                attacker.options.turnCounter = ChanceCounter.getNumberOfTimes();
                attacker.continuousMove = this.id;
            }
            else if(--attacker.options.turnCounter == 0) { //end
                attacker.options.turnCounter = null;
                attacker.continuousMove = null;
                battle.moveMessage.addMessage(target.name + ' broke free of fire spin!');
                return {afterEffects: 'damage',  move: copy};
            }
            else {
                copy.damage = Math.floor(target.maxHP * (1/8));
                battle.moveMessage.addMessage(target.name + ' was hurt by fire spin!');
                return {afterEffects: 'damage', move: copy};
            }
        },
    },
    "INFERNO":{
        "id":517,
        "name":"Inferno",
        "power":100,
        "pp":5,
        "accuracy":50,
        "typeOfMove":"special",
        "type":"fire",
        "status":"burn",
        "chance":100,
        "priority":0
    },
    "WING_ATTACK":{
        "id":17,
        "name":"Wing Attack",
        "power":60,
        "pp":35,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"flying",
        "priority":0
    },
    "SHADOW_CLAW":{
        "id":421,
        "name":"Shadow Claw",
        "power":70,
        "pp":15,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"ghost",
        "critRatio":true,
        "priority":0
    },
    "AIR_SLASH":{
        "id":403,
        "name":"Air Slash",
        "power":75,
        "pp":15,
        "accuracy":95,
        "typeOfMove":"special",
        "type":"flying",
        "flinch":.30,
        "priority":0
    },
    "FLARE_BLITZ":{
        "id":394,
        "name":"Flare Blitz",
        "power":120,
        "pp":15,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"fire",
        "status":"burn",
        "chance":10,
        "recoil":0.33,
        "priority":0
    },
    "DRAGON_CLAW":{
        "id":337,
        "name":"Dragon Claw",
        "power":80,
        "pp":15,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"dragon",
        "priority":0
    },
    "HEAT_WAVE":{
        "id":257,
        "name":"Heat Wave",
        "power":95,
        "pp":10,
        "accuracy":90,
        "typeOfMove":"special",
        "type":"fire",
        "status":"burn",
        "chance":10,
        "priority":0
    },
    "TAIL_WHIP":{
        "id":39,
        "name":"Tail Whip",
        "power":null,
        "pp":30,
        "accuracy":100,
        "typeOfMove":"status",
        "type":"normal",
        "targetStatChange":{
            "def":-1
        },
        "priority":0
    },
    "WATER_GUN":{
        "id":55,
        "name":"Water Gun",
        "power":40,
        "pp":25,
        "accuracy":100,
        "typeOfMove":"special",
        "type":"water",
        "priority":0
    },
    "WITHDRAW":{
        "id":110,
        "name":"Withdraw",
        "power":null,
        "pp":40,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"water",
        "targetsUser":true,
        "userStatChange":{
            "def":1
        },
        "priority":0
    },
    "BUBBLE":{
        "id":145,
        "name":"Bubble",
        "power":40,
        "pp":30,
        "accuracy":100,
        "typeOfMove":"special",
        "type":"water",
        "targetStatChange":{
            "speed":[
                -1,
                .10
            ]
        },
        "priority":0
    },
    "BITE":{
        "id":44,
        "name":"Bite",
        "power":60,
        "pp":25,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"dark",
        "flinch":.30,
        "priority":0
    },
    "RAPID_SPIN":{
        "id":229,
        "name":"Rapid Spin",
        "power":20,
        "pp":40,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"normal",
        "priority":0,
        "effect":function(battle, attacker, target, opponentMove) {
            if(Object.values(attacker.options.activeTraps).filter(el => el != 0).length) {
                attacker.options.activeTraps = {spikes: 0, toxicSpikes: 0, stealthRock: 0, leechSeed: 0};
                return {effectMessage: 'Traps were removed!'};
            }
        }
    },
    "PROTECT":{
        "id":182,
        "name":"Protect",
        "power":null,
        "pp":10,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"normal",
        "protectMove":true,
        "targetsUser":true,
        "effect":function(battle, attacker, target, opponentMove) {
            attacker.options.protected = true;
        },
        "priority":4
    },
    "WATER_PULSE":{
        "id":352,
        "name":"Water Pulse",
        "power":60,
        "pp":20,
        "accuracy":100,
        "typeOfMove":"special",
        "type":"water",
        "status":"confuse",
        "chance":20,
        "priority":0
    },
    "AQUA_TAIL":{
        "id":401,
        "name":"Aqua Tail",
        "power":90,
        "pp":10,
        "accuracy":90,
        "typeOfMove":"physical",
        "type":"water",
        "priority":0
    },
    "SKULL_BASH":{
        "id":130,
        "name":"Skull Bash",
        "power":130,
        "pp":10,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"normal",
        "chargeTurn":true,
        "effect":function(battle, attacker, target, opponentMove) {
            let copy = {...this};
            if(!attacker.continuousMove) {
                attacker.continuousMove = this.id;
                copy.userStatChange = {'def': 1};
                return {effectMessage: attacker.name + ' tucked in its head!', move: copy};
            }
            else {
                attacker.continuousMove = null;
                return {afterEffects: 'damage', move: copy};
            }
        },
        "update":function(battle, attacker, target, opponentMove) {
            let copy = {...this};
            if(attacker.continuousMove) {
                copy.chargeTurn = false;
            }
            return copy;
        },
        "priority":0
    },
    "IRON_DEFENSE":{
        "id":334,
        "name":"Iron Defense",
        "power":null,
        "pp":15,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"steel",
        "targetsUser":true,
        "userStatChange":{
            "def":2
        },
        "priority":0
    },
    "RAIN_DANCE":{
        "id":240,
        "name":"Rain Dance",
        "power":null,
        "pp":5,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"water",
        "targetsUser":true,
        "effect":function(battle, attacker, target, opponentMove) {
            if(battle.options.weather == 'rain') {
                return {failed: true};
            }
            else {
                battle.options.weather = 'rain';
                battle.options.weatherCount = 6;
            }
        },
        "priority":0
    },
    "HYDRO_PUMP":{
        "id":56,
        "name":"Hydro Pump",
        "power":110,
        "pp":5,
        "accuracy":80,
        "typeOfMove":"special",
        "type":"water",
        "priority":0
    },
    "FLASH_CANNON":{
        "id":430,
        "name":"Flash Cannon",
        "power":80,
        "pp":10,
        "accuracy":100,
        "typeOfMove":"special",
        "type":"steel",
        "targetStatChange":{
            "spdef":[
                -1,
                .10
            ]
        },
        "priority":0
    },
    "STRING_SHOT":{
        "id":81,
        "name":"String Shot",
        "power":null,
        "pp":40,
        "accuracy":95,
        "typeOfMove":"status",
        "type":"bug",
        "targetStatChange":{
            "speed":-2
        },
        "priority":0
    },
    "BUG_BITE":{
        "id":450,
        "name":"Bug Bite",
        "power":60,
        "pp":20,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"bug",
        "priority":0
    },
    "HARDEN":{
        "id":106,
        "name":"Harden",
        "power":null,
        "pp":30,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"normal",
        "targetsUser":true,
        "userStatChange":{
            "def":1
        },
        "priority":0
    },
    "GUST":{
        "id":16,
        "name":"Gust",
        "power":40,
        "pp":35,
        "accuracy":100,
        "typeOfMove":"special",
        "type":"flying",
        "priority":0
    },
    "CONFUSION":{
        "id":93,
        "name":"Confusion",
        "power":50,
        "pp":25,
        "accuracy":100,
        "typeOfMove":"special",
        "type":"psychic",
        "status":"confuse",
        "chance":10,
        "priority":0
    },
    "STUN_SPORE":{
        "id":78,
        "name":"Stun Spore",
        "power":null,
        "pp":30,
        "accuracy":75,
        "typeOfMove":"status",
        "type":"grass",
        "status":"paralyze",
        "chance":100,
        "priority":0
    },
    "PSYBEAM":{
        "id":60,
        "name":"Psybeam",
        "power":65,
        "pp":20,
        "accuracy":100,
        "typeOfMove":"special",
        "type":"psychic",
        "status":"confuse",
        "chance":10,
        "priority":0
    },
    "SILVER_WIND":{
        "id":318,
        "name":"Silver Wind",
        "power":60,
        "pp":5,
        "accuracy":100,
        "typeOfMove":"special",
        "type":"bug",
        "userStatChange":{
            "all":[
                1,
                .10
            ]
        },
        "priority":0
    },
    "SUPERSONIC":{
        "id":48,
        "name":"Supersonic",
        "power":null,
        "pp":20,
        "accuracy":55,
        "typeOfMove":"status",
        "type":"normal",
        "status":"confuse",
        "chance":100,
        "priority":0
    },
    "SAFEGUARD":{
        "id":219,
        "name":"Safeguard",
        "power":null,
        "pp":25,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"normal",
        "priority":0,
        "effect":function(battle, attacker, target, opponentMove) {
            if(attacker.options.safeguardTurns) {
                return {failed: true};
            }
            attacker.options.safeguardTurns = 6;
        }
    },
    "WHIRLWIND":{
        "id":18,
        "name":"Whirlwind",
        "power":null,
        "pp":20,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"normal",
        "priority":-6,
        "causeSwitch":true,
        "hitsProtect":true,
    },
    "BUG_BUZZ":{
        "id":405,
        "name":"Bug Buzz",
        "power":90,
        "pp":10,
        "accuracy":100,
        "typeOfMove":"special",
        "type":"bug",
        "targetStatChange":{
            "spdef":[
                -1,
                .10
            ]
        },
        "priority":0
    },
    "RAGE_POWDER":{
        "id":476,
        "name":"Rage Powder",
        "power":null,
        "pp":20,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"bug",
        "targetsUser":true,
        "priority":2
    },
    "CAPTIVATE":{
        "id":445,
        "name":"Captivate",
        "power":null,
        "pp":20,
        "accuracy":100,
        "typeOfMove":"status",
        "type":"normal",
        "priority":0,
        "update":function(battle, attacker, target, opponentMove) {
            let copy = {...this};
            if(attacker.gender == null || attacker.gender == target.gender) {
                return {failed: true};
            }
            copy.targetStatChange = {
                'spatk':-2
            };
            return copy;
        }
    },
    "TAILWIND":{
        "id":366,
        "name":"Tailwind",
        "power":null,
        "pp":15,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"flying",
        "priority":0,
        "targetsUser":true,
        "effect":function(battle, attacker, target, opponentMove) {
            if(attacker.tailwindTurns) {
                return {failed: true};
            }
            attacker.options.tailwindTurns = 5;
        }
    },
    "QUIVER_DANCE":{
        "id":483,
        "name":"Quiver Dance",
        "power":null,
        "pp":20,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"bug",
        "targetsUser":true,
        "userStatChange":{
            "spatk":1,
            "spdef":1,
            "speed":1
        },
        "priority":0
    },
    "POISON_STING":{
        "id":40,
        "name":"Poison Sting",
        "power":15,
        "pp":35,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"poison",
        "status":"poison",
        "chance":30,
        "priority":0
    },
    "TWINEEDLE":{
        "id":41,
        "name":"Twineedle",
        "power":25,
        "pp":20,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"bug",
        "sureTimes":2,
        "priority":0
    },
    "FURY_ATTACK":{
        "id":31,
        "name":"Fury Attack",
        "power":15,
        "pp":20,
        "accuracy":85,
        "typeOfMove":"physical",
        "type":"normal",
        "times":5,
        "priority":0
    },
    "RAGE":{
        "id":99,
        "name":"Rage",
        "power":20,
        "pp":20,
        "accuracy":1,
        "typeOfMove":"physical",
        "type":"normal",
        "priority":0,
        "effect":function(battle, attacker, target, opponentMove) {
            return {afterEffects: 'damage', effectMessage: attacker.name + "'s RAGE is building!"};
        }
    },
    "PURSUIT":{
        "id":228,
        "name":"Pursuit",
        "power":40,
        "pp":20,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"dark",
        "priority":0
    },
    "FOCUS_ENERGY":{
        "id":116,
        "name":"Focus Energy",
        "power":null,
        "pp":30,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"normal",
        "targetsUser":true,
        "userStatChange": {
            "critRatio":2,
        },
        "priority":0
    },
    "VENOSHOCK":{
        "id":474,
        "name":"Venoshock",
        "power":65,
        "pp":10,
        "accuracy":100,
        "typeOfMove":"special",
        "type":"poison",
        "update":function(battle, attacker, target, opponentMove) {
            let copy = {...this};
            if(target.majorStatus == 'poison') {
                copy.power *= 2;
            }
            return copy;
        },
        "priority":0
    },
    "ASSURANCE":{
        "id":372,
        "name":"Assurance",
        "power":60,
        "pp":10,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"dark",
        "update":function(battle, attacker, target, opponentMove) {
            let copy = {...this};
            if(attacker.options.damagedThisTurn) {
                copy.power *= 2;
            }
            return copy;
        },
        "priority":0
    },
    "TOXIC_SPIKES":{
        "id":390,
        "name":"Toxic Spikes",
        "power":null,
        "pp":20,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"poison",
        "priority":0,
        "effect":function(battle, attacker, target, opponentMove) {
            if(target.options.activeTraps.toxicSpikes < 2) {
                target.options.activeTraps.toxicSpikes++;
                return {effectMessage: 'The field was riddled with toxic spikes!'};
            }
            return {failed: true};
        }
    },
    "PIN_MISSILE":{
        "id":42,
        "name":"Pin Missile",
        "power":25,
        "pp":20,
        "accuracy":95,
        "typeOfMove":"physical",
        "type":"bug",
        "times":5,
        "priority":0
    },
    "POISON_JAB":{
        "id":398,
        "name":"Poison Jab",
        "power":80,
        "pp":20,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"poison",
        "status":"poison",
        "chance":30,
        "priority":0
    },
    "AGILITY":{
        "id":97,
        "name":"Agility",
        "power":null,
        "pp":30,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"psychic",
        "targetsUser":true,
        "userStatChange":{
            "spd":2
        },
        "priority":0
    },
    "ENDEAVOR":{
        "id":283,
        "name":"Endeavor",
        "power":null,
        "pp":5,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"normal",
        "effect":function(battle, attacker, target, opponentMove) {
            if(attacker.hp < target.hp){
                target.hp = attacker.hp;
            }
            else {
                return {failed: true};
            }
        },
        "priority":0
    },
    "FELL_STINGER":{
        "id":565,
        "name":"Fell Stinger",
        "power":50,
        "pp":25,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"bug",
        "priority":0
    },
    "SAND_ATTACK":{
        "id":28,
        "name":"Sand Attack",
        "power":null,
        "pp":15,
        "accuracy":100,
        "typeOfMove":"status",
        "type":"ground",
        "targetStatChange":{
            "accuracy":-1
        },
        "priority":0
    },
    "QUICK_ATTACK":{
        "id":98,
        "name":"Quick Attack",
        "power":40,
        "pp":30,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"normal",
        "priority":1
    },
    "TWISTER":{
        "id":239,
        "name":"Twister",
        "power":40,
        "pp":20,
        "accuracy":100,
        "typeOfMove":"special",
        "type":"dragon",
        "hitsFly":true,
        "flinch":.20,
        "priority":0
    },
    "FEATHER_DANCE":{
        "id":297,
        "name":"Feather Dance",
        "power":null,
        "pp":15,
        "accuracy":100,
        "typeOfMove":"status",
        "type":"flying",
        "targetStatChange":{
            "atk":-2
        },
        "priority":0
    },
    /**
     * Pure flying types become normal
     * Double types will lose flying type
     */
    "ROOST":{
        "id":355,
        "name":"Roost",
        "power":null,
        "pp":10,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"flying",
        "targetsUser":true,
        "effect":function(battle, attacker, target, opponentMove) {
            attacker.options.grounded = true;
            let types = attacker.getType();
            if(types.length == 1 && types[0] == 'flying') {
                attacker.options.temporaryTurnType = 'normal';
            }
            else {
                if(types[0] == 'flying') {
                    attacker.options.temporaryTurnType = types[1];
                }
                else if(types[1] == 'flying') {
                    attacker.options.temporaryTurnType = types[0];
                }
            }
            attacker.addHP(Math.floor(attacker.maxHP/2));
        },
        "priority":0
    },
    "MIRROR_MOVE":{
        "id":119,
        "name":"Mirror Move",
        "power":null,
        "pp":20,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"flying",
        "priority":0,
        "update":function(battle, attacker, target, opponentMove) {
            if(target.options.lastMoveUsed == this.id || target.options.lastMoveUsed == null) {
                return {failed: true};
            }
            battle.moveMessage.addMoveMessage(attacker.name, this);
            return battle.getMove(target.options.lastMoveUsed);
        }
    },
    "HURRICANE":{
        "id":542,
        "name":"Hurricane",
        "power":110,
        "pp":10,
        "accuracy":70,
        "typeOfMove":"special",
        "type":"flying",
        "status":"confuse",
        "chance:":30,
        "hitsFly":true,
        "update":function(battle, attacker, target, opponentMove) {
            let copy = {...this};
            if(battle.options.weather == 'rain') {
                copy.accuracy = null;
            }
            if(battle.options.weather == 'sun') {
                copy.accuracy = 50;
            }
            return copy;
        },
        "priority":0
    },
    "HYPER_FANG":{
        "id":158,
        "name":"Hyper Fang",
        "power":80,
        "pp":15,
        "accuracy":90,
        "typeOfMove":"physical",
        "type":"normal",
        "flinch":0.10,
        "priority":0
    },
    "CRUNCH":{
        "id":242,
        "name":"Crunch",
        "power":80,
        "pp":15,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"dark",
        "targetStatChange":{
            "def":[
                -1,
                .20
            ]
        },
        "priority":0
    },
    "SUCKER_PUNCH":{
        "id":389,
        "name":"Sucker Punch",
        "power":70,
        "pp":5,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"dark",
        "effect":function(battle, attacker, target, opponentMove) {
            if(target.options.attackedThisTurn) { //fails if opponent has already gone
                return {failed: true};
            }
            if(opponentMove.typeOfMove == 'status' && opponentMove.id != 382) { //me first
                return {failed: true};
            }
            return {afterEffects: 'damage'};
        },
        "priority":1
    },
    "SUPER_FANG":{
        "id":162,
        "name":"Super Fang",
        "power":null,
        "pp":10,
        "accuracy":90,
        "typeOfMove":"physical",
        "type":"normal",
        "effect":function(battle, attacker, target, opponentMove) {
            let copy = {...this};
            copy.damage = Math.floor(target.hp/2);
            return copy;
        },
        "priority":0
    },
    "SWORDS_DANCE":{
        "id":14,
        "name":"Swords Dance",
        "power":null,
        "pp":20,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"normal",
        "targetsUser":true,
        "userStatChange":{
            "atk":2
        },
        "priority":0
    },
    "PECK":{
        "id":64,
        "name":"Peck",
        "power":35,
        "pp":35,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"flying",
        "priority":0
    },
    "LEER":{
        "id":43,
        "name":"Leer",
        "power":null,
        "pp":30,
        "accuracy":100,
        "typeOfMove":"status",
        "type":"normal",
        "targetStatChange":{
            "def":-1
        },
        "priority":0
    },
    "AERIAL_ACE":{
        "id":332,
        "name":"Aerial Ace",
        "power":60,
        "pp":20,
        "accuracy":null,
        "typeOfMove":"physical",
        "type":"flying",
        "priority":0
    },
    "DRILL_PECK":{
        "id":65,
        "name":"Drill Peck",
        "power":80,
        "pp":20,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"flying",
        "priority":0
    },
    "DRILL_RUN":{
        "id":529,
        "name":"Drill Run",
        "power":80,
        "pp":10,
        "accuracy":95,
        "typeOfMove":"physical",
        "type":"ground",
        "critRatio":true,
        "priority":0
    },
    "PLUCK":{
        "id":365,
        "name":"Pluck",
        "power":60,
        "pp":20,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"flying",
        "priority":0
    },
    "WRAP":{
        "id":35,
        "name":"Wrap",
        "power":15,
        "pp":20,
        "accuracy":90,
        "typeOfMove":"physical",
        "type":"normal",
        "constrict":true,
        "priority":0,
        "effect":function(battle, attacker, target, opponentMove) {
            let copy = {...this};
            if(!attacker.continuousMove) {
                attacker.options.turnCounter = ChanceCounter.getNumberOfTimes();
                attacker.continuousMove = this.id;
            }
            else if(--attacker.options.turnCounter == 0) { //end
                attacker.options.turnCounter = null;
                attacker.continuousMove = null;
                battle.moveMessage.addMessage(target.name + ' broke free of wrap!');
                return {afterEffects: 'damage',  move: copy};
            }
            else {
                copy.damage = Math.floor(target.maxHP * (1/8));
                battle.moveMessage.addMessage(target.name + ' was hurt by wrap!');
                return {afterEffects: 'damage', move: copy};
            }
        },
    },
    "GLARE":{
        "id":137,
        "name":"Glare",
        "power":null,
        "pp":30,
        "accuracy":100,
        "typeOfMove":"status",
        "type":"normal",
        "status":"paralyze",
        "chance":100,
        "priority":0
    },
    "SCREECH":{
        "id":103,
        "name":"Screech",
        "power":null,
        "pp":40,
        "accuracy":85,
        "typeOfMove":"status",
        "type":"normal",
        "targetStatChange":{
            "def":-2
        },
        "priority":0
    },
    "ACID":{
        "id":51,
        "name":"Acid",
        "power":40,
        "pp":30,
        "accuracy":100,
        "typeOfMove":"special",
        "type":"poison",
        "targetStatChange":{
            "spdef":[
                -1,
                .10
            ]
        },
        "priority":0
    },
    "SWALLOW":{
        "id":256,
        "name":"Swallow",
        "power":null,
        "pp":10,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"normal",
        "targetsUser":true,
        "effect":function(battle, attacker, target, opponentMove) {
            let recoverHP;
            switch(attacker.options.stockpiled) {
                case 1:
                    recoverHP = attacker.maxHP * 0.25;
                break;
                case 2:
                    recoverHP = attacker.maxHP * 0.50;
                break;
                case 3:
                    recoverHP = attacker.maxHP;
                break;
                default:
                    return {failed: true};
            }
            attacker.options.stockpiled = 0;
            attacker.addHP(Math.floor(recoverHP));
            return {effectMessage: attacker.name + ' recovered HP!'};
        },
        "priority":0
    },
    "SPIT_UP":{
        "id":255,
        "name":"Spit Up",
        "power":null,
        "pp":10,
        "accuracy":100,
        "typeOfMove":"special",
        "type":"normal",
        "priority":0,
        "effect":function(battle, attacker, target, opponentMove) {
            let copy = {...this};
            if(attacker.options.stockpiled == 0) {
                return {failed: true};
            }
            else {
                switch(attacker.options.stockpiled) {
                    case 1:
                        copy.power = 100;
                        break;
                    case 2:
                        copy.power = 200;
                        break;
                    case 3:
                        copy.power = 300;
                        break;
                }
            }
            attacker.options.stockpiled = 0;
            return {afterEffects: 'damage', move: copy};
        }
    },
    "STOCKPILE":{
        "id":254,
        "name":"Stockpile",
        "power":null,
        "pp":20,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"normal",
        "targetsUser":true,
        "effect":function(battle, attacker, target, opponentMove) {
            let copy = {...this};
            if(attacker.options.stockpiled == 3) {
                return {failed: true};
            }
            else {
                attacker.options.stockpiled++;
                copy.userStatChange = {
                    'def': 1,
                    'spdef': 1,
                };
                battle.moveMessage.addMessage(attacker.name + ' used stockpile!');
                battle.moveMessage.addMessage(attacker.name + ' stockpiled ' + attacker.options.stockpiled + '!');
                return {move: copy};
            }
        },
        "priority":0
    },
    "ACID_SPRAY":{
        "id":491,
        "name":"Acid Spray",
        "power":40,
        "pp":20,
        "accuracy":100,
        "typeOfMove":"special",
        "type":"poison",
        "targetStatChange":{
            "spdef":-2
        },
        "priority":0
    },
    "MUD_BOMB":{
        "id":426,
        "name":"Mud Bomb",
        "power":65,
        "pp":10,
        "accuracy":85,
        "typeOfMove":"special",
        "type":"ground",
        "targetStatChange":{
            "accuracy":[
                -1,
                .30
            ]
        },
        "priority":0
    },
    "GASTRO_ACID":{
        "id":380,
        "name":"Gastro Acid",
        "power":null,
        "pp":10,
        "accuracy":100,
        "typeOfMove":"status",
        "type":"poison",
        "priority":0
    },
    "BELCH":{
        "id":562,
        "name":"Belch",
        "power":120,
        "pp":10,
        "accuracy":90,
        "typeOfMove":"special",
        "type":"poison",
        "priority":0
    },
    "HAZE":{
        "id":114,
        "name":"Haze",
        "power":null,
        "pp":30,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"ice",
        "targetsUser":true,
        "effect":function(battle, attacker, target, opponentMove) {
            attacker.options.statChanges.reset();
            target.options.statChanges.reset();
        },
        "priority":0
    },
    "COIL":{
        "id":489,
        "name":"Coil",
        "power":null,
        "pp":20,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"poison",
        "targetsUser":true,
        "userStatChange":{
            "atk":1,
            "def":1,
            "accuracy":1
        },
        "priority":0
    },
    "GUNK_SHOT":{
        "id":441,
        "name":"Gunk Shot",
        "power":120,
        "pp":5,
        "accuracy":80,
        "typeOfMove":"physical",
        "type":"poison",
        "status":"poison",
        "chance":30,
        "priority":0
    },
    "ICE_FANG":{
        "id":423,
        "name":"Ice Fang",
        "power":65,
        "pp":15,
        "accuracy":95,
        "typeOfMove":"physical",
        "type":"ice",
        "status":"freeze",
        "chance":10,
        "priority":0
    },
    "THUNDER_FANG":{
        "id":422,
        "name":"Thunder Fang",
        "power":65,
        "pp":15,
        "accuracy":95,
        "typeOfMove":"physical",
        "type":"electric",
        "status":"paralyze",
        "chance":10,
        "priority":0
    },
    "THUNDER_SHOCK":{
        "id":84,
        "name":"Thunder Shock",
        "power":40,
        "pp":30,
        "accuracy":100,
        "typeOfMove":"special",
        "type":"electric",
        "status":"paralyze",
        "chance":10,
        "priority":0
    },
    "PLAY_NICE":{
        "id":589,
        "name":"Play Nice",
        "power":null,
        "pp":20,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"normal",
        "targetStatChange":{
            "atk":-1
        },
        "hitsProtect":true,
        "priority":0
    },
    "ELECTRO_BALL":{
        "id":486,
        "name":"Electro Ball",
        "power":null,
        "pp":10,
        "accuracy":100,
        "typeOfMove":"special",
        "type":"electric",
        "update":function(battle, attacker, target, opponentMove) {
            let copy = {...this};
            let attackerSpeed = attacker.options.statChanges.getNewValue('spd', attacker);
            let targetSpeed = target.options.statChanges.getNewValue('spd', target);
            let percent = (targetSpeed / attackerSpeed) * 100;
            if(percent <= 25) {
                copy.power = 150;
            }
            else if(percent <= 33.33) {
                copy.power = 120;
            }
            else if(percent <= 50) {
                copy.power = 80;
            }
            else if(percent <= 100) {
                copy.power = 60;
            }
            else {
                copy.power = 40;
            }
            return copy;
        },
        "priority":0
    },
    "THUNDER_WAVE":{
        "id":86,
        "name":"Thunder Wave",
        "power":null,
        "pp":20,
        "accuracy":90,
        "typeOfMove":"status",
        "type":"electric",
        "status":"paralyze",
        "chance":100,
        "priority":0
    },
    "FEINT":{
        "id":364,
        "name":"Feint",
        "power":30,
        "pp":10,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"normal",
        "hitsProtect":true,
        "priority":2
    },
    "DOUBLE_TEAM":{
        "id":104,
        "name":"Double Team",
        "power":null,
        "pp":15,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"normal",
        "targetsUser":true,
        "userStatChange":{
            "evasion":1
        },
        "priority":0
    },
    "SPARK":{
        "id":209,
        "name":"Spark",
        "power":65,
        "pp":20,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"electric",
        "status":"paralyze",
        "chance":30,
        "priority":0
    },
    "NUZZLE":{
        "id":609,
        "name":"Nuzzle",
        "power":20,
        "pp":20,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"electric",
        "status":"paralyze",
        "chance":100,
        "priority":0
    },
    "DISCHARGE":{
        "id":435,
        "name":"Discharge",
        "power":80,
        "pp":15,
        "accuracy":100,
        "typeOfMove":"special",
        "type":"electric",
        "status":"paralyze",
        "chance":30,
        "priority":0
    },
    "SLAM":{
        "id":21,
        "name":"Slam",
        "power":80,
        "pp":20,
        "accuracy":75,
        "typeOfMove":"physical",
        "type":"normal",
        "priority":0
    },
    "THUNDERBOLT":{
        "id":85,
        "name":"Thunderbolt",
        "power":90,
        "pp":15,
        "accuracy":100,
        "typeOfMove":"special",
        "type":"electric",
        "status":"paralyze",
        "chance":10,
        "priority":0
    },
    "WILD_CHARGE":{
        "id":528,
        "name":"Wild Charge",
        "power":90,
        "pp":15,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"electric",
        "recoil":0.25,
        "priority":0
    },
    "LIGHT_SCREEN":{
        "id":113,
        "name":"Light Screen",
        "power":null,
        "pp":30,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"psychic",
        "targetsUser":true,
        "effect":function(battle, attacker, target, opponentMove) {
            attacker.options.lightScreenTurns = 6; //goes down to 5 at the end of this turn
        },
        "priority":0
    },
    "THUNDER":{
        "id":87,
        "name":"Thunder",
        "power":110,
        "pp":10,
        "accuracy":70,
        "typeOfMove":"special",
        "type":"electric",
        "hitsFlying":true,
        "update":function(battle, attacker, target, opponentMove) {
            let copy = {...this};
            console.log(battle.options.weather);
            if(battle.options.weather == 'rain') {
                copy.accuracy = null;
            }
            else if(battle.options.weather == 'sun') {
                copy.accuracy = 50;
            }
            return copy;
        },
        "priority":0
    },
    "DEFENSE_CURL":{
        "id":111,
        "name":"Defense Curl",
        "power":null,
        "pp":40,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"normal",
        "targetsUser":true,
        "userStatChange":{
            "def":1
        },
        "priority":0,
        "effect":function(battle, attacker, target, opponentMove) {
            attacker.options.usedDefenseCurl = true;
        }
    },
    "ROLLOUT":{
        "id":205,
        "name":"Rollout",
        "power":30,
        "pp":20,
        "accuracy":90,
        "typeOfMove":"physical",
        "type":"rock",
        "priority":0,
        "effect":function(battle, attacker, target, opponentMove) {
            let copy = {...this};
            if(attacker.options.lastMoveUsed == this.id && parseInt(attacker.options.consecutiveMovePower) < 480) {
                if(attacker.options.consecutiveMovePower < 480) {
                    attacker.options.consecutiveMovePower *= 2;
                    copy.power = attacker.options.consecutiveMovePower;
                }
            }
            else {
                attacker.options.consecutiveMovePower = this.power;
            }
            if(attacker.options.usedDefenseCurl) {
                copy.power *= 2;
            }
            return {afterEffects: 'damage', move: copy};
        },
    },
    "FURY_CUTTER":{
        "id":210,
        "name":"Fury Cutter",
        "power":40,
        "pp":20,
        "accuracy":95,
        "typeOfMove":"physical",
        "type":"bug",
        "effect":function(battle, attacker, target, opponentMove) {
            let copy = {...this};
            if(attacker.options.lastMoveUsed == this.id) {
                if(attacker.options.consecutiveMovePower && attacker.options.consecutiveMovePower < 160) {
                    attacker.options.consecutiveMovePower *= 2;
                }
                copy.power = attacker.options.consecutiveMovePower;
            }
            else {
                attacker.options.consecutiveMovePower = 40;
            }
            return {afterEffects: 'damage', move: copy};
        },
        "priority":0
    },
    "MAGNITUDE":{
        "id":222,
        "name":"Magnitude",
        "power":null,
        "pp":30,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"ground",
        "hitsDig":true,
        "effect":function(battle, attacker, target, opponentMove) {
            let copy = {...this};
            let num = Math.floor(Math.random() * 100);
            let magnitudeValue;
            if(num < 5) {
                copy.power = 10;
                magnitudeValue = 4;
            }
            else if(num < 15) {
                copy.power = 30;
                magnitudeValue = 5;
            }
            else if(num < 35) {
                copy.power = 50;
                magnitudeValue = 6;
            }
            else if(num < 65) {
                copy.power = 70;
                magnitudeValue = 7;
            }
            else if(num < 85) {
                copy.power = 90;
                magnitudeValue = 8;
            }
            else if(num < 95) {
                copy.power = 110;
                magnitudeValue = 9;
            }
            else {
                copy.power = 150;
                magnitudeValue = 10;
            }
            battle.useEffectMove(attacker, copy, `Magnitude ${magnitudeValue}!`);
            return {afterEffects: 'damage', move: copy};
        },
        "priority":0
    },
    "SWIFT":{
        "id":129,
        "name":"Swift",
        "power":60,
        "pp":20,
        "accuracy":null,
        "typeOfMove":"special",
        "type":"normal",
        "priority":0
    },
    "FURY_SWIPES":{
        "id":154,
        "name":"Fury Swipes",
        "power":18,
        "pp":15,
        "accuracy":80,
        "typeOfMove":"physical",
        "type":"normal",
        "times":5,
        "priority":0
    },
    "SAND_TOMB":{
        "id":328,
        "name":"Sand Tomb",
        "power":35,
        "pp":15,
        "accuracy":85,
        "typeOfMove":"physical",
        "type":"ground",
        "constrict":true,
        "priority":0,
        "effect":function(battle, attacker, target, opponentMove) {
            let copy = {...this};
            if(!attacker.continuousMove) {
                attacker.options.turnCounter = ChanceCounter.getNumberOfTimes();
                attacker.continuousMove = this.id;
            }
            else if(--attacker.options.turnCounter == 0) { //end
                attacker.options.turnCounter = null;
                attacker.continuousMove = null;
                return {afterEffects: 'damage',  move: copy, effectMessage: target.name + ' broke free of sand tomb!'};
            }
            else {
                copy.damage = Math.floor(target.maxHP * (1/8));
                return {afterEffects: 'damage', move: copy, effectMessage: target.name + ' was hurt by sand tomb!'};
            }
        },
    },
    "DIG":{
        "id":91,
        "name":"Dig",
        "power":80,
        "pp":10,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"ground",
        "chargeTurn":true,
        "effect":function(battle, attacker, target, opponentMove) {
            let copy = {...this};
            if(!attacker.continuousMove) {
                attacker.continuousMove = this.id;
                attacker.options.usedDig = true;
                return {effectMessage: attacker.name + ' burrowed underground!'};
            }
            else {
                attacker.continuousMove = null;
                attacker.options.usedDig = false;
                return {afterEffects: 'damage', move: copy}
            }
        },
        "update":function(battle, attacker, target, opponentMove) {
            let copy = {...this};
            if(attacker.continuousMove) {
                copy.chargeTurn = false;
            }
            return copy;
        },
        "priority":0
    },
    "GYRO_BALL":{
        "id":360,
        "name":"Gyro Ball",
        "power":null,
        "pp":5,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"steel",
        "effect":function(battle, attacker, target, opponentMove) {
            let copy = {...this};
            let attackerSpeed = attacker.options.statChanges.getNewValue('spd', attacker);
            let targetSpeed = target.options.statChanges.getNewValue('spd', target);
            if(attackerSpeed == 0) {
                copy.power = 1;
                return {afterEffects: 'damage', move: copy};
            }
            copy.power = Math.floor(25 * (targetSpeed / attackerSpeed));
            if(copy.power > 150) {
                copy.power = 150;
            }
            return {afterEffects: 'damage', move: copy};
        },
        "priority":0
    },
    "SANDSTORM":{
        "id":201,
        "name":"Sandstorm",
        "power":null,
        "pp":10,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"rock",
        "targetsUser":true,
        "effect":function(battle, attacker, target, opponentMove) {
            if(battle.options.weather == 'sandstorm') {
                return {failed: true};
            }
            else {
                battle.options.weather = 'sandstorm';
                battle.options.weatherCount = 6;
            }
        },
        "priority":0
    },
    "EARTHQUAKE":{
        "id":89,
        "name":"Earthquake",
        "power":100,
        "pp":10,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"ground",
        "hitsDig":true,
        "effect":function(battle, attacker, target, opponentMove) {
            let copy = {...this};
            if(target.options.usedDig) {
                copy.power *= 2;
            }
            return {afterEffects: 'damage', move: copy};
        },
        "priority":0
    },
    "CRUSH_CLAW":{
        "id":306,
        "name":"Crush Claw",
        "power":75,
        "pp":10,
        "accuracy":95,
        "typeOfMove":"physical",
        "type":"normal",
        "targetStatChange":{
            "def":-1
        },
        "priority":0
    },
    "DOUBLE_KICK":{
        "id":24,
        "name":"Double Kick",
        "power":30,
        "pp":30,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"fighting",
        "sureTimes":2,
        "priority":0
    },
    "HELPING_HAND":{
        "id":270,
        "name":"Helping Hand",
        "power":null,
        "pp":20,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"normal",
        "targetsUser":true,
        "priority":5
    },
    "FLATTER":{
        "id":260,
        "name":"Flatter",
        "power":null,
        "pp":15,
        "accuracy":100,
        "typeOfMove":"status",
        "type":"dark",
        "status":"confuse",
        "chance":100,
        "targetStatChange":{
            "spatk":2
        },
        "priority":0
    },
    "POISON_FANG":{
        "id":305,
        "name":"Poison Fang",
        "power":50,
        "pp":15,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"poison",
        "status":"badlyPoison",
        "chance":50,
        "priority":0
    },
    "SUPERPOWER":{
        "id":276,
        "name":"Superpower",
        "power":120,
        "pp":5,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"fighting",
        "userStatChange":{
            "atk":-1,
            "def":-1
        },
        "priority":0
    },
    "CHIP_AWAY":{
        "id":498,
        "name":"Chip Away",
        "power":70,
        "pp":20,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"normal",
        "priority":0,
        "accuracyCheck":function(attacker, defender) {
            let numerator = 3;
            let denominator = 3;
            let accuracy = attacker.getStatChange('accuracy');
            let evasion = defender.getStatChange('evasion');
            if(evasion > 0) {
                evasion = 0;
            }
            let total = accuracy - evasion;
            if(total < 0) {
                denominator += Math.abs(total);
            }
            else {
                numerator += Math.abs(total);
            }
            let chance = numerator/denominator;
            chance *= this.accuracy;
            let num = Math.random() * 100;
            return num < chance;
        },
        "customStats":function(attacker, defender, crit) {
            let atkStat;
            let defStat;
            let func = crit ? attacker.options.statChanges.getCritStat : attacker.options.statChanges.getNewValue;
            let forcedValue = null;
            if(func.apply(defender.options.statChanges, ['def', defender]) > 0) {
                forcedValue = 0;
            }
            atkStat = func.apply(attacker.options.statChanges, ['atk', attacker]);
            defStat = func.apply(defender.options.statChanges, ['def', defender, forcedValue]);
            return {atkStat: atkStat, defStat: defStat};
        }
    },
    "BODY_SLAM":{
        "id":34,
        "name":"Body Slam",
        "power":85,
        "pp":15,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"normal",
        "status":"paralyze",
        "chance":30,
        "effect":function(battle, attacker, target, opponentMove) {
            let copy = {...this};
            if(target.minimized) {
                copy.accuracy = null;
                copy.power *= 2
            }
            return {afterEffects: 'damage', move: copy};
        },
        "priority":0
    },
    "EARTH_POWER":{
        "id":414,
        "name":"Earth Power",
        "power":90,
        "pp":10,
        "accuracy":100,
        "typeOfMove":"special",
        "type":"ground",
        "targetStatChange":{
            "spdef":[
                -1,
                .10
            ]
        },
        "priority":0
    },
    "HORN_ATTACK":{
        "id":30,
        "name":"Horn Attack",
        "power":65,
        "pp":25,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"normal",
        "priority":0
    },
    "HORN_DRILL":{
        "id":32,
        "name":"Horn Drill",
        "power":null,
        "pp":5,
        "accuracy":30,
        "typeOfMove":"physical",
        "type":"normal",
        "priority":0
    },
    "MEGAHORN":{
        "id":224,
        "name":"Megahorn",
        "power":120,
        "pp":10,
        "accuracy":85,
        "typeOfMove":"physical",
        "type":"bug",
        "priority":0
    },
    "THRASH":{
        "id":37,
        "name":"Thrash",
        "power":120,
        "pp":10,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"normal",
        "effect":function(battle, attacker, target, opponentMove) {
            //NOTE: stops if it can't be performed
            //NOTE: disrupting on last turn still causes confusion
            if(!attacker.continuousMove) {
                let turns = Math.floor(Math.random() * 2) + 1; //2-3 turns
                attacker.continuousMove = this.id;
                attacker.options.turnCounter = turns; //not sure about this
                return {afterEffects: 'damage'};
            }
            if(attacker.options.turnCounter != 0) {
                attacker.options.turnCounter--;
                return {afterEffects: 'damage'};
            }
            else {
                attacker.applyStatusEffect('confuse', false);
                attacker.continuousMove = null;
                return {afterEffects: 'damage', effectMessage: attacker.name + ' was confused!'};
            }
        },
        "priority":0
    },
    "SPOTLIGHT":{
        "id":671,
        "name":"Spotlight",
        "power":null,
        "pp":15,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"normal",
        "priority":3
    },
    "DISARMING_VOICE":{
        "id":574,
        "name":"Disarming Voice",
        "power":40,
        "pp":15,
        "accuracy":null,
        "typeOfMove":"special",
        "type":"fairy",
        "priority":0
    },
    "ENCORE":{
        "id":227,
        "name":"Encore",
        "power":null,
        "pp":5,
        "accuracy":100,
        "typeOfMove":"status",
        "type":"normal",
        "priority":0,
        "effect":function(battle, attacker, target, opponentMove) {
            const disallowedMoves = ['Assist', 'Copycat', 'Me First', 'Metronome', 'Mirror Move', 'Nature Power', 'Sleep Talk', 'Snatch'];
            //NOTE: focus punch if force used
        }
    },
    "POUND":{
        "id":1,
        "name":"Pound",
        "power":40,
        "pp":35,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"normal",
        "priority":0
    },
    "SING":{
        "id":47,
        "name":"Sing",
        "power":null,
        "pp":15,
        "accuracy":55,
        "typeOfMove":"status",
        "type":"normal",
        "status":"sleep",
        "chance":100,
        "priority":0
    },
    "DOUBLE_SLAP":{
        "id":3,
        "name":"Double Slap",
        "power":15,
        "pp":10,
        "accuracy":85,
        "typeOfMove":"physical",
        "type":"normal",
        "times":5,
        "priority":0
    },
    "FOLLOW_ME":{
        "id":266,
        "name":"Follow Me",
        "power":null,
        "pp":20,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"normal",
        "targetsUser":true,
        "priority":2
    },
    "BESTOW":{
        "id":516,
        "name":"Bestow",
        "power":null,
        "pp":15,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"normal",
        "priority":0
    },
    "WAKE_UP_SLAP":{
        "id":358,
        "name":"Wake Up Slap",
        "power":70,
        "pp":10,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"fighting",
        "effect":function(battle, attacker, target, opponentMove) {
            let copy = {...this};
            if(target.majorStatus == 'sleep') {
                copy.power *= 2;
                target.options.sleepCounter = 0;
            }
            return {afterEffects: 'damage', move: copy};
        },
        "priority":0
    },
    "MINIMIZE":{
        "id":107,
        "name":"Minimize",
        "power":null,
        "pp":10,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"normal",
        "targetsUser":true,
        "effect":function(battle, attacker, target, opponentMove) {
            attacker.options.statChanges.modify('evasion', 2);
            attacker.minimized = true;
        },
        "priority":0
    },
    "STORED_POWER":{
        "id":500,
        "name":"Stored Power",
        "power":20,
        "pp":10,
        "accuracy":100,
        "typeOfMove":"special",
        "type":"psychic",
        "effect":function(battle, attacker, target, opponentMove) {
            let copy = {...this};
            let statChanges = attacker.options.statChanges.getPositiveChangeCount();
            copy.power = 20 + 20 * statChanges;
            return {afterEffects: 'damage', move: copy};
        },
        "priority":0
    },
    "METRONOME":{
        "id":118,
        "name":"Metronome",
        "power":null,
        "pp":10,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"normal",
        "targetsUser":true,
        "priority":0,
        "update":function(battle, attacker, target, opponentMove) {
            //NOTE: make this not update
            const disallowedMoves = ['After You', 'Assist', 'Baneful Bunker', 'Beak Blast', 'Belch', 'Bestow', 'Celebrate', 'Chatter', 'Copycat', 'Counter',
            'Covet', 'Crafty Shield', 'Destiny Bond', 'Detect', 'Diamond Storm', 'Endure', 'Feint', 'Fleur Cannon', 'Focus Punch', 'Follow Me', 'Freeze Shock', 
            'Helping Hand', 'Hold Hands', 'Hyperspace Fury', 'Hyperspace Hole', 'Ice Burn', 'Instruct', "King's Shield", 'Light of Ruin', 'Mat Block', 'Me First',
            'Mimic', 'Mind Blown', 'Mirror Coat', 'Mirror Move', ' Nature Power', 'Photon Geyser', 'Plasma Fists', 'Protect', 'Quash', 'Quick Guard', 'Rage Powder',
            'Relic Song', 'Secret Sword', 'Shell Trap', 'Sketch', 'Sleep Talk', 'Snarl', 'Snatch', 'Spectral Thief', 'Spiky Shield', 'Spotligt', 'Steam Eruption',
            'Struggle', 'Switcheroo', 'Techno Blast', 'Thousand Arrows', 'Thousand Waves', 'Theif', 'Transform', 'Trick', 'V_create', 'Wide Guard'];
            let move = battle.getRandomMove();
            while(disallowedMoves.includes(move.name)) {
                move = battle.getRandomMove();
            }
            battle.moveMessage.addMoveMessage(attacker.name, this, false, false);
            return move;
        }
    },
    "COSMIC_POWER":{
        "id":322,
        "name":"Cosmic Power",
        "power":null,
        "pp":20,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"psychic",
        "targetsUser":true,
        "userStatChange":{
            "def":1,
            "spdef":1
        },
        "priority":0
    },
    "LUCKY_CHANT":{
        "id":381,
        "name":"Lucky Chant",
        "power":null,
        "pp":30,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"normal",
        "priority":0,
        "targetsUser":true,
        "effect":function(battle, attacker, target, opponentMove) {
            attacker.options.luckyChantTurns = 6;
        }
    },
    "MOONLIGHT":{
        "id":236,
        "name":"Moonlight",
        "power":null,
        "pp":5,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"fairy",
        "targetsUser":true,
        "effect":function(battle, attacker, target, opponentMove) {
            let multiplier = 0;
            switch(battle.options.weather) {
                case 'sun':
                    multiplier = 2/3;
                    break;
                case 'rain':
                    multiplier = 1/4;
                    break;
                case 'sandstorm':
                    multiplier = 1/4;
                    break;
                case 'hail':
                    multiplier = 1/4;
                    break;
                default:
                    multiplier = 1/2;
                    break;
            }
            let recoverHP = attacker.maxHP * multiplier;
            attacker.addHP(recoverHP);
        },
        "priority":0
    },
    "MOONBLAST":{
        "id":585,
        "name":"Moonblast",
        "power":95,
        "pp":15,
        "accuracy":100,
        "typeOfMove":"special",
        "type":"fairy",
        "targetStatChange":{
            "spatk":[
                -1,
                .30
            ]
        },
        "priority":0
    },
    "GRAVITY":{
        "id":356,
        "name":"Gravity",
        "power":null,
        "pp":5,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"psychic",
        "targetsUser":true,
        "priority":0
    },
    "METEOR_MASH":{
        "id":309,
        "name":"Meteor Mash",
        "power":90,
        "pp":10,
        "accuracy":90,
        "typeOfMove":"physical",
        "type":"steel",
        "targetStatChange":{
            "atk":-1
        },
        "priority":0
    },
    "HEALING_WISH":{
        "id":361,
        "name":"Healing Wish",
        "power":null,
        "pp":10,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"psychic",
        "userFaints":true,
        "targetsUser":true,
        "update":function(battle, attacker, target, opponentMove) {
            //2 Pokemon alive at this point, the user and the other one to switch to
            if(battle.user.getAlivePokemon().length == 1) {
                return {failed: true};
            }
            attacker.options.usedHealingWish = true;
            return this;
        },
        "priority":0
    },
    "AFTER_YOU":{
        "id":495,
        "name":"After You",
        "power":null,
        "pp":15,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"normal",
        "priority":0,
        "effect":function(battle, attacker, target, opponentMove) {
            if(target.options.attackedThisTurn) {
                return {failed: true};
            }
            target.options.temporaryPriority = 255;
        }
    },
    "ROAR":{
        "id":46,
        "name":"Roar",
        "power":null,
        "pp":20,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"normal",
        "priority":-6,
        "causeSwitch":true,
        "hitsProtect":true,
    },
    "BABY_DOLL_EYES":{
        "id":608,
        "name":"baby Doll Eyes",
        "power":null,
        "pp":30,
        "accuracy":100,
        "typeOfMove":"status",
        "type":"fairy",
        "priority":1
    },
    "CONFUSE_RAY":{
        "id":109,
        "name":"Confuse Ray",
        "power":null,
        "pp":10,
        "accuracy":100,
        "typeOfMove":"status",
        "type":"ghost",
        "status":"confuse",
        "chance":100,
        "priority":0
    },
    "PAYBACK":{
        "id":371,
        "name":"Payback",
        "power":50,
        "pp":10,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"dark",
        "effect":function(battle, attacker, target, opponentMove) {
            //NOTE: not on switch out
            let copy = {...this};
            if(battle.pokemonGoingFirst == -1) { //opponent went first
                copy.power *= 2;
            }
            return {afterEffects: 'damage', move: copy};
        },
        "priority":0
    },
    "WILL_O_WISP":{
        "id":261,
        "name":"Will O_Wisp",
        "power":null,
        "pp":15,
        "accuracy":85,
        "typeOfMove":"status",
        "type":"fire",
        "status":"burn",
        "chance":100,
        "priority":0
    },
    "FEINT_ATTACK":{
        "id":185,
        "name":"Feint Attack",
        "power":60,
        "pp":20,
        "accuracy":null,
        "typeOfMove":"physical",
        "type":"dark",
        "priority":0
    },
    "HEX":{
        "id":506,
        "name":"Hex",
        "power":65,
        "pp":10,
        "accuracy":100,
        "typeOfMove":"special",
        "type":"ghost",
        "effect":function(battle, attacker, target, opponentMove) {
            let copy = {...this};
            if(attacker.majorStatus) {
                copy.power *= 2;
            }
            return {afterEffects: 'damage', move: copy};
        },
        "priority":0
    },
    "EXTRASENSORY":{
        "id":326,
        "name":"Extrasensory",
        "power":80,
        "pp":20,
        "accuracy":100,
        "typeOfMove":"special",
        "type":"psychic",
        "flinch":.10,
        "priority":0
    },
    "IMPRISON":{
        "id":286,
        "name":"Imprison",
        "power":null,
        "pp":10,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"psychic",
        "targetsUser":true,
        "priority":0,
        "effect":function(battle, attacker, target, opponentMove) {
            if(attacker.options.usedImprison) {
                return {failed: true};
            }
            attacker.options.usedImprison = true;
        }
    },
    "FIRE_BLAST":{
        "id":126,
        "name":"Fire Blast",
        "power":110,
        "pp":5,
        "accuracy":85,
        "typeOfMove":"special",
        "type":"fire",
        "status":"burn",
        "chance":10,
        "priority":0
    },
    "GRUDGE":{
        "id":288,
        "name":"Grudge",
        "power":null,
        "pp":5,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"ghost",
        "targetsUser":true,
        "priority":0
    },
    "NASTY_PLOT":{
        "id":417,
        "name":"Nasty Plot",
        "power":null,
        "pp":20,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"dark",
        "targetsUser":true,
        "userStatChange":{
            "spatk":2
        },
        "priority":0
    },
    "DISABLE":{
        "id":50,
        "name":"Disable",
        "power":null,
        "pp":20,
        "accuracy":100,
        "typeOfMove":"status",
        "type":"normal",
        "priority":0,
        "effect":function(battle, attacker, target, opponentMove) {
            //NOTE: can't disable struggle
            if(target.options.disabledMove) {
                return {failed: true};
            }
            let move = battle.getMove(target.options.lastMoveUsed);
            target.options.disabledMove = {duration: Math.floor(Math.random() * (7 - 4 + 1) + 4),
                                           move: target.options.lastMoveUsed};
            return {effectMessage: target.name + `'s ${move.name} was disabled!`};
        }
    },
    "ROUND":{
        "id":496,
        "name":"Round",
        "power":60,
        "pp":15,
        "accuracy":100,
        "typeOfMove":"special",
        "type":"normal",
        "priority":0
    },
    "REST":{
        "id":156,
        "name":"Rest",
        "power":null,
        "pp":10,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"psychic",
        "targetsUser":true,
        "effect":function(battle, attacker, target, opponentMove) {
            if(battle.uproarTurns || attacker.majorStatus == 'sleep' || battle.options.terrain == 'electric') {
                return {failed: true};
            }
            attacker.hp = attacker.maxHP;
            attacker.applyStatusEffect('sleep', true);
            attacker.options.sleepCounter = 3;
        },
        "priority":0
    },
    "MIMIC":{
        "id":102,
        "name":"Mimic",
        "power":null,
        "pp":10,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"normal",
        "priority":0,
        "effect":function(battle, attacker, target, opponentMove) {
            let move = battle.getMove(target.options.lastMoveUsed);
            const disallowedMoves = ['Mimic', 'Transform', 'Sketch', 'Struggle', 'Metronome'];
            if(attacker.moves.includes(move.id) || disallowedMoves.includes(move.name)) {
                return {failed: true};
            }
            let index = attacker.moves.findIndex(el => el.id == 102);
            attacker.moves[index] = {id: target.options.lastMoveUsed, pp: battle.getMove(target.options.lastMoveUsed).pp};
        }
    },
    "HYPER_VOICE":{
        "id":304,
        "name":"Hyper Voice",
        "power":90,
        "pp":10,
        "accuracy":100,
        "typeOfMove":"special",
        "type":"normal",
        "priority":0
    },
    "PLAY_ROUGH":{
        "id":583,
        "name":"Play Rough",
        "power":90,
        "pp":10,
        "accuracy":90,
        "typeOfMove":"physical",
        "type":"fairy",
        "targetStatChange":{
            "atk":[
                -1,
                .10
            ]
        },
        "priority":0
    },
    "ABSORB":{
        "id":71,
        "name":"Absorb",
        "power":20,
        "pp":25,
        "accuracy":100,
        "typeOfMove":"special",
        "type":"grass",
        "drain":0.5,
        "priority":0
    },
    "ASTONISH":{
        "id":310,
        "name":"Astonish",
        "power":30,
        "pp":15,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"ghost",
        "flinch":.30,
        "priority":0
    },
    "AIR_CUTTER":{
        "id":314,
        "name":"Air Cutter",
        "power":60,
        "pp":25,
        "accuracy":95,
        "typeOfMove":"special",
        "type":"flying",
        "critRatio":true,
        "priority":0
    },
    "MEAN_LOOK":{
        "id":212,
        "name":"Mean Look",
        "power":null,
        "pp":5,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"normal",
        "hitsProtect":true,
        "effect":function(battle, attacker, target, opponentMove) {
            target.options.canFlee = false;
        },
        "priority":0
    },
    "LEECH_LIFE":{
        "id":141,
        "name":"Leech Life",
        "power":80,
        "pp":10,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"bug",
        "drain":0.5,
        "priority":0
    },
    "QUICK_GUARD":{
        "id":501,
        "name":"Quick Guard",
        "power":null,
        "pp":15,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"fighting",
        "targetsUser":true,
        "priority":3
    },
    "MEGA_DRAIN":{
        "id":72,
        "name":"Mega Drain",
        "power":40,
        "pp":15,
        "accuracy":100,
        "typeOfMove":"special",
        "type":"grass",
        "drain":0.5,
        "priority":0
    },
    "GIGA_DRAIN":{
        "id":202,
        "name":"Giga Drain",
        "power":75,
        "pp":10,
        "accuracy":100,
        "typeOfMove":"special",
        "type":"grass",
        "drain":0.5,
        "priority":0
    },
    "TOXIC":{
        "id":92,
        "name":"Toxic",
        "power":null,
        "pp":10,
        "accuracy":90,
        "typeOfMove":"status",
        "type":"poison",
        "status":"badlyPoison",
        "chance":100,
        "priority":0
    },
    "NATURAL_GIFT":{
        "id":363,
        "name":"Natural Gift",
        "power":null,
        "pp":15,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"normal",
        "priority":0
    },
    "GRASSY_TERRAIN":{
        "id":580,
        "name":"Grassy Terrain",
        "power":null,
        "pp":10,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"grass",
        "targetsUser":true,
        "effect":function(battle, attacker, target, opponentMove) {
            if(battle.options.terrain == 'grassy') {
                return {failed: true};
            }
            else {
                battle.options.terrain = 'grassy';
            }
        },
        "priority":0
    },
    "AROMATHERAPY":{
        "id":312,
        "name":"Aromatherapy",
        "power":null,
        "pp":5,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"grass",
        "targetsUser":true,
        "effect":function(battle, attacker, target, opponentMove) {
            for(var x=0;x<battle.party.length;x++) {
                battle.party[x].majorStatus = null;
            }
            return {effectMessage: 'Your party was healed of all status ailments!'};
        },
        "priority":0
    },
    "SPORE":{
        "id":147,
        "name":"Spore",
        "power":null,
        "pp":15,
        "accuracy":100,
        "typeOfMove":"status",
        "type":"grass",
        "status":"sleep",
        "chance":100,
        "priority":0
    },
    "X_SCISSOR":{
        "id":404,
        "name":"X_Scissor",
        "power":80,
        "pp":15,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"bug",
        "priority":0
    },
    "CROSS_POISON":{
        "id":440,
        "name":"Cross Poison",
        "power":70,
        "pp":20,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"poison",
        "status":"poison",
        "chance":10,
        "critRatio":true,
        "priority":0
    },
    "FORESIGHT":{
        "id":193,
        "name":"Foresight",
        "power":null,
        "pp":40,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"normal",
        "priority":0,
        "effect":function(battle, attacker, target, opponentMove) {
            //NOTE: also removes ghost immunity to normal and fighting
            target.options.hitByForesight = true;
        }
    },
    "SIGNAL_BEAM":{
        "id":324,
        "name":"Signal Beam",
        "power":75,
        "pp":15,
        "accuracy":100,
        "typeOfMove":"special",
        "type":"bug",
        "status":"confuse",
        "chance":10,
        "priority":0
    },
    "ZEN_HEADBUTT":{
        "id":428,
        "name":"Zen Headbutt",
        "power":80,
        "pp":15,
        "accuracy":90,
        "typeOfMove":"physical",
        "type":"psychic",
        "flinch":.20,
        "priority":0
    },
    "PSYCHIC":{
        "id":94,
        "name":"Psychic",
        "power":90,
        "pp":10,
        "accuracy":100,
        "typeOfMove":"special",
        "type":"psychic",
        "priority":0
    },
    "MUD_SLAP":{
        "id":189,
        "name":"Mud Slap",
        "power":20,
        "pp":10,
        "accuracy":100,
        "typeOfMove":"special",
        "type":"ground",
        "targetStatChange":{
            "accuracy":-1
        },
        "priority":0
    },
    "BULLDOZE":{
        "id":523,
        "name":"Bulldoze",
        "power":60,
        "pp":20,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"ground",
        "targetStatChange":{
            "spd":-1
        },
        "priority":0
    },
    "FISSURE":{
        "id":90,
        "name":"Fissure",
        "power":null,
        "pp":5,
        "accuracy":30,
        "typeOfMove":"physical",
        "type":"ground",
        "priority":0,
        "ohko":true,
    },
    "ROTOTILLER":{
        "id":563,
        "name":"Rototiller",
        "power":null,
        "pp":10,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"ground",
        "targetsUser":true,
        "effect":function(battle, attacker, target, opponentMove) {
            let succeeded = false;
            if(!attacker.options.levitateTurns && (attacker.type1 == 'grass' || attacker.type2 == 'grass')) {
                attacker.options.statChanges.modify('atk', 1);
                attacker.options.statChanges.modify('def', 1);
                succeeded = true;
            }
            if(!target.options.levitateTurns && (target.type1 == 'grass' || target.type2 == 'grass')) {
                target.options.statChanges.modify('atk', 1);
                target.options.statChanges.modify('def', 1);
                succeeded = true;
            }
            if(!succeeded) {
                return {failed: true};
            }
        },
        "priority":0
    },
    "NIGHT_SLASH":{
        "id":400,
        "name":"Night Slash",
        "power":70,
        "pp":15,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"dark",
        "critRatio":true,
        "priority":0
    },
    "TRI_ATTACK":{
        "id":161,
        "name":"Tri Attack",
        "power":80,
        "pp":10,
        "accuracy":100,
        "typeOfMove":"special",
        "type":"normal",
        "update":function(battle, attacker, target, opponentMove) {
            let chance = Math.floor(Math.random() * 100); //0_99
            let copy = {...this};
            if(chance < 33) {
                let status = Math.floor(Math.random() * 3); //0_2
                switch(status) {
                    case 0:
                        copy.status = 'paralyze';
                        copy.chance = 100;
                        break;
                    case 1:
                        copy.status = 'freeze';
                        copy.chance = 100;
                        break;
                    case 2:
                        copy.status = 'burn';
                        copy.chance = 100;
                        break;
                }
            }
            return copy;
        },
        "priority":0
    },
    "FAKE_OUT":{
        "id":252,
        "name":"Fake Out",
        "power":40,
        "pp":10,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"normal",
        "flinch":1,
        "effect":function(battle, attacker, target, opponentMove) {
            if(attacker.options.firstMove) {
                return {afterEffects: 'damage'};
            }
            else {
                return {failed: true};
            }
        },
        "priority":3
    },
    "TAUNT":{
        "id":269,
        "name":"Taunt",
        "power":null,
        "pp":20,
        "accuracy":100,
        "typeOfMove":"status",
        "type":"dark",
        "effect":function(battle, attacker, target, opponentMove) {
            if(target.options.tauntTurns) {
                return {failed: true};
            }
            target.options.tauntTurns = 3; //NOTE: should be 3 or 4 defending on circumstances
        },
        "priority":0
    },
    "PAY_DAY":{
        "id":6,
        "name":"Pay Day",
        "power":40,
        "pp":20,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"normal",
        "priority":0
    },
    "SWITCHEROO":{
        "id":415,
        "name":"Switcheroo",
        "power":null,
        "pp":10,
        "accuracy":100,
        "typeOfMove":"status",
        "type":"dark",
        "priority":0
    },
    "POWER_GEM":{
        "id":408,
        "name":"Power Gem",
        "power":80,
        "pp":20,
        "accuracy":100,
        "typeOfMove":"special",
        "type":"rock",
        "priority":0
    },
    "WATER_SPORT":{
        "id":346,
        "name":"Water Sport",
        "power":null,
        "pp":15,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"water",
        "priority":0,
        "targetsUser":true,
        "effect":function(battle, attacker, target, opponentMove) {
            if(battle.options.activeSportMove == 'water') {
                return {failed: true};
            }
            battle.options.activeSportMove = 'water';
            battle.options.sportTurns = 6;
            return {effectMessage: 'The field was covered in water lowering fire move power!'};
        }
    },
    "SOAK":{
        "id":487,
        "name":"Soak",
        "power":null,
        "pp":20,
        "accuracy":100,
        "typeOfMove":"status",
        "type":"water",
        "effect":function(battle, attacker, target, opponentMove) {
            //NOTE: transforming overwrites
            target.options.temporaryType = ['water'];
        },
        "priority":0
    },
    "PSYCH_UP":{
        "id":244,
        "name":"Psych Up",
        "power":null,
        "pp":10,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"normal",
        "priority":0,
        "effect":function(battle, attacker, target, opponentMove) {
            let keys = target.options.statChanges.getKeys();
            for(var x=0;x<keys.length;x++) {
                attacker.options.statChanges.set(keys[x], target.getStatChange(keys[x]));
            }
            return {effectMessage: attacker.name + `'s stats were changed to match ${target.name}'s!`};
        }
    },
    "AMNESIA":{
        "id":133,
        "name":"Amnesia",
        "power":null,
        "pp":20,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"psychic",
        "targetsUser":true,
        "userStatChange":{
            "spdef":2
        },
        "priority":0
    },
    "WONDER_ROOM":{
        "id":472,
        "name":"Wonder Room",
        "power":null,
        "pp":10,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"psychic",
        "priority":0,
        "targetsUser":true,
        "effect":function(battle, attacker, target, opponentMove) {
            if(attacker.options.wonderRoomTurns) {
                attacker.options.wonderRoomTurns = null;
                target.options.wonderRoomTurns = null;
                return {effectMessage: 'The wonder room ended.'};
            }
            attacker.options.wonderRoomTurns = 6; //reduced to 6 at the end of this turn
            target.options.wonderRoomTurns = 6;
            return {effectMessage: 'The room changed! DEF and SPDEF were swapped!'};
        }
    },
    "AQUA_JET":{
        "id":453,
        "name":"Aqua Jet",
        "power":40,
        "pp":20,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"water",
        "priority":1
    },
    "ME_FIRST":{
        "id":382,
        "name":"Me First",
        "power":null,
        "pp":20,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"normal",
        "priority":0,
        "effect":function(battle, attacker, target, opponentMove) {
            const disallowedMoves = ['Beak Blast', 'Belch', 'Chatter', 'Counter', 'Covet', 'Focus Punch',
            'Metal Burst', 'Mirror Coat', 'Shell Trap', 'Struggle', 'Theif'];
            let copy = {...opponentMove};
            if(target.options.attackedThisTurn || opponentMove.typeOfMove == 'status') {
                return {failed: true};
            }
            battle.moveMessage.addMoveMessage(attacker.name, this, false, false);
            //NOTE: this can be crit and shouldn't
            copy.power *= 1.5;
            return {afterEffects: 'damage', move: copy};
        }
    },
    "COVET":{
        "id":343,
        "name":"Covet",
        "power":60,
        "pp":25,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"normal",
        "priority":0
    },
    "LOW_KICK":{
        "id":67,
        "name":"Low Kick",
        "power":null,
        "pp":20,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"fighting",
        "priority":0,
        "update":function(battle, attacker, target, opponentMove) {
            let copy = {...this};
            if(target.weight < 9.9) {
                copy.power = 20;
            }  
            else if(target.weight < 24.9) {
                copy.power = 40;
            }
            else if(target.weight < 49.9) {
                copy.power = 60;
            }
            else if(target.weight < 99.9) {
                copy.power = 80;
            }
            else if(target.weight < 199.9) {
                copy.power = 100;
            }
            else {
                copy.power = 120;
            }
            return copy;
        }
    },
    "KARATE_CHOP":{
        "id":2,
        "name":"Karate Chop",
        "power":50,
        "pp":25,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"fighting",
        "critRatio":true,
        "priority":0
    },
    "SEISMIC_TOSS":{
        "id":69,
        "name":"Seismic Toss",
        "power":null,
        "pp":20,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"fighting",
        "damage":"level",
        "priority":0
    },
    "SWAGGER":{
        "id":207,
        "name":"Swagger",
        "power":null,
        "pp":15,
        "accuracy":85,
        "typeOfMove":"status",
        "type":"normal",
        "status":"confuse",
        "chance":10,
        "targetStatChange":{
            "atk":2
        },
        "priority":0
    },
    "CROSS_CHOP":{
        "id":238,
        "name":"Cross Chop",
        "power":100,
        "pp":5,
        "accuracy":80,
        "typeOfMove":"physical",
        "type":"fighting",
        "critChange":0.125,
        "priority":0
    },
    "PUNISHMENT":{
        "id":386,
        "name":"Punishment",
        "power":null,
        "pp":5,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"dark",
        "effect":function(battle, attacker, target, opponentMove) {
            let copy = {...this};
            let statChanges = attacker.options.statChanges.getPositiveChangeCount();
            if(statChanges > 7) {
                statChanges = 7;
            }
            copy.power = 60 + 20 * statChanges;
            return {afterEffects: 'damage', move: copy};
        },
        "priority":0
    },
    "CLOSE_COMBAT":{
        "id":370,
        "name":"Close Combat",
        "power":120,
        "pp":5,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"fighting",
        "userStatChange":{
            "def":-1,
            "spdef":-1
        },
        "priority":0
    },
    "STOMPING_TANTRUM":{
        "id":707,
        "name":"Stomping Tantrum",
        "power":75,
        "pp":10,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"ground",
        "priority":0
    },
    "OUTRAGE":{
        "id":200,
        "name":"Outrage",
        "power":120,
        "pp":10,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"dragon",
        "effect":function(battle, attacker, target, opponentMove) {
            //NOTE: stops if it can't be performed
            //NOTE: disrupting on last turn still causes confusion
            if(!attacker.continuousMove) {
                let turns = Math.floor(Math.random() * 2) + 1; //2_3 turns
                attacker.continuousMove = this.id;
                attacker.options.turnCounter = turns; //not sure about this
                return {afterEffects: 'damage'};
            }
            if(attacker.options.turnCounter != 0) {
                attacker.options.turnCounter--;
                return {afterEffects: 'damage'};
            }
            else {
                attacker.applyStatusEffect('confuse', false);
                attacker.continuousMove = null;
                return {afterEffects: 'damage', effectMessage: attacker.name + ' was confused!'};
            }
        },
        "priority":0
    },
    "FINAL_GAMBIT":{
        "id":515,
        "name":"Final Gambit",
        "power":null,
        "pp":5,
        "accuracy":100,
        "typeOfMove":"special",
        "type":"fighting",
        //"userFaints":true,
        "update":function(battle, attacker, target, opponentMove) {
            let copy = {...this};
            copy.damage = attacker.hp;
            return copy;
        },
        "priority":0
    },
    "FLING":{
        "id":374,
        "name":"Fling",
        "power":null,
        "pp":10,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"dark",
        "priority":0
    },
    "ODOR_SLEUTH":{
        "id":316,
        "name":"Odor Sleuth",
        "power":null,
        "pp":40,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"normal",
        "priority":0
    },
    "FLAME_WHEEL":{
        "id":172,
        "name":"Flame Wheel",
        "power":60,
        "pp":25,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"fire",
        "status":"burn",
        "thaws":true,
        "chance":10,
        "priority":0,
    },
    "REVERSAL":{
        "id":179,
        "name":"Reversal",
        "power":null,
        "pp":15,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"fighting",
        "effect":function(battle, attacker, target, opponentMove) {
            let copy = {...this};
            let percent = Math.floor((attacker.hp / attacker.maxHP) * 100);
            if(percent > 70) {
                copy.power = 20;
            }
            else if(percent > 35) {
                copy.power = 40;
            }
            else if(percent > 20) {
                copy.power = 80;
            }
            else if(percent > 10) {
                copy.power = 100;
            }
            else if(percent > 4) {
                copy.power = 150;
            }
            else {
                copy.power = 200;
            }
            return {afterEffects: 'damage', move: copy};
        },
        "priority":0
    },
    "RETALIATE":{
        "id":514,
        "name":"Retaliate",
        "power":70,
        "pp":5,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"normal",
        "priority":0,
        "update":function(battle, attacker, target, opponentMove) {
            console.log(battle);
            let copy = {...this};
            if(attacker.isUser) {
                if(battle.options.userFaintedLastTurn) {
                    copy.power *= 2;
                }
            }
            else {
                if(battle.options.encounterFaintedLastTurn) {
                    copy.power *= 2;
                }
            }
            return copy;
        }
    },
    "EXTREME_SPEED":{
        "id":245,
        "name":"Extreme Speed",
        "power":80,
        "pp":5,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"normal",
        "priority":2
    },
    "HYPNOSIS":{
        "id":95,
        "name":"Hypnosis",
        "power":null,
        "pp":20,
        "accuracy":60,
        "typeOfMove":"status",
        "type":"psychic",
        "status":"sleep",
        "chance":100,
        "priority":0
    },
    "BUBBLE_BEAM":{
        "id":61,
        "name":"Bubble Beam",
        "power":65,
        "pp":20,
        "accuracy":100,
        "typeOfMove":"special",
        "type":"water",
        "targetStatChange":{
            "spd":[
                -1,
                .10
            ]
        },
        "priority":0
    },
    "MUD_SHOT":{
        "id":341,
        "name":"Mud Shot",
        "power":55,
        "pp":15,
        "accuracy":95,
        "typeOfMove":"special",
        "type":"ground",
        "targetStatChange":{
            "spd":-1
        },
        "priority":0
    },
    "BELLY_DRUM":{
        "id":187,
        "name":"Belly Drum",
        "power":null,
        "pp":10,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"normal",
        "targetsUser":true,
        "effect:":function(battle, attacker, target, opponentMove) {
            let copy = {...this};
            let half = Math.floor(attacker.maxHP/2);
            if(attacker.hp < half) {
                return {failed: true};
            }
            else {
                attacker.removeHP(half);
                copy.userStatChange == {'atk': 6};
                return {move: copy};
            }
        },
        "priority":0
    },
    "SUBMISSION":{
        "id":66,
        "name":"Submission",
        "power":80,
        "pp":20,
        "accuracy":80,
        "typeOfMove":"physical",
        "type":"fighting",
        "recoil":0.25,
        "priority":0
    },
    "CIRCLE_THROW":{
        "id":509,
        "name":"Circle Throw",
        "power":60,
        "pp":10,
        "accuracy":90,
        "typeOfMove":"physical",
        "type":"fighting",
        "priority":-6,
        "causeSwitch":true,
    },
    "DYNAMIC_PUNCH":{
        "id":223,
        "name":"Dynamic Punch",
        "power":100,
        "pp":5,
        "accuracy":50,
        "typeOfMove":"physical",
        "type":"fighting",
        "status":"confuse",
        "chance":100,
        "priority":0
    },
    "MIND_READER":{
        "id":170,
        "name":"Mind Reader",
        "power":null,
        "pp":5,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"normal",
        "priority":0,
        "effect":function(battle, attacker, target, opponentMove) {
            return {effectMessage: attacker.name + ' locked on to its opponent!'};
        }
    },
    "TELEPORT":{
        "id":100,
        "name":"Teleport",
        "power":null,
        "pp":20,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"psychic",
        "targetsUser":true,
        "priority":0
    },
    "KINESIS":{
        "id":134,
        "name":"Kinesis",
        "power":null,
        "pp":15,
        "accuracy":80,
        "typeOfMove":"status",
        "type":"psychic",
        "targetStatChange":{
            "accuracy":-1
        },
        "priority":0
    },
    "MIRACLE_EYE":{
        "id":357,
        "name":"Miracle Eye",
        "power":null,
        "pp":40,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"psychic",
        "priority":0,
        "effect":function(battle, attacker, target, opponentMove) {
            target.options.hitByMiracleEye = true;
        }
    },
    "REFLECT":{
        "id":115,
        "name":"Reflect",
        "power":null,
        "pp":20,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"psychic",
        "targetsUser":true,
        "effect":function(battle, attacker, target, opponentMove) {
            //NOTE: see direct damage move table
            //https://bulbapedia.bulbagarden.net/wiki/Category:Moves_that_deal_direct_damage
            attacker.options.reflectTurns = 6;
        },
        "priority":0
    },
    "PSYCHO_CUT":{
        "id":427,
        "name":"Psycho Cut",
        "power":70,
        "pp":20,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"psychic",
        "critRatio":true,
        "priority":0
    },
    "RECOVER":{
        "id":105,
        "name":"Recover",
        "power":null,
        "pp":10,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"normal",
        "targetsUser":true,
        "recover":50,
        "priority":0
    },
    "TELEKINESIS":{
        "id":477,
        "name":"Telekinesis",
        "power":null,
        "pp":15,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"psychic",
        "priority":0,
        "effect":function(battle, attacker, target, opponentMove) {
            if(target.options.raisedTurns || target.options.grounded || target.pokemonID == 50) { //can't be used if target under smack down effect
                return {failed: true};
            }
            target.options.raisedTurns = 4; //reduced at the end of this turn to 3
            return {effectMessage: target.name  + ' was raised into the air!'};
        }
    },
    "ALLY_SWITCH":{
        "id":502,
        "name":"Ally Switch",
        "power":null,
        "pp":15,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"psychic",
        "targetsUser":true,
        "priority":2
    },
    "ROLE_PLAY":{
        "id":272,
        "name":"Role Play",
        "power":null,
        "pp":10,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"psychic",
        "priority":0
    },
    "FUTURE_SIGHT":{
        "id":248,
        "name":"Future Sight",
        "power":120,
        "pp":10,
        "accuracy":100,
        "typeOfMove":"special",
        "type":"psychic",
        "effect":function(battle, attacker, target, opponentMove) {
            if(attacker.options.futureSightTurns) {
                return {failed: true};
            }
            attacker.options.futureSightTurns = 3;
            return {effectMessage: attacker.name + ' foresaw an attack!'};
        },
        "priority":0
    },
    "TRICK":{
        "id":271,
        "name":"Trick",
        "power":null,
        "pp":10,
        "accuracy":100,
        "typeOfMove":"status",
        "type":"psychic",
        "priority":0
    },
    "CALM_MIND":{
        "id":347,
        "name":"Calm Mind",
        "power":null,
        "pp":20,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"psychic",
        "targetsUser":true,
        "userStatChange":{
            "spatk":1,
            "spdef":1
        },
        "priority":0
    },
    "LOW_SWEEP":{
        "id":490,
        "name":"Low Sweep",
        "power":65,
        "pp":20,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"fighting",
        "targetStatChange":{
            "spd":-1
        },
        "priority":0
    },
    "REVENGE":{
        "id":279,
        "name":"Revenge",
        "power":60,
        "pp":10,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"fighting",
        "effect":function(battle, attacker, target, opponentMove) {
            let copy = {...this};
            if(attacker.options.damagedThisTurn) {
                copy.power *= 2;
            }
            return {afterEffects: 'damage', move: copy};
        },
        "priority":-4
    },
    "KNOCK_OFF":{
        "id":282,
        "name":"Knock Off",
        "power":65,
        "pp":20,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"dark",
        "priority":0
    },
    "VITAL_THROW":{
        "id":233,
        "name":"Vital Throw",
        "power":70,
        "pp":10,
        "accuracy":null,
        "typeOfMove":"physical",
        "type":"fighting",
        "priority":-1
    },
    "DUAL_CHOP":{
        "id":530,
        "name":"Dual Chop",
        "power":40,
        "pp":15,
        "accuracy":90,
        "typeOfMove":"physical",
        "type":"dragon",
        "sureTimes":2,
        "priority":0
    },
    "BULK_UP":{
        "id":339,
        "name":"Bulk Up",
        "power":null,
        "pp":20,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"fighting",
        "targetsUser":true,
        "userStatChange":{
            "atk":1,
            "def":1
        },
        "priority":0
    },
    "STRENGTH":{
        "id":70,
        "name":"Strength",
        "power":80,
        "pp":15,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"normal",
        "priority":0
    },
    "WIDE_GUARD":{
        "id":469,
        "name":"Wide Guard",
        "power":null,
        "pp":10,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"rock",
        "targetsUser":true,
        "priority":3
    },
    "WRING_OUT":{
        "id":378,
        "name":"Wring Out",
        "power":null,
        "pp":5,
        "accuracy":100,
        "typeOfMove":"special",
        "type":"normal",
        "effect":function(battle, attacker, target, opponentMove) {
            let copy = {...this};
            copy.power = Math.floor(120 * (target.hp / target.maxHP));
            return {afterEffects: 'damage', move: copy};
        },
        "priority":0
    },
    "LEAF_TORNADO":{
        "id":536,
        "name":"Leaf Tornado",
        "power":65,
        "pp":10,
        "accuracy":90,
        "typeOfMove":"special",
        "type":"grass",
        "targetStatChange":{
            "accuracy":[
                -1,
                .30
            ]
        },
        "priority":0
    },
    "LEAF_STORM":{
        "id":437,
        "name":"Leaf Storm",
        "power":130,
        "pp":5,
        "accuracy":90,
        "typeOfMove":"special",
        "type":"grass",
        "userStatChange":{
            "spatk":-2
        },
        "priority":0
    },
    "LEAF_BLADE":{
        "id":348,
        "name":"Leaf Blade",
        "power":90,
        "pp":15,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"grass",
        "critRatio":true,
        "priority":0
    },
    "CONSTRICT":{
        "id":132,
        "name":"Constrict",
        "power":10,
        "pp":35,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"normal",
        "constrict":true,
        "priority":0,
        "effect":function(battle, attacker, target, opponentMove) {
            let copy = {...this};
            if(!attacker.continuousMove) {
                attacker.options.turnCounter = ChanceCounter.getNumberOfTimes();
                attacker.continuousMove = this.id;
            }
            else if(--attacker.options.turnCounter == 0) { //end
                attacker.options.turnCounter = null;
                attacker.continuousMove = null;
                return {afterEffects: 'damage',  move: copy, effectMessage: target.name + ' broke free of constrict!'};
            }
            else {
                copy.damage = Math.floor(target.maxHP * (1/8));
                return {afterEffects: 'damage', move: copy, effectMessage: target.name + ' was hurt by constrict!'};
            }
        },
    },
    "BARRIER":{
        "id":112,
        "name":"Barrier",
        "power":null,
        "pp":20,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"psychic",
        "targetsUser":true,
        "userStatChange":{
            "def":2
        },
        "priority":0
    },
    "BRINE":{
        "id":362,
        "name":"Brine",
        "power":65, 
        "pp":10,
        "accuracy":100,
        "typeOfMove":"special",
        "type":"water",
        "effect":function(battle, attacker, target, opponentMove) {
            let copy = {...this};
            if(target.hp < Math.floor(target.maxHP/2)) { //less than 50%
                copy.power *= 2;
            }
            return {afterEffects: 'damage', move: copy};
        },
        "priority":0
    },
    "SLUDGE_WAVE":{
        "id":482,
        "name":"Sludge Wave",
        "power":95,
        "pp":10,
        "accuracy":100,
        "typeOfMove":"special",
        "type":"poison",
        "status":"poison",
        "chance":10,
        "priority":0
    },
    "REFLECT_TYPE":{
        "id":513,
        "name":"Reflect Type",
        "power":null,
        "pp":15,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"normal",
        "effect":function(battle, attacker, target, opponentMove) {
            attacker.options.temporaryType = [target.type1, target.type2];
            return {effectMessage: `${attacker.name}\s type changed to match ${target.name}'s!`};
        },
        "priority":0
    },
    "MUD_SPORT":{
        "id":300,
        "name":"Mud Sport",
        "power":null,
        "pp":15,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"ground",
        "priority":0,
        "targetsUser":true,
        "effect":function(battle, attacker, target, opponentMove) {
            if(battle.options.activeSportMove == 'mud') {
                return {failed: true};
            }
            battle.options.activeSportMove = 'mud';
            battle.options.sportMoveTurns = 6;
            return {effectMessage: 'The field was covered in mud lowering electric move power!'};
        }
    },
    "ROCK_POLISH":{
        "id":397,
        "name":"Rock Polish",
        "power":null,
        "pp":20,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"rock",
        "targetsUser":true,
        "userStatChange":{
            "spd":2
        },
        "priority":0
    },
    "ROCK_THROW":{
        "id":88,
        "name":"Rock Throw",
        "power":50,
        "pp":15,
        "accuracy":90,
        "typeOfMove":"physical",
        "type":"rock",
        "priority":0
    },
    "SMACK_DOWN":{
        "id":479,
        "name":"Smack Down",
        "power":50,
        "pp":15,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"rock",
        "hitsFly":true,
        "effect":function(battle, attacker, target, opponentMove) {
            target.options.grounded = true;
            target.options.levitateTurns = null; //reset magnet rise
            target.options.raisedTurns = null; //reset telekineses
        },
        "priority":0
    },
    "SELF_DESTRUCT":{
        "id":120,
        "name":"Self Destruct",
        "power":200,
        "pp":5,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"normal",
        "userFaints":true,
        "priority":0
    },
    "STEALTH_ROCK":{
        "id":446,
        "name":"Stealth Rock",
        "power":null,
        "pp":20,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"rock",
        "priority":0,
        "effect":function(battle, attacker, target, opponentMove) {
            if(target.options.activeTraps.stealthRock == 0) {
                target.options.activeTraps.stealthRock++;
                return {effectMessage: 'The field was riddled with rocks!'};
            }
            return {failed: true};
        }
    },
    "ROCK_BLAST":{
        "id":350,
        "name":"Rock Blast",
        "power":25,
        "pp":10,
        "accuracy":90,
        "typeOfMove":"physical",
        "type":"rock",
        "times":5,
        "priority":0
    },
    "EXPLOSION":{
        "id":153,
        "name":"Explosion",
        "power":250,
        "pp":5,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"normal",
        "userFaints":true,
        "priority":0
    },
    "STONE_EDGE":{
        "id":444,
        "name":"Stone Edge",
        "power":100,
        "pp":5,
        "accuracy":80,
        "typeOfMove":"physical",
        "type":"rock",
        "critRatio":true,
        "priority":0
    },
    "HEAVY_SLAM":{
        "id":484,
        "name":"Heavy Slam",
        "power":null,
        "pp":10,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"steel",
        "update":function(battle, attacker, target, opponentMove) {
            let copy = {...this};
            let weightDifference = (target.weight / attacker.weight) * 100;
            if(weightDifference > 50) {
                copy.power = 40;
            }
            else if(weightDifference > 33.35) {
                copy.power = 60;
            }
            else if(weightDifference > 25.01) {
                copy.power = 80;
            }  
            else if(weightDifference > 20.01) {
                copy.power = 100;
            }
            else {
                copy.power = 120;
            }
            if(target.minimized) {
                copy.accuracy = null;
                copy.power *= 2;
            }
            return copy;
        },
        "priority":0
    },
    "STEAMROLLER":{
        "id":537,
        "name":"Steamroller",
        "power":65,
        "pp":20,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"bug",
        "flinch":.30,
        "effect":function(battle, attacker, target, opponentMove) {
            let copy = {...this};
            if(target.minimized) {
                copy.accuracy = null;
                copy.power *= 2;
            }
            return {afterEffects: 'damage', move: copy};
        },
        "priority":0
    },
    "STOMP":{
        "id":23,
        "name":"Stomp",
        "power":65,
        "pp":20,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"normal",
        "flinch":.30,
        "effect":function(battle, attacker, target, opponentMove) {
            let copy = {...this};
            if(target.minimized) {
                copy.accuracy = null;
                copy.power *= 2;
            }
            return {afterEffects: 'damage', move: copy};
        },
        "priority":0
    },
    "FLAME_CHARGE":{
        "id":488,
        "name":"Flame Charge",
        "power":50,
        "pp":20,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"fire",
        "userStatChange":{
            "spd":1
        },
        "priority":0
    },
    "BOUNCE":{
        "id":340,
        "name":"Bounce",
        "power":85,
        "pp":5,
        "accuracy":85,
        "typeOfMove":"physical",
        "type":"flying",
        "chargeTurn":true,
        "effect":function(battle, attacker, target, opponentMove) {
            let copy = {...this};
            if(!attacker.continuousMove) {
                attacker.continuousMove = this.id;
                attacker.options.usedFly = true;
                return {effectMessage: attacker.name + ' bounced up high!'};
            }
            else {
                attacker.continuousMove = null;
                attacker.options.usedFly = false;
                return {afterEffects: 'damage', move: copy};
            }
        },
        "update":function(battle, attacker, target, opponentMove) {
            let copy = {...this};
            if(attacker.continuousMove) {
                copy.chargeTurn = false;
            }
            return copy;
        },
        "priority":0
    },
    "YAWN":{
        "id":281,
        "name":"Yawn",
        "power":null,
        "pp":10,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"normal",
        "priority":0,
        "effect":function(battle, attacker, target, opponentMove) {
            //NOTE: in semi immune states it should stay in that state until it wakes up
            if(target.majorStatus || target.ability == 'insomnia') {
                return {failed: true};
            }
            target.options.drowsyTurns = 2;
            return {effectMessage: target.name + ' became drowsy!'};
        }
    },
    "CURSE":{
        "id":174,
        "name":"Curse",
        "power":null,
        "pp":10,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"ghost",
        "targetsUser":true,
        "hitsProtect":true,
        "effect":function(battle, attacker, target, opponentMove) {
            let copy = {...this};
            if(attacker.type1 == 'ghost' || attacker.type2 == 'ghost') {
                if(target.options.cursed) {
                    return {failed: true};
                }
                attacker.removeHP(Math.floor(attacker.maxHP/2));
                target.options.cursed = true;
                return {message: attacker.name + ' used Curse!' + target.name + ' was cursed!'};
            }
            else {
                copy.userStatChange = {
                    spd: -1,
                    atk: 1,
                    def: 1
                };
                return {afterEffects: 'stats', move: copy}; 
            }
        },
        "priority":0
    },
    "HEADBUTT":{
        "id":29,
        "name":"Headbutt",
        "power":70,
        "pp":15,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"normal",
        "flinch":.30,
        "priority":0
    },
    "SLACK_OFF":{
        "id":303,
        "name":"Slack Off",
        "power":null,
        "pp":10,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"normal",
        "targetsUser":true,
        "recover":50,
        "priority":0
    },
    "HEAL_PULSE":{
        "id":505,
        "name":"Heal Pulse",
        "power":null,
        "pp":10,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"psychic",
        "effect":function(battle, attacker, target, opponentMove) {
            let recoverHP = Math.floor(target.maxHP/2);
            if(target.hp + recoverHP > target.maxHP) {
                target.hp = target.maxHP;
            }
            else {
                target.hp += recoverHP;
            }
        },
        "priority":0
    },
    "MAGNET_BOMB":{
        "id":443,
        "name":"Magnet Bomb",
        "power":60,
        "pp":20,
        "accuracy":null,
        "typeOfMove":"physical",
        "type":"steel",
        "priority":0
    },
    "SONIC_BOOM":{
        "id":49,
        "name":"Sonic Boom",
        "power":null,
        "pp":20,
        "accuracy":90,
        "typeOfMove":"special",
        "type":"normal",
        "damage":20,
        "priority":0
    },
    "MIRROR_SHOT":{
        "id":429,
        "name":"Mirror Shot",
        "power":65,
        "pp":10,
        "accuracy":85,
        "typeOfMove":"special",
        "type":"steel",
        "targetStatChange":{
            "accuracy":[
                -1,
                .30
            ]
        },
        "priority":0
    },
    "METAL_SOUND":{
        "id":319,
        "name":"Metal Sound",
        "power":null,
        "pp":40,
        "accuracy":85,
        "typeOfMove":"status",
        "type":"steel",
        "targetStatChange":{
            "spdef":-2
        },
        "priority":0
    },
    "LOCK_ON":{
        "id":199,
        "name":"Lock On",
        "power":null,
        "pp":5,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"normal",
        "priority":0,
        "effect":function(battle, attacker, target, opponentMove) {
            return {effectMessage: attacker.name + ' locked on to its opponent!'};
        }
    },
    "MAGNET_RISE":{
        "id":393,
        "name":"Magnet Rise",
        "power":null,
        "pp":10,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"electric",
        "targetsUser":true,
        "effect":function(battle, attacker, target, opponentMove) {
            if(attacker.options.grounded) {
                return {failed: true};
            }
            if(attacker.options.levitateTurns) {
                return {failed: true};
            }
            attacker.options.levitateTurns = 5;
        },
        "priority":0
    },
    "ZAP_CANNON":{
        "id":192,
        "name":"Zap Cannon",
        "power":120,
        "pp":5,
        "accuracy":50,
        "typeOfMove":"special",
        "type":"electric",
        "status":"paralyze",
        "chance":100,
        "priority":0
    },
    "ELECTRIC_TERRAIN":{
        "id":604,
        "name":"Electric Terrain",
        "power":null,
        "pp":10,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"electric",
        "targetsUser":true,
        "effect":function(battle, attacker, target, opponentMove) {
            if(battle.options.terrain == 'electric') {
                return {failed: true};
            }
            else {
                battle.options.terrain = 'electric';
            }
        },
        "priority":0
    },
    "BRAVE_BIRD":{
        "id":413,
        "name":"Brave Bird",
        "power":120,
        "pp":15,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"flying",
        "recoil":0.33,
        "priority":0
    },
    "ACROBATICS":{
        "id":512,
        "name":"Acrobatics",
        "power":55,
        "pp":15,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"flying",
        "priority":0
    },
    "FALSE_SWIPE":{
        "id":206,
        "name":"False Swipe",
        "power":40,
        "pp":40,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"normal",
        "effect":function(battle, attacker, target, opponentMove) {
            let {damage} = battle.calculateDamage(attacker, target, this);
            if(target.hp - damage <= 0){
                target.hp = 1;
            }            
            else {
                target.hp -= damage;
            }
        },
        "priority":0
    },
    "DOUBLE_HIT":{
        "id":458,
        "name":"Double Hit",
        "power":35,
        "pp":10,
        "accuracy":90,
        "typeOfMove":"physical",
        "type":"normal",
        "sureTimes":2,
        "priority":0
    },
    "UPROAR":{
        "id":253,
        "name":"Uproar",
        "power":90,
        "pp":10,
        "accuracy":100,
        "typeOfMove":"special",
        "type":"normal",
        "priority":0,
        "effect":function(battle, attacker, target, opponentMove) {
            //NOTE: stops if it can't be performed
            if(!attacker.continuousMove) {
                battle.options.uproarTurns = 4;
                attacker.continuousMove = this.id;
                return {afterEffects: 'damage', effectMessage: attacker.name + ' is causing an uproar!'};
            }
            else {
                if(--battle.options.uproarTurns == 0) {
                    attacker.continuousMove = null;
                    return {afterEffects: 'damage', effectMessage: 'The effects of uproar faded.'};
                }
                else {
                    return {afterEffects: 'damage', effectMessage: attacker.name + ' is causing an uproar!'};
                }
            }
        }
    },
    "ACUPRESSURE":{
        "id":367,
        "name":"Acupressure",
        "power":null,
        "pp":30,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"normal",
        "update":function(battle, attacker, target, opponentMove) {
            //NOTE: doesn't raise maxed stats
            let copy = {...this};
            let stat = attacker.options.statChanges.getNonMaxedStat();
            if(!stat) { //all are maxed
                return {failed: true};
            }
            copy.userStatChange = {
                [stat]: 2
            };
            return copy;
        },
        "priority":0
    },
    "JUMP_KICK":{
        "id":26,
        "name":"Jump Kick",
        "power":100,
        "pp":10,
        "accuracy":95,
        "typeOfMove":"physical",
        "type":"fighting",
        "priority":0,
        "miss":function(battle, attacker, target, opponentMove) {
            //NOTE: can't be used in gravity
            attacker.removeHP(Math.floor(attacker.maxHP/2));
            return {effectMessage: attacker.name + ' crashed and took damage!'};
        }
    },
    "ICY_WIND":{
        "id":196,
        "name":"Icy Wind",
        "power":55,
        "pp":15,
        "accuracy":95,
        "typeOfMove":"special",
        "type":"ice",
        "targetStatChange":{
            "spd":-1
        },
        "priority":0
    },
    "ICE_SHARD":{
        "id":420,
        "name":"Ice Shard",
        "power":40,
        "pp":30,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"ice",
        "priority":1
    },
    "AQUA_RING":{
        "id":392,
        "name":"Aqua Ring",
        "power":null,
        "pp":20,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"water",
        "targetsUser":true,
        "effect":function(battle, attacker, target, opponentMove) {
            attacker.options.restoreHPEachTurn = attacker.maxHP * (1/16);
        },
        "priority":0
    },
    "AURORA_BEAM":{
        "id":62,
        "name":"Aurora Beam",
        "power":65,
        "pp":20,
        "accuracy":100,
        "typeOfMove":"special",
        "type":"ice",
        "targetStatChange":{
            "atk":[
                -1,
                .10
            ]
        },
        "priority":0
    },
    "DIVE":{
        "id":291,
        "name":"Dive",
        "power":80,
        "pp":10,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"water",
        "chargeTurn":true,
        "effect":function(battle, attacker, target, opponentMove) {
            let copy = {...this};
            if(!attacker.continuousMove) {
                attacker.continuousMove = this.id;
                attacker.options.underwater = true;
                return {effectMessage: attacker.name + ' went underwater!'};
            }
            else {
                attacker.continuousMove = null;
                attacker.options.underwater = false;
                return {afterEffects: 'damage', move: copy};
            }
        },
        "update":function(battle, attacker, target, opponentMove) {
            let copy = {...this};
            if(attacker.continuousMove) {
                copy.chargeTurn = false;
            }
            return copy;
        },
        "priority":0
    },
    "ICE_BEAM":{
        "id":58,
        "name":"Ice Beam",
        "power":90,
        "pp":10,
        "accuracy":100,
        "typeOfMove":"special",
        "type":"ice",
        "status":"freeze",
        "chance":10,
        "priority":0
    },
    "HAIL":{
        "id":258,
        "name":"Hail",
        "power":null,
        "pp":10,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"ice",
        "targetsUser":true,
        "effect":function(battle, attacker, target, opponentMove) {
            if(battle.options.weather == 'hail') {
                return {failed: true};
            }
            else {
                battle.options.weather = 'hail';
                battle.options.weatherCount = 6;
            }
        },
        "priority":0
    },
    "SHEER_COLD":{
        "id":329,
        "name":"Sheer Cold",
        "power":null,
        "pp":5,
        "accuracy":30,
        "typeOfMove":"special",
        "type":"ice",
        "priority":0,
        "ohko":true,
    },
    "POISON_GAS":{
        "id":139,
        "name":"Poison Gas",
        "power":null,
        "pp":40,
        "accuracy":90,
        "typeOfMove":"status",
        "type":"poison",
        "status":"poison",
        "chance":100,
        "priority":0
    },
    "SLUDGE":{
        "id":124,
        "name":"Sludge",
        "power":65,
        "pp":20,
        "accuracy":100,
        "typeOfMove":"special",
        "type":"poison",
        "status":"poison",
        "chance":30,
        "priority":0
    },
    "SLUDGE_BOMB":{
        "id":188,
        "name":"Sludge Bomb",
        "power":90,
        "pp":10,
        "accuracy":100,
        "typeOfMove":"special",
        "type":"poison",
        "status":"poison",
        "chance":30,
        "priority":0
    },
    "ACID_ARMOR":{
        "id":151,
        "name":"Acid Armor",
        "power":null,
        "pp":20,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"poison",
        "targetsUser":true,
        "userStatChange":{
            "def":2
        },
        "priority":0
    },
    "MEMENTO":{
        "id":262,
        "name":"Memento",
        "power":null,
        "pp":10,
        "accuracy":100,
        "typeOfMove":"status",
        "type":"dark",
        "userFaints":true,
        "targetStatChange":{
            "atk":-2,
            "spatk":-2
        },
        "priority":0
    },
    "VENOM_DRENCH":{
        "id":599,
        "name":"Venom Drench",
        "power":null,
        "pp":20,
        "accuracy":100,
        "typeOfMove":"status",
        "type":"poison",
        "effect":function(battle, attacker, target, opponentMove) {
            if(target.majorStatus == 'poison') {
                target.options.statChanges.modify('atk', -1);
                target.options.statChanges.modify('spatk', -1);
                target.options.statChanges.modify('spd', -1);
            }
            else {
                return {failed: true};
            }
        },
        "priority":0
    },
    "ICICLE_SPEAR":{
        "id":333,
        "name":"Icicle Spear",
        "power":25,
        "pp":30,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"ice",
        "times":5,
        "priority":0
    },
    "CLAMP":{
        "id":128,
        "name":"Clamp",
        "power":35,
        "pp":15,
        "accuracy":85,
        "typeOfMove":"physical",
        "type":"water",
        "constrict":true,
        "priority":0,
        "effect":function(battle, attacker, target, opponentMove) {
            let copy = {...this};
            if(!attacker.continuousMove) {
                attacker.options.turnCounter = ChanceCounter.getNumberOfTimes();
                attacker.continuousMove = this.id;
            }
            else if(--attacker.options.turnCounter == 0) { //end
                attacker.options.turnCounter = null;
                attacker.continuousMove = null;
                return {afterEffects: 'damage',  move: copy, effectMessage: target.name + ' broke free of clamp!'};
            }
            else {
                copy.damage = Math.floor(target.maxHP * (1/8));
                return {afterEffects: 'damage', move: copy, effectMessage: target.name + ' was hurt by clamp!'};
            }
        },
    },
    "RAZOR_SHELL":{
        "id":534,
        "name":"Razor Shell",
        "power":75,
        "pp":10,
        "accuracy":95,
        "typeOfMove":"physical",
        "type":"water",
        "targetStatChange":{
            "def":[
                -1,
                .50
            ]
        },
        "priority":0
    },
    "WHIRLPOOL":{
        "id":250,
        "name":"Whirlpool",
        "power":35,
        "pp":15,
        "accuracy":85,
        "typeOfMove":"special",
        "type":"water",
        "constrict":true,
        "priority":0,
        "effect":function(battle, attacker, target, opponentMove) {
            let copy = {...this};
            if(!attacker.continuousMove) {
                attacker.options.turnCounter = ChanceCounter.getNumberOfTimes();
                attacker.continuousMove = this.id;
            }
            else if(--attacker.options.turnCounter == 0) { //end
                attacker.options.turnCounter = null;
                attacker.continuousMove = null;
                return {afterEffects: 'damage',  move: copy, effectMessage: target.name + ' broke free of whirlpool'};
            }
            else {
                copy.damage = Math.floor(target.maxHP * (1/8));
                return {afterEffects: 'damage', move: copy, effectMessage: target.name + ' was hurt by whirlpool!'};
            }
        },
    },
    "SHELL_SMASH":{
        "id":504,
        "name":"Shell Smash",
        "power":null,
        "pp":15,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"normal",
        "targetsUser":true,
        "userStatChange":{
            "def":-1,
            "spdef":-1,
            "atk":2,
            "spatk":2
        },
        "priority":0
    },
    "SPIKE_CANNON":{
        "id":131,
        "name":"Spike Cannon",
        "power":20,
        "pp":15,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"normal",
        "times":5,
        "priority":0
    },
    "SPIKES":{
        "id":191,
        "name":"Spikes",
        "power":null,
        "pp":20,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"ground",
        "priority":0,
        "effect":function(battle, attacker, target, opponentMove) {
            if(target.options.activeTraps.spikes < 3) {
                target.options.activeTraps.spikes++;
                return {effectMessage: 'The field was riddled with spikes!'};
            }
            return {failed: true};
        }
    },
    "ICICLE_CRASH":{
        "id":556,
        "name":"Icicle Crash",
        "power":85,
        "pp":10,
        "accuracy":90,
        "typeOfMove":"physical",
        "type":"ice",
        "flinch":.30,
        "priority":0
    },
    "LICK":{
        "id":122,
        "name":"Lick",
        "power":30,
        "pp":30,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"ghost",
        "status":"paralyze",
        "chance":30,
        "priority":0
    },
    "SPITE":{
        "id":180,
        "name":"Spite",
        "power":null,
        "pp":10,
        "accuracy":100,
        "typeOfMove":"status",
        "type":"ghost",
        "priority":0,
        "effect":function(battle, attacker, target, opponentMove) {
            let move = target.moves.find(el => el.id == target.options.lastMoveUsed);
            if(!move || !target.options.lastMoveUsed || move.pp == 0) {
                return {failed: true};
            }
            if(move.pp - 4 < 0) {
                move.pp = 0;
                return {effectMessage: target.name + `'s ${battle.getMove(move.id).name} lost all its PP!`};
            }
            move.pp -= 4;
            return {effectMessage: target.name + `'s ${battle.getMove(move.id).name} lost 4 PP!`};
        }
    },
    "NIGHT_SHADE":{
        "id":101,
        "name":"Night Shade",
        "power":null,
        "pp":15,
        "accuracy":100,
        "typeOfMove":"special",
        "type":"ghost",
        "damage":"level",
        "priority":0
    },
    "SHADOW_BALL":{
        "id":247,
        "name":"Shadow Ball",
        "power":80,
        "pp":15,
        "accuracy":100,
        "typeOfMove":"special",
        "type":"ghost",
        "targetStatChange":{
            "spdef":[
                -1,
                .20
            ]
        },
        "priority":0
    },
    "DREAM_EATER":{
        "id":138,
        "name":"Dream Eater",
        "power":100,
        "pp":15,
        "accuracy":100,
        "typeOfMove":"special",
        "type":"psychic",
        "drain":0.5,
        "effect":function(battle, attacker, target, opponentMove) {
            if(target.majorStatus != 'sleep') {
                return {failed: true};
            }
            return {afterEffects: 'damage'};
        },
        "priority":0
    },
    "DARK_PULSE":{
        "id":399,
        "name":"Dark Pulse",
        "power":80,
        "pp":15,
        "accuracy":100,
        "typeOfMove":"special",
        "type":"dark",
        "flinch":.20,
        "priority":0
    },
    "DESTINY_BOND":{
        "id":194,
        "name":"Destiny Bond",
        "power":null,
        "pp":5,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"ghost",
        "targetsUser":true,
        "effect":function(battle, attacker, target, opponentMove) {
            attacker.options.usedDestinyBond = true;
        },
        "priority":0
    },
    "NIGHTMARE":{
        "id":171,
        "name":"Nightmare",
        "power":null,
        "pp":15,
        "accuracy":100,
        "typeOfMove":"status",
        "type":"ghost",
        "effect":function(battle, attacker, target, opponentMove) {
            if(target.majorStatus != 'sleep' || target.options.nightmare) {
                return {failed: true};
            }
            else {
                target.options.nightmare = true;
            }
        },
        "priority":0
    },
    "SHADOW_PUNCH":{
        "id":325,
        "name":"Shadow Punch",
        "power":60,
        "pp":20,
        "accuracy":null,
        "typeOfMove":"physical",
        "type":"ghost",
        "priority":0
    },
    "BIND":{
        "id":20,
        "name":"Bind",
        "power":15,
        "pp":20,
        "accuracy":85,
        "typeOfMove":"physical",
        "type":"normal",
        "constrict":true,
        "priority":0,
        "effect":function(battle, attacker, target, opponentMove) {
            let copy = {...this};
            if(!attacker.continuousMove) {
                attacker.options.turnCounter = ChanceCounter.getNumberOfTimes();
                attacker.continuousMove = this.id;
            }
            else if(--attacker.options.turnCounter == 0) { //end
                attacker.options.turnCounter = null;
                attacker.continuousMove = null;
                return {afterEffects: 'damage',  move: copy, effectMessage: target.name + ' broke free of bind!'};
            }
            else {
                copy.damage = Math.floor(target.maxHP * (1/8));
                return {afterEffects: 'damage', move: copy, effectMessage: target.name + ' was hurt by bind!'};
            }
        },
    },
    "ROCK_TOMB":{
        "id":317,
        "name":"Rock Tomb",
        "power":60,
        "pp":15,
        "accuracy":95,
        "typeOfMove":"physical",
        "type":"rock",
        "targetStatChange":{
            "spd":-1
        },
        "priority":0
    },
    "DRAGON_BREATH":{
        "id":225,
        "name":"Dragon Breath",
        "power":60,
        "pp":20,
        "accuracy":100,
        "typeOfMove":"special",
        "type":"dragon",
        "status":"paralyze",
        "chance":30,
        "priority":0
    },
    "ROCK_SLIDE":{
        "id":157,
        "name":"Rock Slide",
        "power":75,
        "pp":10,
        "accuracy":90,
        "typeOfMove":"physical",
        "type":"rock",
        "flinch":.30,
        "priority":0
    },
    "IRON_TAIL":{
        "id":231,
        "name":"Iron Tail",
        "power":100,
        "pp":15,
        "accuracy":75,
        "typeOfMove":"physical",
        "type":"steel",
        "targetStatChange":{
            "def":[
                -1,
                .30
            ]
        },
        "priority":0
    },
    "MEDITATE":{
        "id":96,
        "name":"Meditate",
        "power":null,
        "pp":40,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"psychic",
        "targetsUser":true,
        "userStatChange":{
            "atk":1
        },
        "priority":0
    },
    "SYNCHRONOISE":{
        "id":485,
        "name":"Synchronoise",
        "power":120,
        "pp":10,
        "accuracy":100,
        "typeOfMove":"special",
        "type":"psychic",
        "effect":function(battle, attacker, target, opponentMove) {
            let type = target.getType();
            if(attacker.type1 == type[0] || attacker.type2 == type[1] || attacker.type2 == type[0] || attacker.type2 == type[1]) {
                return {afterEffects: 'damage'};
            }
            else {
                return {failed: true};
            }
        },
        "priority":0
    },
    "PSYSHOCK":{
        "id":473,
        "name":"Psyshock",
        "power":80,
        "pp":10,
        "accuracy":100,
        "typeOfMove":"special",
        "type":"psychic",
        "priority":0,
        "customStats":function(attacker, defender, crit) {
            let atkStat;
            let defStat;
            let func = crit ? attacker.options.statChanges.getCritStat : attacker.options.statChanges.getNewValue;
            atkStat = func.apply(attacker.options.statChanges, ['spatk', attacker]);
            defStat = func.apply(defender.options.statChanges, ['def', defender]);
            return {atkStat: atkStat, defStat: defStat};
        }
    },
    "VICE_GRIP":{
        "id":11,
        "name":"Vice Grip",
        "power":55,
        "pp":30,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"normal",
        "priority":0
    },
    "METAL_CLAW":{
        "id":232,
        "name":"Metal Claw",
        "power":50,
        "pp":35,
        "accuracy":95,
        "typeOfMove":"physical",
        "type":"steel",
        "userStatChange":{
            "atk":[
                1,
                .10
            ]
        },
        "priority":0
    },
    "GUILLOTINE":{
        "id":12,
        "name":"Guillotine",
        "power":null,
        "pp":5,
        "accuracy":30,
        "typeOfMove":"physical",
        "type":"normal",
        "priority":0,
        "ohko":true,
    },
    "CRABHAMMER":{
        "id":152,
        "name":"Crabhammer",
        "power":100,
        "pp":10,
        "accuracy":90,
        "typeOfMove":"physical",
        "type":"water",
        "critRatio":true,
        "priority":0
    },
    "FLAIL":{
        "id":175,
        "name":"Flail",
        "power":null,
        "pp":15,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"normal",
        "effect":function(battle, attacker, target, opponentMove){
            let copy = {...this};
            let N = 48 * attacker.hp / attacker.maxHP;
            if(N < 2) {
                copy.power = 200;
            }
            else if(N < 4) {
                copy.power = 150;
            }
            else if(N < 9) {
                copy.power = 100
            }
            else if(N < 16) {
                copy.power = 80;
            }
            else if(N < 32) {
                copy.power = 40;
            }
            else {
                copy.power = 20;
            }
            return {afterEffects: 'damage', move: copy};
        },
        "priority":0
    },
    "CHARGE":{
        "id":268,
        "name":"Charge",
        "power":null,
        "pp":20,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"electric",
        "targetsUser":true,
        "userStatChange":{
            "spdef":1
        },
        "priority":0,
    },
    "EERIE_IMPULSE":{
        "id":598,
        "name":"Eerie Impulse",
        "power":null,
        "pp":15,
        "accuracy":100,
        "typeOfMove":"status",
        "type":"electric",
        "targetStatChange":{
            "spatk":-2
        },
        "priority":0
    },
    "CHARGE_BEAM":{
        "id":451,
        "name":"Charge Beam",
        "power":50,
        "pp":10,
        "accuracy":90,
        "typeOfMove":"special",
        "type":"electric",
        "userStatChange":{
            "spatk":[
                1,
                .70
            ]
        },
        "priority":0
    },
    "MIRROR_COAT":{
        "id":243,
        "name":"Mirror Coat",
        "power":null,
        "pp":20,
        "accuracy":100,
        "typeOfMove":"special",
        "type":"psychic",
        "priority":-5,
        "update":function(battle, attacker, target, opponentMove) {
            let copy = {...this};
            let move = battle.getMove(target.options.lastMoveUsed);
            if(!move || !defender.options.lastDamageDone || move.typeOfMove != 'special') {
                return {failed: true};
            }
            copy.damage = defender.options.lastDamageDone * 2; //double the last amount of damage the opponent performed
            return copy;
        }
    },
    "MAGNETIC_FLUX":{
        "id":602,
        "name":"Magnetic Flux",
        "power":null,
        "pp":20,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"electric",
        "targetsUser":true,
        "effect":function(battle, attacker, target, opponentMove) {
            //NOTE: only pokemon with ability plus or minus
            attacker.options.statChanges.modify('def', 1);
            attacker.options.statChanges.modify('spdef', 1);
        },
        "priority":0
    },
    "BARRAGE":{
        "id":140,
        "name":"Barrage",
        "power":15,
        "pp":20,
        "accuracy":85,
        "typeOfMove":"physical",
        "type":"normal",
        "times":5,
        "priority":0
    },
    "BULLET_SEED":{
        "id":331,
        "name":"Bullet Seed",
        "power":25,
        "pp":30,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"grass",
        "times":5,
        "priority":0
    },
    "EGG_BOMB":{
        "id":121,
        "name":"Egg Bomb",
        "power":100,
        "pp":10,
        "accuracy":75,
        "typeOfMove":"physical",
        "type":"normal",
        "priority":0
    },
    "WOOD_HAMMER":{
        "id":452,
        "name":"Wood Hammer",
        "power":120,
        "pp":15,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"grass",
        "recoil":0.33,
        "priority":0
    },
    "BONE_CLUB":{
        "id":125,
        "name":"Bone Club",
        "power":65,
        "pp":20,
        "accuracy":85,
        "typeOfMove":"physical",
        "type":"ground",
        "flinch":.10,
        "priority":0
    },
    "BONEMERANG":{
        "id":155,
        "name":"Bonemerang",
        "power":50,
        "pp":10,
        "accuracy":90,
        "typeOfMove":"physical",
        "type":"ground",
        "sureTimes":2,
        "priority":0
    },
    "BONE_RUSH":{
        "id":198,
        "name":"Bone Rush",
        "power":25,
        "pp":10,
        "accuracy":90,
        "typeOfMove":"physical",
        "type":"ground",
        "times":5,
        "priority":0
    },
    "ROLLING_KICK":{
        "id":27,
        "name":"Rolling Kick",
        "power":60,
        "pp":15,
        "accuracy":85,
        "typeOfMove":"physical",
        "type":"fighting",
        "flinch":.30,
        "priority":0
    },
    "MEGA_KICK":{
        "id":25,
        "name":"Mega Kick",
        "power":120,
        "pp":5,
        "accuracy":75,
        "typeOfMove":"physical",
        "type":"normal",
        "priority":0
    },
    "BRICK_BREAK":{
        "id":280,
        "name":"Brick Break",
        "power":75,
        "pp":15,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"fighting",
        "effect":function(battle, attacker, target, opponentMove) {
            if(target.options.lightScreenTurns || target.options.reflectTurns) {
                target.options.lightScreenTurns = null;
                target.options.reflectTurns = null;
                return {afterEffects: 'damage', effectMessage: target.name + ' screens were destroyed!'};
            }
            return {afterEffects: 'damage'};
        },
        "priority":0
    },
    "HIGH_JUMP_KICK":{
        "id":136,
        "name":"High Jump Kick",
        "power":130,
        "pp":10,
        "accuracy":90,
        "typeOfMove":"physical",
        "type":"fighting",
        "priority":0,
        "miss":function(battle, attacker, target, opponentMove) {
            //NOTE: can't be used in gravity
            attacker.removeHP(Math.floor(attacker.maxHP/2));
            return {effectMessage: attacker.name + ' crashed and took damage!'};
        }
    },
    "BLAZE_KICK":{
        "id":299,
        "name":"Blaze Kick",
        "power":85,
        "pp":10,
        "accuracy":90,
        "typeOfMove":"physical",
        "type":"fire",
        "status":"burn",
        "chance":10,
        "critRatio":true,
        "priority":0
    },
    "ENDURE":{
        "id":203,
        "name":"Endure",
        "power":null,
        "pp":10,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"normal",
        "targetsUser":true,
        "protectMove":true,
        "effect":function(battle, attacker, target, opponentMove) {
            attacker.options.endured = true;
        },
        "priority":4
    },
    "COMET_PUNCH":{
        "id":4,
        "name":"Comet Punch",
        "power":18,
        "pp":15,
        "accuracy":85,
        "typeOfMove":"physical",
        "type":"normal",
        "times":5,
        "priority":0
    },
    "FOCUS_PUNCH":{
        "id":264,
        "name":"Focus Punch",
        "power":150,
        "pp":20,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"fighting",
        "priority":-3,
        "effect":function(battle, attacker, target, opponentMove) {
            battle.moveMessage.insertMessageAtBeginning(attacker.name + ' is tightening its focus!');
            if(attacker.options.damagedThisTurn) {
                battle.moveMessage.addMessage(attacker.name + " lost its focus!");
                return {failed: true};
            }
            else {
                return {afterEffects: 'damage'};
            }
        }
    },
    "MACH_PUNCH":{
        "id":183,
        "name":"Mach Punch",
        "power":40,
        "pp":30,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"fighting",
        "priority":1
    },
    "COUNTER":{
        "id":68,
        "name":"Counter",
        "power":null,
        "pp":20,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"fighting",
        "targetsUser":true,
        "priority":-5,
        "update":function(battle, attacker, target, opponentMove) {
            let copy = {...this};
            if(attacker.options.damagedThisTurn && opponentMove.typeOfMove == 'physical') {
                copy.power = opponentMove.power * 2;
                return copy;
            }
            return {failed: true};
        }
    },
    "BULLET_PUNCH":{
        "id":418,
        "name":"Bullet Punch",
        "power":40,
        "pp":30,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"steel",
        "priority":1
    },
    "VACUUM_WAVE":{
        "id":410,
        "name":"Vacuum Wave",
        "power":40,
        "pp":30,
        "accuracy":100,
        "typeOfMove":"special",
        "type":"fighting",
        "priority":1
    },
    "THUNDER_PUNCH":{
        "id":9,
        "name":"Thunder Punch",
        "power":75,
        "pp":15,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"electric",
        "status":"paralyze",
        "chance":10,
        "priority":0
    },
    "ICE_PUNCH":{
        "id":8,
        "name":"Ice Punch",
        "power":75,
        "pp":15,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"ice",
        "status":"freeze",
        "chance":10,
        "priority":0
    },
    "FIRE_PUNCH":{
        "id":7,
        "name":"Fire Punch",
        "power":75,
        "pp":15,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"fire",
        "status":"burn",
        "chance":10,
        "priority":0
    },
    "SKY_UPPERCUT":{
        "id":327,
        "name":"Sky Uppercut",
        "power":85,
        "pp":15,
        "accuracy":90,
        "typeOfMove":"physical",
        "type":"fighting",
        "hitsFly":true,
        "priority":0
    },
    "MEGA_PUNCH":{
        "id":5,
        "name":"Mega Punch",
        "power":80,
        "pp":20,
        "accuracy":85,
        "typeOfMove":"physical",
        "type":"normal",
        "priority":0
    },
    "DETECT":{
        "id":197,
        "name":"Detect",
        "power":null,
        "pp":5,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"fighting",
        "targetsUser":true,
        "protectMove":true,
        "effect":function(battle, attacker, target, opponentMove) {
            attacker.options.protected = true;
        },
        "priority":4
    },
    "REFRESH":{
        "id":287,
        "name":"Refresh",
        "power":null,
        "pp":20,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"normal",
        "targetsUser":true,
        "effect":function(battle, attacker, target, opponentMove) {
            if(!attacker.majorStatus) {
                return {failed: true};
            }
            else {
                let status = attacker.majorStatus;
                attacker.majorStatus = null;
                return {effectMessage: attacker.name + ` was cured of its ${status}!`};
            }
        },
        "priority":0
    },
    "POWER_WHIP":{
        "id":438,
        "name":"Power Whip",
        "power":120,
        "pp":10,
        "accuracy":85,
        "typeOfMove":"physical",
        "type":"grass",
        "priority":0
    },
    "SMOG":{
        "id":123,
        "name":"Smog",
        "power":30,
        "pp":20,
        "accuracy":70,
        "typeOfMove":"special",
        "type":"poison",
        "status":"poison",
        "chance":40,
        "priority":0
    },
    "CLEAR_SMOG":{
        "id":499,
        "name":"Clear Smog",
        "power":50,
        "pp":15,
        "accuracy":null,
        "typeOfMove":"special",
        "type":"poison",
        "effect":function(battle, attacker, target, opponentMove) {
            target.options.statChanges.reset();
        },
        "priority":0
    },
    "HAMMER_ARM":{
        "id":359,
        "name":"Hammer Arm",
        "power":100,
        "pp":10,
        "accuracy":90,
        "typeOfMove":"physical",
        "type":"fighting",
        "userStatChange":{
            "spd":-1
        },
        "priority":0
    },
    "SOFT_BOILED":{
        "id":135,
        "name":"Soft Boiled",
        "power":null,
        "pp":10,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"normal",
        "targetsUser":true,
        "recover":50,
        "priority":0
    },
    "INGRAIN":{
        "id":275,
        "name":"Ingrain",
        "power":null,
        "pp":20,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"grass",
        "targetsUser":true,
        "effect":function(battle, attacker, target, opponentMove) {
            attacker.options.grounded = true;
            attacker.options.ingrained = true;
            attacker.options.canFlee = false;
            attacker.options.restoreHPEachTurn = attacker.maxHP * (1/16);
        },
        "priority":0
    },
    "ANCIENT_POWER":{
        "id":246,
        "name":"Ancient Power",
        "power":60,
        "pp":5,
        "accuracy":100,
        "typeOfMove":"special",
        "type":"rock",
        "userStatChange":{
            "all":[
                1,
                1//.10
            ]
        },
        "priority":0
    },
    "TICKLE":{
        "id":321,
        "name":"Tickle",
        "power":null,
        "pp":20,
        "accuracy":100,
        "typeOfMove":"status",
        "type":"normal",
        "targetStatChange":{
            "atk":-1,
            "def":-1
        },
        "priority":0
    },
    "DIZZY_PUNCH":{
        "id":146,
        "name":"Dizzy Punch",
        "power":70,
        "pp":10,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"normal",
        "status":"confuse",
        "chance":20, 
        "priority":0
    },
    "DRAGON_PULSE":{
        "id":406,
        "name":"Dragon Pulse",
        "power":85,
        "pp":10,
        "accuracy":100,
        "typeOfMove":"special",
        "type":"dragon",
        "priority":0
    },
    "DRAGON_DANCE":{
        "id":349,
        "name":"Dragon Dance",
        "power":null,
        "pp":20,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"dragon",
        "targetsUser":true,
        "userStatChange":{
            "atk":1,
            "def":1
        },
        "priority":0
    },
    "WATERFALL":{
        "id":127,
        "name":"Waterfall",
        "power":80,
        "pp":15,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"water",
        "flinch":.20,
        "priority":0
    },
    "PSYWAVE":{
        "id":149,
        "name":"Psywave",
        "power":null,
        "pp":15,
        "accuracy":100,
        "typeOfMove":"special",
        "type":"psychic",
        "effect":function(battle, attacker, target, opponentMove) {
            let copy = {...this};
            let r = Math.floor(Math.random() * 101) + 1; //1_100
            let damage = Math.floor(attacker.level * (r + 50) / 100);
            if(damage <= 0) {
                damage = 1;
            }
            copy.damage = damage;
            return {afterEffects: 'damage', move: copy};
        },
        "priority":0
    },
    "CAMOUFLAGE":{
        "id":293,
        "name":"Camouflage",
        "power":null,
        "pp":20,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"normal",
        "targetsUser":true,
        "priority":0
    },
    "MISTY_TERRAIN":{
        "id":581,
        "name":"Misty Terrain",
        "power":null,
        "pp":10,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"fairy",
        "targetsUser":true,
        "effect":function(battle, attacker, target, opponentMove) {
            if(battle.options.terrain == 'misty') {
                return {failed: true};
            }
            else {
                battle.options.terrain = 'misty';
            }
        },
        "priority":0
    },
    "GUARD_SWAP":{
        "id":385,
        "name":"Guard Swap",
        "power":null,
        "pp":10,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"psychic",
        "effect":function(battle, attacker, target, opponentMove) {
            let tempDef = attacker.getStatChange('def');
            let tempSpdef = attacker.getStatChange('spdef');
            attacker.options.statChanges.set('def', target.getStatChange('def'));
            attacker.options.statChanges.set('spdef', target.getStatChange('spdef'));
            target.options.statChanges.set('def', tempDef);
            target.options.statChanges.set('spdef', tempSpdef);
        },
        "priority":0
    },
    "POWER_SWAP":{
        "id":384,
        "name":"Power Swap",
        "power":null,
        "pp":10,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"psychic",
        "effect":function(battle, attacker, target, opponentMove) {
            let tempAtk = attacker.getStatChange('atk');
            let tempSpatk = attacker.getStatChange('spatk');
            attacker.options.statChanges.set('atk', target.getStatChange('atk'));
            attacker.options.statChanges.set('spatk', target.getStatChange('spatk'));
            target.options.statChanges.set('atk', tempAtk);
            target.options.statChanges.set('spatk', tempSpatk);
        },
        "priority":0
    },
    "MAGICAL_LEAF":{
        "id":345,
        "name":"Magical Leaf",
        "power":60,
        "pp":20,
        "accuracy":null,
        "typeOfMove":"special",
        "type":"grass",
        "priority":0
    },
    "COPYCAT":{
        "id":383,
        "name":"Copycat",
        "power":null,
        "pp":20,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"normal",
        "priority":0,
        "targetsUser":true,
        "update":function(battle, attacker, target, opponentMove) {
            //NOTE: check bide last turn
            //NOTE: check recharge moves
            const disallowedMoves = ['Assist', 'Baneful Bunker', 'Beak Blast', 'Bestow', 'Celebrate', 'Chatter', 'Circle Throw', 'Copycat', 'Counter', 'Covet',
            'Destiny Bond', 'Detect', 'Dragon Tail', 'Endure', 'Feint', 'Focus Punch', 'Follow Me', 'Helping Hand', 'Hold Hands', "King's Shield", 'Mat Block',
            'Me First', 'Metronome', 'Mimic', 'Mirror Coat', 'Mirror Move', 'Protect', 'Rage Powder', 'Roar', 'Shell Trap', 'Sketch', 'Sleep Talk', 'Snatch',
            'Struggle', 'Spiky Shield', 'Spotlight', 'Switcheroo', 'Thief', 'Transform', 'Trick', 'Whirlwind'];
            let move = battle.options.lastMoveUsed;
            move = battle.getMove(move);
            if(move == null || disallowedMoves.includes(move.name)) {
                return {failed: true};
            }
            battle.moveMessage.addMoveMessage(attacker.name, this);
            return move;
        }
    },
    "SUBSTITUTE":{
        "id":164,
        "name":"Substitute",
        "power":null,
        "pp":10,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"normal",
        "targetsUser":true,
        "priority":0
    },
    "RECYCLE":{
        "id":278,
        "name":"Recycle",
        "power":null,
        "pp":10,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"normal",
        "targetsUser":true,
        "priority":0
    },
    "BATON_PASS":{
        "id":226,
        "name":"Baton Pass",
        "power":null,
        "pp":40,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"normal",
        "targetsUser":true,
        "priority":0
    },
    "RAZOR_WIND":{
        "id":13,
        "name":"Razor Wind",
        "power":80,
        "pp":10,
        "accuracy":100,
        "typeOfMove":"special",
        "type":"normal",
        "critRatio":true,
        "chargeTurn":true,
        "effect":function(battle, attacker, target, opponentMove) {
            let copy = {...this};
            if(!attacker.continuousMove) {
                attacker.continuousMove = this.id;
                return {effectMessage: attacker.name + ' whipped up a whirlwind!'};
            }
            else {
                attacker.continuousMove = null;
                return {afterEffects: 'damage', move: copy};
            }
        },
        "update":function(battle, attacker, target, opponentMove) {
            let copy = {...this};
            if(attacker.continuousMove) {
                copy.chargeTurn = false;
            }
            return copy;
        },
        "priority":0
    },
    "DRAINING_KISS":{
        "id":577,
        "name":"Draining Kiss",
        "power":50,
        "pp":10,
        "accuracy":100,
        "typeOfMove":"special",
        "type":"fairy",
        "priority":0
    },
    "PERISH_SONG":{
        "id":195,
        "name":"Perish Song",
        "power":null,
        "pp":5,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"normal",
        "targetsUser":true,
        "effect":function(battle, attacker, target, opponentMove) {
            //NOTE: pokemon without perish song count should be given a count
            if(attacker.options.perishSongTurns || target.options.perishSongTurns) {
                return {failed: true};
            }
            attacker.options.perishSongTurns = 4; //this will be reduced at the end of this turn
            target.options.perishSongTurns = 4; //same as above
        },
        "priority":0
    },
    "POWDER_SNOW":{
        "id":181,
        "name":"Powder Snow",
        "power":40,
        "pp":25,
        "accuracy":100,
        "typeOfMove":"special",
        "type":"ice",
        "status":"freeze",
        "chance":10,
        "priority":0
    },
    "LOVELY_KISS":{
        "id":142,
        "name":"Lovely Kiss",
        "power":null,
        "pp":10,
        "accuracy":75,
        "typeOfMove":"status",
        "type":"normal",
        "status":"sleep",
        "chance":100,
        "priority":0
    },
    "HEART_STAMP":{
        "id":531,
        "name":"Heart Stamp",
        "power":60,
        "pp":25,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"psychic",
        "flinch":.30,
        "priority":0
    },
    "FAKE_TEARS":{
        "id":313,
        "name":"Fake Tears",
        "power":null,
        "pp":20,
        "accuracy":100,
        "typeOfMove":"status",
        "type":"dark",
        "targetStatChange":{
            "spdef":-2
        },
        "priority":0
    },
    "AVALANCHE":{
        "id":419,
        "name":"Avalanche",
        "power":60,
        "pp":10,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"ice",
        "priority":-4
    },
    "BLIZZARD":{
        "id":59,
        "name":"Blizzard",
        "power":110,
        "pp":5,
        "accuracy":70,
        "typeOfMove":"special",
        "type":"ice",
        "status":"freeze",
        "chance":10,
        "priority":0,
        "update":function(battle, attacker, target, opponentMove) {
            let copy = {...this};
            if(battle.options.weather == 'hail') {
                copy.accuracy = null;
            }
            return copy;
        }
    },
    "SHOCK_WAVE":{
        "id":351,
        "name":"Shock Wave",
        "power":60,
        "pp":20,
        "accuracy":null,
        "typeOfMove":"special",
        "type":"electric",
        "priority":0
    },
    "LAVA_PLUME":{
        "id":436,
        "name":"Lava Plume",
        "power":80,
        "pp":15,
        "accuracy":100,
        "typeOfMove":"special",
        "type":"fire",
        "status":"burn",
        "chance":30,
        "priority":0
    },
    "SUNNY_DAY":{
        "id":241,
        "name":"Sunny Day",
        "power":null,
        "pp":5,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"fire",
        "targetsUser":true,
        "effect":function(battle, attacker, target, opponentMove) {
            if(battle.options.weather == 'sun') {
                return {failed: true};
            }
            else {
                battle.options.weather = 'sun';
                battle.options.weatherCount = 6;
            }
        },
        "priority":0
    },
    "STORM_THROW":{
        "id":480,
        "name":"Storm Throw",
        "power":60,
        "pp":10,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"fighting",
        "priority":0,
        "alwaysCrit":true,
    },
    "WORK_UP":{
        "id":526,
        "name":"Work Up",
        "power":null,
        "pp":30,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"normal",
        "targetsUser":true,
        "userStatChange":{
            "atk":1,
            "spatk":1
        },
        "priority":0
    },
    "GIGA_IMPACT":{
        "id":416,
        "name":"Giga Impact",
        "power":150,
        "pp":5,
        "accuracy":90,
        "typeOfMove":"physical",
        "type":"normal",
        "mustRecharge":true,
        "priority":0,
        "effect":function(battle, attacker, target, opponentMove) {
            if(!attacker.continuousMove) {
                attacker.continuousMove = this.id;
            }
            else {
                attacker.continuousMove = null;
                return {effectMessage: attacker.name + ' must recharge!'};
            }
        }
    },
    "SPLASH":{
        "id":150,
        "name":"Splash",
        "power":null,
        "pp":40,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"normal",
        "targetsUser":true,
        "priority":0
    },
    "HYPER_BEAM":{
        "id":63,
        "name":"Hyper Beam",
        "power":150,
        "pp":5,
        "accuracy":90,
        "typeOfMove":"special",
        "type":"normal",
        "mustRecharge":true,
        "priority":0,
        "update":function(battle, attacker, target, opponentMove) {
            let copy = {...this};
            if(!attacker.continuousMove) {
                attacker.continuousMove = this.id;
                copy.mustRecharge = false;
            }
            else {
                attacker.continuousMove = null;
            }
            return copy;
        }
    },
    "MIST":{
        "id":54,
        "name":"Mist",
        "power":null,
        "pp":30,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"ice",
        "priority":0,
        "targetsUser":true,
        "effect":function(battle, attacker, target, opponentMove) {
            attacker.options.mistTurns = 6;
        }
    },
    "TRANSFORM":{
        "id":144,
        "name":"Transform",
        "power":null,
        "pp":10,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"normal",
        "priority":0,
        "effect":function(battle, attacker, target, opponentMove) {
            attacker.options.transformTarget = target;
            battle.shouldSendNewEmbed = true;
        }
    },
    "CHARM":{
        "id":204,
        "name":"Charm",
        "power":null,
        "pp":20,
        "accuracy":100,
        "typeOfMove":"status",
        "type":"fairy",
        "targetStatChange":{
            "atk":-2
        },
        "priority":0
    },
    "LAST_RESORT":{
        "id":387,
        "name":"Last Resort",
        "power":140,
        "pp":5,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"normal",
        "priority":0,
        "effect":function(battle, attacker, target, opponentMove) {
            let moveCount = attacker.getMoveCount();
            if(moveCount == 1) {
                return {failed: true};
            }
            if(attacker.options.otherMovesUsed.length == moveCount) {
                return {afterEffects: 'damage'};
            }
            return {failed: true};
        }
    },
    "TRUMP_CARD":{
        "id":376,
        "name":"Trump Card",
        "power":null,
        "pp":5,
        "accuracy":null,
        "typeOfMove":"special",
        "type":"normal",
        "priority":0,
        "effect":function(battle, attacker, target, opponentMove) {
            let move = attacker.moves.find(el => el.id == this.id);
            let copy = {...this};
            switch(move.pp) {
                case 4:
                    copy.power = 40;
                    break;
                case 3:
                    copy.power = 50;
                    break;
                case 2:
                    copy.power = 60;
                    break;
                case 1:
                    copy.power = 80;
                    break;
                case 0:
                    copy.power = 200;
                    break;
            }
            return {afterEffects: 'damage', move: copy};
        }
    },
    "MUDDY_WATER":{
        "id":330,
        "name":"Muddy Water",
        "power":90,
        "pp":10,
        "accuracy":85,
        "typeOfMove":"special",
        "type":"water",
        "targetStatChange":{
            "accuracy":[
                -1,
                .30
            ]
        },
        "priority":0
    },
    "CONVERSION_2":{
        "id":176,
        "name":"Conversion-2",
        "power":null,
        "pp":30,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"normal",
        "priority":0,
        "targetsUser":true,
        "effect":function(battle, attacker, target, opponentMove) {
            if(!attacker.options.lastMoveDamagedBy) {
                return {failed: true};
            }
            attacker.type1 = TypeChart.getResistantType(attacker, attacker.options.lastMoveDamagedBy.type);
            attacker.type2 = null;
            return {effectMessage: attacker.name + `'s type was changed to ${attacker.type1}!`};
        }
    },
    "CONVERSION":{
        "id":160,
        "name":"Conversion",
        "power":null,
        "pp":30,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"normal",
        "priority":0,
        "targetsUser":true,
        "effect":function(battle, attacker, target, opponentMove) {
            attacker.options.temporaryType = [target.getType()[0]];
            return {effectMessage: attacker.name + ` is now a ${target.type1} type!`};
        }
    },
    "SHARPEN":{
        "id":159,
        "name":"Sharpen",
        "power":null,
        "pp":30,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"normal",
        "targetsUser":true,
        "userStatChange":{
            "atk":1
        },
        "priority":0
    },
    "MAGIC_COAT":{
        "id":277,
        "name":"Magic Coat",
        "power":null,
        "pp":15,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"psychic",
        "targetsUser":true,
        "priority":4,
        "update":function(battle, attacker, target, opponentMove) {
            const allowedMoves = ['Attract', 'Baby Doll Eyes', 'Block', 'Captivate', 'Charm', 'Confide', 'Confuse Ray', 'Cotton Spore',
            'Dark Void', 'Defog', 'Disable', 'Eerie Impulse', 'Embargo', 'Encore', 'Entrainment', 'Fake Tears', 'Feather Dance', 'Flash',
            'Flatter', 'Floral Healing', 'Foresight', "Forest's Curse", 'Gastro Acid', 'Glare', 'Grass Whistle', 'Growl', 'Heal Block',
            'Heal Pulse', 'Hypnosis', 'Kinesis', 'Leech Seed', 'Leer', 'Lovely Kiss', 'Magic Powder', 'Mean Look', 'Metal Sound',
            'Miracle Eye', 'Noble Roar', 'Odor Sleuth', 'Parting Shot', 'Play Nice', 'Poison Gas', 'Poison Powder', 'Powder', 'Purify',
            'Roar', 'Sand Attack', 'Scary Face', 'Screech', 'Simple Beam', 'Sing', 'Sleep Powder', 'Smokescreen', 'Soak', 'Spider Web',
            'Spikes', 'Spite', 'Spore', 'Spotlight', 'Stealth Rock', 'Sticky Web', 'Strength Sap', 'String Shot', 'Stun Spore',
            'Supersonic', 'Swagger', 'Sweet Kiss', 'Sweet Scent', 'Tail Whip', 'Tar Shot', 'Taunt', 'Tearful Look', 'Telekinesis',
            'Thunder Wave', 'Tickle', 'Topsy Turvy', 'Torment', 'Toxic', 'Toxic Spikes', 'Toxic Thread', 'Trick_or Treat', 'Venom Drench',
            'Whirlwind', 'Will O_Wisp', 'Worry Seed', 'Yawn'];
            //NOTE: reflected encore fails
            if(target.options.attackedThisTurn || !allowedMoves.includes(opponentMove.name)) {
                return {failed: true};
            }
            attacker.options.usedMagicCoat = true;
            return this;
        }
    },
    "IRON_HEAD":{
        "id":442,
        "name":"Iron Head",
        "power":80,
        "pp":15,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"steel",
        "flinch":.30,
        "priority":0
    },
    "SKY_DROP":{
        "id":507,
        "name":"Sky Drop",
        "power":60,
        "pp":10,
        "accuracy":100,
        "typeOfMove":"physical",
        "type":"flying",
        "priority":0,
        "chargeTurn":true,
        "effect":function(battle, attacker, target, opponentMove) {
            let copy = {...this};
            if(target.weight > 200) {
                return {failed: true};
            }
            if(!attacker.continuousMove) {
                attacker.continuousMove = this.id;
                battle.moveMessage.addMessage(target.name + ' was lifted into the air!');
                target.continuousMove = null;
                target.options.inSkyDrop = true;
                return {move: copy};
            }
            else {
                attacker.continuousMove = null;
                copy.chargeTurn = false;
                target.options.inSkyDrop = false;
                if(target.getType().includes('flying')) {
                    return {failed: true};
                }
                return {afterEffects: 'damage', move: copy};
            }
        }
    },
    "SNORE":{
        "id":173,
        "name":"Snore",
        "power":50,
        "pp":15,
        "accuracy":100,
        "typeOfMove":"special",
        "type":"normal",
        "flinch":0.30,
        "priority":0,
        "effect":function(battle, attacker, target, opponentMove) {
            if(attacker.majorStatus != 'sleep') {
                return {failed: true};
            }
            return {afterEffects: 'damage'};
        }
    },
    "SLEEP_TALK":{
        "id":214,
        "name":"Sleep Talk",
        "power":null,
        "pp":10,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"normal",
        "targetsUser":true,
        "priority":0,
        "update":function(battle, attacker, target, opponentMove) {
            const disallowedMoves = ['Assist', 'Belch', 'Beak Blast', 'Bide', 'Bounce',
            'Copycat', 'Dig', 'Dive', 'Dynamax Cannon', 'Freeze Shock', 'Fly', 'Focus Punch',
            'Geomancy', 'Ice Burn', 'Me First', 'Metronome', 'Mirror Move', 'Mimic', 'Phantom Force',
            'Razor Wind', 'Shadow Force', 'Shell Trap', 'Sketch', 'Skull Bash', 'Sky Attack', 'Sky Drop',
            'Sleep Talk', 'Solar Blade', 'Solar Beam', 'Uproar'];
            if(attacker.majorStatus != 'sleep' || attacker.moves.length == 1) {
                return {failed: true};
            }
            let moves = attacker.moves.filter(el => !disallowedMoves.includes(el.name)); //remove any moves in disallowed list
            battle.moveMessage.addMessage(attacker.name + ' used ' + this.name + '!');
            return battle.getMove(moves[Math.floor(Math.random() * moves.length)].id);
        }
    },
    "BLOCK":{
        "id":335,
        "name":"Block",
        "power":null,
        "pp":5,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"normal",
        "effect":function(battle, attacker, target, opponentMove) {
            target.options.canFlee = false;
        },
        "priority":0
    },
    "HIGH_HORSEPOWER":{
        "id":667,
        "name":"High Horsepower",
        "power":95,
        "pp":10,
        "accuracy":95,
        "typeOfMove":"physical",
        "type":"ground",
        "priority":0
    },
    "FREEZE_DRY":{
        "id":573,
        "name":"Freeze Dry",
        "power":70,
        "pp":20,
        "accuracy":100,
        "typeOfMove":"special",
        "type":"ice",
        "status":"freeze",
        "chance":10,
        "priority":0
    },
    "SKY_ATTACK":{
        "id":143,
        "name":"Sky Attack",
        "power":140,
        "pp":5,
        "accuracy":90,
        "typeOfMove":"physical",
        "type":"flying",
        "flinch":.30,
        "critRatio":true,
        "chargeTurn":true,
        "effect":function(battle, attacker, target, opponentMove) {
            let copy = {...this};
            if(!attacker.continuousMove) {
                attacker.continuousMove = this.id;
                return {effectMessage: attacker.name + ' was cloaked in a harsh light!'};
            }
            else {
                attacker.continuousMove = null;
                return {afterEffects: 'damage', move: copy};
            }
        },
        "update":function(battle, attacker, target, opponentMove) {
            let copy = {...this};
            if(attacker.continuousMove) {
                copy.chargeTurn = false;
            }
            return copy;
        },
        "priority":0
    },
    "BURN_UP":{
        "id":682,
        "name":"Burn Up",
        "power":130,
        "pp":5,
        "accuracy":100,
        "typeOfMove":"special",
        "type":"fire",
        "priority":0,
        "effect":function(battle, attacker, target, opponentMove) {
            //NOTE: thaws if frozen
            let type = attacker.getType();
            if(!type.includes('fire')) {
                return {failed: true};
            }
            if(attacker.type1 == 'fire') {
                if(attacker.type2) {
                    attacker.options.temporaryType = attacker.type2;
                }
                else {
                    //NOTE: typeless
                }
            }
            else if(attacker.type2 == 'fire') {
                attacker.options.temporaryType = attacker.type1;
            }
            return {afterEffects: 'damage', effectMessage: attacker.name + ' lost its fire typing!'};
        }
    },
    "DRAGON_TAIL":{
        "id":525,
        "name":"Dragon Tail",
        "power":60,
        "pp":10,
        "accuracy":90,
        "typeOfMove":"physical",
        "type":"dragon",
        "priority":-6,
        "causeSwitch":true,
    },
    "DRAGON_RUSH":{
        "id":407,
        "name":"Dragon Rush",
        "power":100,
        "pp":10,
        "accuracy":75,
        "typeOfMove":"physical",
        "type":"dragon",
        "flinch":.20,
        "effect":function(battle, attacker, target, opponentMove) {
            let copy = {...this};
            if(target.minimized) {
                copy.accuracy = null;
                copy.power *= 2;
            }
            return {afterEffects: 'damage', move: copy};
        },
        "priority":0
    },
    "LASER_FOCUS":{
        "id":673,
        "name":"Laser Focus",
        "power":null,
        "pp":30,
        "accuracy":null,
        "typeOfMove":"status",
        "type":"normal",
        "targetsUser":true,
        "priority":0,
        "effect":function(battle, attacker, target, opponentMove) {
            return {effectMessage: attacker.name + ' focused on its target!'};
        }
    },
    "AURA_SPHERE":{
        "id":396,
        "name":"Aura Sphere",
        "power":80,
        "pp":20,
        "accuracy":null,
        "typeOfMove":"special",
        "type":"fighting",
        "priority":0
    },
    "PSYSTRIKE":{
        "id":540,
        "name":"Psystrike",
        "power":100,
        "pp":10,
        "accuracy":100,
        "typeOfMove":"special",
        "type":"psychic",
        "priority":0
    },
    "NONE":{
        "id":-1,
        "name": "None",
        "power":0,
        "pp":1,
        "accuracy":0,
        "typeOfMove":"physical",
        "type":"normal",
        "priority":0,
    },
    getMove: function(id) {
        return this[this[id]];
    }
}