import { ProductPageLayout } from "@/components/product-page-layout"
import { newProducts } from "@/lib/fake-products"

export default function NewPage() {
  return (
    <ProductPageLayout
      titleKey="category.new.title"
      subtitleKey="category.new.subtitle"
      heroImage="/safi-banner1.JPG"
      products={newProducts}
      categoryKey="new"
    />
  )
}