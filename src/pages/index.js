import Layout from "@/components/Layout";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";
import profilePic from "../../public/images/profile/signature.png";
import profilePicDark from "../../public/images/profile/signature-white.png";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Shriyan Yamali</title>
        <meta
          name="Home Page for Shriyan Yamali's Personal Website"
          content="Shriyan, Yamali, Website, Github, Linkedin, Instagram, X, Twitter"
        />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="!pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col mb-8">
            <div className="w-1/2 md:w-full">
              <Image
                src={profilePic}
                alt="Shriyan Yamali"
                className="mb-16 w-full h-auto dark:hidden lg:!hidden md:inline-block md:w-full"
                priority
                sizes="(max-width: 768 px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
              <Image
                src={profilePicDark}
                alt="Shriyan Yamali"
                className="mb-16 w-full h-auto hidden dark:block lg:!hidden md:inline-block md:w-full"
                priority
                sizes="(max-width: 768 px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Hi, I am Shriyan Yamali"
                className="!text-6xl pt-20 !text-left 
                xl:!text-5xl lg:!text-center lg:!text-5xl lg:mb-4
                "
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                I am a full-stack developer with a specialization in Python and
                AI and an interest in law, video game development, cooking, and politics.
              </p>

              <div className="flex items-center self-start lg:self-center">
                <div className="pt-4">
                  <Link href="/projects">
                    <div className="grid gap-8 items-start justify-center">
                      <div className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                        <button
                          className="relative px-7 py-4 bg-dark rounded-lg leading-none flex items-center divide-x divide-gray-600
                          text-gray-100 transition-all duration-500 group-hover:text-dark group-hover:bg-light 
                           dark:text-dark  dark:bg-light dark:group-hover:text-light dark:group-hover:bg-dark
                           md:p-2 md:px-4 md:text-base 
                        "
                        >
                          <span className="flex items-center space-x-5">
                            <span>Check Out My Projects</span>
                          </span>
                        </button>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="items-center justify-center text-center mb-24 md:mt-8">
            <AnimatedText
              text="Who am I?"
              className="!text-4xl pt-20 xl:!text-3xl mb-4
                "
            />
            <div className="w-1/2 mx-auto md:w-full md:mx-0">
              <p className="text-base font-medium md:text-sm sm:text-xs">
                I&rsquo;m Shriyan Yamali, a passionate high school student
                certified in computer science, web development, and Python.
                I&rsquo;m skilled in web design, Java, JavaScript, and Python,
                with experience in NLP (natural language processing) and machine
                learning from Stanford University.
              </p>
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                I&rsquo;m actively engaged with the ACLU to protect civil rights
                and have a strong background in leadership and problem-solving
                through my involvement in Mock Trial, Math League, and Student
                Council. I also have a six-year background in violin and
                athletics.
              </p>
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                I do fun things though, like listen to music, with my favorite
                genre being hiphop or rap. I love my quotes, as you wil see
                throughout my website. I also play video games like Fortnite,
                Rocket League, Minecraft, and Clash Royale, where I was even
                internationally ranked.
              </p>
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                In the future, I want to dive deeper into the intersection of
                computer science and law, exploring how these fields can come
                together to create real-world solutions. I’m excited about
                continuing my education, becoming a lawyer, and working towards
                a career where I can help make both legal and tech knowledge
                more accessible to everyone.
              </p>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
