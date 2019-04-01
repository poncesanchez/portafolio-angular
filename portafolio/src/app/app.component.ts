import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';
import { ProductosService } from './services/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Inyeccion de dependencia 
  // se añade un constructor y se llama al servicio.
  constructor( 
    public infoPaginaService: InfoPaginaService, 
    public productosService: ProductosService 
    ){
  }
}
