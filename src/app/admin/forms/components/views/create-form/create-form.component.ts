import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Answer } from 'src/app/core/models/answer';
import { Form } from 'src/app/core/models/form';
import { Question } from 'src/app/core/models/question';
import { FormService } from 'src/app/core/services/form.service';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss'],
})
export class CreateFormComponent implements OnInit {
  editTitle: boolean = true;
  errorMessage: string = "";
  form: Form = new Form();
  constructor(private formService: FormService, private router: Router) { }

  ngOnInit() {
    this.form.title = "Nombre formulario";
    this.form.description = "Descripcion formulario";
    this.form.questions = [];
  }
  changeTitle() {
    this.form.editTitle = !this.form.editTitle;
  }
  editQuestion(question: Question) {
    question.edit = true;
    this.closeOthersQuestion(question);
  }
  closeOthersQuestion(q: Question) {
    this.form.questions.forEach((question: Question) => {
      if (question != q) {
        question.edit = false;
        question.answers.forEach((answer: Answer) => answer.edit = false);
      }
    });
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

    this.errorMessage = "";
    console.log(question);
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
      this.errorMessage = "Debe tener al menos dos opciones";
    }
  }
  createForm() {
    if (this.form.questions.length) {
      this.formService.create(this.form).subscribe(data => {
        if (data.success) {
          this.router.navigate(['/admin/forms']);
        } else {
          this.errorMessage = data.message;
        }
      });
    } else {
      this.errorMessage = "Debe tener al menos una pregunta";
    }
  }
}
