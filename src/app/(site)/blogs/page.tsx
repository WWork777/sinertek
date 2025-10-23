import BlogList from "@/components/Blog";
import HeroSub from "@/components/shared/HeroSub";
import { Metadata } from "next";

export const metadata: Metadata = {
    title:
        "Блог | SINERTEK Electronics",
};

const Blog = () => {
    return (
        <>
            <HeroSub
                title="Экспертиза в электронике"
                description="Актуальные статьи о разработке электроники, новых технологиях и лучших практиках"
                badge="Блог"
            />
            <BlogList />
        </>
    );
};

export default Blog;
