function WebLogs(msg, type) {
    type = type || 'info';
    console.log({message: msg, type: type});
}
module.exports = {WebLogs};