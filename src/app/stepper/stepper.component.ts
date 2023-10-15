import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {estateTaxForFederalStates} from "../services/constants";
import {PropertyType} from "../services/types";

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent {

  stepOne = this._formBuilder.group({
    immoType: ['', Validators.required],
    stateType: ['', Validators.required]
  });

  constructor(private _formBuilder: FormBuilder) {}

  protected readonly estateTaxForFederalStates = estateTaxForFederalStates;
  protected readonly PropertyType = PropertyType;
}
