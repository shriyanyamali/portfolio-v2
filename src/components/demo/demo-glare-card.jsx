import { GlareCard } from "../ui/glare-card";

export function GlareCardDemo() {
  return (
    (<GlareCard className="flex flex-col items-center justify-center">
        <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-12 w-12 fill-dark dark:fill-light"
        width="24"
        height="24"
        viewBox="0 -960 960 960"
        >
           <path d="M320-242q10 1 19.5 1.5t20.5.5 20.5-.5T400-242v82h400v-400h-82q1-10 1.5-19.5t.5-20.5-.5-20.5T718-640h82q33 0 56.5 23.5T880-560v400q0 33-23.5 56.5T800-80H400q-33 0-56.5-23.5T320-160zm40-78q-117 0-198.5-81.5T80-600t81.5-198.5T360-880t198.5 81.5T640-600t-81.5 198.5T360-320m0-80q83 0 141.5-58.5T560-600t-58.5-141.5T360-800t-141.5 58.5T160-600t58.5 141.5T360-400m0-200"/>
        </svg>
      <p className="text-white font-bold text-xl mt-4">Let&rsquo;s Chat</p>
    </GlareCard>)
  );
}

