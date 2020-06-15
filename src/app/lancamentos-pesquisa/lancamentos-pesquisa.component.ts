import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent {
  lancamentos = [
    { tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: new Date(2019, 6, 30), dataPagamento: null, valor: 4.55, pessoa: 'Pão de Mel' },
    // tslint:disable-next-line:max-line-length
    { tipo: 'RECEITA', descricao: 'Venda de Software', dataVencimento: new Date(2019, 6, 12), dataPagamento: new Date(2019, 6, 9), valor: 80000, pessoa: 'Feito de Rap' },
    { tipo: 'DESPESA', descricao: 'Impostos', dataVencimento: new Date(2019, 7, 20), dataPagamento: null, valor: 14321, pessoa: 'Ministério da Fazenda' },
    // tslint:disable-next-line:max-line-length
    { tipo: 'RECEITA', descricao: 'Impostos', dataVencimento: new Date(2019, 12, 25), dataPagamento: new Date(2019, 12, 31), valor: 200, pessoa: 'Ministério da Fazenda' },
  ];
}
