class Arma {
  private nome: string;
  private dano: number;
  private level: number;

  public constructor(nome: string, dano: number, level: number) {
    this.nome = nome;
    this.dano = dano;
    this.level = level;
  }

  public showInfo() : string {
    return `Esta arma é uma ${this.nome} que casa ${this.dano} de dano e tem level ${this.level}`;
  }
};

export { Arma };