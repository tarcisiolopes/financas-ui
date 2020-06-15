import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent{
  pessoas = [
    {nome: 'Tarcisio Lopes', cidade: 'Goiânia', estado: 'GO', ativo: true},
    {nome: 'Paulo Roberto', cidade: 'Piracanjuba', estado: 'GO', ativo: true},
    {nome: 'Pedro Victor', cidade: 'Uberlandia', estado: 'MG', ativo: false},
    {nome: 'Henrique Morato', cidade: 'Goiânia', estado: 'GO', ativo: true},
    {nome: 'João Paulo Nascimento', cidade: 'São Paulo', estado: 'SP', ativo: true},
    {nome: 'Pollyana Lamounier', cidade: 'Brasília', estado: 'DF', ativo: false}
  ]
}
