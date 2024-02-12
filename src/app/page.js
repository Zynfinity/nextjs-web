import Image from "next/image";

export default function Home() {
  return (
    <main className="pt-32 lg:ml-64">
      <div className="container rounded-lg">
        <div className="w-full bg-[#c5eef0] p-4 relative overflow-hidden">
          <Image
            src="/bot.svg"
            alt="My Image"
            width={150}
            height={150}
            className="absolute -bottom-10 -z-9 right-2 opacity-20"
          />
          <div className="mb-10">
            <h1 className="text-3xl font-bold mb-4">Kazu's Bot</h1>
            <p className="tracking-widest text-sm">
              Kazu Bot adalah asisten pintar yang dirancang untuk membantu Anda
              dengan berbagai tugas sehari-hari di Telegram.
            </p>
          </div>

          <div className="flex flex-col gap-y-8 lg:grid lg:grid-cols-2 lg:w-1/2">
            <div className="flex flex-col gap-y-2">
              <h1 className="font-semibold text-lg">Languages</h1>
              <div className="flex gap-x-3 lg:flex-col">
                <div className="flex gap-x-3 p-1 rounded-md hover:bg-primary w-fit">
                  <Image
                    src="/javascript.svg"
                    alt="My Image"
                    width={20}
                    height={20}
                    className="opacity-80"
                  />
                  <p className="text-sm tracking-widest">Javascript</p>
                </div>
                <div className="flex gap-x-3 p-1 rounded-md hover:bg-primary w-fit">
                  <Image
                    src="/html.svg"
                    alt="My Image"
                    width={20}
                    height={20}
                    className="opacity-80"
                  />
                  <p className="text-sm tracking-widest">Html</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <h1 className="font-semibold text-lg">Framework</h1>
              <div className="flex gap-x-3 lg:flex-col">
                <div className="flex gap-x-3 p-1 rounded-md hover:bg-primary w-fit">
                  <Image
                    src="/nextjs.svg"
                    alt="My Image"
                    width={20}
                    height={20}
                    className="opacity-80"
                  />
                  <p className="text-sm tracking-widest">NextJS</p>
                </div>
                <div className="flex gap-x-3 p-1 rounded-md hover:bg-primary w-fit">
                  <Image
                    src="/tailwind.svg"
                    alt="My Image"
                    width={20}
                    height={20}
                    className="opacity-80"
                  />
                  <p className="text-sm tracking-widest">Tailwind CSS</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <h1 className="font-semibold text-lg">Library</h1>
              <div className="flex flex-wrap gap-x-3 lg:flex-col">
                <div className="flex gap-x-3 p-1 rounded-md hover:bg-primary w-fit">
                  <Image
                    src="/telegram.svg"
                    alt="My Image"
                    width={20}
                    height={20}
                    className="opacity-80"
                  />
                  <p className="text-sm tracking-widest">
                    Node-Telegram-Bot-Api
                  </p>
                </div>
                <div className="flex gap-x-3 p-1 rounded-md  hover:bg-primary w-fit">
                  <Image
                    src="/express.svg"
                    alt="My Image"
                    width={20}
                    height={20}
                  />
                  <p className="text-sm tracking-widest">Express JS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
