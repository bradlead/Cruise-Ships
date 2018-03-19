function Ship(currentPort) {
  this.currentPort = currentPort;
}
function Port(Dover) {
  this.Port = Dover;
}
Ship.prototype = {
  setSail() {
    this.currentPort = false;
  },
  Dock(port) {
    this.currentPort = port;
  },
};

module.exports = Ship;
