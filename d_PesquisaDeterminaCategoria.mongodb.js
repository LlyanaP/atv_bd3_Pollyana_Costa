/*d. Faça uma pesquisa por produtos de uma determinada
categoria de forma que nem todo os produtos sejam
exibidos;
*/

const database = 'bd3_atv2';

const collection = 'bd3_atv2_produtos'

use(database);


db[collection].find(
    {
        categoria: { $eq: "Maquiagem" },
        
    }
)/*.limit(2)*/