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
function CalcularOperacion(){
    let op = document.getElementById('selectOp').value;
    let num1 = parseInt(document.getElementById('txt2Num1').value);
    let num2 = parseInt(document.getElementById('txt2Num2').value);
    if(op == 1){
        alert("Seleccione primero la operacion");
    }
    else if(op == 1){
        document.getElementById('txt2Result').innerHTML = "La suma es: " + (num1 + num2);
    }
    else if(op ==2){
        document.getElementById('txt2Result').innerHTML = "La resta es: " + (num1 - num2);
    }
    else if(op == 3){
        document.getElementById('txt2Result').innerHTML = "El producto es: " + (num1 * num2);
    }
    else if(op == 1){
        document.getElementById('txt2Result').innerHTML = "La division es: " + (num1 / num2);
    }
}

<div class="container py-3" id="ej3">
    <h1 class="text-center display txt-primary">
        calculo del salario Nicaragüense
    </h1>
    <form class="text-white">
        <div class="form-text mb-2">
            El calculo del salario en nicaragua se divide en dos partes, primero se 
            calcula el <code>INSS</code> que es el <strong>7%</strong> del salario base.
            Luego calculamos el <code>IR</code>, que dependiendo del exelente anual 
            el valor varía. Al restarle estos datos al salario base obtenemos nuestro Salario Neto.
        </div>
        <div class="form-floating mb-3">
            <input class="form-control" id="inputSalario" placeholder="Ingrese el salario"></input>
            <label for="inputSalario" class="text-secondary">Salario</label>
        </div>
        <div class="mb-3">
            <button type="button" class="btn btn-success" onclick="calcularSalario()">Calcular Salario</button>
        </div>
        <div class="mb-3">
            <label id="txtINSS" class="form-label">INSS: </label>
        </div>
        <div class="mb-3">
            <label id="txtIR" class="form-label">IR: </label>
        </div>
        <div class="mb-3">
            <label id="txtSalNeto" class="form-label">Salario Neto: </label>
        </div>
    </form>
</div>

function CalcularIR(SalBruto){
    let SalBrutoAnual = SalBruto * 12;
    let IRAnual = 0;
    if(SalBrutoAnual <= 100000) IRAnual = 0;
    else if(SalBrutoAnual > 100000 && SalBrutoAnual <= 200000)
        IRAnual = (SalBrutoAnual - 100000) * 0.15;
    else if(SalBrutoAnual > 200000 && SalBrutoAnual <= 350000)
        IRAnual = ((SalBrutoAnual - 200000) * 0.20) + 15000;
    else if(SalBrutoAnual > 350000 && SalBrutoAnual <= 500000)
        IRAnual = ((SalBrutoAnual - 350000) * 0.25) + 45000;
    else
        IRAnual = ((SalBrutoAnual - 500000) * 0.30) + 82500;
        return IRAnual / 12;
}

function calcularSalario(){
    let SalBase = parseFloat(document.getElementById('inputSalario').value);
    let inss = SalBase * 0.07;
    let ir = CalcularIR(SalBase - inss);
    let SalNeto = SalBase - inss - ir;
    document.getElementById('txtINSS').innerHTML = "INSS: C$ " + inss.toFixed(2);
    document.getElementById('txtIR').innerHTML = "IR: C$ " + ir.toFixed(2);
    document.getElementById('txtSalNeto').innerHTML = "Salario Neto: C$ " + SalNeto.toFixed(2);
}

<div class="container-fluid bg-dark text-white text-center">
    <div  class="row mb-4">
        <h2 class="display-4">Tecnico Medio en Programacion - 11mo
Grado</h2>
    </div>
    <div class="row mb-3">
        <h2 class="display-6">Integrante</h2>
        <div class="col">Mache Lopez</div>
    </div>
    <div class="row">
        <p>
            &copy; Todos los derechos reservados - 2022                                                                                                                                                                             
        </p>
    </div>
</div>
