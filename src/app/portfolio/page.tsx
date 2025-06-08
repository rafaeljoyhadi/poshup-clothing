// src/app/portfolio/page.tsx

import { client } from "@/sanity/lib/client"
import imageUrlBuilder from '@sanity/image-url'
import Image from 'next/image'

// Query for Vision
const query = `*[_type == "portfolioItem"]`;

// Builder to generate image from Sanity's data
const builder = imageUrlBuilder(client)

function urlFor(source: any) {
    return builder.image(source)
}

// Define type 
interface PortfolioItem {
    _id: string;
    title: string;
    description: string;
    image: any;
}

export default async function PortfolioPage() {
    const portfolioItems: PortfolioItem[] = await client.fetch(query);

    console.log(portfolioItems);

    return (
        <div className="p-8">
            <h1 className="text-4xl font-bold mb-8">Our Portfolio</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolioItems.map((item) => (
                    <div key={item._id} className="border rounded-lg overflow-hidden">
                        <Image
                            src={urlFor(item.image).width(500).height(300).url()}
                            alt={item.title}
                            width={500}
                            height={300}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-2xl font-semibold">{item.title}</h2>
                            <p className="text-gray-600 mt-2">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}