import { Component, OnInit } from '@angular/core';
import { ElectronService } from "ngx-electron";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  appName:string = "Desktop App";
  callWork:string = "";
  constructor(private electronService:ElectronService) { }

  ngOnInit() {
  }
  
  testElectronCall = () => {
    if(this.electronService.isElectronApp){
      this.callWork = this.electronService.ipcRenderer.sendSync('TestService');
    }else{
      this.callWork = "This is running in a browser and not in electron";
    }
  }
}
