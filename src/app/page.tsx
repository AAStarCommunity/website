import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Image src="/logo.png" width={400} height={400} alt="AAStar Logo" />
      <h1 className="text-4xl font-bold">AAStar</h1>
      <p className="text-lg text-center mb-8">
        Leveraging the Power of Community for AA Ecosystem
      </p>
      <div className="flex space-x-4">
        <Link
          href="https://t.me/Account_Abstraction_Community/3"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Telegram
        </Link>
        <Link
          href="https://github.com/AAStarCommunity"
          className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded"
        >
          Github
        </Link>
        <Link
          href="https://app.dework.xyz/aastar"
          className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded"
        >
          Dework
        </Link>
      </div>
    </div>
  );
}
