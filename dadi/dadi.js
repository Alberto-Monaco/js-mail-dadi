//*Gioco dei dadi
//*Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

const user = Math.round(Math.random() * 5) + 1
alert(`il giocatore tira il dato ed esce il numero ${user}`)
const pc = Math.round(Math.random() * 5) + 1
alert(`il computer tira il dato ed esce il numero ${pc}`)

if (user > pc) {
	alert('vince giocatore')
} else if (user < pc) {
	alert('vince computer')
} else {
	alert('sono pari')
}
