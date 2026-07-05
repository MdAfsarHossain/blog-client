import { NextResponse } from "next/server";

export const blogs = [
   {
            "id": 7,
            "title": "Next JS",
            "content": "Next JS Content...",
            "thumbnail": "https://teamraft.com/wp-content/uploads/nextjs.jpg",
            "isFeatured": true,
            "tags": [
                "Nextjs",
                "React"
            ],
            "views": 0,
            "authorId": 1,
            "createdAt": "2026-07-05T08:41:42.514Z",
            "updatedAt": "2026-07-05T08:41:42.514Z",
            "author": {
                "id": 1,
                "name": "Afsar Hossain",
                "email": "afsar@gmail.com",
                "password": "123456",
                "role": "USER",
                "phone": "01234567890",
                "picture": null,
                "status": "ACTIVE",
                "isVerified": false,
                "createdAt": "2026-06-16T03:01:16.984Z",
                "updatedAt": "2026-06-16T03:01:16.984Z"
            }
        },
        {
            "id": 6,
            "title": "English",
            "content": "English Content",
            "thumbnail": "https://teamraft.com/wp-content/uploads/nextjs.jpg",
            "isFeatured": true,
            "tags": [
                "Nextjs",
                "React"
            ],
            "views": 1,
            "authorId": 1,
            "createdAt": "2026-07-05T08:34:01.604Z",
            "updatedAt": "2026-07-05T08:35:08.511Z",
            "author": {
                "id": 1,
                "name": "Afsar Hossain",
                "email": "afsar@gmail.com",
                "password": "123456",
                "role": "USER",
                "phone": "01234567890",
                "picture": null,
                "status": "ACTIVE",
                "isVerified": false,
                "createdAt": "2026-06-16T03:01:16.984Z",
                "updatedAt": "2026-06-16T03:01:16.984Z"
            }
        },
        {
            "id": 5,
            "title": "Python ",
            "content": "Python content",
            "thumbnail": "https://imafsarhossain.vercel.app/",
            "isFeatured": true,
            "tags": [
                "Nextjs",
                "React"
            ],
            "views": 0,
            "authorId": 1,
            "createdAt": "2026-07-05T08:30:16.659Z",
            "updatedAt": "2026-07-05T08:30:16.659Z",
            "author": {
                "id": 1,
                "name": "Afsar Hossain",
                "email": "afsar@gmail.com",
                "password": "123456",
                "role": "USER",
                "phone": "01234567890",
                "picture": null,
                "status": "ACTIVE",
                "isVerified": false,
                "createdAt": "2026-06-16T03:01:16.984Z",
                "updatedAt": "2026-06-16T03:01:16.984Z"
            }
        },
        {
            "id": 4,
            "title": "Getting Started with Next.js - 4",
            "content": "Next.js introduces new features for building fast and scalable web applications. Learn how to set up your first project and explore its App Router.",
            "thumbnail": "https://teamraft.com/wp-content/uploads/nextjs.jpg",
            "isFeatured": true,
            "tags": [
                "Next.js",
                "React",
                "Web Development"
            ],
            "views": 2,
            "authorId": 1,
            "createdAt": "2026-06-20T11:20:15.861Z",
            "updatedAt": "2026-06-23T02:43:19.040Z",
            "author": {
                "id": 1,
                "name": "Afsar Hossain",
                "email": "afsar@gmail.com",
                "password": "123456",
                "role": "USER",
                "phone": "01234567890",
                "picture": null,
                "status": "ACTIVE",
                "isVerified": false,
                "createdAt": "2026-06-16T03:01:16.984Z",
                "updatedAt": "2026-06-16T03:01:16.984Z"
            }
        },
        {
            "id": 3,
            "title": "Getting Started with Next.js - 3",
            "content": "Next.js introduces new features for building fast and scalable web applications. Learn how to set up your first project and explore its App Router.",
            "thumbnail": "https://teamraft.com/wp-content/uploads/nextjs.jpg",
            "isFeatured": true,
            "tags": [
                "Next.js",
                "React",
                "Web Development"
            ],
            "views": 0,
            "authorId": 1,
            "createdAt": "2026-06-20T11:20:09.932Z",
            "updatedAt": "2026-06-20T11:20:09.932Z",
            "author": {
                "id": 1,
                "name": "Afsar Hossain",
                "email": "afsar@gmail.com",
                "password": "123456",
                "role": "USER",
                "phone": "01234567890",
                "picture": null,
                "status": "ACTIVE",
                "isVerified": false,
                "createdAt": "2026-06-16T03:01:16.984Z",
                "updatedAt": "2026-06-16T03:01:16.984Z"
            }
        },
        {
            "id": 2,
            "title": "Getting Started with Next.js - 2",
            "content": "Next.js introduces new features for building fast and scalable web applications. Learn how to set up your first project and explore its App Router.",
            "thumbnail": "https://teamraft.com/wp-content/uploads/nextjs.jpg",
            "isFeatured": true,
            "tags": [
                "Next.js",
                "React",
                "Web Development"
            ],
            "views": 0,
            "authorId": 1,
            "createdAt": "2026-06-20T11:20:03.427Z",
            "updatedAt": "2026-06-20T11:20:03.427Z",
            "author": {
                "id": 1,
                "name": "Afsar Hossain",
                "email": "afsar@gmail.com",
                "password": "123456",
                "role": "USER",
                "phone": "01234567890",
                "picture": null,
                "status": "ACTIVE",
                "isVerified": false,
                "createdAt": "2026-06-16T03:01:16.984Z",
                "updatedAt": "2026-06-16T03:01:16.984Z"
            }
        },
        {
            "id": 1,
            "title": "Getting Started with Next.js",
            "content": "Next.js introduces new features for building fast and scalable web applications. Learn how to set up your first project and explore its App Router.",
            "thumbnail": "https://teamraft.com/wp-content/uploads/nextjs.jpg",
            "isFeatured": true,
            "tags": [
                "Next.js",
                "React",
                "Web Development"
            ],
            "views": 0,
            "authorId": 1,
            "createdAt": "2026-06-16T03:01:45.349Z",
            "updatedAt": "2026-06-16T03:01:45.349Z",
            "author": {
                "id": 1,
                "name": "Afsar Hossain",
                "email": "afsar@gmail.com",
                "password": "123456",
                "role": "USER",
                "phone": "01234567890",
                "picture": null,
                "status": "ACTIVE",
                "isVerified": false,
                "createdAt": "2026-06-16T03:01:16.984Z",
                "updatedAt": "2026-06-16T03:01:16.984Z"
            }
        }
]

export async function GET() {
    return Response.json(blogs);
}

export const POST = async (request: Request) => {
    const blog = await request.json()
    const newBlog = {
        ...blog,
        id: blogs.length + 1
    };
    blogs.push(newBlog);

    return new NextResponse(JSON.stringify(newBlog), {
        status: 201,
        headers: {
            "Content-Type": "application/json"
        }
    })
}
