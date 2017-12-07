import {Injectable} from '@angular/core';
import {Cargo} from './cargo.model';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class CargosService {
  API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }
  //(public id: number,
    //public funcoes: Funcao)

  getCargo(id: number): Observable<Cargo> {
    return this.http.get<Cargo>(this.API_URL + '/cargos/' + id + '?_expand=funcao');
  }

  save(id: number, nome: string) {
    const cargo = {'cargoId': id, nome: nome};
    return this.http.post(this.API_URL + '/cargos', cargo);
  }

  delete(id: number) {
    return this.http.delete(this.API_URL + '/cargos/' + id);
  }
}
