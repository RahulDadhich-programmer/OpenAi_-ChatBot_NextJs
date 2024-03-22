import Image from "next/image";
import { Inter } from "next/font/google";
import Chat from "@/components/Chat";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
   <main className="absolute inset-0 flex justify-center items-center">
    <Chat />
   </main>
  );
}

