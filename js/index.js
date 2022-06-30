
    fetch(`https://xp41-soundgarden-api.herokuapp.com/events`, {
        method: "GET",
        headers: {'content-type':'application/json'}
    }).then((function (response) {
        if (!response.ok) throw new Error('Erro ao executar requisição');
        return response.json()
        .then(function(data) {
            for (let i = 0; i < 3; i++) {

                let novoElementoHTML =
                `<article class="evento card p-5 m-3">
                 <h2 id="nome${i}"></h2>
                 <h4 id="attractions${i}"></h4>
                 <p id="description${i}"></p>
                 <a class="btn btn-primary">reservar ingresso</a>
             </article>`

                document.getElementById('novoevento').innerHTML += novoElementoHTML

                var nome = document.getElementById(`nome${i}`);
                var atracoes = document.getElementById(`attractions${i}`);
                var descricao = document.getElementById(`description${i}`);

                nome.innerText = data[i].name
                atracoes.innerHTML = data[i].attractions
                descricao.innerHTML = data[i].description
                
            }
        })
        .catch(function (error) {
            console.error(error.message)
        });
    }));


    function iniciamodal (modalid) {
        const modal = document.getElementById(modalid);
        modal.classList.add('mostrar');
    }

    document.getElementsByClassName('btn btn-primary').addEventListener('click', function () {iniciamodal('modal')})


    