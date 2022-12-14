export class FormularioPresupuesto {

  public tipo: string = "";
  public entidad: string = "";
  public cantidad: number = 0;

  constructor(tipo: string, entidad: string, cantidad: number){
    this.tipo = tipo;
    this.entidad = entidad;
    this.cantidad = cantidad;
  }
}
