
fetch(`https://xp41-soundgarden-api.herokuapp.com/events`, {
    method: "GET",
    headers: {'content-type':'application/json'}
}).then((function (response) {
    if (!response.ok) throw new Error('Erro ao executar requisição');
    return response.json()
    .then(function(data) {
        for (i in data) {

            let novoElementoHTML =
            `<article class="evento card p-5 m-3">
             <h2 id="nome${i}"></h2>
             <h4 id="attractions${i}"></h4>
             <p id="description${i}"></p>
             <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#JanelaModal${i}">reservar ingresso</button>
             </article>
             <div id="JanelaModal${i}" class="modal fade" tabindex="-1" role="dialog">
              <div class="modal-dialog" role="document">
                 <div class="modal-content">
                     <div class="modal-header">
                         <p class="modal-title">Digite seus dados para realizar a reserva do evento: ${data[i].name} :)</p>
                         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                         <span aria-hidden="true">&times;</span>
                         </button>
                     </div>
                     <div class="modal-body">
                         <form class="col-6" id="create-event-form${data[i]._id}">
                             <div class="mb-3">
                             <label for="nome" class="form-label">Nome</label>
                             <input type="name" class="form-control" id="nome" aria-describedby="nome"/>
                             </div>
                             <div class="mb-3">
                             <label for="email" class="form-label">Email</label>
                             <input type="email" class="form-control" id="email" aria-describedby="email"/>
                             <br>
                             <div class="mb-3">
                             <label for="reservas" class="form-label">Reservas</label>
                             <input type="number" class="form-control" id="reservas" aria-describedby="reservas"/>
                             </div>
                         </form> 
                     </div>
                     <div class="modal-footer">
                         <button type="submit" class="btn btn-primary" onclick="criarReserva('${data[i]._id}')">enviar</button>
                     </div>
                    </div>
                 </div>
             </div>`

            document.getElementById('novoEvento').innerHTML += novoElementoHTML

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

async function criarReserva(idEventoReserva) {
    const formReserva = document.getElementById(`create-event-form${idEventoReserva}`);
    formReserva.addEventListener('submit', e => e.preventDefault())
    const enviarReserva = {
        owner_name: formReserva.elements[0].value,
        owner_email: formReserva.elements[1].value,
        number_tickets: parseInt(formReserva.elements[2].value),
        event_id: idEventoReserva
    }
    console.log(formReserva.elements[0].value)
    await fetch(`https://xp41-soundgarden-api.herokuapp.com/bookings`, {
        method: "POST",
        body: JSON.stringify(enviarReserva),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
    .then(response => response.json())
    .then(json => console.log(json))
    .then(window.alert('Reserva Realizada'))
    .catch(err => console.log(err))
}

