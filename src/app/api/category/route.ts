import { categoryRouter } from "@/server/routers/category-router"
import { handle } from "hono/vercel"
import { Hono } from "hono"
import { cors } from "hono/cors"

const app = new Hono().basePath("/api/category").use(cors())
app.route("/", categoryRouter)

export const runtime = "edge"
export const GET = handle(app)
export const POST = handle(app)
