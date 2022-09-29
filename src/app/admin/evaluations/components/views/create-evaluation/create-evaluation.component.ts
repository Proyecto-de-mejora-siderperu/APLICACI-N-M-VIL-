import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Evaluation } from 'src/app/core/models/evaluation';
import { Form } from 'src/app/core/models/form';
import { EvaluationService } from 'src/app/core/services/evaluation.service';
import { FormService } from 'src/app/core/services/form.service';
@Component({
  selector: 'app-create-evaluation',
  templateUrl: './create-evaluation.component.html',
  styleUrls: ['./create-evaluation.component.scss'],
})
export class CreateEvaluationComponent implements OnInit {
  forms: Form[] = [];
  evaluation: Evaluation = new Evaluation();
  messageError: string = '';
  constructor(private formService: FormService, private evaluationService: EvaluationService, private router:Router,private alertCtrl:AlertController) { }

  ngOnInit() {
    this.formService.getFormsActive().subscribe((data: any) => {
      console.log(data);
      this.forms = data.data;
    });


  }
  createEvaluation() {
    if (this.evaluation.title && this.evaluation.date_start && this.evaluation.date_end && this.evaluation.for_user && this.evaluation.form_id) {
      this.evaluationService.create(this.evaluation).subscribe(data => {
        console.log(data);
        if(data.success){
          this.alertCtrl.create({
            message: "Evaluación creada correctamente",
          }).then((event) => {
            event.present();
          });
          this.router.navigate(['/admin/evaluations']);
        }else{
          this.alertCtrl.create({
            message: data.message,
          }).then((event) => {
            event.present();
          });
          this.messageError=data.message;
        }
      });
    } else {
      this.messageError = "Complete todos los datos para continuar";
    }
  }

}
