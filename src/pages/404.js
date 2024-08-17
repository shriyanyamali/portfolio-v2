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
        <div className="flex flex-col items-center min-h-screen justify-center
        text-dark dark:text-light text-center 
        ">
            <h1 className="mb-10 text-4xl">404 | Page Not Found</h1>
            <div className="text-lg w-1/4 lg:w-3/4">
                <h2 className="">I've made many webpages...</h2>
                <h2 className="mb-3">
                just not the one you are looking for.
                </h2>
                <h3>If you think that there should be a page here, please contact me at &nbsp;
                    <Link className="underline text-blue-600 hover:text-blue-800 dark:text-cyan-300 hover:dark:text-cyan-500
                    " href="mailto:srujanshriyan@gmail.com?subject=Missing Webpage on shriyamali.github.io" target="_blank">srujanshriyan@gmail.com.</Link>
                </h3>
                <h3>
                    Otherwise, please return &nbsp;
                    <Link className="underline text-blue-600 hover:text-blue-800 dark:text-cyan-300 hover:dark:text-cyan-500
                    " href="/">home.</Link>
                </h3>
            </div>
        </div>
    </>
    );
}

export default NotFound;