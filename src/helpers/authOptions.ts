import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "afsar@gmail.com" },
                password: { label: "Password", type: "password", placeholder: "123456" }
            },
            async authorize(credentials, req) {
                if (!credentials?.email || !credentials?.password) {
                    console.error("Invalid credentials");
                    return null
                }
 
                try {
                    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/login`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            email: credentials.email,
                            password: credentials.password,
                        }),
                    })

                    console.log("Response From Backend: ", res);
                    if(!res?.ok) {
                        console.error("Error from backend: ", res);
                        return null;
                    }
                    
                    const data = await res.json();
                    console.log("Data From Backend: ", data);
                    // return data;
                    if(data.id) {
                        return {
                            id: data?.id,
                            name: data?.name,
                            email: data?.email,
                            image: data?.image
                        }
                    } else {
                        return null;
                    }
                    
                } catch (error) {
                    console.log(error)
                    return null
                }
    }
  })
    ],
    callbacks: {
        async jwt({token, user}: {token: any, user: any}) {
            if(user) {
                token.id = user.id;
            }
            return token
        },
        async session({session, token}: {session: any, token: any}) {
            if(session?.user) {
                session.user.id = token.id;
            }
            return session
        }
    },
    secret: process.env.AUTH_SECRET,
    pages: {
        signIn: "/login"
    }
}