import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import * as moment from 'moment';
import { DatatableParameters } from 'src/app/core/models/datatable-parameters';
import { Evaluation } from 'src/app/core/models/evaluation';
import { EvaluationService } from 'src/app/core/services/evaluation.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-evaluations',
  templateUrl: './evaluations.page.html',
  styleUrls: ['./evaluations.page.scss'],
})
export class EvaluationsPage implements OnInit {

  dtOptions: any = {};
  evaluations: Evaluation[];

  @ViewChild(DataTableDirective, { static: false }) tableevaluations!: DataTableDirective;
  constructor(private render: Renderer2, private http: HttpClient, private evaluationService: EvaluationService, private router: Router) {

  }
  editarEvaluation(id: any) {
    this.router.navigate(["/admin/evaluations/edit", id]);
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
            this.evaluationService.url() + '/pagination',
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
        { data: 'title', },
        {
          data: 'date_start',
          render(data: any, type: any, row: any) {
            return moment(data).format("DD/MM/YYYY");
          }
        },
        {
          data: "status",
          render(data: any, type: any, row: any) {
            return `<span dataidevaluationsstatus="${row.id}" class="badge badge-${data == "activo" ? "success" : "danger"}">${data}</span>`;
          }
        }
      ],
      responsive: false
    };
  
  }
  openForm(id: any) {
    console.log(id);
  }
  changeStatus(id: any) {
    this.evaluationService.delete(Number(id)).subscribe(data => {
      if (data.success) {
        this.refresh();
      }
    })
  }
  refresh() {
    this.tableevaluations.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.ajax.reload();
    })
  };

 ionViewWillEnter(){
  if (this.tableevaluations) {
    this.refresh();
  }
 }
}
