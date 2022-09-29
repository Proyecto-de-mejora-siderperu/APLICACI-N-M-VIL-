import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DatatableParameters } from 'src/app/core/models/datatable-parameters';
import { Form } from 'src/app/core/models/form';
import { FormService } from 'src/app/core/services/form.service';
import { environment } from 'src/environments/environment';
import * as moment from "moment";
import { DataTableDirective } from 'angular-datatables';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.page.html',
  styleUrls: ['./forms.page.scss'],
})
export class FormsPage implements OnInit {

  dtOptions: any = {};
  forms: Form[];
  
  @ViewChild(DataTableDirective, { static: false }) tableforms!: DataTableDirective;
  constructor(private render: Renderer2, private http: HttpClient, private formService: FormService, private router: Router) {

  }
  editarForm(id: any) {
    this.router.navigate(["/admin/forms/edit", id]);
  }
  ngOnInit(): void {

    const that = this;
    this.render.listen("body", "click", function (e) {
      if (e.target.hasAttribute("dataidform")) {
        that.editarForm(e.target.getAttribute("dataidform"));
      }else if(e.target.hasAttribute("dataidformstatus")){
        that.changeStatus(e.target.getAttribute("dataidformstatus"));
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
            this.formService.url() + '/pagination',
            dp, {}
          ).subscribe(resp => {
            that.forms = resp.data;
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
            return `<i class="fa fa-edit" dataidform="${data}"></i>`;
          }
        },
        { data: 'title', },
        {
          data: 'created_at',
          render(data: any, type: any, row: any) {
            return moment(data).format("DD/MM/YYYY");
          }
        },
        {
          data: "status",
          render(data: any, type: any, row: any) {
            return `<span dataidformstatus="${row.id}" class="badge badge-${data == "activo" ? "success" : "danger"}">${data}</span>`;
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
      this.formService.delete(Number(id)).subscribe(data=>{
        if(data.success){
            this.refresh();
        }
      })
  }
  refresh() {
    this.tableforms.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.ajax.reload();
    })
  };
  ionViewWillEnter(){
    if (this.tableforms) {
      this.refresh();
    }
   }
}
