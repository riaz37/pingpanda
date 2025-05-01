/**
 * Define your environment variables here
 * 
 * Access these in your API (fully type-safe):
 * @see https://hono.dev/docs/helpers/adapter#env
 */

export type Bindings = {
  DATABASE_URL: string
  STRIPE_SECRET_KEY: string
  STRIPE_PRICE_ID: string
  NEXT_PUBLIC_APP_URL: string
  STRIPE_WEBHOOK_SECRET: string
}
