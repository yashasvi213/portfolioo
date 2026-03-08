import { scaleLinear } from 'd3-scale';
import { Bar, BarChart, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  { skill: 'React', score: 92 },
  { skill: 'Node', score: 85 },
  { skill: 'D3', score: 76 },
  { skill: 'UI', score: 89 }
];

const color = scaleLinear<string>().domain([70, 95]).range(['#c084fc', '#f472b6']);

export function HeroSkillChart() {
  return (
    <article className="rounded-3xl border border-violet-200/25 bg-[#31194b]/80 p-4">
      <h3 className="mb-3 text-lg font-semibold text-violet-100">Skill Snapshot (D3 + Recharts)</h3>
      <div className="h-56">
        <ResponsiveContainer>
          <BarChart data={data}>
            <XAxis dataKey="skill" stroke="#f3e8ff" />
            <YAxis stroke="#f3e8ff" />
            <Tooltip contentStyle={{ background: '#251237', borderRadius: 12, border: '1px solid #7e22ce', color: '#faf5ff' }} />
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
