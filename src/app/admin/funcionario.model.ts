import {Pessoa} from "./pessoa.model";
import {Cargo} from "./cargo.model";
import {Funcao} from "./funcao.model";

export class Funcionario {
  constructor(public id: number,
              public tipo: String,
              public pessoa: Pessoa,
              public cargo: Cargo,
              public funcao: Array<Funcao>) {
  }
}