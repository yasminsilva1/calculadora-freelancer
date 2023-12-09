export type InputField = {
  id: string;
  label: string;
  inputInfo: string;
};

export type FormDataType = {
  monthlyNetSalary: number,
  workHoursPerDay: number,
  workDaysPerWeek: number,
  vacationWeeksPerYear: number,
  monthlyExpenses: number,
};

export type SalaryDetailsType = {
  hourlyRate: string,
  monthlyGrossIncome: string,
};

export type FormProjectDataType = {
  hourlyRate: string,
  workedHoursPerDay: string,
  workedDays: string,
  complexityAdjustment: string,
};

export type ProjectDetailsType = {
  projectValue: string,
  projectValueWithAdjustment: string,
  adjustment: string,
};
