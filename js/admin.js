
    fetch(`https://xp41-soundgarden-api.herokuapp.com/events`, {
        method: "GET",
        headers: {'content-type':'application/json'}
    }).then((function (response) {
        if (!response.ok) throw new Error('Erro ao executar requisição');
        return response.json()
        .then(function(data) {
            for (evento in data) {

                let novoElementoHTML =
                `<tr>
                <th scope="row">
                    <span for="nome" class="form-label" id="IDevento${evento}">---</span>
                </th>
                <td>
                    <span for="nome" class="form-label" id="scheduled${evento}">---</span>
                </td>
                <td>
                    <span for="nome" class="form-label" id="nome${evento}">---</span>
                </td>
                <td>
                    <span for="nome" class="form-label" id="attractions${evento}">---</span>
                </td>
                <td>
                    <a class="btn btn-dark" href="reservas.html?id=${data[evento]._id}">ver reservas</a>
                    <a href="editar-evento.html?id=${data[evento]._id}" class="btn btn-secondary" onclick="${data[evento]._id}">editar</a>
                    <a href="excluir-evento.html?id=${data[evento]._id}" class="btn btn-danger" onclick="${data[evento]._id}">excluir</a>
                </td>
                </tr>`

                document.getElementById('novoevento').innerHTML += novoElementoHTML

                var idNovo = document.getElementById(`IDevento${evento}`)
                var nomeNovo = document.getElementById(`nome${evento}`);
                var atracoesNovo = document.getElementById(`attractions${evento}`);
                var dataListaNovo = document.getElementById(`scheduled${evento}`);

                idNovo.innerText = data[evento]._id
                nomeNovo.innerText = data[evento].name
                dataListaNovo.innerText = data[evento].scheduled
                atracoesNovo.innerHTML = data[evento].attractions
                
            }
        })
        .catch(function (error) {
            console.error(error.message)
        });
    }));