/* 3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%; */


const precoEtiqueta = 100;
const condicaoDePagamento = '4';

if (condicaoDePagamento === '1') {
    console.log(precoEtiqueta - (precoEtiqueta * 0.1));
} else if (condicaoDePagamento === '2') {
    console.log(precoEtiqueta - (precoEtiqueta * 0.15));
} else if (condicaoDePagamento === '3') {
    console.log(precoEtiqueta);
} else if(condicaoDePagamento === '4') {
    console.log(precoEtiqueta + (precoEtiqueta * 0.1))
}