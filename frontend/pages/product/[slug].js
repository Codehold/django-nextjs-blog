import Image from "next/image";
import Head from "next/head";

const Product = ({ post }) => {

  const createBlog = () => {
    return { __html: post.description };
  };
  
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <div className=" flex flex-col items-center border-solid border-2 border-sky-150 rounded-lg px-5 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-col items-center pb-10 mx-auto my-10 border-b border-gray-200 max-w-7xl sm:flex-row">
            <div className="inline-flex items-center justify-center flex-shrink-0  text-neutral-600 rounded-full bg-gray-50 sm:mr-10">
            
              <Image 
                src={post.image}
                alt={post.imageAlt}
                height="350"
                width={300}
                className="w-full h-full rounded-lg object-center object-cover lg:w-full lg:h-full"
              />
              
              
            </div>
            <div className="flex-grow mt-6 prose text-center sm:text-left sm:mt-0 prose-md">
              <strong className="flex text-3xl font-bold leading-none text-left text-neutral-600 lg:text-4xl">
                {post && post.title}
              </strong>
            </div>
          </div>
          <div className="flex flex-col w-full max-w-3xl mx-auto prose text-left prose-blue">
            <div className="w-full mx-auto">
              <a dangerouslySetInnerHTML={createBlog()}></a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export async function getServerSideProps( context ) {
  const { slug } = context.query; 
  const res = await fetch(`https://infoholdbackend.herokuapp.com/api/${slug}`);
  const post = await res.json();
  return {
    props: {
      post
    },
  };
}
export default Product;
