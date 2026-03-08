import { scaleLinear } from 'd3-scale';
import { Bar, BarChart, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  { skill: 'React', score: 92 },
  { skill: 'Node', score: 85 },
  { skill: 'D3', score: 76 },
  { skill: 'UI', score: 89 }
];

const color = scaleLinear<string>().domain([70, 95]).range(['#7c3aed', '#22d3ee']);

export function HeroSkillChart() {
  return (
    <article className="rounded-3xl border border-cyan-300/20 bg-[#15133a]/80 p-4">
      <h3 className="mb-3 text-lg font-semibold text-cyan-200">Skill Snapshot (D3 + Recharts)</h3>
      <div className="h-56">
        <ResponsiveContainer>
          <BarChart data={data}>
            <XAxis dataKey="skill" stroke="#cbd5e1" />
            <YAxis stroke="#cbd5e1" />
            <Tooltip contentStyle={{ background: '#0f172a', borderRadius: 12, border: '1px solid #334155' }} />
            <Bar dataKey="score" radius={[10, 10, 0, 0]}>
              {data.map((entry) => (
                <Cell fill={color(entry.score)} key={entry.skill} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </article>
  );
}
