import { useEffect } from "react";
import { useRouter } from "next/router";

const Home = () => {
    const router = useRouter();
    useEffect(() => {
        router.push("/search");
    });
};

export default Home;
