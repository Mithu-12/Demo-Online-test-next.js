import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const sections = [
  { name: 'All Section', path: '/' },
  { name: 'Physics', path: '/physics' },
  { name: 'Maths', path: '/maths' },
  { name: 'Chemistry', path: '/chemistry' },
];
export default function Layout({ children }) {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState(router.pathname);

  useEffect(() => {
    setActiveSection(router.pathname);
  }, [router.pathname]);

  return (
    <>
      <Head>
        <title>Demo Online Test</title>
        <meta name="description" content="demo-online-test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        style={{
          display: 'flex',
          height: '100vh',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <header>
        <h1 style={{width: '100%', backgroundColor: '#4C8CCC', padding: '0px 1px',color: '#fff', textAlign: 'center', marginTop: '0px' }}>DEMO ONLINE TEST</h1>
          <nav style={{borderBottom: '2px solid gray', paddingBottom: '20px', width: '950px'}}>
            {sections.map(({ name, path }) => (
              <Link key={name} href={path} legacyBehavior>
                <a
                  style={{
                    color: 'white',
                    backgroundColor:
                      activeSection === path ? '#000098' : '#4C8CCC',
                    padding: '10px 20px',
                    margin: '0px 8px',
                    textDecoration: 'none',
                    borderRadius: '6px'
                    
                  }}
                >
                  {name}
                </a>
              </Link>
            ))}
          </nav>
        </header>
        <main>{children}</main>
        <footer style={{width: '100%', backgroundColor: '#4C8CCC', padding: '1px', }}><p style={{color: '#fff', fontWeight: 'bold', textAlign: 'center'}}>@ADMIN</p></footer>
      </div>
    </>
  );
}
