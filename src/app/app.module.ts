import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './shared/estrutura/cabecalho/cabecalho.component';
import { RodapeComponent } from './shared/estrutura/rodape/rodape.component';
import { SidebarComponent } from './shared/estrutura/sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { InterceptorService } from './shared/service/interceptor.service';
import { TrucatePipe } from './shared/pipes/trucate.pipe';
import { DetalheComponent } from './home/detalhe/detalhe.component';
import { ComentarioComponent } from './home/comentario/comentario.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    SidebarComponent,
    HomeComponent,
    TrucatePipe,
    DetalheComponent,
    ComentarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
