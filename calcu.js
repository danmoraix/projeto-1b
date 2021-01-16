function soma()
{
  let a = document.getElementById("a");
  let b = document.getElementById("b");
  let resultado = document.getElementById("resultado");
   
  let va = parseInt(a.value);
  let vb = parseInt(b.value);
  let vr = va+vb;
   
  resultado.textContent = vr;
}
function ida()
{
  let a = document.getElementById("a4");
  let b = document.getElementById("b4");
  let resultado = document.getElementById("resulta");
   
  let va = parseInt(a.value);
  let vb = parseInt(b.value);
  let vr = vb-va;
  resultado.textContent = vr;
}
function dc()
{
    let a = document.getElementById("a2");
    let b = document.getElementById("b2");
    let d = document.getElementById("r3");

    a = parseInt(a.value);
    b = parseInt(b.value);

    r3.textContent = "";

    let c = 1;
    if(b>a){
        c = b;
        b = a;
        a = c;
    }
    
    for(c=1;c<=a;c++){
        if(a%c==0 && b%c==0){
            r3.textContent+=c+", ";
        }
    }
}
function golpedementira()
{
    let a = document.getElementById("a5");
    let b = document.getElementById("b5");
    let c = document.getElementById("c5");
    let d = document.getElementById("d5");
    let res = document.getElementById("r5");
    a = parseInt(a.value);
    b = parseInt(b.value);
    c = parseInt(c.value);
    d = parseInt(d.value);
        res.textContent ="Cuidado com a internet e os golpes hein!! CPF: " + a + "; Número do cartão: " + b + "; Número de trás: " + c + "; Vencimento: " + d;
   

 
    

}
