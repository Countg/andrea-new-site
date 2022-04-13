import Head from 'next/head';
import Image from 'next/image';
import Layout from '../Components/Layout';
import Header from '../Components/Header';
import About from '../Components/About';
import Contact from '../Components/Contact/Contact';

export default function Home() {
  return (
    <Layout>
      <Header />
      <About />
      <Contact />
    </Layout>
  );
}
