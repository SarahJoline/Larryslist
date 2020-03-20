import axios from "axios";

export default {

    getposts:function(){
        return axios.get("/api/allPosts");
    },
    getpost: function(id) {
        return axios.get("/api/find/" + id);
    },
    deletepost: function(id){
        return axios.delete("/api/posts/" + id);
    },
    savepost: function(bookData) {
        return axios.post("/api/posts", bookData);
    },
    getcomments:function(postid){
        return axios.get("/comments/all/"+postid);
    },
    savecomment: function(postid, commentOb) {
        return axios.post("/comments/post/"+ postid, commentOb);
    },
};