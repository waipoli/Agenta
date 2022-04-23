import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  constructor(private _route: ActivatedRoute) {
  }

  taskId: string = ""

  ngOnInit(): void {
    this._route.params.subscribe(
      (params: Params) => {
        // @ts-ignore
        this.taskId = params.taskId;
      }
    )
  }

}
