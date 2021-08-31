
let notify = document.getElementById('notify');
notify.addEventListener('click', ()=>{
    alert('No notification for you here.')
})
let answers = ['#'];

let mail = document.getElementById('mail');
mail.addEventListener('click', (e)=>{
    e.preventDefault();
    prompt('Unknown: Hello!')
})
//     if (prompt !== answers){
//     alert('I did not think you would have answered. Sorry, bye!')
// }
// else{alert('I was left on read...')}

