import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const sections = [
  { name: 'All Section', path: '/' },
  { name: 'PHYSICS', path: '/physics' },
  { name: 'MATHS', path: '/maths' },
  { name: 'CHEMISTRY', path: '/chemistry' },
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
        <header style={{position: 'absolute'}}>
        <h2 style={{width: '100%', backgroundColor: '#4C8CCC', padding: '9px 1px',color: '#fff', textAlign: 'center', margin: '0px', position: 'fixed', borderBottom: '1px solid black' }}>DEMO ONLINE TEST</h2>
          <nav style={{  marginTop: '70px', marginBottom: '15px'}}>
            {sections.map(({ name, path }) => (
              <Link key={name} href={path} legacyBehavior>
                <a
                  style={{
                    color: 'white',
                    backgroundColor:
                      activeSection === path ? '#000098' : '#4C8CCC',
                    padding: '8px 25px',
                    margin: '0px 8px',
                    textDecoration: 'none',
                    borderRadius: '6px',
                    fontWeight: '500'
                    
                  }}
                >
                  {name}
                </a>
              </Link>
            ))}
          </nav>
        </header>
        <main>{children}</main>
        <footer style={{width: '100%', backgroundColor: '#617B8A', padding: '1px', }}><p style={{color: '#fff', fontWeight: 'bold', textAlign: 'center'}}>@ADMIN</p></footer>
      </div>
    </>
  );
}
