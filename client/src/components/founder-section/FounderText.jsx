export default function FounderText({ text }) {
  return (
    <div className="md:w-[60%]">
      <p className="text-white text-justify text-2xl lg:text-4xl font-medium leading-snug">
        {text}
      </p>
    </div>
  );
}
