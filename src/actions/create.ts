"use server"

import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export const create = async (data: FormData) => {
    const blogInfo = Object.fromEntries(data.entries());
    const modifiedData = {
        ...blogInfo,
        tags: blogInfo.tags.toString().split(",").map((tag) => tag.trim()),
        authorId: 1,
        isFeatured: Boolean(blogInfo.isFeatured)
    }

    // console.log(modifiedData);

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(modifiedData),
    })

    const result = await res.json();
    // console.log(`Create Blogs Result: `);
    
    // console.log(result);

    if(result?.id) {
        revalidateTag('BLOGS');
        revalidatePath('/blogs');
        // redirect('/blogs');
        redirect('/')
    }

    return result;
}

