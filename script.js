function FazerCalculo(){
    let valueF01 = document.getElementById('faixa01').value;

    let valueF02 = document.getElementById('faixa02').value;

    let valuemulti = parseFloat(document.getElementById('multi').value);

    let valuetoler = parseFloat(document.getElementById('toler').value);

    let operacao = valueF01 + valueF02;
    let resistencia = operacao * valuemulti;
   
    valuetoler = resistencia * valuetoler;

    let tolemin = resistencia - valuetoler;
    let tolmax = resistencia + valuetoler;

    document.getElementById("Final").value = resistencia;
    document.getElementById("tolera").value = valuetoler + " / " + tolemin +" / " + tolmax;
 

    //alert(Calculando);
    
}

