function Port(name) {
  this.name = name;
  this.ships = [];
}

module.exports = Port;
Port.prototype = {
  addShip(ship) {
    this.ships.push(ship);
  },
  removeShip(ship) {
    this.ships.splice((this.ships.indexOf(ship)), 1);
    return this.ships;
  },
};
