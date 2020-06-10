import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent{
  lancamentos = [
    { tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: '30/06/2019', dataPagamento: null, valor: 4.55, pessoa: 'Pão de Mel' },
    { tipo: 'RECEITA', descricao: 'Venda de Software', dataVencimento: '12/06/2019', dataPagamento: '09/06/2019', valor: 80000, pessoa: 'Feito de Rap' },
    { tipo: 'DESPESA', descricao: 'Impostos', dataVencimento: '20/07/2019', dataPagamento: null, valor: 14321, pessoa: 'Ministério da Fazenda' },
    { tipo: 'RECEITA', descricao: 'Impostos', dataVencimento: '25/12/2019', dataPagamento: "31/12/2019", valor: 200, pessoa: 'Ministério da Fazenda' },
  ]
}
