export default function FormInput({
  label,
  htmlFor,
  ...otherProps
}: {
  label: string;
  htmlFor: string;
  type: string;
  id: string;
  required: boolean;
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <label htmlFor={htmlFor}>{label}</label>
      <input {...otherProps} />
    </div>
  );
}
