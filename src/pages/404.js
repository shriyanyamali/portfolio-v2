import Link from "next/link";
import Head from "next/head";
import { GlobeDemo } from "@/components/demo/demo-globe";

const NotFound = () => {
  return (
    <>
      <Head>
        <title>404 | Page Not Found - Shriyan Yamali</title>
        <meta
          name="404 Page for Shriyan Yamali's Personal Website"
          content="404, found, not, page"
        />
      </Head>
      <main className="grid min-h-full place-items-center bg-light dark:bg-dark mt-8 lg:px-8">
        <div className="text-center pt-12">
          <p className="text-base font-semibold text-indigo-600 dark:text-teal-600">
            404
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-400 w-3/4 mx-auto">
            We looked across the globe but we could not find the page you are
            looking for. How about we head back home? Otherwise, you can contact
            me if you believe there should be a webpage here.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/"
              className="rounded-md dark:bg-teal-600 bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </Link>
            <a
              href="mailto:srujanshriyan@gmail.com?subject=Missing Webpage on shriyanyamali.tech"
              target="_blank"
              className="text-sm font-semibold text-gray-900 dark:text-gray-100"
            >
              Contact Me <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
          <div className="pb-32">
            <GlobeDemo />
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFound;
