<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Primeiro G</title>
    <script src="estudo.js"></script>
    <link rel="stylesheet" href="geral.css">
</head>

<body>
    <input type="checkbox" id="input-calcFin">

    <div class="calc">
        <label for="input-calcFin">
            <h3>Financeiro</h3>
        </label>
        <div class="calcF">
            <div id="spTotal">
                <span id="total">R$: 0,00</span>
            </div>
            Capital: <input id="capital" placeholder="R$ ??" type="text"><br>
            Juros mensais: <input id="juros" placeholder="% ??" type="text"><br>
            Quantidade de meses: <input id="meses" placeholder="Tempo ??" type="text"><br>
            <button onclick="total()">Calcular</button>
            <div id="spLista">
                <span id="listaMes"></span>
            </div>
        </div>
    </div>
</body>

</html>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Primeiro G</title>
    <script src="estudo.js"></script>
</head>

<body>


    Capital: <input id="valor" type="text"> <br>
    Juros Mensais: <input id="juros" type="text"> <br>
    Nr. de Meses: <input id="meses" type="text"> <br>
    <button onclick="total()">Calcula</button>

    <br><br><br>
    <span id="resultado"></span><br><br>
    valor 1: <input id="v1" type="text"><br>
    valor 2: <input id="v2" type="text"><br>
    <button onclick="adicao()">Soma</button>
    <button onclick="subtracao()">Subtração</button>
    <button onclick="divisao()">Divisão</button>
    <button onclick="multiplicacao()">Multiplicação</button>
    <button onclick="porcentagem()">Porcentagem</button>
</body>

</html>

 <input type="checkbox" id="input-calcesg">

    <div class="calcE">
        <label for="input-calcESG">
            <h3>Equação Segundo Grau</h3>
        </label>
        <div class="calcEq">
            <div id="spRaiz">
                <span id="raiz">x1:? e x2:?</span>
            </div>
            <input id="a" placeholder="a" type="text"><br>
            <input id="b" placeholder="b" type="text"><br>
            <input id="c" placeholder="c" type="text"><br>
            <button onclick="calculaRaiz()">Calcular</button>
            <div id="spLista">
                <span id="listaMes"></span>
            
        </div>
    </div>
