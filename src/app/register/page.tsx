"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const fields = [
    { label: "Student Name", name: "studentName", type: "text" },
    { label: "Parent Name", name: "parentName", type: "text" },
    { label: "School Name", name: "schoolName", type: "text" },
    { label: "Email", name: "email", type: "email" },
    { label: "Phone", name: "phone", type: "tel" },
    { label: "Birthday", name: "birthday", type: "date" },
  ];

  const validateForm = (formData: FormData) => {
    const newErrors: Record<string, string> = {};

    fields.forEach((field) => {
      const value = formData.get(field.name)?.toString().trim();

      if (!value) {
        newErrors[field.name] = "This field is required";
      }
    });

    const email = formData.get("email")?.toString().trim() || "";
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Enter a valid email address";
    }

    const phone = formData.get("phone")?.toString().trim() || "";
    if (phone && !/^[0-9+\s-]{7,15}$/.test(phone)) {
      newErrors.phone = "Enter a valid phone number";
    }

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const validationErrors = validateForm(formData);

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Registration submitted successfully.");
      e.currentTarget.reset();
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-white px-4 pb-20 pt-40">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(2,55,141,0.08),transparent_40%)]" />

      <div className="container-custom relative z-10 max-w-5xl">
        <div className="rounded-[36px] border border-gray-200 bg-white/80 p-8 text-[#07152f] shadow-2xl backdrop-blur-xl md:p-12">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-[#67f55b]">
            Registration
          </p>

          <h1 className="mt-4 font-[var(--font-bebas)] text-6xl leading-none md:text-7xl">
            Join FC Strikers
          </h1>

          <p className="mt-4 max-w-2xl text-gray-600">
            Fill in the details below and our academy team will contact you.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-10 grid gap-5 md:grid-cols-2"
          >
            {fields.map((field) => (
              <label
                key={field.name}
                className="text-sm font-bold text-[#07152f]"
              >
                {field.label} *
                <input
                  name={field.name}
                  type={field.type}
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-white/90 px-4 py-3 text-[#07152f] outline-none transition focus:border-[#02378D] focus:shadow-lg"
                />

                {errors[field.name] && (
                  <p className="mt-2 text-xs font-bold text-red-600">
                    {errors[field.name]}
                  </p>
                )}
              </label>
            ))}

            <label className="text-sm font-bold text-[#07152f] md:col-span-2">
              Address
              <textarea
                name="address"
                className="mt-2 min-h-28 w-full rounded-xl border border-gray-200 bg-white/90 px-4 py-3 text-[#07152f] outline-none transition focus:border-[#02378D] focus:shadow-lg"
              />
            </label>

            <button
              type="submit"
              className="md:col-span-2 rounded-xl bg-[#67f55b] px-8 py-4 text-sm font-black uppercase tracking-wider text-black transition hover:scale-[1.02]"
            >
              Submit Registration
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}