import { FormProjectDataType } from '../@types/types';

// Este objeto irá server para converter valores para o padrão monetário brasileiro.
export const formatCurrency = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

export function calcProject({
  hourlyRate,
  workedHoursPerDay,
  workedDays,
  complexityAdjustment,
}: FormProjectDataType) {
  const projectValue = Number(hourlyRate) * Number(workedHoursPerDay) * Number(workedDays);
  const projectValueWithAdjustment = projectValue * (1 + Number(complexityAdjustment));
  const adjustment = projectValueWithAdjustment - projectValue;

  return ({
    projectValue,
    projectValueWithAdjustment,
    adjustment,
  });
}
