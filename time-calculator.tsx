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

  const handleChange = (activity, value) => {
    setActivities(prev => ({
      ...prev,
      [activity]: Number(value)
    }));
  };

  const totalTime = Object.values(activities).reduce((a, b) => a + b, 0);
  const automatedTime = totalTime * 0.6; // Estimativa de 60% de redução
  const timeSaved = totalTime - automatedTime;

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Calculadora de Tempo do Professor</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid gap-4">
            <div className="flex items-center justify-between">
              <label className="text-sm">Planejamento (horas/semana):</label>
              <input
                type="number"
                className="w-20 p-2 border rounded"
                value={activities.planning}
                onChange={(e) => handleChange('planning', e.target.value)}
                min="0"
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="text-sm">Criação de materiais:</label>
              <input
                type="number"
                className="w-20 p-2 border rounded"
                value={activities.materials}
                onChange={(e) => handleChange('materials', e.target.value)}
                min="0"
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="text-sm">Correções:</label>
              <input
                type="number"
                className="w-20 p-2 border rounded"
                value={activities.grading}
                onChange={(e) => handleChange('grading', e.target.value)}
                min="0"
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="text-sm">Feedback aos alunos:</label>
              <input
                type="number"
                className="w-20 p-2 border rounded"
                value={activities.feedback}
                onChange={(e) => handleChange('feedback', e.target.value)}
                min="0"
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="text-sm">Relatórios:</label>
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
              <p className="text-sm">Tempo total semanal: {totalTime} horas</p>
              <p className="text-sm">Tempo com automação: {automatedTime.toFixed(1)} horas</p>
              <p className="text-sm font-bold text-green-600">Tempo economizado: {timeSaved.toFixed(1)} horas/semana</p>
              <p className="text-sm font-bold text-green-600">Tempo economizado: {(timeSaved * 4).toFixed(1)} horas/mês</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TimeCalculator;
