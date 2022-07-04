import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

function Home({ posts }) {
  
  return (
    <>
      <Head>
        <title>{posts.title}</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-screen-2xll">
          <div className="pb-5 border-b border-black">
            <h3 className="text-lg font-medium leading-6 text-neutral-600">
              Blogs
            </h3>
          </div>

          <div className="relative mx-auto max-w-7xl">
            <div className="grid max-w-lg gap-12 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none">
              {posts.map((product) => (
                <Link
                  key={product.id}
                  href={`/product/${encodeURIComponent(product.slug)}`}
                >
                  <div className="flex flex-col mb-12 overflow-hidden cursor-pointer">
                    
                      <div className="flex-shrink-0">
                        <Image
                          src={product.image}
                          alt={product.imageAlt}
                          height="200"
                          width={300}
                          className="object-cover rounded-lg"
                        />
                      </div>
                    
                    <div className="flex flex-col justify-between flex-1">
                      
                      <div className="flex-1">
                          <div className="block mt-2 space-y-6">
                          <h3 className="text-2xl font-semibold leading-none tracking-tighter text-neutral-600">
                            {product.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export async function getServerSideProps(context) {
  const { slug } = context.query; 

  const res = await fetch(`https://infoholdbackend.herokuapp.com/api/category/${slug}`);
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}

export default Home;
