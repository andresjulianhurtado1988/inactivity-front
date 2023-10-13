import { Component } from '@angular/core';
import { BnNgIdleService } from 'bn-ng-idle';
import { InactivityService } from './services/inactivity.service';
import { AlertaComponent } from './components/modal/alerta/alerta.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'project-to-activity';
  status: string;
  private isTimedOut: boolean;
  private inactivity: any;

  constructor(
    private bnIdle: BnNgIdleService,
    private _inactivityService: InactivityService,
    public dialog: MatDialog
  ) {
    this.status = '';
    this.isTimedOut = false;
    this.conteoInactividad(this.isTimedOut);
  }

  conteoInactividad(isTimedOut: boolean) {
    // this._inactivityService.createActivity().subscribe((resp) => {
    //   if (resp.status == 'success') {
    //     this.status = resp.status;
    //   } else {
    //     this.status = 'error';
    //   }
    // });
    // this.inactivity = this.bnIdle.startWatching(5).subscribe((isTimedOut) => {
    //   if (isTimedOut) {
    //     this.bnIdle.stopTimer();
    //     this.openDialog();
    //   }
    // });
  }

  openDialog(): void {
    //   this.inactivity.unsubscribe();
    //   const dialogRef = this.dialog.open(AlertaComponent);
    //   this._inactivityService.createInactivity().subscribe((resp) => {
    //     if (resp.status == 'success') {
    //       this.status = resp.status;
    //     } else {
    //       this.status = 'error';
    //     }
    //   });
    //   dialogRef.afterClosed().subscribe((result) => {
    //     this.isTimedOut = false;
    //     this.conteoInactividad(this.isTimedOut);
    //   });
  }
}
