
                    //pagador , recebedor , quantidade da tranferencia
export function transfer(payer, receiver, transferAmount){
    //saldo do pagador = saldo do pagador atual - quantidade transferida
    payer.balance = payer.balance - transferAmount
    //saldo do recebedor = saldo do recebedor + quantidade da transferencia
    receiver.balance = receiver.balance + transferAmount
    return [payer, receiver] //aqui eu retorno o saldo do pagador e do recebedor
}

