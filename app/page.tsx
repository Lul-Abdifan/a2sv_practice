import Link from "next/link";

("use Client");
export default function Home() {
  return (
    <main className="flex items-center justify-center p-24">
      <Link href={`http://localhost:3000/jobs`}>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          To Job Lists
        </button>
      </Link>
    </main>
  );
}
