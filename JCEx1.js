// Define the class Guitarra
class Guitarra {
  // Method (action)
  tocarAcorde() {
    console.log("Strummmm!");
  }
}

// Create an object outside the class using 'new'
const miPrimeraGuitarra = new Guitarra();

// Assign values manually to the properties
miPrimeraGuitarra.marca = "JC";
miPrimeraGuitarra.modelo = "El Duro";
miPrimeraGuitarra.numeroCuerdas = 8;

// Call the method
miPrimeraGuitarra.tocarAcorde();
