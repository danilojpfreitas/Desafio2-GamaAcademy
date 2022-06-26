
document.getElementById('formulario').addEventListener("submit", (event) => {
    event.preventDefault()
    let post = {}

    document.getElementById('nome').value != {} ? post.name = document.getElementById('nome').value : {}
    document.getElementById('poster').value != {} ? post.poster = document.getElementById('poster').value : {};
    post.attractions = document.getElementById('atracoes').value.split(',');
    post.description = document.getElementById('descricao').value;
    post.scheduled = document.getElementById('data').value;
    post.scheduled = new Date(post.scheduled).toISOString();
    post.number_tickets= document.getElementById('lotacao').value;

    console.log("esse é o meu objeto", post)

    fetch("https://xp41-soundgarden-api.herokuapp.com/events", {
        method: "PUT", 
        body: JSON.stringify(post),
        headers: {'content-type':'application/json'}
    }).then((back) => console.log(back))

});



