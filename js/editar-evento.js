var nome = document.getElementById('nome');
var poster = document.getElementById('banner');
var atracoes = document.getElementById('atracoes');
var descricao = document.getElementById('descricao');
var dataLista = document.getElementById('data');
var lotacao = document.getElementById('lotacao');

document.getElementById('formulario').addEventListener("submit", (event) => {
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
        })
    }));

    // let post = {}

    // (nome.value != {}) ? post.name = nome.value : {};
    // (poster.value != {}) ? post.poster = poster.value : {};
    // (atracoes.value != {}) ? post.attractions = atracoes.value.split(',') : {};
    // (descricao.value != {}) ? post.description = descricao.value : {};
    // (data.value != {}) ? post.scheduled = data.value.toISOString() : {};
    // (lotacao.value != {}) ? post.number_tickets = lotacao.value : {};

    // console.log("esse é o meu objeto", post)

    // fetch("https://xp41-soundgarden-api.herokuapp.com/events", {
    //     method: "PUT", 
    //     body: JSON.stringify(post),
    //     headers: {'content-type':'application/json'}
    // }).then((back) => console.log(back))

});



