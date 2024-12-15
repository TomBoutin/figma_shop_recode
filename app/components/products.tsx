import CardProductSmall from './cardProductsSmall';
import CardProductLarge from './cardProductsLarge';

export default function Products() {
return(
    <>
    <div className='mx-5 lg:mx-20 xl:mx-40'>

        <CardProductSmall image="casquette_bleu.webp" imageHover="casquette_bleu_sans_fond.webp" title="Casquette bleu" price={99.99} nouveau={true} />
        <CardProductLarge image="casquette_bleu.webp" imageHover="casquette_bleu_sans_fond.webp" title="Casquette bleu" price={99.99} nouveau={true} />

    </div>
    </>
)

}