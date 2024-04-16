import { Link } from "react-router-dom";

const MainBanner = () => {
  const collections = [
    {
      title: "Women",
      buttonLabel: "Women's collection",
      description:
        "Empower your femininity with our diverse Women's Collection. From figure-flattering dresses to chic separates, discover luxury, sophistication, and individuality in every piece.",
      imageUrl:
        'https://res.cloudinary.com/dxvt08dc2/image/upload/v1712182294/modio/banners/women-banner_wqafpc.jpg',
      altText: 'Two women smiling.',
    },
    {
      title: "Men",
      buttonLabel: "Men's collection",
      description:
        "Refined yet versatile, our Men's Collection offers timeless classics alongside contemporary essentials. From tailored suits to streetwear-inspired pieces, elevate your style effortlessly for any occasion.",
      imageUrl:
        'https://res.cloudinary.com/dxvt08dc2/image/upload/v1712182294/modio/banners/men-banner_v7ycgs.jpg',
      altText: 'Man smiling at camera.',
    },
    {
      title: 'Kids',
      buttonLabel: 'Kids collection',
      description:
        "Inspire creativity and comfort with our playful Kids' Collection. From adorable onesies to trendy outfits, our durable and colorful designs ensure fun and fashion for every adventure.",
      imageUrl:
        'https://res.cloudinary.com/dxvt08dc2/image/upload/v1712182043/modio/banners/kids-banner_eabrfm.jpg',
      altText: 'Two kids talking.',
    },
  ];

  return (
    <>
      <section className="relative mb-20">
        <img
          className="h-[490px] md:h-[700px] md:w-full object-cover"
          src="/main_banner.avif"
          alt="A collection of colored shirts"
        ></img>
        <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/50 backdrop-blur-md p-4 rounded-2xl text-black text-2xl md:text-4xl font-bold">
          Don't Miss Out on Online Deals!
          <br />
          <br />
          Shop now and enjoy 20% off your entire purchase.
        </h2>
      </section>
      <section className="mx-8">
        <h3 className="text-2xl md:text-3xl font-roboto-condensed font-semibold mb-10 text-center">
          OUR NEWEST COLLECTIONS
        </h3>
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {collections.map((item, index) => {
            return (
              <div key={index}>
                <div>
                  <img className="mb-2" src={item.imageUrl}></img>
                </div>
                <div>
                  <h3 className="text-2xl font-roboto-condensed font-semibold mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-lg mb-2 md:mb-6">{item.description}</p>
                  <Link to={`/${item.title}`} className="text-sm bg-zinc-900 md:text-xl text-white py-2 px-3.5">
                    Shop {item.title}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default MainBanner;
