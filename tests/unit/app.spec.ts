import {transactions} from '../../src/data';

describe('Transactions API - Testes unitários', () =>{

it('deve retornar uma array de transações', () => {
   expect(transactions.length).toBeGreaterThan(0);
   });

});
  
