import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const technologies = [
  { name: "Next.js", description: "React Framework", icon: "/images/svgs/nextjs-logo.svg" },
  { name: "TypeScript", description: "Typed JavaScript", icon: "/images/svgs/typescript-logo.svg" },
  { name: "React", description: "JavaScript Library", icon: "/images/svgs/react-logo.svg" },
  { name: "Tailwind CSS", description: "CSS Framework", icon: "/images/svgs/tailwind-logo.svg" },
  { name: "Git", description: "Version control", icon: "/images/svgs/git-logo.svg" },
  { name: "Python", description: "Programming Language", icon: "/images/svgs/python-logo.svg" },
  { name: "HTML", description: "Markup Language", icon: "/images/svgs/html5-logo.svg" },
  { name: "CSS", description: "Style Sheet Language", icon: "/images/svgs/css3-logo.svg" },
];

export default function TechStack() {
  return (
    <div className="mt-16 container mx-auto p-4">
      <div className="grid grid-cols-4 xtl:grid-cols-2 sm:!grid-cols-1 gap-4 w-3/4 lg:w-full mx-auto">
        {technologies.map((tech, index) => (
          <Card
            key={index}
            className="bg-gray-200 text-black dark:bg-gray-800 dark:text-white overflow-hidden border border-transparent
                       hover:border hover:bg-gray-300 hover:border-black dark:hover:bg-gray-700 dark:hover:border-white transition-colors duration-300"
          >
            <CardContent className="p-4 flex items-center space-x-4">
              <div className="flex-shrink-0">
                <Image
                  src={tech.icon}
                  alt={`${tech.name} icon`}
                  width={40}
                  height={40}
                  className="rounded-md"
                />
              </div>
              <div>
                <h3 className="font-semibold">{tech.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{tech.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
