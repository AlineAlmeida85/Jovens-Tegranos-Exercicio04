

function calcular() {
    
    let precoUnit = document.getElementById("inputpreco").value;
    let quantidade = document.getElementById("inputQuantidade").value;
    let dinheiro = document.getElementById("inputDinheiro").value;

    let valorTotal = precoUnit * quantidade;
    let troco = dinheiro - valorTotal;

    resultado.innerHTML = troco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
 
}





