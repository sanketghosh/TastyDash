import PageWrapper from "@/components/PageWrapper";

import p7 from "@/public/temporary/p7.png";
import p1 from "@/public/temporary/p1.png";
import CartOrderCard from "@/components/cart/cart-order-card";
import { Button } from "@/components/ui/button";

const cartOrderCardData = [
  {
    id: 1,
    title: "Spicy Arrabbiata",
    numberOfItems: 3,
    size: "Large",
    price: 23.34,
    image: p1,
  },
  {
    id: 2,
    title: "Spicy Arrabbiata",
    numberOfItems: 3,
    size: "Size",
    price: 23.34,
    image: p7,
  },
  {
    id: 3,
    title: "Spicy Arrabbiata",
    numberOfItems: 3,
    size: "Large",
    price: 93.3,
    image: p1,
  },
  {
    id: 4,
    title: "Spicy Arrabbiata",
    numberOfItems: 3,
    size: "Large",
    price: 23.34,
    image: p7,
  },
  {
    id: 5,
    title: "Spicy Arrabbiata",
    numberOfItems: 3,
    size: "Large",
    price: 23.34,
    image: p1,
  },
  {
    id: 6,
    title: "Spicy Arrabbiata",
    numberOfItems: 3,
    size: "Large",
    price: 23.34,
    image: p7,
  },
  {
    id: 7,
    title: "Spicy Arrabbiata",
    numberOfItems: 10,
    size: "Large",
    price: 1023.34,
    image: p1,
  },
];

export default function CartPage() {
  return (
    <PageWrapper className="pt-4 md:pt-10">
      <div className="">
        {/* items */}
        <h1 className="py-5 font-bold text-primary text-xl text-center">
          Your Added Foods
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-3.5">
          {cartOrderCardData.map((item, idx) => (
            <CartOrderCard
              key={idx}
              title={item.title}
              size={item.size}
              numberOfItems={item.numberOfItems}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
        {/* total price */}

        <h1 className="py-5 font-bold text-primary text-xl text-center mt-5">
          Make Payment
        </h1>
        <div className="max-w-lg mx-auto bg-orange-100 p-5 text-sm font-medium space-y-2 rounded-xl border-primary border">
          <div className="flex items-center justify-between">
            <h2>Subtotal (3 item)</h2>
            <span>$233.90</span>
          </div>
          <div className="flex items-center justify-between">
            <h2>Service Cost</h2>
            <span>$0.00</span>
          </div>
          <div className="flex items-center justify-between">
            <h2>Delivery Cost</h2>
            <span>FREE!</span>
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-orange-400">
            <h2>Total (Incl. tax)</h2>
            <span>$234.90</span>
          </div>
          <div className="pt-4 w-full">
            <Button className="w-full bg-foreground">Checkout</Button>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
