import { DefaultSession } from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      role: "JOB_SEEKER" | "EMPLOYER" | "ADMIN"
    } & DefaultSession["user"]
  }

  interface User {
    role: "JOB_SEEKER" | "EMPLOYER" | "ADMIN"
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role: "JOB_SEEKER" | "EMPLOYER" | "ADMIN"
  }
}