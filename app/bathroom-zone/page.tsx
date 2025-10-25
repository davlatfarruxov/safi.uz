import { ProductPageLayout } from "@/components/product-page-layout"
import { bathroomProducts } from "@/lib/fake-products"

export default function BathroomZonePage() {
  return (
    <ProductPageLayout
      titleKey="category.bathroom.title"
      subtitleKey="category.bathroom.subtitle"
      heroImage="/luxury-hotel-bathroom-with-towels.jpg"
      products={bathroomProducts}
      categoryKey="bathroom"
    />
  )
}