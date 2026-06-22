import { useEffect, useState } from "react";

const loadingSteps = [
  "Initializing Portfolio...",
  "Loading Projects...",
  "Fetching Skills...",
  "Compiling Experience...",
  "Launching Interface..."
];

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 1;

        if (next % 20 === 0 && step < loadingSteps.length - 1) {
          setStep(Math.floor(next / 20));
        }

        return next > 100 ? 100 : next;
      });
    }, 25);

    return () => clearInterval(interval);
  }, [step]);

  return (
    <div className="fixed inset-0 bg-[#030712] overflow-hidden z-[9999] flex items-center justify-center">

      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid opacity-20" />

      {/* Glow */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 blur-[150px]" />

      <div className="relative z-10 w-full max-w-5xl px-8">

        {/* Logo */}
        <div className="text-center mb-12">
          <h1 className="text-cyan-400 text-5xl font-bold tracking-widest">
            &lt;TS /&gt;
          </h1>

          <p className="mt-3 text-gray-500 font-mono">
            Full Stack Developer | ML Engineer
          </p>
        </div>

        {/* Terminal */}
        <div className="bg-[#07101f]/80 border border-cyan-500/20 rounded-xl backdrop-blur-xl overflow-hidden">

          <div className="flex gap-2 px-4 py-3 border-b border-cyan-500/10">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>

          <div className="p-8 font-mono text-lg">

            <div className="text-cyan-400">
              $ npm run portfolio
            </div>

            <div className="text-gray-400 mt-3">
              {loadingSteps[step]}
              <span className="animate-pulse text-cyan-400">▋</span>
            </div>

            <div className="mt-6">
              <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">

                <div
                  className="h-full bg-cyan-400 transition-all duration-300"
                  style={{
                    width: `${progress}%`
                  }}
                />
              </div>

              <div className="flex justify-between mt-3 text-xs">
                <span className="text-gray-500">
                  SYSTEM BOOTING
                </span>

                <span className="text-cyan-400">
                  {progress}%
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}