import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrcamentoComponent } from './orcamento.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OrcamentoComponent
  ],
  exports:[OrcamentoComponent
  ]
})
export class OrcamentoModule { }
