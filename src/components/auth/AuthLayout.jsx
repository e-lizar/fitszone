const AuthLayout = ({ title, children }) => {
  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          {title}
        </h2>

        {children}
      </div>
    </section>
  );
};

export default AuthLayout;