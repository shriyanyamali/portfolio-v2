import { motion } from "framer-motion";
import Image from "next/image";

const ProjectsData = [
  {
    id: 1,
    name: "English",
    description:
      "Fluent in English and am taking college-level courses analyzing English literature and language.",
    image:
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IndoaXRlIiBkPSJNMyAxOC41VjVhMyAzIDAgMCAxIDMtM2gxNGExIDEgMCAwIDEgMSAxdjE4YTEgMSAwIDAgMS0xIDFINi41QTMuNSAzLjUgMCAwIDEgMyAxOC41TTE5IDIwdi0zSDYuNWExLjUgMS41IDAgMCAwIDAgM3pNNSAxNS4zMzdBMy41IDMuNSAwIDAgMSA2LjUgMTVIMTlWNEg2YTEgMSAwIDAgMC0xIDF6Ii8+PC9zdmc+",
  },
  {
    id: 2,
    name: "Telugu",
    description:
      "Can fluently speak Telugu and can accurately translate between Telugu and English.",
    image:
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJtMTMgMTlsMy41LTlsMy41IDltLTYuMTI1LTJoNS4yNU0zIDdoN20wIDBoMm0tMiAwYzAgMS42My0uNzkzIDMuOTI2LTIuMjM5IDUuNjU1TTcuNSA2LjgxOFY1bS4yNjEgNy42NTVDNi43OSAxMy44MiA1LjUyMSAxNC43MjUgNCAxNW0zLjc2MS0yLjM0NUw1IDEwbTIuNzYxIDIuNjU1TDEwLjIgMTUiLz48L3N2Zz4=",
  },
  {
    id: 3,
    name: "Spanish",
    description:
      "Able to hold a strong conversation and express complex thoughts.",
    image:
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxnIGZpbGw9Im5vbmUiPjxwYXRoIGQ9Im0xMi41OTMgMjMuMjU4bC0uMDExLjAwMmwtLjA3MS4wMzVsLS4wMi4wMDRsLS4wMTQtLjAwNGwtLjA3MS0uMDM1cS0uMDE2LS4wMDUtLjAyNC4wMDVsLS4wMDQuMDFsLS4wMTcuNDI4bC4wMDUuMDJsLjAxLjAxM2wuMTA0LjA3NGwuMDE1LjAwNGwuMDEyLS4wMDRsLjEwNC0uMDc0bC4wMTItLjAxNmwuMDA0LS4wMTdsLS4wMTctLjQyN3EtLjAwNC0uMDE2LS4wMTctLjAxOG0uMjY1LS4xMTNsLS4wMTMuMDAybC0uMTg1LjA5M2wtLjAxLjAxbC0uMDAzLjAxMWwuMDE4LjQzbC4wMDUuMDEybC4wMDguMDA3bC4yMDEuMDkzcS4wMTkuMDA1LjAyOS0uMDA4bC4wMDQtLjAxNGwtLjAzNC0uNjE0cS0uMDA1LS4wMTgtLjAyLS4wMjJtLS43MTUuMDAyYS4wMi4wMiAwIDAgMC0uMDI3LjAwNmwtLjAwNi4wMTRsLS4wMzQuNjE0cS4wMDEuMDE4LjAxNy4wMjRsLjAxNS0uMDAybC4yMDEtLjA5M2wuMDEtLjAwOGwuMDA0LS4wMTFsLjAxNy0uNDNsLS4wMDMtLjAxMmwtLjAxLS4wMXoiLz48cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTE2IDNhMyAzIDAgMCAxIDIuOTk1IDIuODI0TDE5IDZ2MTBoLjc1Yy42NDcgMCAxLjE4LjQ5MiAxLjI0NCAxLjEyMmwuMDA2LjEyOFYxOWEzIDMgMCAwIDEtMi44MjQgMi45OTVMMTggMjJIOGEzIDMgMCAwIDEtMi45OTUtMi44MjRMNSAxOVY5SDMuMjVhMS4yNSAxLjI1IDAgMCAxLTEuMjQ0LTEuMTIyTDIgNy43NVY2YTMgMyAwIDAgMSAyLjgyNC0yLjk5NUw1IDN6bTAgMkg3djE0YTEgMSAwIDEgMCAyIDB2LTEuNzVjMC0uNjkuNTYtMS4yNSAxLjI1LTEuMjVIMTdWNmExIDEgMCAwIDAtMS0xbTMgMTNoLTh2MWMwIC4zNS0uMDYuNjg3LS4xNyAxSDE4YTEgMSAwIDAgMCAxLTF6bS03LTZhMSAxIDAgMSAxIDAgMmgtMmExIDEgMCAxIDEgMC0yem0yLTRhMSAxIDAgMSAxIDAgMmgtNGExIDEgMCAwIDEgMC0yek01IDVhMSAxIDAgMCAwLS45OTMuODgzTDQgNnYxaDF6Ii8+PC9nPjwvc3ZnPg==",
  },
  {
    id: 4,
    name: "Python",
    description:
      "Certified in Python. Worked for Stanford University, Dartmouth College, and the University of Pennsylvania on Python-related projects.",
    image:
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIwLjg4ZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgNDQ4IDUxMiI+PHBhdGggZmlsbD0id2hpdGUiIGQ9Ik00MzkuOCAyMDAuNWMtNy43LTMwLjktMjIuMy01NC4yLTUzLjQtNTQuMmgtNDAuMXY0Ny40YzAgMzYuOC0zMS4yIDY3LjgtNjYuOCA2Ny44SDE3Mi43Yy0yOS4yIDAtNTMuNCAyNS01My40IDU0LjN2MTAxLjhjMCAyOSAyNS4yIDQ2IDUzLjQgNTQuM2MzMy44IDkuOSA2Ni4zIDExLjcgMTA2LjggMGMyNi45LTcuOCA1My40LTIzLjUgNTMuNC01NC4zdi00MC43SDIyNi4ydi0xMy42aDE2MC4yYzMxLjEgMCA0Mi42LTIxLjcgNTMuNC01NC4yYzExLjItMzMuNSAxMC43LTY1LjcgMC0xMDguNk0yODYuMiA0MDRjMTEuMSAwIDIwLjEgOS4xIDIwLjEgMjAuM2MwIDExLjMtOSAyMC40LTIwLjEgMjAuNGMtMTEgMC0yMC4xLTkuMi0yMC4xLTIwLjRjLjEtMTEuMyA5LjEtMjAuMyAyMC4xLTIwLjNNMTY3LjggMjQ4LjFoMTA2LjhjMjkuNyAwIDUzLjQtMjQuNSA1My40LTU0LjNWOTEuOWMwLTI5LTI0LjQtNTAuNy01My40LTU1LjZjLTM1LjgtNS45LTc0LjctNS42LTEwNi44LjFjLTQ1LjIgOC01My40IDI0LjctNTMuNCA1NS42djQwLjdoMTA2Ljl2MTMuNmgtMTQ3Yy0zMS4xIDAtNTguMyAxOC43LTY2LjggNTQuMmMtOS44IDQwLjctMTAuMiA2Ni4xIDAgMTA4LjZjNy42IDMxLjYgMjUuNyA1NC4yIDU2LjggNTQuMkgxMDF2LTQ4LjhjMC0zNS4zIDMwLjUtNjYuNCA2Ni44LTY2LjRtLTYuNy0xNDIuNmMtMTEuMSAwLTIwLjEtOS4xLTIwLjEtMjAuM2MuMS0xMS4zIDktMjAuNCAyMC4xLTIwLjRjMTEgMCAyMC4xIDkuMiAyMC4xIDIwLjRzLTkgMjAuMy0yMC4xIDIwLjMiLz48L3N2Zz4=",
  },
  {
    id: 5,
    name: "Data Analysis",
    description:
      "Worked on projects, which required complex data analysis skills, with Stanford University, the University of Pennsylvania, and other top 10 universities.",
    image:
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNMjEgN2MwIDIuMjEtNC4wMyA0LTkgNFMzIDkuMjEgMyA3bTE4IDBjMC0yLjIxLTQuMDMtNC05LTRTMyA0Ljc5IDMgN20xOCAwdjVNMyA3djVtMTggMGMwIDIuMjEtNC4wMyA0LTkgNHMtOS0xLjc5LTktNG0xOCAwdjVjMCAyLjIxLTQuMDMgNC05IDRzLTktMS43OS05LTR2LTUiLz48L3N2Zz4=",
  },
  {
    id: 6,
    name: "Web Development",
    description:
      "Developed multiple websites coded in Next.js, HTML, CSS, and/or Tailwind CSS for top universities.",
    image:
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjU2IDI1NiI+PHBhdGggZmlsbD0id2hpdGUiIGQ9Ik02OS4xMiA5NC4xNUwyOC41IDEyOGw0MC42MiAzMy44NWE4IDggMCAxIDEtMTAuMjQgMTIuMjlsLTQ4LTQwYTggOCAwIDAgMSAwLTEyLjI5bDQ4LTQwYTggOCAwIDAgMSAxMC4yNCAxMi4zbTE3NiAyNy43bC00OC00MGE4IDggMCAxIDAtMTAuMjQgMTIuM0wyMjcuNSAxMjhsLTQwLjYyIDMzLjg1YTggOCAwIDEgMCAxMC4yNCAxMi4yOWw0OC00MGE4IDggMCAwIDAgMC0xMi4yOW0tODIuMzktODkuMzdhOCA4IDAgMCAwLTEwLjI1IDQuNzlsLTY0IDE3NmE4IDggMCAwIDAgNC43OSAxMC4yNkE4LjEgOC4xIDAgMCAwIDk2IDIyNGE4IDggMCAwIDAgNy41Mi01LjI3bDY0LTE3NmE4IDggMCAwIDAtNC43OS0xMC4yNSIvPjwvc3ZnPg==",
  },
  {
    id: 7,
    name: "Machine Learning",
    description:
      "Worked with Stanford University to use machine learning processes to analyze thousands of antitrust cases, and editing research papers about AI and machine learning for Dartmouth College.",
    image:
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjAgMjAiPjxwYXRoIGZpbGw9IndoaXRlIiBkPSJNMTIgNS41YTEgMSAwIDEgMCAwIDJhMSAxIDAgMCAwIDAtMm0tNSAxYTEgMSAwIDEgMSAyIDBhMSAxIDAgMCAxLTIgMG0zLjUtNGEuNS41IDAgMCAwLTEgMFYzaC0zQTEuNSAxLjUgMCAwIDAgNSA0LjV2NEExLjUgMS41IDAgMCAwIDYuNSAxMGg2LjI5NGwuMzI2LTFINi41YS41LjUgMCAwIDEtLjUtLjV2LTRhLjUuNSAwIDAgMSAuNS0uNWg3YS41LjUgMCAwIDEgLjUuNXYzLjU4M2ExLjQyIDEuNDIgMCAwIDEgMSAuMDE2VjQuNUExLjUgMS41IDAgMCAwIDEzLjUgM2gtM3ptLTIgOWgxLjkwOGExLjQyIDEuNDIgMCAwIDAtLjQwOC45OTd2LjAwNkg1LjMxYS44MS44MSAwIDAgMC0uODEuODF2LjQzN2MwIC42OS4xMzEgMS40NTYuODAyIDIuMDY5QzUuOTkgMTYuNDQ2IDcuMzQgMTcgMTAgMTdjMS41NSAwIDIuNjU1LS4xODggMy40NDQtLjQ3YTEuNCAxLjQgMCAwIDAgLjY3OC40MTlhMS4zIDEuMyAwIDAgMC0uMTE3LjQzOWMtLjkxNi4zNjctMi4xMzcuNTktMy43NTUuNjFWMThoLS41di0uMDAyYy0yLjYxNi0uMDMzLTQuMTk1LS41OTUtNS4xMjItMS40NGMtLjg3NS0uOC0xLjA4OS0xLjc3Ny0xLjEyMy0yLjU1NkgzLjV2LS42OWMwLS45OTkuODEtMS44MDkgMS44MS0xLjgwOUg4LjV6bTYuMzc4LTIuMjE4bC4zNDggMS4wNzFhMi4yIDIuMiAwIDAgMCAxLjM5OSAxLjM5N2wxLjA3MS4zNDhsLjAyMS4wMDZhLjQyMy40MjMgMCAwIDEgMCAuNzk4bC0xLjA3MS4zNDhhMi4yIDIuMiAwIDAgMC0xLjM5OSAxLjM5N2wtLjM0OCAxLjA3YS40MjMuNDIzIDAgMCAxLS43OTggMGwtLjM0OS0xLjA3YTIuMiAyLjIgMCAwIDAtLjY1LS45NzdhMi4yIDIuMiAwIDAgMC0uNzQ4LS40MjZsLTEuMDcxLS4zNDhhLjQyMy40MjMgMCAwIDEgMC0uNzk4bDEuMDcxLS4zNDhhMi4yIDIuMiAwIDAgMCAxLjM3Ny0xLjM5N2wuMzQ4LTEuMDdhLjQyMy40MjMgMCAwIDEgLjc5OSAwbTQuOTA1IDcuOTMxbC0uNzY2LS4yNDhhMS41OCAxLjU4IDAgMCAxLS45OTgtLjk5OGwtLjI1LS43NjVhLjMwMi4zMDIgMCAwIDAtLjU3IDBsLS4yNDguNzY1YTEuNTggMS41OCAwIDAgMS0uOTg0Ljk5OGwtLjc2NS4yNDhhLjMwMy4zMDMgMCAwIDAtLjE0Ni40NmMuMDM2LjA1LjA4Ny4wOS4xNDYuMTFsLjc2NS4yNDlhMS41OCAxLjU4IDAgMCAxIDEgMS4wMDJsLjI0OC43NjRhLjMwMi4zMDIgMCAwIDAgLjU3IDBsLjI0OS0uNzY0YTEuNTggMS41OCAwIDAgMSAuOTk5LS45OTlsLjc2NS0uMjQ4YS4zMDIuMzAyIDAgMCAwIDAtLjU3em0tNi4xNzQtLjUyN2wuMDcuMDUzWiIvPjwvc3ZnPg==",
  },
  {
    id: 8,
    name: "Public Speaking",
    description:
      "Achieved 2nd place in Mock Trial states and 21st nationally. Won the best attorney award out of 300 attorneys for exemplary public speaking.",
    image:
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IndoaXRlIiBkPSJNMTIgMmEzIDMgMCAwIDEgMyAzdjZhMyAzIDAgMCAxLTMgM2EzIDMgMCAwIDEtMy0zVjVhMyAzIDAgMCAxIDMtM203IDljMCAzLjUzLTIuNjEgNi40NC02IDYuOTNWMjFoLTJ2LTMuMDdjLTMuMzktLjQ5LTYtMy40LTYtNi45M2gyYTUgNSAwIDAgMCA1IDVhNSA1IDAgMCAwIDUtNXoiLz48L3N2Zz4=",
  },
  {
    id: 9,
    name: "Leadership and Management",
    description:
      "Held leadership positions at the state and local level. Won 1st Place twice nationally in leadership related events at the Business Professionals of America 2024 NLC.",
    image:
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMTYgMTYiPjxwYXRoIGZpbGw9IndoaXRlIiBkPSJNMTEgNWEzIDMgMCAxIDEtNiAwYTMgMyAwIDAgMSA2IDBNOCA3YTIgMiAwIDEgMCAwLTRhMiAyIDAgMCAwIDAgNG0uMjU2IDdhNC41IDQuNSAwIDAgMS0uMjI5LTEuMDA0SDNjLjAwMS0uMjQ2LjE1NC0uOTg2LjgzMi0xLjY2NEM0LjQ4NCAxMC42OCA1LjcxMSAxMCA4IDEwcS4zOSAwIC43NC4wMjVjLjIyNi0uMzQxLjQ5Ni0uNjUuODA0LS45MThROC44NDQgOS4wMDIgOCA5Yy01IDAtNiAzLTYgNHMxIDEgMSAxem0zLjYzLTQuNTRjLjE4LS42MTMgMS4wNDgtLjYxMyAxLjIyOSAwbC4wNDMuMTQ4YS42NC42NCAwIDAgMCAuOTIxLjM4MmwuMTM2LS4wNzRjLjU2MS0uMzA2IDEuMTc1LjMwOC44Ny44NjlsLS4wNzUuMTM2YS42NC42NCAwIDAgMCAuMzgyLjkybC4xNDkuMDQ1Yy42MTIuMTguNjEyIDEuMDQ4IDAgMS4yMjlsLS4xNS4wNDNhLjY0LjY0IDAgMCAwLS4zOC45MjFsLjA3NC4xMzZjLjMwNS41NjEtLjMwOSAxLjE3NS0uODcuODdsLS4xMzYtLjA3NWEuNjQuNjQgMCAwIDAtLjkyLjM4MmwtLjA0NS4xNDljLS4xOC42MTItMS4wNDguNjEyLTEuMjI5IDBsLS4wNDMtLjE1YS42NC42NCAwIDAgMC0uOTIxLS4zOGwtLjEzNi4wNzRjLS41NjEuMzA1LTEuMTc1LS4zMDktLjg3LS44N2wuMDc1LS4xMzZhLjY0LjY0IDAgMCAwLS4zODItLjkybC0uMTQ4LS4wNDVjLS42MTMtLjE4LS42MTMtMS4wNDggMC0xLjIyOWwuMTQ4LS4wNDNhLjY0LjY0IDAgMCAwIC4zODItLjkyMWwtLjA3NC0uMTM2Yy0uMzA2LS41NjEuMzA4LTEuMTc1Ljg2OS0uODdsLjEzNi4wNzVhLjY0LjY0IDAgMCAwIC45Mi0uMzgyek0xNCAxMi41YTEuNSAxLjUgMCAxIDAtMyAwYTEuNSAxLjUgMCAwIDAgMyAwIi8+PC9zdmc+",
  },
];

const HoverSpring = () => {
  return (
    <div>
      <div className="grid w-full md:grid-cols-2 gap-x-10 grid-cols-3">
        {ProjectsData.map((project) => {
          return (
            <motion.div
              whileHover={{
                y: -8,
              }}
              transition={{
                type: "spring",
                bounce: 0.7,
              }}
              key={project.id}
              className="mt-5 text-left"
            >
              <a target="_blank" rel="noopener noreferrer" href={project.link}>
                <Image
                  src={project.image}
                  width={30}
                  height={30}
                  className="mb-3 rounded-lg bg-dark border-gray-900 dark:border-gray-400 border"
                  alt={project.name}
                />
                <div className="mb-1 text-sm font-medium text-gray-900 dark:text-gray-100">
                  {project.name}
                </div>
                <div className="max-w-[400px] text-sm font-normal text-gray-500 dark:text-gray-500">
                  {project.description}
                </div>
              </a>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default HoverSpring;
