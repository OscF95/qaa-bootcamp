// Create the class VehiculoCarrera
class VehiculoCarrera {
  // Constructor receives ONLY the pilot's name
  constructor(piloto) {
    this.piloto = piloto;
    this.velocidadActual = 0; // default value
    this.gasolina = 100;      // default value
  }

  // Method to accelerate
  acelerar() {
    this.velocidadActual += 10;
    this.gasolina -= 5;

    console.log(
      `Piloto: ${this.piloto}, Velocidad: ${this.velocidadActual}, Gasolina: ${this.gasolina}`
    );
  }
}

// Create a vehicle for pilot "Mario"
const vehiculoMario = new VehiculoCarrera("Mario");

// Call the accelerate method once
vehiculoMario.acelerar();
