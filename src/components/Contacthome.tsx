"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Product } from "@/types";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .regex(/^\d+$/, "Phone number must contain only digits"),
  product: z.string().min(1, "Please select a product"),
  message: z.string(),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm({ products }: { products: Product[] }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
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
    <div className="md:pt-8">
      <div
        className="py-8 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/trending-baby-12.png')" }}
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
                Name <span className="text-red-500">*</span>
              </label>
              <Input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="bg-white text-gray-900"
                {...register("name")}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-white">{errors.name.message}</p>
              )}
            </div>

            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-100 mb-1"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <Input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="bg-white text-gray-900"
                {...register("email")}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-white">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-100 mb-1"
              >
                Phone number <span className="text-red-500">*</span>
              </label>
              <Input
                type="tel"
                id="phone"
                placeholder="964 770 000 0000"
                pattern="[0-9]*"
                inputMode="numeric"
                className="bg-white text-gray-900"
                {...register("phone")}
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-white">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="product"
                className="block text-sm font-medium text-gray-100 mb-1"
              >
                Product <span className="text-red-500">*</span>
              </label>
              <Select onValueChange={(value) => setValue("product", value)}>
                <SelectTrigger className="bg-white text-gray-900">
                  <SelectValue placeholder="Please Select" />
                </SelectTrigger>
                <SelectContent>
                  {products?.map((product: Product) => (
                    <SelectItem
                      key={product.id}
                      value={`${product.id} - ${product.name}`}
                      className="flex items-center gap-2"
                    >
                      <div className="flex items-center gap-2">
                        {product.imageSrc && (
                          <Image
                            src={product.imageSrc}
                            alt={product.name}
                            width={20}
                            height={20}
                            className="inline-block"
                          />
                        )}
                        <span>{product.name}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.product && (
                <p className="mt-1 text-sm text-white">
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
              <Textarea
                id="message"
                placeholder="Enter your message"
                className="bg-white text-gray-900 resize-none"
                {...register("message")}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-white">
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
