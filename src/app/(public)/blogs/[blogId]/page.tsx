/* eslint-disable @typescript-eslint/no-explicit-any */
import BlogDetailsCard from '@/components/modules/Blogs/BlogDetailsCard';
import { getBlogById } from '@/services/PostService';
import { title } from 'process';

export const generateStaticParams = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`);
  const { data: blogs } = await res.json();

  return blogs.slice(0, 2).map((blog: any) => ({
    blogId: String(blog.id),
  }));
};

export const generateMetadata = async ({params}: {params: Promise<{blogId: string}>}) => {
    const {blogId} = await params;
    const blog = await getBlogById(blogId);

    return {
        title: blog?.title,
        description: blog?.content
    }
}

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