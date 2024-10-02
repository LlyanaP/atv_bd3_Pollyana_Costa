/*g. Faça uma pesquisa de todos os produtos ordenados dos
produtos mais baratos para os mais caros;
*/

const database = 'bd3_atv2';

const collection = 'bd3_atv2_produtos'

use(database);

db[collection].find().sort({valor:1})