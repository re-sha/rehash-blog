import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: "Git 101: Let's Opensource!", body:"Get started with your github journey in 10 mins", author:"re-sha", id: 1},
        {title: "Getting started with React", body:"Write your first React project in 7 mins", author:"Andrew", id: 1},
        {title: "How to use zod validation", body:"Apply zod input validations to your codebase in 5 mins", author:"Philip Mathew", id: 1}
    ])
    return (
        <div className="home">
            <BlogList blogs={blogs} subheading="All Blogs" />
        </div>
      );
}
 
export default Home;