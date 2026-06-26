function ProgressBar({ currentStep }) {

  const progress = (currentStep / 9) * 100;

  return (

    <div className="mb-8">

      <div className="flex justify-between mb-2">

        <h2 className="text-2xl font-bold">
          Resume Progress
        </h2>

        <span>{Math.round(progress)}%</span>

      </div>

      <div className="bg-blue-800 rounded-full h-3">

        <div
          className="bg-blue-400 h-3 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />

      </div>

    </div>

  );
}

export default ProgressBar;