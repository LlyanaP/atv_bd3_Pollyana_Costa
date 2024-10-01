const database = 'bd3_atv2';

const collection = 'bd3_atv2_produtos'

use(database);

db[collection].find(
    {valor:{$gt:50, $lt:110}}
)