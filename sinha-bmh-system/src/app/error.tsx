"use client";

import { useEffect } from "react";
import { reportLovableError } from "@/lib/lovable-error-reporting";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    reportLovableError(error, {
      boundary: "next_root_error_component",
    });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">
          This page didn't load
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end.
        </p>

        <div className="mt-6 flex justify-center gap-2">
          <button
            onClick={() => reset()}
            className="rounded-md bg-primary px-4 py-2 text-primary-foreground"
          >
            Try again
          </button>

          <a
            href="/"
            className="rounded-md border px-4 py-2"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}