import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Answer } from 'src/app/core/models/answer';
import { Form } from 'src/app/core/models/form';
import { Question } from 'src/app/core/models/question';
import { FormService } from 'src/app/core/services/form.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss'],
})
export class EditFormComponent implements OnInit {
  editTitle: boolean = true;
  errorMessage: string = "";
  form: Form = new Form();
  constructor(private formService: FormService, private routerActivated: ActivatedRoute, private router: Router) { }
  ngOnInit() {
    this.form.title = "Nombre formulario";
    this.form.description = "Descripcion formulario";
    this.form.questions = [];
    this.routerActivated.paramMap.subscribe(params => {
      let id = params.get("id")
      if (id) {
        this.formService.get(Number(id)).subscribe(data => {
          if (data.success) {
            this.form = data.data;
            console.log(this.form);
          }
        })
      }
    })
  }
  changeTitle() {
    this.form.editTitle = !this.form.editTitle;
  }
  editQuestion(question: Question) {
    question.edit = true;
    this.closeOthersQuestion(question);
    this.errorMessage = "";
  }
  
  closeEditionQuestion(question: Question) {

    if (question.title) {
      question.edit = false;

      this.errorMessage = "";
    } else {

      this.errorMessage = "El campo no debe estar vacio";
    }
  }
  
  editAnswer(answer: Answer) {
    answer.edit = true;
    this.closeOthersAnswers(answer);
    this.errorMessage = "";
  }
  closeOthersQuestion(q: Question) {
    this.form.questions.forEach((question: Question) => {
      if (question != q) {
        question.edit = false;
        question.answers.forEach((answer: Answer) => answer.edit = false);
      }
    });
  }
  closeEditionAnswer(answer: Answer) {
    if (answer.value) {
      this.errorMessage = "";
      answer.edit = false;
    } else {
      this.errorMessage = "El campo no debe estar vacio";
    }
  }
  changeDescription() {
    this.form.editDescription = !this.form.editDescription;
  }
  closeOthersAnswers(ans: Answer) {
    this.form.questions.forEach((question: Question) => {
      question.answers.forEach((answer: Answer) => {
        if (answer != ans) {
          answer.edit = false;
        }
      });
    });
  }

  addQuestion(type: string) {
    this.errorMessage = "";
    let question = new Question();
    question.type = type;
    question.value = 1;
    question.title = "Pregunta";
    question.content = "Contenido";
    question.answers = [];
    if (type == "respuesta_unica" || type == "respuesta_multiple") {
      let answer = new Answer();
      answer.value = "Respuesta 1";

      let answer2 = new Answer();
      answer2.value = "Respuesta 2";

      question.answers.push(answer);
      question.answers.push(answer2);
    } else {
      let answer = new Answer();
      answer.value = "";
      question.answers.push(answer);
    }
    this.form.questions.push(question);
  }
  addAnswer(question: Question) {
    console.log(question);

    this.errorMessage = "";
    let answer = new Answer();
    answer.value = "Respuesta " + (question.answers.length + 1);

    question.answers.push(answer);
  }
  deleteQuestion(index: number) {
    this.form.questions.splice(index, 1);
  }
  deleteAnswer(index: number, question: Question) {
    if (question.answers.length > 2) {
      question.answers.splice(index, 1);
    } else {
      this.errorMessage = "Esta pregunta debe tener al menos dos opciones";
    }
  }
  editForm() {
    if (this.form.questions.length) {
      this.formService.update(this.form.id, this.form).subscribe(data => {
        if (data.success) {
          this.router.navigate(["/admin/forms"]);
        }
      });
    } else {
      this.errorMessage = "Debe tener al menos una pregunta";
    }
  }
}
