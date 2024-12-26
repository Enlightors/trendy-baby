"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Product } from "@/types";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .regex(/^\d+$/, "Phone number must contain only digits"),
  product: z.string().min(1, "Please select a product"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm({
  products,
  defaultProduct,
}: {
  products: Product[];
  defaultProduct: Product | null;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    const subject = `Contact Form Submission - ${data.product}`;
    const body = `
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Product: ${data.product}

Message:
${data.message}
    `;

    window.location.href = `mailto:sales@trendingbaby.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    reset();
  };

  return (
    <div className="h-[calc(100vh-100px)]">
      <div
        className="bg-cover bg-center h-full flex flex-row justify-center items-center"
        style={{
          backgroundImage: "url('/images/trending-baby-12.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto max-w-xl bg-[#00B1D5] px-6 py-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-center text-white mb-6">
            CONTACT US
          </h1>

          <div className="space-y-2 text-gray-100 mb-6">
            <p>
              Our number 1 goal is your satisfaction. Our customer service team
              is available to help you through the following channels:{" "}
              <a
                href="#"
                className="text-blue-200 underline hover:text-blue-400"
              >
                Help Center
              </a>
              , Contact Form or E-mail: sales@trendingbaby.com
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-2 gap-4"
          >
            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-100 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className={`w-full h-10 px-4 rounded-md border ${
                  errors.name ? "border-white" : "border-gray-300"
                } bg-white text-gray-900 outline-none`}
                {...register("name")}
              />
              {errors.name && (
                <p className="mt-1 text-sm font-semibold border-white text-white px-2 py-1 rounded">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-100 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className={`w-full h-10 px-4 rounded-md border ${
                  errors.email ? "border-white" : "border-gray-300"
                } bg-white text-gray-900 outline-none`}
                {...register("email")}
              />
              {errors.email && (
                <p className="mt-1 text-sm font-semibold border-white text-white px-2 py-1 rounded">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-100 mb-1"
              >
                Phone number
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="964 770 000 0000"
                className={`w-full h-10 px-4 rounded-md border ${
                  errors.phone ? "border-white" : "border-gray-300"
                } bg-white text-gray-900 outline-none`}
                {...register("phone")}
              />
              {errors.phone && (
                <p className="mt-1 text-sm font-semibold border-white text-white px-2 py-1 rounded">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="product"
                className="block text-sm font-medium text-gray-100 mb-1"
              >
                Product
              </label>
              <select
                id="product"
                className={`w-full h-10 px-4 rounded-md border ${
                  errors.product ? "border-white" : "border-gray-300"
                } bg-white text-gray-900 outline-none`}
                {...register("product")}
                defaultValue={
                  defaultProduct
                    ? `${defaultProduct?.id} - ${defaultProduct?.name}`
                    : ""
                }
              >
                <option value="">Please Select</option>
                {products?.map((product: Product) => (
                  <option
                    key={product.id}
                    value={`${product.id} - ${product.name}`}
                  >
                    {product.name}
                  </option>
                ))}
              </select>
              {errors.product && (
                <p className="mt-1 text-sm font-semibold border-white text-white px-2 py-1 rounded">
                  {errors.product.message}
                </p>
              )}
            </div>

            <div className="col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-100 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Enter your message"
                className={`w-full h-24 px-4 py-2 rounded-md border ${
                  errors.message ? "border-white" : "border-gray-300"
                } bg-white text-gray-900 outline-none resize-none`}
                {...register("message")}
              ></textarea>
              {errors.message && (
                <p className="mt-1 text-sm font-semibold border-white text-white px-2 py-1 rounded">
                  {errors.message.message}
                </p>
              )}
            </div>

            <div className="col-span-2 flex justify-end mt-4">
              <button
                type="submit"
                className="px-6 py-2 bg-[#2D617B] text-white rounded-md hover:bg-white hover:text-[#2D617B] transition-colors duration-200"
              >
                SEND
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
