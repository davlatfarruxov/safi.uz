import { ProductPageLayout } from "@/components/product-page-layout"
import { cleaningProducts } from "@/lib/fake-products"

export default function CleaningEquipmentPage() {
  return (
    <ProductPageLayout
      titleKey="category.cleaning.title"
      subtitleKey="category.cleaning.subtitle"
      heroImage="/bathroom-products-display.jpg"
      products={cleaningProducts}
      categoryKey="cleaning"
    />
  )
}