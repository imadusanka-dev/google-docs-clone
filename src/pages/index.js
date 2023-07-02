import Login from "@/components/Login";
import Header from "@/components/Header";
import { useSession } from "next-auth/react";
import DocsTemplates from "@/components/DocsTemplates";
import RecentDocuments from "@/components/RecentDocuments";

export default function Home() {
  const { data: session } = useSession();

  if (!session) return <Login />;

  return (
    <main>
      <Header />
      <DocsTemplates />
      <RecentDocuments />
    </main>
  );
}
