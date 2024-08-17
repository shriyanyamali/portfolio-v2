import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";

const Privacy = () => {
  const [textContent, setTextContent] = useState("");
  const [error, setError] = useState(null);  // Added state for error handling

  useEffect(() => {
    fetch("/PrivacyPolicy.txt")
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then((text) => setTextContent(text))
      .catch((error) => {
        console.error("Error fetching Privacy Policy:", error);
        setError("Could not load Privacy Policy. Please try again later.");
      });
  }, []);

  return (
    <div>
      <Head>
        <title>Privacy Policy - Shriyan Yamali</title>
        <meta
          name="Privacy Policy Page for Shriyan Yamali"
          content="Privacy Policy, Newark Charter School, NCS, Shriyan Yamali, Shriyan, Yamali"
        />
      </Head>
      <main>
        <Layout className="pt-16">
          <AnimatedText
            text="Privacy Policy"
            className="mb-16
          lg:!text-6xl md:!text-5xl sm:mb-8 sm:!text-4xl xs:!text-2xl
          "
          />
          <div className="mx-auto max-w-5xl text-dark dark:text-light">
            {error ? (
              <p>{error}</p>
            ) : (
              <pre className="whitespace-pre-wrap">{textContent}</pre>
            )}
            <a
              href="/PrivacyPolicy.txt"
              download="PrivacyPolicy.txt"
              className="inline-block mt-10 py-2 text-amber-500 font-semibold cursor-pointer"
              style={{
                fontFamily: "Courier New, Courier, monospace",
                textDecoration: "none",
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#d68c0a")}
              onMouseOut={(e) => (e.currentTarget.style.color = "#f59e0b")}
            >
              Download PrivacyPolicy.txt
            </a>
          </div>
        </Layout>
      </main>
    </div>
  );
};

export default Privacy;
