import { CheckIcon, XIcon } from "@heroicons/react/outline"
import { Product } from "@stripe/firestore-stripe-payments"

interface Props {
    products: Product[]
    selectedPlan: Product | null
}

function Table({ products, selectedPlan }: Props) {
    return (
        <table>
            <tbody className="divide-y divide-[gray]">
                <tr className="tableRow">
                    <td className="tableDataTitle">Precio mensual</td>
                    {products.map((product) => (
                        <td
                            className={`tableDataFeature ${selectedPlan?.id === product.id
                                ? 'text-[#E50914]'
                                : 'text-[gray]'
                                }`}
                            key={product.id}>
                            EUR{product.prices[0].unit_amount! / 100}</td>))}
                </tr>
                <tr className="tableRow">
                    <td className="tableDataTitle">Calidad de vídeo</td>
                    {products.map((product) => (
                        <td className={`tableDataFeature ${selectedPlan?.id === product.id
                            ? 'text-[#E50914]'
                            : 'text-[gray]'
                            }`}
                            key={product.id} >
                            {product.metadata.videoQuality}</td>
                    ))}
                </tr>
                <tr className="tableRow">
                    <td className="tableDataTitle">Resolución</td>
                    {products.map((product) => (
                        <td className={`tableDataFeature ${selectedPlan?.id === product.id
                            ? 'text-[#E50914]'
                            : 'text-[gray]'
                            }`}
                            key={product.id}>
                            {product.metadata.resolution}</td>
                    ))}
                </tr>
                <tr className="tableRow">
                    <td className="tableDataTitle">Multidispositivo: portatil, TV, teléfono, tableta </td>
                    {products.map((product) => (
                        <td className={`tableDataFeature ${selectedPlan?.id === product.id
                            ? 'text-[#E50914]'
                            : 'text-[gray]'
                            }`}
                            key={product.id}>
                            {product.metadata.portability === 'true' ?
                                (<CheckIcon className="inline-block h-8 w-8" />) :
                                (<XIcon className="inline-block h-8 w-8" />)
                            }
                        </td>
                    ))}
                </tr>
            </tbody>
        </table>)
}
export default Table