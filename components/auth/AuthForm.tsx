"use client";

import { useCallback, useState } from "react";
import TastyDashLogo from "@/components/ui/tasty-dash-logo";
import AuthInput from "@/components/inputs/AuthInput";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

export default function AuthForm() {
  type VariantOfForm = "LOGIN" | "REGISTER";

  const [variant, setVariant] = useState<VariantOfForm>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);

  /* toggle b/w forms */
  const handleToggleForm = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const handleFormSubmit = () => {};

  return (
    <div className="w-full xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
      <div className="w-full flex items-center justify-center py-3">
        <TastyDashLogo href="/" classNames="text-3xl" />
      </div>
      <h2 className="text-center text-xl md:text-2xl font-bold leading-tight text-zinc-600">
        {variant === "LOGIN" ? "Login to your account" : "Create your account"}
      </h2>

      <form className="mt-8" onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="space-y-5">
          {variant === "REGISTER" && (
            <AuthInput
              id="name"
              label="Your Name"
              placeholder="Enter Your Name"
              type="text"
              errors={errors}
              register={register}
              disabled={isLoading}
            />
          )}
          <AuthInput
            id="email"
            label="Email Address"
            placeholder="Enter Your Email"
            type="email"
            register={register}
            errors={errors}
            disabled={isLoading}
          />
          <AuthInput
            id="password"
            label="Password"
            placeholder="Enter Your Password"
            type="password"
            register={register}
            errors={errors}
            disabled={isLoading}
          />
          <div>
            <button
              disabled={isLoading}
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-md bg-orange-600 px-3.5 py-2 font-medium leading-7 text-zinc-100 hover:bg-opacity-90 transition disabled:bg-opacity-80"
            >
              {isLoading ? (
                <p>{variant === "LOGIN" ? "Logging In" : "Register"}</p>
              ) : (
                <p>{variant === "LOGIN" ? "Login" : "Register"}</p>
              )}
            </button>
          </div>
        </div>
      </form>
      <div className="mt-4 flex items-center gap-1 text-sm justify-center font-medium text-zinc-600">
        <p>
          {variant === "LOGIN"
            ? "New To TastyDash ?"
            : "Already have an account ?"}
        </p>
        <span
          onClick={handleToggleForm}
          className="hover:underline font-semibold cursor-pointer transition-all text-zinc-900"
        >
          {variant === "LOGIN" ? "Create an account" : "Login"}
        </span>
      </div>
    </div>
  );
}
