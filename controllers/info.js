const args = require('../yargs');
const os = require('os');
const numeroCpu = os.cpus().length;

const info = (_, res) => {
    const informacion = {
        args: args,
        sistema: process.platform,
        nodeVersion: process.version,
        memory: process.memoryUsage().rss,
        path: process.cwd(),
        processId: process.pid,
        file: __dirname,
        numeroCpu: numeroCpu,
    }

    informacion.keys = Object.keys(informacion.args)
    //   for (let i = 0; i < 100; i++) {

    //  console.log(i);
//   }
    res.render('info', { informacion: informacion })
}

module.exports = { info }