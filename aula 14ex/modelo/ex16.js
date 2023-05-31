function contar(){
    let ini = document.getElementById('ini')
    let fim = document.getElementById('f')
    let passo = document.getElementById('pas')
    let res = document.getElementById('res')

    
    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    }else{
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            window.alert('Passo invalido considerando Passo 1')
            p= 1
        }
        if (i < f) {
            for(let c = i; c <= f ; c +=p){
                res.innerHTML +=  `${c} \u{1F449}`
            }
        }else{
            for(let c = i; c >= f; c-=p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
    
}