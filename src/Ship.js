function Ship(currentPort) {
  this.currentPort = currentPort;
}


Ship.prototype = {
  setSail() {
    this.currentPort = false;
  },
  Dock(Port) {
    this.currentPort = Port;
  },


};

module.exports = Ship;
