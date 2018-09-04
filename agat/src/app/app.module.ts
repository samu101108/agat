import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsuarioModule } from './usuario/usuario.module';
import { AssistenciaModule } from './assistencia/assistencia.module';
import { OrcamentoModule } from './orcamento/orcamento.module';


@NgModule({
  declarations: [
    AppComponent,
      ],
  imports: [
    BrowserModule,
    UsuarioModule,
    AssistenciaModule,
    OrcamentoModule
  ]
  ,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
