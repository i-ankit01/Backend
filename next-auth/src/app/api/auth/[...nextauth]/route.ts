import CredentialsProvider from 'next-auth/providers/credentials';
import NextAuth from 'next-auth'

// Login with password email OR you can login with google , github

const handler = NextAuth({

    // All the Providers that are provided by the next-auth will contain here

    providers : [
        CredentialsProvider({
          name: 'Credentials', // this is written in the button "Sign In with Credentials"
          credentials: {
            username: { label: 'email', type: 'text', placeholder: 'Enter Email' },
            password: { label: 'password', type: 'password', placeholder: 'Enter Password' },
          },
          async authorize(credentials: any) {
            // Do the database checks and validations here 
            const username = credentials.username
            const password = credentials.password

            // This is supposed to be returned by the database
            return {
                  id: "user1",
                  name: "Ankit",
                  userId: "ankit123",
                  email: "ankit@gmail.com"
              };
          },
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    
})

export const GET = handler;
export const POST = handler;

// Note next-auth will not give you the signup page you have to create it by yourself, it only manages the user's signin and the associated cookies 