import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Evaluation } from '../models/evaluation';
import { MasterService } from './master.service';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService extends MasterService<Evaluation> {
  constructor(public override http: HttpClient) {
    super(http,"evaluation");
   }
   
}
