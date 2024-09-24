const database = 'bd3_atv2';

const collection = 'bd3_atv2_produtos'

use(database);

db[collection].insertOne(
    {"nome": "Batom Hidratante", "valor": 34.99, "quantidade_em_estoque": 120, "fabricante": "Marca AX", "categoria": "Maquiagem", "descricao": "Batom hidratante com cores vibrantes."}
)