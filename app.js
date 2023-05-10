const btn = document.getElementById("btn-calcular");
const div = document.getElementById("atualizacao");
const atualiza = document.getElementById("img-atualiza");

div.style.display = "none";


atualiza.addEventListener("click", atualizar)
btn.addEventListener("click", calculate)


function calculate(){
    const peso = document.getElementById("kg").value;
    const altura = document.getElementById("alt").value;
   
    
    const resultado = (peso / (altura * altura)).toFixed(2);


    if(peso === "" | altura === "")
    {
        alert("Preencher os campos!")
        
    
    } 
    else 
    {
        if(resultado <= 18.5){
             document.getElementById("div-result").style.display = "block";
             document.getElementById("span-imc").innerHTML = "Seu IMC: " + resultado;
             document.getElementById("span-grau").innerHTML = "Magreza | Grau 0";
             document.getElementById("span-grau").style.color = "green";  
             div.style.display = "flex";
        } else if (resultado > 18.5 && resultado <= 24.9) {
            document.getElementById("div-result").style.display = "block";
            document.getElementById("span-imc").innerHTML = "Seu IMC: " + resultado;
            document.getElementById("span-grau").innerHTML = "Normal | Grau 0";
            document.getElementById("span-grau").style.color = "green"; 
            div.style.display = "flex";
        } else if (resultado > 24.9 && resultado <= 29.9) {
            document.getElementById("div-result").style.display = "block";
            document.getElementById("span-imc").innerHTML = "Seu IMC: " + resultado;
            document.getElementById("span-grau").innerHTML = "Sobrepeso | Grau I";
            document.getElementById("span-grau").style.color = "orange"; 
            div.style.display = "flex";
        } else if (resultado > 29.9 && resultado <= 39.9) {
            document.getElementById("div-result").style.display = "block";
            document.getElementById("span-imc").innerHTML = "Seu IMC: " + resultado;
            document.getElementById("span-grau").innerHTML = "Obesidade | Grau II";
            document.getElementById("span-grau").style.color = "red"; 
            div.style.display = "flex";
        } else {
            document.getElementById("div-result").style.display = "block";
            document.getElementById("span-imc").innerHTML = "Seu IMC: " + resultado;
            document.getElementById("span-grau").innerHTML = "Obesidade | Grau III";
            document.getElementById("span-grau").style.color = "red"; 
            div.style.display = "flex";
        }
    }

    
}

function atualizar() {
    document.getElementById("kg").value = "";
    document.getElementById("alt").value = "";
    document.getElementById("div-result").style.display = "none";
    div.style.display = "none";
}