// module.exports.testElectronService = () => {
//     let x = "Sync message reply from Controller.js";
//     console.log(x);
//     return x;
// }

//consts dont get copied to dist on build.  location is where it is after file movement
const { IPC_CONSTANTS } = require('../src/assets/constants');

module.exports.buildIpc = (ipcMain) => {

    ipcMain.on(IPC_CONSTANTS.ASYNC_TEST, (event, arg) => {
        setTimeout(() => {
            console.log('Async Message Reply')
            event.sender.send(IPC_CONSTANTS.SYNC_REPLY, 'Async Message Reply');
        }, 1000);
    });
    ipcMain.on(IPC_CONSTANTS.SYNC_TEST, (event, arg) => {
        //event.returnValue = testElectronService();
        event.returnValue = "Sync message reply from Controller.js";
    });
}