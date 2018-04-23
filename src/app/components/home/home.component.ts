import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ElectronService } from "ngx-electron";
//import { environment, IPC_CONSTANTS } from '../../../environments/environment';
const {IPC_CONSTANTS} = require('../../../assets/constants');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  appName:string = "Desktop App";
  syncCall:string = "";
  asyncCall:string = "";
  constructor(private electronService:ElectronService, private ref: ChangeDetectorRef) { }

  ngOnInit() {
    //Async Listener
    if(this.electronService.isElectronApp){
      this.electronService.ipcRenderer.on(IPC_CONSTANTS.SYNC_REPLY, (event, args) => {
        this.asyncCall = args;
        //zone.js doesnt detect changes on ipc.  manually detect
        this.ref.detectChanges();
      });
    }
  }
  
  testElectronCall() {
    //sync Listener
    if(this.electronService.isElectronApp){
      this.syncCall = this.electronService.ipcRenderer.sendSync(IPC_CONSTANTS.SYNC_TEST);
      this.electronService.ipcRenderer.send(IPC_CONSTANTS.ASYNC_TEST);
    }else{
      this.syncCall = "This is running in a browser and not in electron";
    }
  }

  

}
