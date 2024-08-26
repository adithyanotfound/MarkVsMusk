import React from "react";
import Header from "./components/Header/Header";
import Filterblock from "./components/FilterBlock/FilterBlock";
import Blog from "./components/Blog/Blog";
import Footer from "./components/Footer/Footer";
import BlogsData from "./BlogsData";
export default function BlogPage({isAuth, setIsAuth}){

    // Collecting user input value and saving it to state

    const [inputVal, setInputVal] = React.useState('');
    const [selectedVal, setSelectedVal] = React.useState('');
    const [blogsData, setBlogsData]= React.useState([])

    React.useEffect(
        ()=>{
            setBlogsData(BlogsData)
        }, []
    )

    const filteredContainers = blogsData.filter((container) =>
        selectedVal ? container.blogCategory.includes(selectedVal) : true
    );

    function getInputVal(event){
        setInputVal(event.target.value)
    }

    // Search Function
    function search(){
        const search_box = inputVal.toUpperCase();
        const blog = document.querySelectorAll(".blog-container");
        const title = document.querySelectorAll(".blog-title");
        for (var i = 0; i < title.length; i++){
            let match = blog[i].querySelectorAll(".blog-title")[0]
            if(match){
                let textValue = match.textContent || match.innerHTML;
                if(textValue.toUpperCase().indexOf(search_box) > -1){
                    blog[i].style.display = "";
                }else{
                    blog[i].style.display = "none";
                }
            }
        }

    }

    // Select function
    function getSelectedVal(){
        const categories = document.getElementById("categories").value;
        setSelectedVal(categories);
    }
    return(
        <section>
            <Header isAuth = {isAuth} setIsAuth = {setIsAuth}/>
            <Filterblock getSelectedVal={getSelectedVal} getInputVal={getInputVal} search={search}/>
            <Blog filteredContainers = {filteredContainers}/>
            <Footer isAuth = {isAuth} setIsAuth = {setIsAuth}/>
        </section>
    )
}