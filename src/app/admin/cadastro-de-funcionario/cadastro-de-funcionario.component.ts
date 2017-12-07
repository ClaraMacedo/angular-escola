import {Component, OnInit} from '@angular/core';
import {PessoasService} from "../pessoas.service";
import {FuncionariosService} from "../funcionarios.service";


@Component({
  selector: 'app-cadastro-de-funcionario',
  templateUrl: './cadastro-de-funcionario.component.html',
  styleUrls: ['./cadastro-de-funcionario.component.css']
})
export class CadastroDeFuncionarioComponent implements OnInit {
  pessoas = null;
  id = null;
  codigo;
  tipo;
  funcao;
  pessoa;
  cargo;
  cadastro_ok = false;
  cadastro_erro = false;

  constructor(private pessoasService: PessoasService,
              private funcionariosService: FuncionariosService,
              ) {
  }

  ngOnInit() {
    this.pessoasService.getPessoas()
      .subscribe(pessoas => this.pessoas = pessoas);
  }

  salvar() {
    this.funcionariosService.save(this.id, parseInt(this.pessoa), this.tipo, parseInt(this.cargo))
      .subscribe(
        funcionario => {
         
          this.cadastro_ok = true;
        },
        erro => {
          this.cadastro_erro = true;
          this.cadastro_ok = false;
        }
      );
      
  }
  
  

}
