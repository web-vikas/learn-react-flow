import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-4xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-muted-foreground mb-8 max-w-md">
          It seems that the page you're looking for doesn't exist. Please check
          the URL or try a different one.
        </p>
        <div className="flex flex-col justify-center gap-4">
          <Link
            href={"/"}
            className={buttonVariants({
              variant: "default"
            })}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back To Dashboard
          </Link>
        </div>
      </div>
      <div className="mt-12 text-center">
        <p className="text-sm text-muted-foreground">
          If you believe this is an error, please contact our support team.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
