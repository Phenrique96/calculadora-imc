function calculate() {

    let nome = document.getElementById('name').value;
    let idade = document.getElementById('age').value;
    let peso = document.getElementById('quilo').value;
    let altura = document.getElementById('metro').value;

    if(nome == "" | idade == 0) { 
        alert("Preencha os campos!")
        return;
    }

    let total = peso / (altura * altura);

    alert(nome + " está com " + idade + " anos e com " + total.toFixed(0) + " de IMC.");

}

let botao = document.getElementById('submit');

botao.addEventListener("click", calculate)