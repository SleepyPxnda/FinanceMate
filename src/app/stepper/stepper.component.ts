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
    propType: ['', Validators.required],
    stateType: ['', Validators.required],
    propPrice: ['', Validators.required]
  });

  stepTwo = this._formBuilder.group({
    agentCosts: ['', Validators.required]
  });

  propertyPrice: number = 0;
  agentCosts: number = 0;

  constructor(private _formBuilder: FormBuilder) {}

  protected readonly estateTaxForFederalStates = estateTaxForFederalStates;
  protected readonly PropertyType = PropertyType;

  test() {
    console.log(this.stepOne.get("propPrice")?.value)
    console.log(this.stepTwo.get("agentCosts")?.value)
  }
}
