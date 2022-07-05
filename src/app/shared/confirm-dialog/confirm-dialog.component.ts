import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Component, Inject, OnInit} from '@angular/core';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: { title: string, message: string }) {
  }

  ngOnInit(): void {
  }

}
