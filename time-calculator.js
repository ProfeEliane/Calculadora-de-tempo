import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const TimeCalculator = () => {
  const [activities, setActivities] = useState({
    planning: 0,
    materials: 0,
    grading: 0,
    feedback: 0,
    reports: 0
  });

  const [automationPercentage, setAutomationPercentage] = useState(60);
  const [timeUnit, setTimeUnit] = useState('hours');

  const handleChange = (activity, value) => {
    setActivities(prev => ({
      ...prev,
      [activity]: Number(value)
    }));
  };

  const handleChangeAutomation = (value) => {
    setAutomationPercentage(Number(value));
  };

    const handleTimeUnitChange = (event) => {
    setTimeUnit(event.target.value);
  };

    const convertToHours = (time) => {
    return timeUnit === 'minutes' ? time / 60 : time;
  };

    const displayTime = (time) => {
        return timeUnit === 'minutes' ? (time * 60).toFixed(1) : time.toFixed(1);
    }


  const totalTime = Object.values(activities).reduce((a, b) => a + b, 0);
  const automatedTime = totalTime * (automationPercentage / 100);
  const timeSaved = totalTime - automatedTime;
   const timeSavedMonthly = timeSaved * 4

  const resetInputs = () => {
    setActivities({
      planning: 0,
      materials: 0,
      grading: 0,
      feedback: 0,
      reports: 0
    });
  };

    const timeUnitDisplay = timeUnit === 'hours' ? 'horas' : 'minutos';

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Calculadora de Tempo do Professor</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
        <div className="flex items-center justify-between">
              <label className="text-sm">Unidade de Tempo:</label>
              <select
                className="w-24 p-2 border rounded"
                value={timeUnit}
                onChange={handleTimeUnitChange}
              >
                <option value="hours">Horas</option>
                <option value="minutes">Minutos</option>
              </select>
            </div>
             <div className="flex items-center justify-between">
              <label className="text-sm">Porcentagem de Automação:</label>
              <input
                type="number"
                className="w-20 p-2 border rounded"
                value={automationPercentage}
                onChange={(e) => handleChangeAutomation(e.target.value)}
                min="0"
                max="100"
              />
              <span className="text-sm ml-2">%</span>
            </div>
          <div className="grid gap-4">
             <div className="flex items-center justify-between">
              <label className="text-sm">Planejamento ({timeUnitDisplay}/semana):</label>
              <input
                type="number"
                className="w-20 p-2 border rounded"
                 value={activities.planning}
                 onChange={(e) => handleChange('planning', e.target.value)}
                min="0"
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="text-sm">Criação de materiais ({timeUnitDisplay}/semana):</label>
              <input
                type="number"
                className="w-20 p-2 border rounded"
                 value={activities.materials}
                onChange={(e) => handleChange('materials', e.target.value)}
                min="0"
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="text-sm">Correções ({timeUnitDisplay}/semana):</label>
              <input
                type="number"
                className="w-20 p-2 border rounded"
                 value={activities.grading}
                onChange={(e) => handleChange('grading', e.target.value)}
                min="0"
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="text-sm">Feedback aos alunos ({timeUnitDisplay}/semana):</label>
              <input
                type="number"
                className="w-20 p-2 border rounded"
                 value={activities.feedback}
                onChange={(e) => handleChange('feedback', e.target.value)}
                min="0"
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="text-sm">Relatórios ({timeUnitDisplay}/semana):</label>
              <input
                type="number"
                className="w-20 p-2 border rounded"
                 value={activities.reports}
                onChange={(e) => handleChange('reports', e.target.value)}
                min="0"
              />
            </div>
          </div>

          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <div className="space-y-2">
              <p className="text-sm">Tempo total semanal: {displayTime(convertToHours(totalTime))} {timeUnitDisplay}</p>
              <p className="text-sm">Tempo com automação: {displayTime(convertToHours(automatedTime))} {timeUnitDisplay}</p>
               <p className="text-sm font-bold text-green-600">Tempo economizado: {displayTime(convertToHours(timeSaved))} {timeUnitDisplay}/semana</p>
               <p className="text-sm font-bold text-green-600">Tempo economizado: {displayTime(convertToHours(timeSavedMonthly))} {timeUnitDisplay}/mês</p>

            </div>
          </div>
              <div className="mt-4 flex justify-center">
              <button
                onClick={resetInputs}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
              >
                Zerar Campos
              </button>
            </div>
              <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                <h4 className="font-semibold mb-2">O que você pode fazer com esse tempo:</h4>
                <ul className="list-disc list-inside text-sm">
                  <li>Preparar aulas mais criativas e personalizadas</li>
                  <li>Dar mais atenção individual aos alunos</li>
                  <li>Dedicar tempo para o seu desenvolvimento profissional</li>
                  <li>Passar mais tempo com a família e amigos</li>
                  <li>Desfrutar de seus hobbies</li>
                  <li>Cuidar da sua saúde física e mental</li>
                </ul>
              </div>

        </div>
      </CardContent>
    </Card>
  );
};

export default TimeCalculator;