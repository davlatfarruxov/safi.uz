import { ProductPageLayout } from "@/components/product-page-layout"
import { ecoProducts } from "@/lib/fake-products"

export default function EcoConceptPage() {
  return (
    <ProductPageLayout
      titleKey="category.eco.title"
      subtitleKey="category.eco.subtitle"
      heroImage="/safi-banner2.JPG"
      products={ecoProducts}
      categoryKey="eco"
    />
  )
}