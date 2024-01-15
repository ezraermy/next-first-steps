import type { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Pricing Page',
    description: 'Pricing page for my service',
}


export default function PricingPage() {
    return (
        <>
        <span className="text-7xl">Pricing Page</span>
        </>
    )
}