import React, { useState } from 'react';
import './App.css';
import { estateTaxForFederalStates } from './constants';

function CalculatorComponent() {
  const [propertyPrice, setPropertyPrice] = useState<number>(0);
  const [propertyStateTax, setPropertyStateTax] = useState<number>(0.05);
  const [agentCost, setAgentCost] = useState<number>(0.1);
  const [propertyRent, setPropertyRent] = useState<number>(0);

    return (
      <div>
        <div className='m-3'>
          <h1 className="font-bold text-lg">Berechnung der Investitionskosten</h1>
          <div className='m-3'>
            <div className='mb-2'>
              <label className='text-blue-700' htmlFor='propertyPriceInput'>Preis der Immobilie: </label>
              <input 
                placeholder='0' 
                id='propertyPriceInput'
                name='propertyPriceInput' 
                type='number' 
                onChange={(e) => setPropertyPrice(parseInt(e.target.value, 10))}>
              </input>
              <span>€</span>
            </div>
            <div className='mb-2'>
              <label className='text-blue-700' htmlFor='propertyStateTaxSelect'>Bundesland der Immobilie: </label>
              <select id='propertyStateTaxSelect' name='propertyStateTaxSelect' onChange={(e) => setPropertyStateTax(parseFloat(e.target.value))}>
                {estateTaxForFederalStates.map(tax => 
                <option value={tax.value}>{tax.name}</option>
                  )}
              </select>
            </div>
            <div className='mb-2'>
              <label className='text-blue-700' htmlFor='agentCostInput'>Maklerprozente: </label>
              <input 
                placeholder='0' 
                id='agentCostInput' 
                step="0.5" 
                max="100" 
                min="1" 
                name='agentCostInput' 
                type='number' 
                onChange={(e) => setAgentCost(parseFloat(e.target.value) / 100)}>
              </input>
              <span>%</span>
            </div>
          </div>
        </div>
        <SummaryInvestmentCostsComponent propertyPrice={propertyPrice}  propertyStateTax={propertyStateTax} agentCost={agentCost}></SummaryInvestmentCostsComponent>
        <div className='m-3'>
          <h1 className="font-bold text-lg">Ertragsrechnung</h1>
          <div className='m-3'>
            <div className='mb-2'>
              <label className='text-blue-700' htmlFor='propertyRentInput'>Monatliche Nettokaltmiete: </label>
              <input
                  placeholder='0'
                  id='propertyRentInput'
                  step="10"
                  name='propertyRentInput'
                  type='number'
                  onChange={(e) => setPropertyRent(parseInt(e.target.value))}>
              </input>
              <span>€</span>
            </div>
          </div>
        </div>
      </div>
  );
}

function SummaryInvestmentCostsComponent(props: {propertyPrice: number, propertyStateTax: number, agentCost: number}) {
  const sum = props.propertyPrice + props.propertyPrice * props.propertyStateTax + props.propertyPrice * props.agentCost + props.propertyPrice * 0.015
  return (
      <div className='m-3'>
        <h1 className="font-bold text-lg">Zusammenfassung</h1>
        <div className='m-3'>
          <p>Immobilienpreis: {props.propertyPrice} €</p>
          <p>Grunderwerbssteuer: {(props.propertyStateTax * 100).toFixed(2)} %</p>
          <p>Maklerkosten ({(props.agentCost * 100).toFixed(2)}%): {(props.propertyPrice * props.agentCost).toFixed(2)} €</p>
          <p>Notarkosten: (1.5%): {(props.propertyPrice * 0.015).toFixed(2)}</p>
          <p>Investitionskosten: {sum.toFixed(2)}</p>
        </div>
      </div>
  )
}

function App() {
  return (
    <div className="m-5 bg-white rounded-md shadow-md">
      <CalculatorComponent></CalculatorComponent>
    </div>
  );
}

export default App;
