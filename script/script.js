// |===========================================================|
// |           M4TH3US M414 4LV4R3Z                            | 
// |===========================================================|
// | PROPOSTA : CALCULADORA EM JAVASCRIPT                      |
// | FEITO POR: MATHEUS MAIA ALVAREZ                           |
// | GITHUB: https://github.com/MatheusAlvarez                 |
// | lINKEDIN: https://br.linkedin.com/in/matheus-maia-alvarez-|
// | CONTATO: mthalvarez0000@hotmail.com                       |
// |===========================================================|


function insert(n)
{
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + n;
}
function clean()
{
    document.getElementById('resultado').innerHTML = "";
}
function back()
{
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}
function calcular()
{
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado)
    {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else
    {
        document.getElementById('resultado').innerHTML = "Nada..."
    }
}