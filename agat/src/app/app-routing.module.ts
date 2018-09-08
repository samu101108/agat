import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioComponent } from './usuario/usuario.component';
import { OrcamentoComponent} from './orcamento/orcamento.component';
import { AssistenciaComponent} from './assistencia/assistencia.component';

export const routes: Routes = [

    {path:'usuario', component: UsuarioComponent},
    {path:'orcamento', component: OrcamentoComponent},
    {path:'assistencia', component: AssistenciaComponent},


];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule {}
