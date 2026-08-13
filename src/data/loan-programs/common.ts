import type {
  LoanProgramFormField,
  LoanProgramFormStep,
} from "@/types/loan-program";

/** Replace with the client's approved production NMLS number. */
export const loanProgramNmls = "000000";

export const loanProgramDisclosure =
  "By submitting, you agree to be contacted by Talk2Abe and its lending partners " +
  `by phone, text, or email about your inquiry. Equal Housing Lender. NMLS #${loanProgramNmls}.`;

export const loanProgramContactFields: LoanProgramFormField[] = [
  {
    name: "firstName",
    label: "First name",
    type: "text",
    placeholder: "Jordan",
  },
  {
    name: "lastName",
    label: "Last name",
    type: "text",
    placeholder: "Rivera",
  },
  {
    name: "email",
    label: "Email",
    type: "text",
    placeholder: "jordan@email.com",
    fullWidth: true,
  },
  {
    name: "phone",
    label: "Phone",
    type: "text",
    placeholder: "(555) 123-4567",
    fullWidth: true,
  },
];

export function loanProgramContactStep(
  title: string,
  description: string,
): LoanProgramFormStep {
  return {
    type: "contact",
    title,
    description,
    fields: loanProgramContactFields,
  };
}
