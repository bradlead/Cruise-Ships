function Ship(itinerary) {
  this.itinerary = itinerary;
  this.currentPort = itinerary.ports[0];
}

Ship.prototype = {
  setSail() {
    this.currentPort = false;
  },
  dock() {
    const itinerary = this.itinerary;
    const previousPortIndex = itinerary.ports.indexOf(this.currentPort);

    this.currentPort = itinerary.ports[previousPortIndex + 1];
  },
};

module.exports = Ship;
