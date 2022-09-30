// Supports ES6
// import { create, Whatsapp } from 'venom-bot';
const venom = require('venom-bot');
let client;

venom
    .create({
        session: 'session-name', //name of session
        multidevice: true // for version not multidevice use false.(default: true)
    })
    .then((c) =>{
        client = c


        setTimeout(() => {
            step1()
        }, 10000);
        
        setTimeout(() => {
            step2()
        }, 20000);
    })
    .catch((erro) => {
        console.log(erro);
    });

const step1 = () => {    
    client
        .sendText('5519995257239@c.us', 'mensagem automatica 1')
        .then((result) => {
            console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
        });
}

const step2 = () => {    
    client
        .sendText('5519995257239@c.us', 'mensagem automatica 2')
        .then((result) => {
            console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
        });
}