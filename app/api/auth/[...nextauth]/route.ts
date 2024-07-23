
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import rabbitApi from "@/shared/config/users/rabbit-api"

export interface UserResponse {
    data: User;
    message: string;
    success: boolean;
    statusCode: number;
}

export interface User {
    id: string;
    uuid: string;
    jwt_token: string;
    user_token: string;
}

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials:{
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                try {
                    const response = await rabbitApi.post<UserResponse>(`/user/sign-in`, {
                        email: credentials?.email,
                        password: credentials?.password,
                    });

                    const user = response.data.data;
                    console.log(user);

                    if (response.data.success && user) {
                        return {
                            id: user.id,
                            uuid: user.uuid,
                            jwt_token: user.jwt_token,
                            user_token: user.user_token,
                        };
                    } else {
                        return null;
                    }
                } catch (error) {
                    console.error("ROUTE -> Error during authentication:", error);
                    return null;
                }
            },
        }),
    ],
    callbacks:{
        async jwt({ token, user }) {
            if (user) return { ...token, ...user };
            return token;
        },
        async session({ session, token }) {
            console.log(token);
            session.user = token as any;
            return session;
        },
        },
        pages: {
            signIn: "/login",
        },
})

export { handler as GET, handler as POST };
