const Twit = require('twit');
const fs = require('fs');
require('dotenv').config();

const Bot = new Twit({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token: process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET  
});

// function pickRandomStart(lyrics) {
//     const random = Math.floor(Math.random()*lyrics.length)
//     console.log(lyrics[random + order]);
//     return lyrics[random + order]
//     //return lyrics.substring(random, random + order)
// }

// function getRandomSentence () {
//     var index= Math.floor(Math.random() * (sentences.length));
//     var tweet = sentences[index]
//     return tweet ;
// }

var sentences= [
'Viviendo como en claustro, solo en mi madriguera con poca realidad. ',
'Me siento insensible, totalmente dominado, preferiría estar cremado. ',
'Que los gusanos no me merecen. Sobre el campo nacerá la hierba que me alegrará (alejará). ',
'Y si no encuentro sitio me conformaré con tus tetas. ',
'Con todas las vacunas y no salgo de mi casa, aquí me encuentro bien. ',
'Tengo miedo a mis acciones en la noche, mejor me quedo acá.',
'You wanna fuck. You really wanna fuck. ',
'Sex with strangers, is that right? Joking with my friends. ',
'I’m not drunk yet. Pink Floyd albums that’s my day. ',
'No quiero verte muerta si te cuelgas de mi cabeza. Ingresar en las tinieblas. ',
'Violentarte aunque estés muerta. Trips to Ocran. ',
'Little happy place. Deepak Chopra stills a cunt. ',
'Green amphibious running through my head. Green amphibious eating all my brains.',
'¿Quieres volverte a meter en una celda por los pies, en una nube que no ves, en un cuartito que no entiendes? ',
'Sales antes de las diez y vuelves luego de tres, sigues dentro de lo normal, ¿por qué no se siente normal? ',
'No tienes plata pero tienes fe, fe en que ya no hay ni mierda más por ver. ',
'Escribes cuentos para no leer más. ',
'Mientras ríes solo préndela, que estás a salvo y estás sano, al menos hoy que no puedes sentir. ',
'¿Quieres volverte a meter en una celda por los pies, en una nube que no ves, en un cuartito que no entiendes?',
'Sales antes de las diez y vuelves luego de las seis, tu tía te empieza a ver mal, no le parece tan normal. ',
'No puedo con este placer, me está gustando un poco más, un poco más, un poco más que lo demás. ',
'No vuelvas a pretender parar, que hoy estás libre y no tan solo, al menos hoy que no puedes sentir.',
'I don’t feel romantic. I feel so drunk. Was all my fault. ',
'Please I wanna hit you, but only nicely, with all my love. ',
'Lalala lalala lalala lala. Si no veo nada y no alcanzo ver tu pelo. ',
'Si no veo nada a mi me tiembla el cuerpo. ',
'Tengo el cráneo abierto. Si me lo coses sería mejor.', 
'Ya no confío en nadie. Ni en los doctores, ni en mi mamá.',
'Despierto y enciendo ya la tv. Me aburro y recuerdo su idiotez. Sensible a mis pasos la planta de mis pies. ',
'Me hundo de nuevo y duermo muy bien. Es que Lima me ha sacado la mierda. ',
'Hueveo insaciable, son casi las 3. ',
'Mi día al tacho y ahora qué hacer.', 
'Medito, me pierdo, ya no creo en dios. Me hundo de nuevo. Esto ya terminó. ',
'Es que Lima me ha sacado la mierda.',
'Quería sentir como Santa Rosa. Me flajelaba, sangraba mal. Y de noche todo ingresaba, nada salía una vez más. ',
'Y dame una bomba que quiero reventar, llenar toda mi boca de cristal, dejar mi corazón al descubierto y buscar el contacto tierno. ',
'No puedo dormir, el televisor me da vueltas, no puedo dormir. ',
'Yo estiro la mano, tú mojas tu dedo. Qué nos importan los recuerdos. ',
'La noche avanza y yo tan lento. Me siento feliz en cada momento...MD.',
'Viste, anoche apareciste de nuevo en mi sopa, de nuevo en mi sopa. ',
'No recuerdo aquella vez que fuimos a caminar. ',
'No me acuerdo de nada, no insistas con ilustrar. ',
'Si sabes que no te puedo ver, no comiences a preguntar por mí. ','Viste, anoche apareciste de nuevo en la coca, de nuevo en la coca. ',
'No me acuerdo de esa vez que fuimos a la ciudad. ',
'No me acuerdo de nada, no insistas, ya pues, ya no. ',
'Si sabes que no te puedo oler, no te empieces a perfumar por mí, o a decirme que esta vez reirás también aunque sea por mí, aunque sea una vez.',
'Pero si estoy pensando y me caigo en espiral y no toco el suelo. Y me pasa muy a menudo. ',
'Thank you for that frog. Too good for me. Two burritos, two beers y me pasa muy a menudo. ',
'Craist! Lalalala Oh! La Malera fucked with Annabel. And you feel so nasty. ',
'Search for some porn and try to suck your own cock. And you feel so nasty. ',
'No te preocupes por mí porque hoy no será el día que me vaya. Ni te me acerques. ',
'Te tiro un pollo y te saco a patadas. ',
'Intoxicado por culpa de tu mala sangre ahora me encuentro con la garganta cerrada. ',
'¿Por qué serás así?',
'Dicen en la oficina que en la esquina de la cuadra han encontrado a un muerto que es un can.',
'Yo no vivo cerca, pero me derrumbo igual. ',
'¿Será que lo habré visto paseando por ahí en domingo? ¿Será?',
'Y si me escapo y fugo, no confíes en mí, que estoy dispuesto a repetir lagunas que me hacían feliz.',
'Yo sé que sabes que se me hace todo tan difícil que lo ignoro, y a pesar de verte, no encuentro ningún comfort. ',
'¿Sabrás? ¿Sabrás que me ha ido mal? ',
'No quiero mejorar. No me quiero sanar. ',
'No encuentro tiempo para pensar si continuar o regresar. ',
'No encuentro tiempo para pensar.',
'Si tú no quieres verme así, si te hago infeliz, yo estaré bien, puedes seguir saliendo con tu gil.',
'Y yo quedando rechazado, ni tan valorado. Solo tu ganaste y yo perdí.',
'Y yo quedándome estancado, como postergado. Solo hasta que tú lo quieras asi. ',
'Y esa fue nuestra banca, nuestra banca y tú la ultrajaste, tú.', 'Lalalala...No, baby dont go, baby dont',
'Voltea, que estoy dispuesto a mirarte sin pausa y a adorarte adornada con sol y verde en la cara. ',
'Disculpa si te encuentro tan bella, profundamente malvada',
'Si te encuentro tan poco, si no me acerco a probarlo, y si alucino seguido no ser yo el que te sigo.',
'Pero solo atino a seguir mirándote casi escondido.',
'Disculpa, te digo. Quiero estar cerca un rato más.',
'Prolongar la oportunidad de hablar, y conquistarte en dos palabras',
'Y que me beses en francés.Luego, al revés también.',
'Te juro, no es vulgar. Nos va a encantar el lugar.',
'Mañana en la tarde te llevo a ver algo de Rohmer para que te guste y me entiendas todo',
'Y también no sé qué pueda pasar después.',
'Se queman las yemas de tus dedos en el fuego más lento que hay en tu corazón.',
'Y estalla como una granada pero es pura vaina tirada en un rincón.',
'Déjame como estoy… adormecido. Vuelan sobre mi cabeza un centenar de abejas todas sin aguijón.',
'No siento miedo ni angustia porque ninguna pica. Todas sin aguijón. Déjame como estoy… adormecido.',
'Sigo atento a todo lo anormal, pendiente de cosas como el clima','Y morir por un amor idealizado por mi mente, que ya no se siente tan alegre',
'No se por qué si yo vivi feliz hasta que cumplí dieciséis.',
'Y ahora me siento tan calvo, dispuesto a seguir durmiendo si no encuentro nada más que hacer aquí.',
'Como digo, sigo atento, pero a veces no regreso cuando quiero.',
'Y eso me preocupa un poco, no quiero volverme...',
'No, yo sé que no hay que exagerar pero así es como me siento hoy.', 
'Trabajo de diez a siete y de lunes a viernes y no sé cómo la gente puede así.',
'Y es que si quisiera ahorraría por fin.',
'Cuentitas para qué si al final todo se va.',
'No sé en qué se me va el sueldo.'
]

function tweet(){
    var index= Math.floor(Math.random() * (sentences.length));
    var tweet = sentences[index]
    // return tweet ;

    Bot.post('statuses/update', {status: tweet}, function(error, tweet, response) {
                        if (error) {
                            console.log("Error making post. ", error.message);
                        };
                    });
}

tweet()
console.log(tweet())

// function makeEngramModel(lyrics) {
//     for (let i = 0; i < lyrics.length - order; i++) {
//         const gram = lyrics.substring(i, i + order);

//         if (!nGrams[gram]) {
//             nGrams[gram] = [];
//         }
//         nGrams[gram].push(lyrics.charAt(i + order));
//     }
// }

// function tweet() {
//     fs.readFile('lyrics.txt', 'utf8', function(error, lyrics) {  
//         if (error) {
//             console.log(error.message);
//         } else {
//              makeEngramModel(lyrics);
//              let currentGram = pickRandomStart(lyrics);
             
//             // checks to see if the start of the tweet doesn't start 
//             // with punctuation or special characters
//             while (!currentGram.match(/([.?!])\s*(?=[A-Z])/)) { 
//                 currentGram = pickRandomStart(lyrics);
//             }
//             let tweet = currentGram;

//             // runs until char limit is reached and tries finishing the last word it was on
//             for (let j = 0; (j < 80) || (tweet.charAt(j).match(/([.?!])\s*(?=[A-Z])/)); j++) {
//                 const possibilities = nGrams[currentGram];
//                 const next = possibilities[Math.floor(Math.random()*possibilities.length)];
//                 tweet += next;
//                 const len = tweet.length;
//                 currentGram = tweet.substring(len-order, len);
//             }
//             console.log(tweet)
            
//             Bot.post('statuses/update', {status: tweet}, function(error, tweet, response) {
//                 if (error) {
//                     console.log("Error making post. ", error.message);
//                 };
//             });
//         }
//     });
// }

// tweet();