import Head from 'next/head';
import Header from 'components/header';
import { useRouter } from 'next/router';

type LayoutType = {
  title?: string;
  children?: React.ReactNode;
}

export default ({ children, title = 'Next.js Ecommerce' }: LayoutType) => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>{ title }</title>
      </Head>

      <Header />

      <main className={`flex-grow ${pathname !== '/' ? 'pt-8' : 'pt-0'}`}>
        { children }
      </main>
    </div>
  )
}
