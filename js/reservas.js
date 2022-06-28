var nome = document.getElementById('nome');
var atracoes = document.getElementById('attractions');
var dataLista = document.getElementById('scheduled');
var lotacao = document.getElementById('number_tickets');

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
            nome.innerText = data.name
            atracoes.innerText = data.attractions
            dataLista.innerText = data.scheduled
            lotacao.innerHTML = data.number_tickets
        })
        .catch(function (error) {
            console.error(error.message)
        });
    }));
});