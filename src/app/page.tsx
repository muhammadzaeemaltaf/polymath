import Article from "@/components/Article";
import Blog from "@/components/Blog";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <main className="w-full overflow-hidden relative">
      <Hero />
      <Article />
      <Blog />
      <div className="px-4">
        <Newsletter />
      </div>
    </main>
  );
}
