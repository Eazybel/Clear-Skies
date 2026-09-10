type DataPoint = { day: string; discharge?: number; average?: number; ratio?: number; level: string; message: string }
type DataProp = { data: DataPoint[] }


export default function Result({ data }: DataProp) {
 return <section className="forecast-section" aria-label="30-day flood outlook"><div className="section-heading"><div><p className="eyebrow">Flood outlook</p><h2>30-day river risk</h2></div><span className="muted">Compared with historical flow</span></div><div className="forecast-grid">{data.map((item) => <article className={`forecast-card ${item.level.toLowerCase()}`} key={item.day}><div className="forecast-top"><strong>{new Date(`${item.day}T12:00:00`).toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric" })}</strong><span className="risk-badge">{item.level}</span></div><p>{item.message}</p><div className="flow-values"><span>Flow <b>{typeof item.discharge === "number" ? item.discharge.toFixed(1) : "—"}</b></span><span>Average <b>{typeof item.average === "number" ? item.average.toFixed(1) : "—"}</b></span></div></article>)}</div></section>

}