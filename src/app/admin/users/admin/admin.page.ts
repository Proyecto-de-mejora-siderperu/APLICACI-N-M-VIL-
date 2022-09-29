import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import * as moment from 'moment';
import { DatatableParameters } from 'src/app/core/models/datatable-parameters';
import { Evaluation } from 'src/app/core/models/evaluation';
import { UserService } from 'src/app/core/services/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  dtOptions: any = {};
  evaluations: Evaluation[];

  @ViewChild(DataTableDirective, { static: false }) tableeadministradores!: DataTableDirective;
  constructor(private render: Renderer2, private http: HttpClient, private userService: UserService, private router: Router) {

  }
  editarEvaluation(id: any) {
    this.router.navigate(["/admin/users/edit", id]);
  }
  ngOnInit(): void {
    const that = this;
    this.render.listen("body", "click", function (e) {
      if (e.target.hasAttribute("dataidevaluations")) {
        that.editarEvaluation(e.target.getAttribute("dataidevaluations"));
      } else if (e.target.hasAttribute("dataidevaluationsstatus")) {
        that.changeStatus(e.target.getAttribute("dataidevaluationsstatus"));
      }
    })
    this.dtOptions = {
      pagingType: 'first_last_numbers',
      pageLength: 10,
      serverSide: true,
      processing: true,
      ajax: (dp: any, callback) => {
        that.http
          .post<DatatableParameters>(
            this.userService.url() + '/pagination_administrador',
            dp, {}
          ).subscribe(resp => {
            that.evaluations = resp.data;
            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsFiltered,
              data: resp.data
            });
          });
      },
      language: {
        url: environment.apiUrl + "/datatables/spanish"
      },
      columns: [
        {
          data: 'id',
          render: function (data: any, type: any, row: any) {
            return `<i class="fa fa-edit" dataidevaluations="${data}"></i>`;
          }
        },
        { data: 'ficha_sap', },
        {
          data: 'name'
        },
        {
          data: "area"
        }
      ],
      responsive: false
    };

  }
  openForm(id: any) {
    console.log(id);
  }
  changeStatus(id: any) {
    this.userService.delete(Number(id)).subscribe(data => {
      if (data.success) {
        this.refresh();
      }
    })
  }
  refresh() {
    this.tableeadministradores.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.ajax.reload();
    })
  };

  ionViewWillEnter() {
    if (this.tableeadministradores) {
      this.refresh();
    }
  }
}