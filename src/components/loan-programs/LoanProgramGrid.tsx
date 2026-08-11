import LoanProgramCard from "@/components/loan-programs/LoanProgramCard";
import { loanPrograms } from "@/data/loan-programs";

type LoanProgramGridProps = {
  className?: string;
};

export default function LoanProgramGrid({
  className,
}: LoanProgramGridProps) {
  return (
    <div
      className={`grid grid-cols-1 gap-4 sm:grid-cols-2 ${
        className ?? ""
      }`}
    >
      {loanPrograms.map((program) => (
        <LoanProgramCard
          key={program.id}
          program={program}
        />
      ))}
    </div>
  );
}