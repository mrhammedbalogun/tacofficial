import {
  Landmark, Building2, Globe2, ClipboardCheck, MonitorCheck,
  GraduationCap, Award, LineChart, Users, Star,
} from "lucide-react";

const ICONS: Record<string, typeof Star> = {
  Landmark, Building2, Globe2, ClipboardCheck, MonitorCheck,
  GraduationCap, Award, LineChart, Users, Star,
};

const GRADIENTS = [
  "from-[#4b226e] to-[#64328c]",
  "from-[#64328c] to-[#b07a1e]",
  "from-[#121619] to-[#4b226e]",
  "from-[#7b42a6] to-[#64328c]",
  "from-[#3a1d57] to-[#9a6b14]",
];

export function CardVisual({
  index = 0,
  icon,
  className = "",
}: {
  index?: number;
  icon?: string;
  className?: string;
}) {
  const grad = GRADIENTS[index % GRADIENTS.length];
  const Icon = (icon && ICONS[icon]) || Star;
  return (
    <div className={`absolute inset-0 bg-gradient-to-br ${grad} ${className}`} aria-hidden="true">
      <Icon className="absolute -right-3 -bottom-3 w-28 h-28 text-white/10" strokeWidth={1.1} />
    </div>
  );
}
