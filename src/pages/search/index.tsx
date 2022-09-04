import { useRouter } from "next/router";
import { useEffect } from "react";
import InputForm from "../../components/form/InputForm";
import { useAuthStore } from "../../store";

const Search = () => {
  const { isLoggedIn } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn()) {
      router.push("/");
    }
  }, [router, isLoggedIn()]);
  return (
    <>
      <InputForm />
    </>
  );
};

export default Search;
