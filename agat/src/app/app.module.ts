import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { OrcamentoComponent} from './orcamento/orcamento.component';
import { AssistenciaComponent} from './assistencia/assistencia.component';

@NgModule({
  declarations: [
    AppComponent, UsuarioComponent,OrcamentoComponent,AssistenciaComponent
      ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
