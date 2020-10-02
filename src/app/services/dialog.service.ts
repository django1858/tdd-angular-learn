import { Injectable, Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import { ComponentType } from '@angular/cdk/portal';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private matDialog: MatDialog) { }

  open(component: ComponentType<any>){
    this.matDialog.open(component);
  }

}
