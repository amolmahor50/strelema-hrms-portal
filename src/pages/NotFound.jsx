"use client";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button"; // (if you're using shadcn/ui)
import { Icon } from "@/custom/Icon"; // optional — replace/remove if you don’t have it

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 bg-gray-50">
      <div className="mb-6">
        <h1 className="text-6xl font-bold text-blue-600">404</h1>
        <h2 className="text-2xl font-semibold mt-2 text-gray-800">
          Page Not Found
        </h2>
        <p className="text-gray-500 mt-2">
          Oops! The page you’re looking for doesn’t exist or has been moved.
        </p>
      </div>

      <Link to="/">
        <Button>
          <Icon name="ArrowLeft" />
          Go Back Home
        </Button>
      </Link>
    </div>
  );
}
