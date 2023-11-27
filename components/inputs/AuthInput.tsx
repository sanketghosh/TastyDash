import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

type AuthInputPropsType = {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  disabled?: boolean;
  placeholder: string;
};

export default function AuthInput({
  label,
  id,
  type,
  required,
  register,
  errors,
  disabled,
  placeholder,
}: AuthInputPropsType) {
  return (
    <div>
      <label htmlFor={id} className="text-base font-medium text-zinc-600">
        {label}
      </label>
      <div className="mt-2">
        <input
          className={`flex h-11 w-full rounded-md border-2 border-orange-300 bg-transparent px-2.5 py-2 text-sm md:text-[15px] placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 ${
            (errors[id] && "focus:ring-red-500",
            disabled && "opacity-50 cursor-default")
          }`}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
        />
      </div>
    </div>
  );
}
