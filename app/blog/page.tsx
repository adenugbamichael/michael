import Link from "next/link"
import { Post } from "../lib/interface"
import { client } from "../lib/sanity"

async function getData() {
  const query = `*[_type == "post"]`

  const data = await client.fetch(query)

  return data
}

export default async function IndexPage() {
  const data = (await getData()) as Post[]

  return (
    <div className='divide-y divide-gray-200 max-w-[37.5rem] pt-[4rem] pb-[4rem] dark:divide-gray-700'>
      <div className=' md:space-y-5'>
        <h1 className='text-[36px] font-bold leading-4 mb-[2rem] tracking-tight text-[#d6d3d1]   '>
          Blog
        </h1>
      </div>

      <ul>
        {data.map((post) => (
          <li key={post._id} className='py-4'>
            <article className='space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0 blog'>
              <div>
                <p className='text-base font-medium leading-6 text-[#d09e72]'>
                  {new Date(post._createdAt).toISOString().split("T")[0]}
                </p>
              </div>

              <Link
                href={`/post/${post.slug.current}`}
                prefetch
                className='space-y-3 xl:col-span-3'
              >
                <div>
                  <h3 className='text-2xl font-semibold leading-8 tracking-tight text-[text-#d6d3d1]'>
                    {post.title}
                  </h3>
                </div>

                <p className='prose max-w-[37.5rem]  text-text-[#d6d3d1] line-clamp-2'>
                  {post.overview}
                </p>
              </Link>
            </article>
          </li>
        ))}
      </ul>
    </div>
  )
}

// font-family: var(--chakra-fonts-heading);
//     font-size: 1.5rem;
//     line-height: 1.33;
//     font-weight: 600;
//     margin-top: var(--chakra-space-6);
