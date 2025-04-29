import { projectRouter } from "@/server/routers/project-router"
import { handle } from "hono/vercel"
import { Hono } from "hono"
import { cors } from "hono/cors"

const app = new Hono().basePath("/api/project").use(cors())
app.route("/", projectRouter)

export const runtime = "nodejs"
export const GET = handle(app)
export const POST = handle(app)
