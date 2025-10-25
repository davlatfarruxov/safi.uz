import { ProductPageLayout } from "@/components/product-page-layout"
import { bedroomProducts } from "@/lib/fake-products"

export default function BedroomZonePage() {
  return (
    <ProductPageLayout
      titleKey="category.bedroom.title"
      subtitleKey="category.bedroom.subtitle"
      heroImage="/luxury-hotel-bedroom-with-white-linens.jpg"
      products={bedroomProducts}
      categoryKey="bedroom"
    />
  )
}