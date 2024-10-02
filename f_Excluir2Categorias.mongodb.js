/*f. Faça uma pesquisa que exclua produtos de duas categorias
e mostre os produtos das outras categorias(a pesquisa deve
ser feita em uma única "query") de forma que nem todo os
produtos sejam exibidos;*/

const database = 'bd3_atv2';

const collection = 'bd3_atv2_produtos'

use(database);

db[collection].find(
    {categoria:{$nin:["Maquiagem", "Cabelo"]}}
)