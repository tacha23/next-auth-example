import NextAuth from "next-auth"
// import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import MongoDBAdapter from 'next-auth';
 
export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [Google],
  // adapter: MongoDBAdapter,

})