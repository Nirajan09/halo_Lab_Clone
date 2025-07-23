import { lazy, Suspense, useState } from "react";
import { FaLessThan } from "react-icons/fa6";
import { FaGreaterThan } from "react-icons/fa6";

const LazyAvatar = lazy(() => import("../lazyloading-utils/testimonial-banner/LazyAvatar"));
const STAR_SRC = "https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/63ff2cb2a75a0475348a5685_icon-star.svg";
const CLUTCH_SRC = "https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/659faade8c491caeb4e43ac5_logo-clutch.svg";
const AUTHOR_MAN_SRC = "../author/6596ea8404d31b14e01e406f_reviews-man.avif";
const reviews = [
  {
    rating: 5.0,
    text: "Halo Lab provided high-quality designs at a good value, and the client was happy with the number of frontend routes they developed. The team excelled at project management by having no delays and being adaptable to changes. Overall, they did an excellent job meeting the client's needs.",
    user: "Trace Sauter",
    title: "Director, BrandEnPower",
    avatar: "../author/64c2722fa77b28d008ba267f_review-ava_Trace-Sauter.avif",
  },
  {
    rating: 5.0,
    text: "Halo Lab delivered the designs on time, but the client has yet to implement them in their platform, although they're happy with the deliverables. They had a user-focused design process. Their team provided constant updates and recorded their processes on Loom to keep the client abreast of progress.",
    user: "Moe Hadizadeh",
    title: "Developer at AIsondrÉ Inc.",
    avatar: "../author/64c2722f012add414865ff97_review-ava_Moe-Hadizadeh.avif",
  },
  {
    rating: 5.0,
    text: "Halo Lab delivered all of the agreed-upon deliverables, and they even went above and beyond to further help the client. They communicated through video calls and used project management tools for synchronization. The team truly cared about the project and was always very responsive and organized.",
    user: "Conor Deegan",
    title: "CTO at Pool Data",
    avatar: "../author/64c2722fbf66b944ce0f60a9_review-ava_Conor-Deegan.avif",
  },
  {
    rating: 5.0,
    text: "The client has learned to trust Halo Lab, thanks to their significant knowledge in UI/UX design. The vendor has provided valuable feedback by always being readily available for communication. Moreover, they have a satisfying project management process that makes their process smooth and efficient.",
    user: "Atif Hussain",
    title: "Co-Founder at Kinetik",
    avatar: "../author/64d3a1072910d4507a6b5029_review-ava_Atif-Hussain.avif",
  },
  {
    rating: 5.0,
    text: "The client is proud of Halo Lab's work, which their customers have praised. They lead a communicative process to enable the team to reach out to them at any time. The client also praises their designs and suggestions, which help improve their services.",
    user: "Dimitri Lubaschevski",
    title: "CEO, DAS24 Services",
    avatar: "../author/64d3a10634e0cb805c6ed3b5_review-ava_Dimitri-Lubaschevski.avif",
  },
  {
    rating: 5.0,
    text: "Their skills were awesome — they took what I said and made it real. The designs ended up helping the internal stakeholders raise funds. The specialists maintained excellent project management skills throughout the process.",
    user: "Farah Allen",
    title: "Founder & CEO at Labz",
    avatar: "../author/64c2722feb02cfd744b27874_review-ava_Farah-Allen.avif",
  },
  {
    rating: 5.0,
    text: "The client was satisfied with Halo Lab's high-quality work. They made the designs better and delivered them promptly. The team was easy to work with; they communicated on Slack and provided updates on the progress every day. Moreover, they went beyond expectations and never missed a deadline.",
    user: "David Matthews",
    title: "CEO, Dotcal",
    avatar: "../author/64c2722f19f2bd196643ab54_review-ava_David-Matthews.avif",
  },
  {
    rating: 5.0,
    text: "Halo Lab's work has received positive feedback from internal and external stakeholders. They excelled at project management through Notion, going above and beyond to ensure timely delivery, and they communicated effectively through Slack and email. Their branding skills stood out.",
    user: "Greg Wheeler",
    title: "Co-Founder & CEO, Ditto",
    avatar: "../author/64c2722fce9e72f69a1a60ae_review-ava_Greg-Wheeler.avif",
  },
  {
    rating: 5.0,
    text: "Thanks to Halo Lab's efforts, the client increased their conversion rates on various funnels. Despite the complex business requirements, the team managed the project well and yielded positive outcomes. Overall, their communication and attention to detail impressed the client.",
    user: "Jeff Voss",
    title: "CTO, Qualle",
    avatar: "../author/64c2722ff3fb6ffb001c0b40_review-ava_Jeff-Voss.avif",
  },
  {
    rating: 5.0,
    text: "Halo Lab successfully delivered a product design that has proved popular with users. The team's professionalism and creative abilities come at a very reasonable price. Their motivation is admirable, and their organization makes for a smooth workflow.",
    user: "Bogdan Suchyk",
    title: "Founder, Mobalytics",
    avatar: "../author/64c2722f621394fc8c36f5d2_review-ava_Bogdan-Suchyk.avif",
  },
];


const repeatedReviews = [...reviews, ...reviews, ...reviews];

export default function TestimonialBannerSection() {
  const [current, setCurrent] = useState(0);
  const total = reviews.length;

  const handlePrev = () => setCurrent(prev => (prev === 0 ? total - 1 : prev - 1));
  const handleNext = () => setCurrent(prev => (prev === total - 1 ? 0 : prev + 1));

  return (
    <section className="section" aria-label="Testimonials and reviews">
      {/* Clutch badge and headline */}
      <div className="max-w-2xl mx-auto flex flex-col items-start sm:items-center">
        <div className="flex items-center justify-between gap-3 mb-5 border border-white rounded-3xl px-5 py-3">
          <Suspense fallback={<div className="w-10 h-10 bg-gray-700 rounded-full animate-pulse" />}>
            <LazyAvatar
              src={CLUTCH_SRC}
              alt="Clutch logo"
              className="w-10 h-10"
            />
          </Suspense>
          <div className="bg-[#221d3a] px-4 py-1 rounded-full text-xs font-bold tracking-wide text-white">
            80+ REVIEWS
          </div>
        </div>
        <h2 className="text-white text-2xl md:text-3xl font-normal max-w-3xl">
          We've helped hundreds of partners, ranging from startups to medium-sized businesses to achieve their goals. And stellar feedback — is our reward!
        </h2>
      </div>

      <div className="mt-10 grid gap-10 overflow-x-auto lg:overflow-hidden">
        <div className="flex gap-8 animate-banner-scroll" style={{ width: `432px` }}>
          {/* Desktop: author image & rating panel */}
          <div className="rounded-2xl p-7 w-[400px] flex-shrink-0 overflow-hidden h-[60vh] flex-col shadow-lg hidden lg:flex xl:mr-71 relative">
            <div className="h-[70vh]">
              <Suspense fallback={<div className="w-full h-full bg-gray-700 rounded-xl animate-pulse" />}>
                <LazyAvatar
                  src={AUTHOR_MAN_SRC}
                  alt="Testimonial author"
                  className="w-100 object-cover"
                />
              </Suspense>
            </div>
            <div className="text-white absolute">
              <div className="text-[56px] font-normal">4.9</div>
              <p className="mt-30 text-2xl font-normal mb-6 z-30">
                Clutch average based on <br /> 80+ reviews. All chances <br />
                are you'll be impressed too.
              </p>
              <div className="flex justify-start gap-6">
                <div
                  className="cursor-pointer rounded-full p-4 border border-white transition-transform duration-200 hover:bg-white hover:text-[#3719CA] hover:shadow-lg"
                  onClick={handlePrev}
                >
                  <FaLessThan />
                </div>
                <div
                  className="cursor-pointer rounded-full p-4 border border-white transition-transform duration-200 hover:bg-white hover:text-[#3719CA] hover:shadow-lg"
                  onClick={handleNext}
                >
                  <FaGreaterThan />
                </div>
              </div>
            </div>
          </div>

          {/* Desktop testimonials */}
          {repeatedReviews.map((review, idx) => (
            <div
              key={idx}
              className="hidden lg:flex bg-[#3719CA] rounded-2xl p-7 w-[400px] flex-shrink-0 h-[40vh] lg:h-[60vh] flex-col shadow-lg lg:mr-20 xl:mr-40 hover:bg-[#513DD7] transition-colors duration-300"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-yellow-400 text-lg font-bold mt-1">{reviews[current].rating}</span>
                <div className="flex gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Suspense key={i} fallback={<div className="w-4 h-4 bg-gray-700 rounded-full animate-pulse" />}>
                      <LazyAvatar
                        src={STAR_SRC}
                        alt="star icon"
                        className="w-4 h-4"
                      />
                    </Suspense>
                  ))}
                </div>
              </div>
              <p className="text-white text-lg mb-6">{reviews[current].text}</p>
              <div className="flex items-center gap-3 mt-auto pt-2">
                {review.avatar ? (
                  <Suspense fallback={<div className="w-10 h-10 rounded-full bg-[#322570] animate-pulse" />}>
                    <LazyAvatar
                      src={reviews[current].avatar}
                      alt={reviews[current].user}
                      className="w-10 h-10 rounded-full object-cover border-2 border-[#322570]"
                    />
                  </Suspense>
                ) : (
                  <div className="w-10 h-10 rounded-full bg-[#322570]" />
                )}
                <div>
                  <span className="block text-white font-semibold text-sm">{reviews[current].user}</span>
                  <span className="block text-[#bcb7e5] text-xs">{reviews[current].title}</span>
                </div>
              </div>
            </div>
          ))}

          {/* Mobile testimonials */}
          {repeatedReviews.map((review, idx) => (
            <div
              key={idx}
              className="lg:hidden bg-[#3719CA] rounded-2xl p-7 w-[400px] flex-shrink-0 h-[60vh] flex flex-col shadow-lg"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-yellow-400 text-lg font-bold mt-1">{review.rating}</span>
                <div className="flex gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Suspense key={i} fallback={<div className="w-4 h-4 bg-gray-700 rounded-full animate-pulse" />}>
                      <LazyAvatar
                        src={STAR_SRC}
                        alt="star icon"
                        className="w-4 h-4"
                      />
                    </Suspense>
                  ))}
                </div>
              </div>
              <p className="text-white text-base mb-6">{review.text}</p>
              <div className="flex items-center gap-3 mt-auto pt-2 border-t border-[#322570]">
                {review.avatar ? (
                  <Suspense fallback={<div className="w-10 h-10 rounded-full bg-[#322570] animate-pulse" />}>
                    <LazyAvatar
                      src={review.avatar}
                      alt={review.user}
                      className="w-10 h-10 rounded-full object-cover border-2 border-[#322570]"
                    />
                  </Suspense>
                ) : (
                  <div className="w-10 h-10 rounded-full bg-[#322570]" />
                )}
                <div>
                  <span className="block text-white font-semibold text-sm">{review.user}</span>
                  <span className="block text-[#bcb7e5] text-xs">{review.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}