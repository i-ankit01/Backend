import NextAuth from 'next-auth'
import { NEXTAUTH } from '@/app/lib/auth';

// Login with password email OR you can login with google , github

const handler = NextAuth(NEXTAUTH)

export const GET = handler;
export const POST = handler;

// Note next-auth will not give you the signup page you have to create it by yourself, it only manages the user's signin and the associated cookies 