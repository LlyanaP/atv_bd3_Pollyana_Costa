const database = 'bd3_atv2';

const collection = 'bd3_atv2_produtos'

use(database);

db[collection].find({
    categoria:"Maquiagem"
}).sort({valor:1})