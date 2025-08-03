import { memo } from "react";
import { useMemoizedValue } from "../../utils/useMemoizedValue";

import AchievementItem from "./AchievementItem";
import AchievementsMarquee from "./AchievementsMarquee";
import { achievements } from "../achievements/achievementsData";

const REPEAT_COUNT = 4; 

const AchievementsSection = () => {
  const repeatedAchievements = useMemoizedValue(
    () => Array(REPEAT_COUNT).fill(achievements).flat(),
    [achievements]
  );

  return (
    <section className="section md:px-10 rounded-xl mx-auto overflow-x-hidden">
      <AchievementsMarquee>
        {repeatedAchievements.map((item, idx) => (
          <AchievementItem
            avatarSrc={item.avatarSrc}
            title={item.title}
            key={`${item.key}-${idx}`}
          />
        ))}
      </AchievementsMarquee>
    </section>
  );
};

export default memo(AchievementsSection);
