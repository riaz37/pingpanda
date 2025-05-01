// @ts-ignore
import Stripe from "stripe"

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "", {
  apiVersion: "2024-09-30.acacia",
  typescript: true,
})

export const createCheckoutSession = async ({
  userEmail,
  userId,
}: {
  userEmail: string
  userId: string
}) => {
  try {
    console.log(`Creating checkout session for user ${userId} with email ${userEmail}`)
    
    const priceId = process.env.STRIPE_PRICE_ID
    
    if (!priceId) {
      throw new Error("STRIPE_PRICE_ID is not defined in environment variables")
    }
    
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: "subscription", // Changed from "payment" to "subscription"
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?success=true`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/pricing`,
      customer_email: userEmail,
      metadata: {
        userId,
      },
    })
    
    console.log(`Checkout session created: ${session.id}`)
    return session
  } catch (error) {
    console.error("Error creating checkout session:", error instanceof Error ? error.message : String(error))
    throw error
  }
}
