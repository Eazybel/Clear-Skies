"use client"

interface DailyDataInterface {
  message: string;
  riskLevel: string;
  day: string;
  rain: string;
  currentTemp: string;
}

interface AlertData {
  alerts: DailyDataInterface[];
}

export default function FloodStatus(props: AlertData) {
  if (!props.alerts || props.alerts.length === 0) {
    return null;
  }

  const firstAlert = props.alerts[0];

  return (
    <div className="w-full max-w-2xl mx-auto mt-6 bg-white shadow-lg rounded-xl overflow-hidden border border-slate-100">
      {/* Current Conditions Summary Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-5 text-white">
        <h3 className="text-lg font-semibold mb-2">Current Conditions</h3>
        <div className="flex flex-wrap gap-4 text-sm">
          <span className="bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-sm">
            🌧️ Rain: <strong className="font-medium">{firstAlert?.rain ?? "N/A"}</strong>
          </span>
          <span className="bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-sm">
            🌡️ Temp: <strong className="font-medium">{firstAlert?.currentTemp ?? "N/A"}</strong>
          </span>
        </div>
      </div>

      {/* Forecast & Alert List */}
      <div className="p-5">
        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
          Forecast & Risk Analysis
        </h4>
        <ul className="space-y-3">
          {props.alerts.map((alert, index) => {
            const isHighRisk = alert.riskLevel.toLowerCase().includes("high");

            return (
              <li 
                key={index} 
                className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-lg bg-slate-50 border border-slate-200 hover:bg-slate-100 transition-colors"
              >
                <div className="space-y-1 mb-2 sm:mb-0">
                  <span className="text-xs font-semibold text-slate-500">{alert.day}</span>
                  <p className="text-sm text-slate-700 font-medium">{alert.message}</p>
                </div>
                <div>
                  <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full ${
                    isHighRisk 
                      ? "bg-red-100 text-red-700 border border-red-200" 
                      : "bg-emerald-100 text-emerald-700 border border-emerald-200"
                  }`}>
                    {alert.riskLevel}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}