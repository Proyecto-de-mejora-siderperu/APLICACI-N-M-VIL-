import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Evaluation } from 'src/app/core/models/evaluation';
import { Form } from 'src/app/core/models/form';
import { EvaluationService } from 'src/app/core/services/evaluation.service';
import { FormService } from 'src/app/core/services/form.service';

@Component({
  selector: 'app-edit-evaluation',
  templateUrl: './edit-evaluation.component.html',
  styleUrls: ['./edit-evaluation.component.scss'],
})
export class EditEvaluationComponent implements OnInit {

  forms: Form[] = [];
  evaluation: Evaluation = new Evaluation();
  messageError: string = '';
  constructor(private formService: FormService,private activatedRoute:ActivatedRoute, private evaluationService: EvaluationService, private router: Router, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
        let id=params.get('id');
        console.log(id)
        if(id){
          this.evaluationService.get(Number(id)).subscribe((response)=>{
            console.log(response);
            if(response.success){
              this.evaluation=response.data;
            }
          })
        }
    });
    this.formService.getFormsActive().subscribe((data: any) => {
      this.forms = data.data;
    });
  }


  updateEvaluation() {
    if (this.evaluation.title && this.evaluation.date_start && this.evaluation.date_end && this.evaluation.for_user && this.evaluation.form_id) {
      this.evaluationService.update(this.evaluation.id,this.evaluation).subscribe(data => {
        if (data.success) {
          this.alertCtrl.create({
            message: "Evaluación actualizada correctamente",
          }).then((event) => {
            event.present();
          });
          this.router.navigate(['/admin/evaluations']);
        } else {
          this.messageError = data.message;
        }
      });
    } else {
      this.messageError = "Complete todos los datos para continuar";
    }
  }
}