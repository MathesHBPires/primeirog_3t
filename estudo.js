let tabuada = 2;

function escreva(){
    document.write(" Taboada do" + tabuada + " <br>")
    document.write(tabuada+" x 1 = "+(tabuada*1)+"<br>");
    document.write(tabuada+" x 2 = "+(tabuada*2)+"<br>");
}

let lista = ["Terra", "Marte", "Saturno", "Jupiter","Venus"];

function mostraLista (){
    document.write("Tamanho da lista:" + lista.length + "<br>")
    document.write("Planeta" + lista[4])
    for(let i = 0; i < 5; i++){
        document.write("Planeta" + lista[i] + "<br>");
    }
} 

function repete (){
    for(let i = 1; i <= 10; i++){
        document.write("Tabuada do  = " + i + "<br>");
        for(let j = 1; j <=10; j++){
            document.write(i+ " x " + j + " = "+(i*j)+"<br>")
        }
    }
}
