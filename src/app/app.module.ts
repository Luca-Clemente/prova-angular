import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LucaComponent } from './luca/luca.component';
import { RouterModule } from '@angular/router';
import { LucaDetalhesComponent } from './luca-detalhes/luca-detalhes.component';
import { LucaListaComponent } from './luca-lista/luca-lista.component';
import { LucaDisciplinasService } from './luca-disciplinas.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: LucaComponent },
      { path: 'luca-detalhes', component: LucaDetalhesComponent },
      { path: 'luca-lista', component: LucaListaComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    LucaComponent,
    LucaDetalhesComponent,
    LucaListaComponent,
  ],
  bootstrap: [AppComponent],
  providers: [LucaDisciplinasService],
})
export class AppModule {}
