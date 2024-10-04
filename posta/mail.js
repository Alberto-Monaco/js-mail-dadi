//*Mail
//*Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

let list_mail = [
	'alberto@yahoo.com',
	'gennaro@libero.it',
	'mario@gmail.com',
	'manuel@gmail.com',
	'terasa@libero.it',
	'carlo@gmail.com',
	'gennaro@gmail.com',
	'maria@yahoo.com'
]

let mail_user = prompt('Quale è la tua email?')

if (list_mail.includes(mail_user)) {
	alert('puoi passare')
} else {
	alert('non puoi passare')
}
