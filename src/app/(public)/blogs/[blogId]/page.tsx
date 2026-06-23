import BlogDetailsCard from '@/components/modules/Blogs/BlogDetailsCard';
import { getBlogById } from '@/services/PostService';
import React from 'react';

const BlogDetailsPage = async ({params}: {params: Promise<{blogId: string}>}) => {
    const {blogId} = await params;
    // console.log(blogId);
    
    const blog = await getBlogById(blogId);
    // console.log(blog);

    //   const blog = {
    //   id: parseInt(blogId),
    //   title: "Sample Blog",
    //   content: "This is a sample blog content",
    //   author: {
    //     name: "John Doe",
    //     picture: "https://example.com/avatar.jpg"
    //   }
    // };
    

    return (
        <div className='py-30 px-4 max-w-7xl mx-auto'>
            <BlogDetailsCard blog={blog} />
        </div>
    );
};

export default BlogDetailsPage;