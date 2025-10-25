import { ProductPageLayout } from "@/components/product-page-layout"
import { guestProducts } from "@/lib/fake-products"

export default function GuestZonePage() {
  return (
    <ProductPageLayout
      titleKey="category.guest.title"
      subtitleKey="category.guest.subtitle"
      heroImage="/hotel-guest-amenities-display.jpg"
      products={guestProducts}
      categoryKey="guest"
    />
  )
}