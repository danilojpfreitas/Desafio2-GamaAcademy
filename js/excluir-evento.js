var nome = document.getElementById('nome');
var poster = document.getElementById('banner');
var atracoes = document.getElementById('atracoes');
var descricao = document.getElementById('descricao');
var dataLista = document.getElementById('data');
var lotacao = document.getElementById('lotacao');

document.getElementById('buttonSolicitar').addEventListener("click", (event) => {
    event.preventDefault()
    var id = document.getElementById('idDoEvento').value;

    fetch(`https://xp41-soundgarden-api.herokuapp.com/events/${id}`, {
        method: "GET",
        headers: {'content-type':'application/json'}
    }).then((function (response) {
        if (!response.ok) throw new Error('Erro ao executar requisição');
        return response.json()
        .then(function(data) {
            nome.value = data.name
            poster.value = data.poster
            atracoes.value = data.attractions
            descricao.value = data.description
            dataLista.value = data.scheduled
            lotacao.value = data.number_tickets
        })
        .catch(function (error) {
            console.error(error.message)
        });
    }));
});

document.getElementById('buttonExcluir').addEventListener("click", (event) => {
    event.preventDefault()
    var id = document.getElementById('idDoEvento').value;

    fetch(`https://xp41-soundgarden-api.herokuapp.com/events/${id}`, {
        method: "DELETE"
    }).then(function (back) { 
        console.log(back)
        if (back.status == 204) {
            window.alert('Seu evento foi excluido com sucesso!')
        };
});
});