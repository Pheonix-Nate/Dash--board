let message = document.getElementById('message');
let notify = document.getElementById('notify');
notify.addEventListener('click', ()=>{
    alert('No notification for you here.')
})

let mail = document.getElementById('mail')
mail.addEventListener('click', (e) =>{
    e.preventDefault();

const input = prompt('Unknown : Hello!')
if (input === ''){
    alert('I was left on read...')
}
else if(input !== ''){
    alert("I didn't think that you'd answer.")
}
if(input === null){
    alert("Pls don't ignore me")
}
});
//  if (answers){
//     alert('I did not think you would answer. Sorry, bye!')
// }
// else{alert('I was left on read...')}

