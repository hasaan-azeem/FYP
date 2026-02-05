export default function AuthLayout({ title, subtitle, children, footer }) {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-[#020617] px-4">
        <div className="w-full max-w-md mt-30 mb-30 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-xl">
          <h1 className="text-2xl font-semibold text-white text-center">
            {title}
          </h1>

          <p className="text-sm text-gray-400 text-center mt-2">{subtitle}</p>

          <div className="mt-8">{children}</div>

          {footer && (
            <div className="mt-6 text-center text-sm text-gray-400">
              {footer}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
