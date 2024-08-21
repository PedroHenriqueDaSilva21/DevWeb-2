function maiorIdade(idade){
    if(idade>=18){
        return "Maior de idade";
    }
    else{
        return "Menor de idade";
    }
}
console.log("De acordo com a idade passada, você é " + maiorIdade(17));