import { ToastrService } from 'ngx-toastr';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Nova Gestion';

  constructor(private toast: ToastrService) {}

  public showToastSuccess(): void {
    this.toast.success('Réussi!');
  }

  public showToastWarning(): void {
    this.toast.warning('Problème!');
  }

  public showToastError(): void {
    this.toast.error('Erreur!');
  }

  public showToastInfo(): void {
    this.toast.info('Info message', 'Info titre');
  }
}
