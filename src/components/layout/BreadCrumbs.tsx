import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

export default function Breadcrumbs({
  items,
}: {
  items: BreadcrumbItem[];
}) {
  return (
    <div className="border-b border-gray-200  px-4 pt-32">
      <div className="container-custom flex items-center gap-2 py-5 text-sm">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-bold text-[#02378D] hover:text-[#f6b800]"
        >
          <Home size={16} />
          Home
        </Link>

        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            <ChevronRight size={16} className="text-gray-400" />

            {item.href ? (
              <Link
                href={item.href}
                className="font-bold text-[#02378D] hover:text-[#f6b800]"
              >
                {item.label}
              </Link>
            ) : (
              <span className="font-bold text-gray-600">{item.label}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}