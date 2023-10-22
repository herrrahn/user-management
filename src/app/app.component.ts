import {Component, OnInit} from '@angular/core';
import {MsalService} from '@azure/msal-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'user-management';

  constructor(private msalService: MsalService) {
  }

  async ngOnInit() {
    await this.msalService.instance.initialize();
    console.log('--------msalService initialized--------')
  }


}
