import CartCard from "./Cart";

export default function CartContainer() {
    return (
        <>
        <CartCard
            fish={{
              id: 1,
              image: "/images/tilapia.jpg",
              name: "Tilapia",
              quantity: 2,
              pricePerKg: 350,
              fisherman: "Fisherman A",
            }}
            onRemove={(id) => console.log("Remove fish with id:", id)}
          />
        </>
    )
}