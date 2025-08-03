import { memo } from "react";
import { useMemoizedValue } from "../../utils/useMemoizedValue";
import { stats as statsData } from "./statisticsData";
import StatCard from "./StatCard";

function StatCards() {
  const stats = useMemoizedValue(() => statsData, []);

  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 section"
      aria-label="Company statistics"
    >
      {stats.map(({ value, label, labelText }, i) => (
        <StatCard key={i} value={value} label={label} labelText={labelText} />
      ))}
    </section>
  );
}

export default memo(StatCards);
