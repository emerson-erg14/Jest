import { Account} from '../account.js';
import { transfer} from '../transfer.js';


describe("transfer", () => { //aqui eu transfiro 500 reais pra uma conta que tem 1000 pra depois uma que tem 0
    test("it should transfer 500 from an account with 1000 to another with 0", () => {
       // Criação do cenario
      const payerAccount = new Account(1,1000)
      const receiverAccount = new Account(2,0)
      
      //Execução do que esta sendo testado
      const updateAccounts = transfer(payerAccount,receiverAccount,500)
      
      //Asserts
      expect(updateAccounts.length).toBe(2);

      expect(updateAccounts[0].id).toBe(1);
      expect(updateAccounts[0].balance).toBe(500);

      expect(updateAccounts[1].id).toBe(2);
      expect(updateAccounts[1].balance).toBe(500);

    });


  });











