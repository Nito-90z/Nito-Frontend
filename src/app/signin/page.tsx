import Spinner from "@/components/common/Spinner";
import SignInForm from "@/components/signIn/SignInForm";
import { Suspense } from "react";

export default async function SignInPage() {
  return (
    <section className="pt-4 px-4 h-full">
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-full">
            <Spinner />
          </div>
        }
      >
        <SignInForm />
      </Suspense>
    </section>
  );
}
