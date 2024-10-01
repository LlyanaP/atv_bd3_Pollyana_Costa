const database = 'bd3_atv2';

const collection = 'bd3_atv2_produtos'

use(database);


db[collection].find(
    {
        categoria: { $eq: "Maquiagem" },
        valor:{$lt:60}
        
    }
)/*.limit(2)*/