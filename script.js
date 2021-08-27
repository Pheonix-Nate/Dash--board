
let notify = document.getElementById('notify');
notify.addEventListener('click', ()=>{
    alert('No notification for you here.')
})

let mail = document.getElementById('mail');
mail.addEventListener('click', (e)=>{
    e.preventDefault();
    prompt('Unknown: Hello!')
    if (prompt == "#"){
    alert('Was I seriously left on read?')
}
})
