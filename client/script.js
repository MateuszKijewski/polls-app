// fetch('http://127.0.0.1:5000/results')
// .then(data => data.json())
// .then(poll => {
//     console.log(poll.question);
// });
//
// axios.get('http://127.0.0.1:5000/results')
// .then(res => res.data)
// .then(data => {
//     console.log(data.answers[0].id);
// });


document.querySelector('.submit').addEventListener('submit', event =>{
    let name = document.querySelector('.name').value;
    event.preventDefault();
    console.log(name);
})