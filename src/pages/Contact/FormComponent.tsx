import { zodResolver } from "@hookform/resolvers/zod";
import { Form, useForm } from "react-hook-form";
import { FormFields, schema } from "../../utils/validation";

const FormComponent = () => {
  const {
    register,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  return (
    <Form
      action="https://formspree.io/f/xjkgobbw"
      method="post"
      onSubmit={() => {
        reset();
      }}
      control={control}
      className="flex flex-col gap-5"
    >
      <input
        type="text"
        placeholder="name"
        {...register("name")}
        className="border border-gray-200 p-4"
      />
      {errors.name && (
        <p className="text-xs text-red-500">{errors.name.message}</p>
      )}
      <input
        type="email"
        {...register("email")}
        placeholder="email"
        className="border border-gray-200 p-4"
      />
      {errors.email && (
        <p className="text-xs text-red-500">{errors.email.message}</p>
      )}
      <input
        type="text"
        {...register("phone")}
        placeholder="phone"
        className="border border-gray-200 p-4"
      />
      {errors.phone && (
        <p className="text-xs text-red-500">{errors.phone.message}</p>
      )}
      <textarea
        {...register("message")}
        placeholder="message"
        className="border border-gray-200 p-4 min-h-[150px]"
      />
      {errors.message && (
        <p className="text-xs text-red-500">{errors.message.message}</p>
      )}
      <button
        disabled={isSubmitting}
        className="self-start px-4 py-2 uppercase text-sm text-white bg-black cursor-pointer tracking-widest hover:bg-gray-800"
      >
        {isSubmitting ? "Sending Message..." : "Send Message"}
      </button>
    </Form>
  );
};

export default FormComponent;
