import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TabViewModule } from 'primeng/tabview';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { TooltipModule } from 'primeng/tooltip';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { AccordionModule } from 'primeng/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuModule } from 'primeng/menu';
import { SelectButtonModule } from 'primeng/selectbutton';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputMaskModule} from 'primeng/inputmask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LancamentosPesquisaComponent } from './lancamentos-pesquisa/lancamentos-pesquisa.component';
import { PessoasComponent } from './pessoas/pessoas.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { LancamentoCadastroComponent } from './lancamento-cadastro/lancamento-cadastro.component';
import { CadastroPessoaComponent } from './cadastro-pessoa/cadastro-pessoa.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    LancamentosPesquisaComponent,
    PessoasComponent,
    NavbarComponent,
    LancamentoCadastroComponent,
    CadastroPessoaComponent,
    MessageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabViewModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    PaginatorModule,
    TooltipModule,
    FormsModule,
    DropdownModule,
    InputTextareaModule,
    CalendarModule,
    AccordionModule,
    BrowserAnimationsModule,
    MenuModule,
    SelectButtonModule,
    InputNumberModule,
    InputMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
