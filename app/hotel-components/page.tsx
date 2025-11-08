import { ProductPageLayout } from "@/components/product-page-layout"
import { hotelComponents } from "@/lib/fake-products"

export default function HotelComponentsPage() {
  return (
    <ProductPageLayout
      titleKey="category.components.title"
      subtitleKey="category.components.subtitle"
      heroImage="/luxury-hotel-room-accessories.jpg"
      products={hotelComponents}
      categoryKey="components"
    />
  )
}