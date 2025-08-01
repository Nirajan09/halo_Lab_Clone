import { useEffect, useState, memo } from "react";
import { useMemoizedCallback } from "../../utils/useMemoizedCallback";
import { useMemoizedValue } from "../../utils/useMemoizedValue";
import { testimonials } from "../../data/testimonialCardsData";
import TestimonialCardContent from "./TestimonialCardContent";
import TestimonialCardImage from "./TestimonialCardImage";
import TestimonialNavigationButton from "./TestimonialNavigationButton";

const AUTO_ADVANCE_DELAY = 5000; 

function TestimonialCard() {
  const cards = useMemoizedValue(() => testimonials, []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsCount = cards.length;

  useEffect(() => {
    const interval = setInterval(() => setCurrentIndex((prev) => (prev + 1) % cardsCount), AUTO_ADVANCE_DELAY);
    return () => clearInterval(interval);
  }, [cardsCount]);

  const handleKeyDown = useMemoizedCallback(
    (e) => {
      if (e.key === "ArrowRight") setCurrentIndex((currentIndex + 1) % cardsCount);
      else if (e.key === "ArrowLeft") setCurrentIndex((currentIndex - 1 + cardsCount) % cardsCount);
    },
    [currentIndex, cardsCount]
  );

  const prev = useMemoizedCallback(() => setCurrentIndex((currentIndex - 1 + cardsCount) % cardsCount), [
    currentIndex,
    cardsCount,
  ]);
  const next = useMemoizedCallback(() => setCurrentIndex((currentIndex + 1) % cardsCount), [currentIndex, cardsCount]);

  const card = cards[currentIndex];

  return (
    <section
      className="section flex flex-col items-center"
      aria-label="Success story testimonials"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <h1 className="text-4xl md:text-6xl font-semibold text-white text-center mb-10">
        WHERE GREAT IDEAS <br />
        <span className="text-[#FDC54B]">BECAME REAL RESULTS</span>
      </h1>
      <div className="bg-white p-8 w-full rounded-3xl shadow-lg group relative">
        <div className="relative bg-[#F5F5F7] rounded-3xl shadow-lg flex flex-col md:flex-row w-full p-2 md:p-8 transition-all duration-700 ease-in-out">
          <TestimonialNavigationButton direction="left" onClick={prev} />

          <TestimonialCardContent card={card} />

          <TestimonialCardImage src={card.workImage} alt={`${card.tag} work`} />

          <TestimonialNavigationButton direction="right" onClick={next} />
        </div>
      </div>
    </section>
  );
}

export default memo(TestimonialCard);
