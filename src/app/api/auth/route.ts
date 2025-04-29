import { authRouter } from "@/server/routers/auth-router"
import { handle } from "hono/vercel"
import { Hono } from "hono"
import { cors } from "hono/cors"

const app = new Hono().basePath("/api/auth").use(cors())
app.route("/", authRouter)

export const runtime = "edge"
export const GET = handle(app)
export const POST = handle(app)
