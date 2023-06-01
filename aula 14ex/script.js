function mutiplicar(){
    var numero = document.getElementById('numero')
    var res = document.getElementById('seltab')
    var v = Number(numero.value)
    var a = Number (v*10)
    var c = 1
    res.innerHTML = ''
    if(v > 0){
    for(var x = v;x <= a;x +=v ){
        let item = document.createElement('Option')
        item.text +=`${v} x ${c++} = ${x}`
        res.appendChild(item)

    }
    }else if (v < 0){
        for(var x = v;a <= x;x += v){
            let item = document.createElement('Option')
            item.text += `${v} x ${c++} = ${x}`
            res.appendChild(item)
        }
    }else if (v == 0){
        for(var x = v;c <= 10;x *= v){
            let item = document.createElement('Option')
            item.text += `${v} x ${c++} = ${x}`
            res.appendChild(item)
        }
    }
    else{
        alert('Digite um numero')
    }
}