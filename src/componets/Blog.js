import { useEffect, useState } from "react"
import { useAccordionButton } from "react-bootstrap"
import BlogCard from "./BlogCard"

    function Blog() {
        const [blog,setBlog] = useState([])
    useEffect(() => {
        fetch("https://dev.to/api/articles?username=javirodmart")
            .then(resp => resp.json())
            .then(data => setBlog(data))
    }, [])

        const BlogArray =
        blog.map((blogs)=>{
            console.log(blogs)
            return <BlogCard
            title ={blogs.title}
            description={blogs.description}
            image={blogs.social_image}
            url={blogs.url}
            />
        })
    

    return (
        <>
            <div className="blog">
                <h1>Blogs</h1>
           <div > 
            {BlogArray}
            </div>
            </div>
        </>
    )
}
export default Blog