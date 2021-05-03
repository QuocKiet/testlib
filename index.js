// Các loại quân trong AOE

const items = [

    'Egyptian',

    'Greek',

    'Babylonian',

    'Assyrian',

    'Minoan',

    'Hittite',

    'Phoenician',

    'Sumerian',

    'Persian',

    'Shang',

    'Yamato',

    'Choson',

    'Carthaginian',

    'Palmyran',

    'Macedonia',

]; 

// Lấy ngẫu nhiên một loại quân

getCountryRandom = () => {

    const randomIndex = Math.floor(Math.random() * items.length);

    return items[randomIndex];

} 

// Random cho một Team.
getTeamRandom = (length) => {

    let countries = [];

     for (let i = 1; i <= length; i++) {

        const item = getCountryRandom()

         countries.push(item)

    }

     return countries;}

 

exports.getCountryRandom = getCountryRandom

exports.getTeamRandom = getTeamRandom