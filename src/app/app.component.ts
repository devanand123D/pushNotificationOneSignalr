import { Component } from '@angular/core';
import { OnesignalService } from 'src/app/onesignal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'onesignalrpushonity';
  constructor(private os: OnesignalService){}
  
  ngOnInit() { 
    // this.os.onInit();
  }
}
