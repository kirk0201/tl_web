import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen justify-between p-24">
      <Link href="/button1">Home!</Link>
    </main>
  );
}
