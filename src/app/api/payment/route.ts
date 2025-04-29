import { paymentRouter } from "@/server/routers/payment-router"
import { handle } from "hono/vercel"
import { Hono } from "hono"
import { cors } from "hono/cors"

const app = new Hono().basePath("/api/payment").use(cors())
app.route("/", paymentRouter)

export const runtime = "nodejs"
export const GET = handle(app)
export const POST = handle(app)
