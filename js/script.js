function callForza() {
    fetch('https://forza-api.tk/')
        .then(response => response.json())
        .then(forza => {
            document.getElementById('forza_01').innerHTML = `<img src="${forza.image}" style="width:200px">`
        }).catch(erro => {
            console.log('nada encontrado')
        })
}
setInterval(callForza, 5000)
callForza()