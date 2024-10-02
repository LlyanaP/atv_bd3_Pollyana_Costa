/*e. Faça uma pesquisa por produtos de duas categorias (a
pesquisa deve ser feita em uma única "query") de forma que
nem todo os produtos sejam exibidos;*/
const database = 'bd3_atv2';

const collection = 'bd3_atv2_produtos'

use(database);

db[collection].find({
    $or:[
        {categoria:{$eq:"Maquiagem"}},
        {categoria:{$eq:"Cabelo"}}
    ]
})/*.limit(3);*/