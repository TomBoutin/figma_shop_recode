import CardProductSmall from './cardProductsSmall';
import CardProductLarge from './cardProductsLarge';

const products = [
    {
        image: "casquette_bleu.webp",
        imageHover: "casquette_bleu_sans_fond.webp",
        title: "Casquette bleu",
        price: 10.00,
        nouveau: true,
        size: "small"
    },
    {
        image: "casquette_verte.webp",
        imageHover: "casquette_verte_sans_fond.webp",
        title: "Casquette verte",
        price: 10.00,
        nouveau: true,
        size: "small"
    },
    {
        image: "chaussette_noir.webp",
        imageHover: "chaussette_noir_sans_fond.webp",
        title: "Chaussette noir",
        price: 19.99,
        nouveau: true,
        size: "small"
    },
    {
        image: "chaussette_rouge.webp",
        imageHover: "chaussette_rouge_sans_fond.webp",
        title: "Chaussette rouge",
        price: 19.99,
        nouveau: false,
        size: "small"
    },
    {
        image: "gourde.webp",
        imageHover: "gourde_sans_fond.webp",
        title: "Gourde",
        price: 29.99,
        nouveau: true,
        size: "small"
    },
    {
        image: "pull_beige.webp",
        imageHover: "pull_beige_sans_fond.webp",
        title: "Pull beige",
        price: 49.99,
        nouveau: false,
        size: "large"
    },
    {
        image: "pull_bordeaux.webp",
        imageHover: "pull_bordeaux_sans_fond.webp",
        title: "Pull bordeaux",
        price: 49.99,
        nouveau: true,
        size: "small"
    },
    {
        image: "pull_noir.webp",
        imageHover: "pull_noir_sans_fond.webp",
        title: "Pull noir",
        price: 49.99,
        nouveau: false,
        size: "small"
    },
    {
        image: "sac.webp",
        imageHover: "sac_sans_fond.webp",
        title: "Sac",
        price: 39.99,
        nouveau: false,
        size: "small"
    },
    {
        image: "tshirt_blanc.webp",
        imageHover: "tshirt_blanc_sans_fond.webp",
        title: "T-shirt blanc",
        price: 19.99,
        nouveau: false,
        size: "small"
    },
    {
        image: "tshirt_noir.webp",
        imageHover: "tshirt_noir_sans_fond.webp",
        title: "T-shirt noir",
        price: 19.99,
        nouveau: false,
        size: "small"
    },
    {
        image: "tshirt_vert.webp",
        imageHover: "tshirt_vert_sans_fond.webp",
        title: "T-shirt vert",
        price: 19.99,
        nouveau: false,
        size: "small"
    },
    {
        image: "tshirt_blanc2.webp",
        imageHover: "tshirt_blanc2_sans_fond.webp",
        title: "T-shirt blanc",
        price: 19.99,
        nouveau: false,
        size: "large"
    }
];

export default function Products() {
    return (
        <div className='container mx-auto px-4 pt-20 pb-32'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5'>
                {products.map((product, index) => (
                    product.size === "large" ? (
                        <CardProductLarge
                            key={index}
                            image={product.image}
                            imageHover={product.imageHover}
                            title={product.title}
                            price={product.price}
                            nouveau={product.nouveau}
                        />
                    ) : (
                        <CardProductSmall
                            key={index}
                            image={product.image}
                            imageHover={product.imageHover}
                            title={product.title}
                            price={product.price}
                            nouveau={product.nouveau}
                        />
                    )
                ))}
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 pt-5'>
                {products.map((product, index) => (
                    product.size === "small" && (
                        <CardProductSmall
                            key={index}
                            image={product.image}
                            imageHover={product.imageHover}
                            title={product.title}
                            price={product.price}
                            nouveau={product.nouveau}
                        />
                    )
                ))}
            </div>
        </div>
    );
}