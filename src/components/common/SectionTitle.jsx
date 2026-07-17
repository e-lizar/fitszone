const SectionTitle = ({
  subtitle,
  title,
  description,
  center = true,
}) => {
  return (
    <div
      className={`mb-16 ${
        center ? "text-center" : "text-left"
      }`}
    >
      <p className="text-emerald-500 uppercase tracking-[4px] font-bold">
        {subtitle}
      </p>

      <h2 className="text-4xl md:text-5xl font-bold mt-4">
        {title}
      </h2>

      {description && (
        <p className="text-gray-600 mt-6 max-w-2xl mx-auto leading-8">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;