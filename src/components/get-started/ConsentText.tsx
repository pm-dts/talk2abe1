import { getStartedConsent } from "@/data/get-started/consent";

export default function ConsentText() {
  return (
    <p className="text-center text-xs leading-relaxed text-muted">
      {getStartedConsent.body}
    </p>
  );
}
