export default function ListCards() {
  return (
    <div class="max-w-md bg-white border border-gray-200 rounded-lg shadow-sm">
      <a href="#">
        <img
          class="rounded-t-lg"
          src="https://media.istockphoto.com/id/1500533044/photo/grilled-sea-bass-fillet-with-lime-and-thyme-black-background-top-view.jpg?s=2048x2048&w=is&k=20&c=jKusXSPSWPRQ06gGaldYLkLalDdOAY2aOJ10_Gk_UCA="
          alt=""
        />
      </a>
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            Noteworthy technology acquisitions 2021
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <button
          onClick={() => handleAddToCart(fish)}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-200 cursor-pointer"
        >
          <i className="fas fa-cart-plus mr-2"></i> Add to Cart
        </button>
      </div>
    </div>
  );
}
