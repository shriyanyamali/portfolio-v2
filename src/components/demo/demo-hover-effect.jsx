import { HoverEffect } from "../ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-10xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Stanford Law School",
    description:
      "Stanford Law School is the highest rated law school in the United States, known for its innovative approach to legal education and its close ties to Silicon Valley.",
    link: "https://law.stanford.edu/",
  },
  {
    title: "University of Pennsylvania Carey Law School",
    description:
      "Penn Carey Law is the 4th highest rated law school in the United States, with a prestigious, cutting-edge legal education system.",
    link: "https://www.law.upenn.edu/",
  },
  {
    title: "Dartmouth College",
    description:
      "Dartmouth is an Ivy League college known for its strong liberal arts education and scenic landscapes.",
    link: "https://home.dartmouth.edu/",
  },
  {
    title: "Wilmington University School of Law",
    description:
      "Wilmington University School of Law is one of the few law schools in the state of Delaware. It provides a strong legal education and is a top university in Delaware.",
    link: "https://www.wilmu.edu/",
  },
  {
    title: "American Civil Liberties Union of Delaware",
    description:
      "The American Civil Liberties Union of Delaware is a non-profit organization committed to protecting the constitutional rights and freedoms of individuals through advocacy and litigation.",
    link: "https://www.aclu-de.org/",
  },
  {
    title: "Delaware Museum of Nature & Science",
    description:
      "The Delaware Museum of Nature & Science engages visitors with interactive exhibits and programs focused on the wonders of nature and science. It boasts some of the world's largest collections of birds, eggs, and other organisms.",
    link: "https://delmns.org/",
  },
];
