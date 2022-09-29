import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  constructor(private renderer:Renderer2) { }

  ngOnInit() {
    /* this.renderer.listen("document","visibilitychange",function (params:any) {
        console.log(params);
    }) */
  }


}
