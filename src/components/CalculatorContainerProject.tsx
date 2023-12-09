import { useState } from 'react';
import { InputField, FormProjectDataType, ProjectDetailsType } from '../@types/types';
import './CalculatorContainer.css';
import FormSection from './FormSection';
import ResultCard from './ResultCard';
import { formatCurrency, calcProject } from '../helpers/calcProject';

const inputFields:InputField[] = [
  {
    id: 'hourlyRate',
    label: 'Qual o valor da sua hora de trabalho?',
    inputInfo: 'R$/hora',
  },
  {
    id: 'workedHoursPerDay',
    label: 'Quantas horas por dia você vai trabalhar no projeto?',
    inputInfo: 'horas/dia',
  },
  {
    id: 'workedDays',
    label: 'Quantas dias você vai trabalhar no projeto?',
    inputInfo: 'dias',
  },
  {
    id: 'complexityAdjustment',
    label: 'Você vai dar um desconto? Você quer inserir um adicional de complexidade?',
    inputInfo: '%',
  },
];

function CalculatorContainerProject() {
  // Estado - Valor que quando atualizado, é exibido na tela imediatamente
  /*
    formData = {
      valorHora: 0000,
      horasTrabalhadas: 00,
      disTrabalhados: 00,
      desconto: 00,
    }
  */
  const [formProjectData, setFormProjectData] = useState({} as FormProjectDataType);
  const [projectDetails, setProjectDetails] = useState({} as ProjectDetailsType);

  // Arrow function, que por ser evento irá sempre ter o parâmetro "event" ou "e".
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // Substituindo um valor por outro.
    setFormProjectData({
      ...formProjectData, // Spread Operator
      [name]: value, // Notação de colchetes ou Computed Property Name
    });
  };

  // Evento de envio dos dados do formulário.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // TODO: Eu preciso criar uma função que calcula pra mim os valores
    e.preventDefault(); // impede o recarregamento da página ao submeter o formulário.
    const formProjectResult = calcProject(formProjectData);
    setProjectDetails({
      projectValue: formatCurrency.format(formProjectResult.projectValue),
      projectValueWithAdjustment: formatCurrency.format(formProjectResult.projectValueWithAdjustment),
      adjustment: formatCurrency.format(formProjectResult.adjustment),
    });
  };

  return (
    <div className="calculator__container">
      <div className="container">
        <FormSection
          inputFields={ inputFields }
          onChange={ handleInputChange }
          onSubmit={ handleSubmit }
        />
        <ResultCard>
          <p>O custo do projeto é:</p>
          <h2>
            { projectDetails.projectValue }
          </h2>
          <p>O custo do projeto com desconto ou com adicional de complexidade é:</p>
          <h2>
            { projectDetails.projectValueWithAdjustment }
          </h2>
          <p>O valor do adicional de complexidade ou desconto é:</p>
          <h2>
            { projectDetails.adjustment }
          </h2>
        </ResultCard>
      </div>
    </div>
  );
}

export default CalculatorContainerProject;
