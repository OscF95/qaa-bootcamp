// Define the class UsuarioRedSocial
class UsuarioRedSocial {
  // Constructor receives username and email
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }

  // Method to display user info
  mostrarInfo() {
    console.log(`Usuario: ${this.username}, Email: ${this.email}`);
  }
}

// Create two different objects using 'new'
const usuario1 = new UsuarioRedSocial("juan123", "juan@email.com");
const usuario2 = new UsuarioRedSocial("aldana", "aldana@email.com");

// Call the method for both users
usuario1.mostrarInfo();
usuario2.mostrarInfo();
