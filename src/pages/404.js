import Link from "next/link";
import Head from "next/head";

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
      <main class="grid min-h-full place-items-center bg-light dark:bg-dark px-6 py-24 sm:py-32 lg:px-8">
  <div class="text-center py-44">
    <p class="text-base font-semibold text-indigo-600 dark:text-teal-600">404</p>
    <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">Page not found</h1>
    <p class="mt-6 text-base leading-7 text-gray-600 dark:text-gray-400">Sorry, this page seems to be lost in cyberspace. How about we head back home?</p>
    <div class="mt-10 flex items-center justify-center gap-x-6">
      <a href="/" class="rounded-md dark:bg-teal-600 bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Go back home</a>
      <a href="mailto:srujanshriyan@gmail.com?subject=Missing Webpage on shriyamali.github.io" target="_blank" 
      class="text-sm font-semibold text-gray-900 dark:text-gray-100">Contact Me <span aria-hidden="true">&rarr;</span></a>
    </div>
  </div>
</main>
    </>
  );
};

export default NotFound;
