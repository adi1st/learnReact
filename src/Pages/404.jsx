import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-sm">
        <div id="error-page">
          <h1 className="text-3xl font-bold mb-2">Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <p>
            <i>{error.statusText || error.message}</i>
          </p>
        </div>
      </div>
    </div>
  );
}
