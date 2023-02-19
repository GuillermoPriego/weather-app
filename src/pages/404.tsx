import { Layout } from "@/components/layout";
import Link from "next/link";
import * as React from "react";

const NotFoundPage: React.FunctionComponent = () => {
  return (
    <Layout title="404" description="Page not found">
      <div
        className="flex flex-col items-center justify-center h-screen"
        data-testid="404-page"
      >
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-2xl font-medium">Page not found</p>

        <p className="mt-4">
          <Link
            href="/"
            className="font-semibold text-teal-600 hover:text-teal-700"
          >
            <span className="flex mr-2 items-center">
              <svg
                className="w-6 h-6 inline-block"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.707 5.293a1 1 0 010 1.414L10.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                />
              </svg>
              <span className="ml-2">Go back home</span>
            </span>
          </Link>
        </p>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
