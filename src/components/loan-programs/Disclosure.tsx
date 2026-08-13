type DisclosureProps = {
  text: string;
};

export default function Disclosure({ text }: DisclosureProps) {
  return (
    <p className="text-center text-[11.5px] leading-[1.6] text-[#9aa2b1]">
      {text}
    </p>
  );
}
