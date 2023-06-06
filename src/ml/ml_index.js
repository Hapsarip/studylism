const brain = require('brain.js')
const data = require('../../data/dataAVK.json')
const network = new brain.recurrent.LSTM()

const trainingData = data.map(item => ({
    input: item.text,
    output: item.category
}));

network.train(trainingData, {
    iterations:10,
    erroThresh: 0.011
})

import fs from 'fs';
fs.writeFileSync('ml_index.js', `export default ${ net.toFunction().toString() };`);

// export default function Model (){
//     const readline = require("readline")

//     const rl =
//     readline.createInterface({
//         input: process.stdin,
//         output: process.stdout
//     })

//     let userInput = "";

//     rl.question("coba input: "+function (string) {
//         userInput = string;
      
//         const output = network.run(userInput)
//         console.log(output)
      
//         // close input stream
//         rl.close();
//       });    
// }
