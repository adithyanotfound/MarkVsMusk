import React from "react";
import "./Comment.css"
import { db, auth } from "../../firebase";
import { addDoc, collection, getDocs, deleteDoc,doc } from "firebase/firestore";
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
export default function Comment({isAuth}){

    const [comment , setComment]= React.useState('')
    const [posts, setPosts] = React.useState([])
    const PostCollectionRef = collection(db, "Comments")
    async function validate(event){
        if(comment==="") {
            event.preventDefault();
        }
        else{
            event.preventDefault();
            await addDoc(PostCollectionRef, {comment, date: new Date(), user: {name: auth.currentUser.displayName, id: auth.currentUser.uid}})
            document.getElementById("comment-form").reset();
        }
    }
    React.useEffect(
        ()=>{
            async function getComments(){
                const data = await getDocs(PostCollectionRef)
                setPosts(data.docs.map((doc)=>({... doc.data(), id: doc.id})));
            }
            getComments();
        }, [posts]
    )
    
    async function deleteComments(id){
        const commentDoc = doc(db, "Comments", id)
        await deleteDoc(commentDoc)
    }

    return(
        <React.Fragment>
            {/* <section id="comment">
                    <h1>Comments (0)</h1>
                    <main className="comment-container">
                        <img src="../../images/icons/circle-user.svg" alt="user image"/>
                        <span className="date">8 hours ago</span>
                        <div className="user-details">
                            <span>Jack</span>
                            <p>Great Blog</p>
                        </div>
                    </main>
                <div className="votes">
                        {isAuth && posts.user.id === auth.currentUser.uid && <span onClick={()=> deleteComments(posts.id)}>Delete this comment</span>}
                        <img src="../../images/icons/thumbs-up.svg" alt="" className="upvote" />
                        <img src="../../images/icons/thumbs-down.svg" alt="" className="downvote" />
                </div>
            </section> */}
            <form id="comment-form" onSubmit={validate}>
                <h1>Enter your comment</h1>
                <ReactQuill theme="snow" className="quill-editor" />
                <button type='button' className='write-submit-btn'>Verify Post</button>
            </form>
        </React.Fragment>
            
       
    )
}