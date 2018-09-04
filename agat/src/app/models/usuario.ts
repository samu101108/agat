export class Usuario {
  constructor(
  public nome: String,
  public email: String,
  public datadenascimento: String,
  public endereco?: String,
  public bairro?: String,
  public cidade?: String,
  public uf?: String,
  public estado?: String,
  public telefone?: number,
  public senha?: String,
  public confirmarsenha?: String
) {}
}
