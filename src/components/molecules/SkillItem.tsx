import ProgressBar from "@/components/atoms/ProgressBar";

interface SkillItemProps {
  name: string;
  percentage: number;
}

export default function SkillItem({
  name,
  percentage,
}: SkillItemProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-800">
          {name}
        </span>

        <span className="text-sm text-gray-500">
          {percentage}%
        </span>
      </div>

      <ProgressBar percentage={percentage} />
    </div>
  );
}