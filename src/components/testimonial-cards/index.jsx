import { useEffect, useState, lazy, Suspense } from "react";
import { FaLessThan, FaGreaterThan } from "react-icons/fa6";

const LazyAvatar = lazy(() => import("../lazyloading-utils/LazyAvatar"));

  const cards = [
    {
      tag: "marketplace",
      flagImageSrc: "../testimonials/flags/66ab56714b5a386eb1600483_flag-Switzerland.avif",
      works: "HomeQ's 67% yearly growth and acquisition by a $7B company",
      starIcon: "https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/63ff2cb2a75a0475348a5685_icon-star.svg",
      text: "The team at Halo Lab crafted intuitive websites and landing pages. Their attention to detail and client focus were remarkable.",
      authorImage: "../testimonials/author/6728d40dd2f5fa23e0cf2409_review-ava_Peter-Hedlund.avif",
      authorName: "Peter Hedlund",
      authorDescription: "SVP, Marketing",
      workImage: "./testimonials/works/6719144ea7fcb629b8c71ae6_works-audit-HomeQ.avif"
    },
    {
      tag: "TRANSPORTATION & LOGISTICS",
      flagImageSrc: "../testimonials/flags/66ab5671b25d942cf11814bb_flag-France.avif",
      works: "Linkbycar raised €1.4M in funding and strengthened its market position",
      starIcon: "https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/63ff2cb2a75a0475348a5685_icon-star.svg",
      text: "Halo Lab offers a broad mix of expertise and always comes up with excellent solutions. They completed the project efficiently and on schedule.",
      authorImage: "../testimonials/author/67e5100e2eed105d01a8cc6b_review-ava_Saidou-Soumare2.avif",
      authorName: "Saidou Soumare",
      authorDescription: "CTO at Linkbycar",
      workImage: "./testimonials/works/67add53c74d185f9063e5a8d_results-Linkbycar.avif"
    },
    {
      tag: "real estate",
      flagImageSrc: "../testimonials/flags/67c06382ce089ee9cac4fabf_flag-Portugal.avif",
      works: "Strong branding helped Relocate Now gain 1,400+ nomads in a year",
      starIcon: "https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/63ff2cb2a75a0475348a5685_icon-star.svg",
      text: "Halo Lab follows a systematic planning approach to reach targets on time. Communication throughout was seamless and highly valuable.",
      authorImage: "../testimonials/author/671f8415c64a592b60341289_review-ava_Alvaro-Araujo.avif",
      authorName: "Alvaro Araujo",
      authorDescription: "Founder & CEO, Relocate Now",
      workImage: "./testimonials/works/6812015839e18a614d927c94_results-Relocate2.avif"
    },
    {
      tag: "SAAS",
      flagImageSrc: "../testimonials/flags/66ab5672df09cccbbfafb714_flag-USA.avif",
      works: "WeSpire raised $13M in its latest funding round and $23.7M in total",
      starIcon: "https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/63ff2cb2a75a0475348a5685_icon-star.svg",
      text: "After Halo Lab revamped our platform, traffic improved by 35%, and user engagement increased with a reduced bounce rate of 20%.",
      authorImage: "../testimonials/author/65856676d93b5382ccf5c3e8_ava-justin-lopez.avif",
      authorName: "Justin Lopez",
      authorDescription: "DGM @ Wespire",
      workImage: "./testimonials/works/6719144e5f1284ab31bccfd8_works-audit-WeSpire.avif"
    },
    {
      tag: "Education",
      flagImageSrc: "../testimonials/flags/67bda237b702f3e3c050d9ee_flag-UAE.avif",
      works: "Thoughtful UI/UX helped ASI app surpass 4 million student queries",
      starIcon: "https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/63ff2cb2a75a0475348a5685_icon-star.svg",
      text: "We developed a student-centric app with user-friendly design, transforming difficult processes into fun and easy experiences, increasing retention.",
      authorImage: "../testimonials/author/65856676d93b5382ccf5c3e8_ava-justin-lopez.avif",
      authorName: "UX/UI Design",
      authorDescription: "2 Months",
      workImage: "./testimonials/works/681200a7712ca3755b94a098_results-ASI.avif"
    },
    {
      tag: "HEALTHCARE",
      flagImageSrc: "../testimonials/flags/66ab5671023787dcce263398_flag-Austria.avif",
      works: "Nyra Health achieved a 16% traffic increase with our fresh design solutions",
      starIcon: "https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/63ff2cb2a75a0475348a5685_icon-star.svg",
      text: "Halo Lab delivered our healthcare platform, including industry-specific pages, adapting quickly to our needs and meeting all deadlines.",
      authorImage: "../testimonials/author/663ce808d9ada3c120697131_review-ava_Mario-Zusag.avif",
      authorName: "Mario Zusag",
      authorDescription: "CTO, nyra health",
      workImage: "./testimonials/works/678a885d60016fcf4a0ee5b5_results-NyraHealth.avif"
    },
  ];

  export default function TestimonialCard() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance testimonial every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const card = cards[currentIndex];

  return (
    <section className="section flex flex-col items-center">
      <h1 className="text-4xl md:text-6xl font-semibold text-white text-center mb-10">
        WHERE GREAT IDEAS <br />
        <span className="text-[#FDC54B]">BECAME REAL RESULTS</span>
      </h1>


      <div className="bg-white p-8 w-full rounded-3xl shadow-lg group">
        <div className="relative bg-[#F5F5F7] rounded-3xl shadow-lg flex flex-col md:flex-row w-full p-2 md:p-8 transition-all duration-700 ease-in-out">
          {/* Left arrow */}
          <button
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full p-4 bg-white border border-gray-200 shadow
        opacity-0 pointer-events-none
        group-hover:opacity-100 group-hover:pointer-events-auto
        hover:bg-[#F5F5F7] hover:scale-110 transition cursor-pointer"
            onClick={() => setCurrentIndex((currentIndex - 1 + cards.length) % cards.length)}
            aria-label="previous testimonial"
            type="button"
          >
            <FaLessThan />
          </button>


          {/* Text content */}
          <div className="flex-1 p-4 flex flex-col justify-center">
            <span className="text-sm text-black font-normal mb-2 md:mb-4 flex items-center gap-1 uppercase">
              <span className="mt-1">{card.tag}</span>
              <Suspense fallback={<div className="w-6 h-6 bg-gray-200 rounded-full animate-pulse ml-2" />}>
                <LazyAvatar
                  src={card.flagImageSrc}
                  alt={`${card.tag} flag`}
                  className="w-6 h-6 rounded-full ml-2 object-cover"
                />
              </Suspense>
            </span>
            <h3 className="text-black text-xl sm:text-2xl font-medium w-full md:max-w-[20ch] min-h-[10vh] md:min-h-[20vh]">
              {card.works}
            </h3>
            <div className="flex items-center mb-3">
              {[...Array(5)].map((_, i) => (
                <Suspense key={i} fallback={<div className="w-5 h-5 bg-gray-200 rounded animate-pulse" />}>
                  <LazyAvatar
                    src={card.starIcon}
                    alt="Rating Star"
                    className="w-5 h-5 object-cover"
                  />
                </Suspense>
              ))}
            </div>
            <p className="text-[#4A4A5E] text-lg font-medium mb-4 min-h-[16vh] md:min-h-[22vh] w-full md:max-w-[32ch]">
  “{card.text}”
</p>
            <div className="flex items-center gap-3 mt-2">
              <Suspense fallback={<div className="w-9 h-9 rounded-full bg-gray-200 animate-pulse" />}>
                <LazyAvatar
                  src={card.authorImage}
                  alt={card.authorName}
                  className="w-9 h-9 rounded-full border-2 border-yellow-400 object-cover"
                />
              </Suspense>
              <div>
                <div className="text-sm font-medium text-black">
                  {card.authorName}
                </div>
                <div className="text-xs text-gray-500">{card.authorDescription}</div>
              </div>
            </div>
          </div>


          {/* Work image */}
          <div className="flex-1 flex items-center justify-center">
            <Suspense fallback={<div className="w-full h-56 bg-gray-200 rounded-xl animate-pulse" />}>
              <LazyAvatar
                src={card.workImage}
                alt={`${card.tag} work`}
                className="rounded-xl shadow-lg w-full h-full object-cover"
              />
            </Suspense>
          </div>


          {/* Right arrow */}
          <button
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full p-4 bg-white border border-gray-200 shadow
        opacity-0 pointer-events-none
        group-hover:opacity-100 group-hover:pointer-events-auto
        hover:bg-[#F5F5F7] hover:scale-110 transition cursor-pointer"
            onClick={() => setCurrentIndex((currentIndex + 1) % cards.length)}
            aria-label="next testimonial"
            type="button"
          >
            <FaGreaterThan />
          </button>``
        </div>
      </div>
    </section>
  );
}