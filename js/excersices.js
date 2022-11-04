function Sumar(){
    var num1 = parseInt(document.getElementById("txtNum1").value);
    var num2 = parseInt(document.getElementById("txtNum2").value);
    document.getElementById("txtResultado").innerHTML = 'La suma es: ' + (num1 + num2);
}


<div class="container py-3" id="ej1">
    <h1 calss="text-center display-1 text-primary">
        Operacion de dos numeros
    </h1>
    <form calss="text-white">
        <div class="mb-3">
            <label for="txt2Num1" class="form-label">Nummero 1</label>
            <input type="number" class="form-control" id="txt2Num1" value="0"></input>
        </div>
        <div class="mb-3">
            <label for="txt2Num2" class="form-label">Nummero 2</label>
            <input type="number" class="form-control" id="txt2Num2" value="0"></input>
        </div>
        <div class="mb-3">
            <select class="form-select" aria-label="Operaciones" id="selectOp">
            <option selected value="0">Seleccione la operación</option>
                <option value="1">Sumar</option>
                <option value="2">Restar</option>
                <option value="3">Multiplicar</option>
                <option value="4">Dividir</option>
            </select>
        </div>
        <button type="button" class="btn btn-success"
    onclick="CalcularOperacion()">Calcular</button>
        <div class="mb-3">
             <label class="form-label" id="txt2Result">Resultado: </label>
        </div>
    </form> 
</div>