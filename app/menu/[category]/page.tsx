import PageWrapper from "@/components/PageWrapper";
import MenuItemCard from "@/components/menu/menu-category/menu-item-card";
import { pizzas } from "@/data/data";

export default function MenuCategoryPage() {
  return (
    <PageWrapper className="pt-4 md:pt-10">
      <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {pizzas.map((product) => {
          return (
            <MenuItemCard
              key={product.id}
              img={product.img}
              title={product.title}
              price={product.price}
              id={product.id}
            />
          );
        })}
      </div>
    </PageWrapper>
  );
}
