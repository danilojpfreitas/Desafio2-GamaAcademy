var nome = document.getElementById('nome');
var dataLista = document.getElementById('scheduled');
var lotacao = document.getElementById('number_tickets');

var urlString = window.location;
var url = new URL(urlString);
var idi = url.search.substring('?id='.length)

if (idi != undefined) {
    var id = idi
    get (id)
} 

document.getElementById('buttonSolicitar').addEventListener("click", (event) => {
    id = document.getElementById('idDoEvento').value;
    get (id)
})

function get (id) {
    fetch(`https://xp41-soundgarden-api.herokuapp.com/events/${id}`, {
        method: "GET",
        headers: {'content-type':'application/json'}
    }).then((function (response) {
        if (!response.ok) throw new Error('Erro ao executar requisição');
        return response.json()
        .then(function(data) {
            nome.innerText = data.name
            dataLista.innerText = data.scheduled
            lotacao.innerHTML = data.number_tickets
        })
        .catch(function (error) {
            console.error(error.message)
        });
    }));

    fetch(`https://xp41-soundgarden-api.herokuapp.com/bookings/event/${id}`, {
        method: "GET",
        headers: {'content-type':'application/json'}
    }).then((function (response) {
        if (!response.ok) throw new Error('Erro ao executar requisição');
        return response.json()
        .then(function(data) {
            for (r in data) {

                let novoElementoHTML =
                `<tr>
                <th scope="row">
                    <span for="nome" class="form-label" id="reservaNumero${r}">---</span>
                </th>
                <td>
                    <span for="nome" class="form-label" id="ID${r}">---</span>
                </td>
                <td>
                    <span for="nome" class="form-label" id="nomeReserva${r}">---</span>
                </td>
                <td>
                    <span for="nome" class="form-label" id="emailReserva${r}">---</span>
                </td>
                <td>
                    <span for="nome" class="form-label" id="tickets${r}">---</span>
                </td>
                </tr>`

                document.getElementById('reserva').innerHTML += novoElementoHTML

                var reservaNumero = document.getElementById(`reservaNumero${r}`);
                var ID = document.getElementById(`ID${r}`);
                var nomeReserva = document.getElementById(`nomeReserva${r}`);
                var emailReserva = document.getElementById(`emailReserva${r}`);
                var tickets = document.getElementById(`tickets${r}`);

                reservaNumero.innerHTML = r
                ID.innerHTML = data[r]._id
                nomeReserva.innerHTML = data[r].owner_name
                emailReserva.innerHTML = data[r].owner_email
                tickets.innerHTML = data[r].number_tickets

            }
        })
        .catch(function (error) {
            console.error(error.message)
        });
    }));
}