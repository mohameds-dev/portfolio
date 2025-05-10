import Header from "@/components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <main className="text-center mt-32 text-2xl">
      <Header />
      <div className="flex overflow-x-auto py-8 px-4 gap-6 scrollbar-hide">
        <Link
          href="/projects"
          className="text-blue-500 hover:text-blue-700 whitespace-nowrap"
        >
          Projects
        </Link>
      </div>
    </main>
  );
}
