import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  verHeader = true;
  verCatalogo = false;

  mostrarCatalogo() {
    this.verHeader = false;
    this.verCatalogo = true;
  }
}
