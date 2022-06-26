
document.getElementById('formulario').addEventListener("submit", (event) => {
    event.preventDefault()
    let post = {}

    post.name = document.getElementById('nome').value;
    post.poster = document.getElementById('poster').value;
    post.attractions = document.getElementById('atracoes').value.split(',');
    post.description = document.getElementById('descricao').value;
    post.scheduled = document.getElementById('data').value;
    post.scheduled = new Date(post.scheduled).toISOString();
    post.number_tickets= document.getElementById('lotacao').value;

    console.log("esse é o meu objeto", post)

    fetch("https://xp41-soundgarden-api.herokuapp.com/events", {
        method: "POST", 
        body: JSON.stringify(post),
        headers: {'content-type':'application/json'}
    }).then((back) => console.log(back))

});

// async function criaEvento(inputs) { 
//     let evento = await fetch('https://xp41-soundgarden-api.herokuapp.com/events', {
//          method: 'POST', 
//          body: JSON.stringify(inputs), 
//          headers: { 'content-type':'application/json' } 
//         } ) 
//     } 
    
    
//     document.getElementById("formulario").addEventListener('submit', function(evento) { 
//         evento.preventDefault() 
//         let inputs ={} 
        
//         inputs.name = document.querySelector('#nome').value; 
//         inputs.poster = document.querySelector('#poster').value; 
//         inputs.attractions = document.querySelector('#atracoes').value.split(','); 
//         inputs.description = document.querySelector('#descricao').value; 
//         inputs.scheduled = document.querySelector('#data').value; 
//         inputs.scheduled = new Date(inputs.scheduled).toISOString(); 
//         inputs.number_tickets = document.querySelector('#lotacao').value; 
//         criaEvento(inputs) 
    
//     }) 



