import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuthStore } from "../store";

const Home = () => {
  const router = useRouter();
  const { isLoggedIn } = useAuthStore();

  useEffect(() => {
    if (!isLoggedIn()) {
      router.push("/login");
    }
  }, [router, isLoggedIn()]);
};

export default Home;
