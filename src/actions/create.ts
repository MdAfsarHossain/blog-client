"use server"

export const create = async (data: FormData) => {
    const blogInfo = Object.fromEntries(data.entries());
    const modifiedData = {
        ...blogInfo,
        tags: blogInfo.tags.toString().split(",").map((tag) => tag.trim()),
        authorId: 1,
        isFeatured: Boolean(blogInfo.isFeatured)
    }

    console.log(modifiedData);
}

