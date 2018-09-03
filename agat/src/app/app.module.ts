import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { AssistenciaComponent } from './assistencia/assistencia.component';
import { OrcamentoComponent } from './orcamento/orcamento.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    AssistenciaComponent,
    OrcamentoComponent
  ],
  imports: [
    BrowserModule
  ],exports:[
    UsuarioComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
