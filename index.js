import connectToWhatsapp from './Digix/crew.js'
import handleIncomingMessage from './events/messageHandler.js'
import config from './config.js' // On importe ta nouvelle configuration

(async() => {
    // On passe le numéro configuré à la fonction de connexion
        await connectToWhatsapp(handleIncomingMessage, config.Number)
            console.log('established !')
            })()