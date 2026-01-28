class DataStorage {
    // Objeto estático para almacenar los datos
    static storage: Record<string, any> = {};//Record<string, any> me lo sugirió la ia, hubo cambios de uando lo usé por última vez
//TS es aún más especifico, ya no bastaba con indicarle que es un objeto. 
    // Método para establecer un valor en el almacenamiento
    static add(key: string, value: any): void {
        this.storage[key] = value;
    }

    // Método para obtener un valor del almacenamiento
    static get(key: string): any {
        return this.storage[key];
    }

    // Método para eliminar un valor del almacenamiento
    static remove(key: string): void {
        delete this.storage[key];
    }

    // Método para limpiar todo el almacenamiento
    static clear(): void {
        this.storage = {};
    }
}


export default DataStorage;