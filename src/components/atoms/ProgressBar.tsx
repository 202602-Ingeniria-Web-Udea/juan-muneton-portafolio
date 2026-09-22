interface ProgressBarProps {
  percentage: number;
}

export default function ProgressBar({
  percentage,
}: ProgressBarProps) {
  const safePercentage = Math.min(Math.max(percentage, 0), 100);

  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
      <div
        className="h-full rounded-full bg-blue-600 transition-all duration-500"
        style={{ width: `${safePercentage}%` }}
      />
    </div>
  );
}