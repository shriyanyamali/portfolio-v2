// import React, { useEffect, useState } from "react";
// import Layout from "@/components/Layout";
// import Head from "next/head";
// import AnimatedText from "@/components/AnimatedText";

// const Terms = () => {
//   const [textContent, setTextContent] = useState("");
//   const [error, setError] = useState(null);  // Added state for error handling

//   useEffect(() => {
//     fetch("/Terms.txt")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.text();
//       })
//       .then((text) => setTextContent(text))
//       .catch((error) => {
//         console.error("Error fetching Terms:", error);
//         setError("Could not load Terms. Please try again later.");
//       });
//   }, []);

//   return (
//     <div>
//       <Head>
//         <title>Terms - Shriyan Yamali</title>
//         <meta
//           name="Terms of Service Page for Shriyan Yamali"
//           content="Terms of Service, Newark Charter School, NCS, Shriyan Yamali, Shriyan, Yamali"
//         />
//       </Head>
//       <main>
//         <Layout className="pt-16">
//           <AnimatedText
//             text="Terms of Service"
//             className="mb-16
//           lg:!text-6xl md:!text-5xl sm:mb-8 sm:!text-4xl xs:!text-2xl
//           "
//           />
//           <div className="mx-auto max-w-5xl text-dark dark:text-light">
//             {error ? (
//               <p>{error}</p>
//             ) : (
//               <pre className="whitespace-pre-wrap">{textContent}</pre>
//             )}
//             <a
//               href="/Terms.txt"
//               download="Terms.txt"
//               className="inline-block mt-10 py-2 text-amber-500 font-semibold cursor-pointer"
//               style={{
//                 fontFamily: "Courier New, Courier, monospace",
//                 textDecoration: "none",
//               }}
//               onMouseOver={(e) => (e.currentTarget.style.color = "#d68c0a")}
//               onMouseOut={(e) => (e.currentTarget.style.color = "#f59e0b")}
//             >
//               Download Terms.txt
//             </a>
//           </div>
//         </Layout>
//       </main>
//     </div>
//   );
// };

// export default Terms;
