import React from "react"
import "./Blog.css"
import {Link} from "react-router-dom"
import BlogsData from "../../BlogsData"
import EmptyList from "../EmptyList/EmptyList"
export default function Blog({filteredContainers}){
    const [Pages , setPages] = React.useState(1)
    const [Blogs , setBlogs] = React.useState([])
    React.useEffect(
        () => {
            setBlogs(BlogsData)
        }, []
    )
    function PageClicker(pageIndex) {
        setPages(pageIndex)
    }
    const BlogElements = filteredContainers.map((data)=> {
        return (
           <main className="blog-container" key={data.id}>
               <span className="blog-category" style={data.blogCategoryStyles}>{data.blogCategory}</span>
               <div className="blog-img">
                   <img src={data.cover} alt={data.imgAlt} className="blog-cover"/>
               </div>
               <h4 className="blog-title">{data.title}</h4>

               <div className="blog-author-details">
                   <img src={data.authorCover} alt="" />
                   <p> 
                       <a href="" className="element">{data.authorName}</a> 
                       on {data.publishedDate}
                   </p>
               </div>
               <p className="blog-content">{data.content.slice(0, 200) + "..."}</p>

               <div className="blog-read-more">
                   <Link to={`/blog/${data.id}`}>Read More</Link>
                   <img src="https://cdn1.iconfinder.com/data/icons/basic-ui-elements-coloricon/21/04-512.png" alt="read more link" />
               </div>              
           </main>
        )
    })

    return(
        <section>
             <main id="blog-root" className="section-p">
                {   Blogs.length > 0 
                    ?
                    BlogElements.slice(Pages * 9 - 9, Pages*9)
                    :
                    <EmptyList/>
                }
            </main>

            {/* Pagination Code */}

            {
                Blogs.length > 0 &&
                    (
                        <main id="pagination" className="section-p">
                            {
                                [...Array(2)].map((value, index)=>{
                                    return (
                                        <button key={index} onClick={ () => PageClicker(index + 1)} className={Pages === index + 1 ? "pageClicked" : ""}>{index+1}</button>
                                    )
                                })
                            }
                        </main>
                    )
            }
    
        </section>
       
    )
}