function calcularrendimento() {
    const valorRendimento = parseFloat(document.getElementById("rendimento").value);

    if (!isNaN(valorRendimento)) {
        if (valorRendimento > 0) {
            const despesasfixa = valorRendimento * (50 / 100);
            const despesasvariavel = valorRendimento * (50 / 100);
            const investimento = valorRendimento * (50 / 100);

            document.getElementById("resultadodespesasfixa").innerText = despesasfixa
            document.getElementById("resultadodespesasvariavel").innerText = despesasvariavel;
            document.getElementById("resultadoinvestimento").innerText = investimento;
        } else {
            alert("É nescessario informar um valor acima de 0 !!!")
        }
    } else {
        alert("Caracteres não permitidos")
    }

}