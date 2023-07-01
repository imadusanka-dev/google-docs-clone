import Header from "@/components/Header";
import DocsTemplates from "@/components/DocsTemplates";
import RecentDocuments from "@/components/RecentDocuments";

export default function Home() {
  return (
    <main>
      <Header />
      <DocsTemplates />
      <RecentDocuments />
    </main>
  );
}
