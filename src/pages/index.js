
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Logo from '@site/static/img/logowithtext.svg';
import Logo2 from '@site/static/img/logo2.svg';
import Dashboard from '@site/static/img/Dashboard.svg';
// import Dashboard from '@site/static/img/Dashboard.svg';
import Heading from '@theme/Heading';
import { CiGlobe } from "react-icons/ci";
import { LuShoppingBag, LuMenu , LuSmartphone} from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";




import '../css/output.css';
// import styles from './index.module.css';

function Hero() {
  return (
    <section className="pt-28 pb-16 bg-gradient-to-r from-[#f0f6ff] to-[#ecf1f8] text-white">
    {/* <section className="pt-28 pb-16 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white"> */}
      <div className="container mx-auto sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className=" text-[24px] sm:text-[28px] md:text-4xl lg:text-5xl font-semibold mb-6 leading-tight text-[#1e1e1e] animate-fade-in">
            Accept, process and manage <span className='bg-gradient-to-r from-[#5188D5] to-[#0066F5] bg-clip-text text-transparent'>
                payments
              </span> with ease
          </div>
          <div className="text-lg sm:text-xl md:text-2xl mb-10 bg-gradient-to-r from-[#5188D5] to-[#0066F5] bg-clip-text text-transparent animate-fade-in-delay">
            Developer-friendly API for seamless payment integration
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-delay-2">
            <button 
              href="#" 
              className="px-8 py-3 cursor-pointer bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Started
            </button>
            <Link 
              to="/docs/overview" 
              style={{ color: 'white' }}
              className="px-8 py-3 cursor-pointer hover:decoration-0 bg-transparent border-2 border-
               text-white hover:text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              View Documentation
            </Link>
          </div>
        </div>

      </div>
        <div className="overflow-hidden rounded-3xl max-w-3/5 mx-auto mt-10">
          <Dashboard className="w-full h-full" />
        </div>
      {/* Background elements */}
      <div className="hidden lg:block absolute top-40 right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      <div className="hidden lg:block absolute bottom-10 left-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
    </section>
  );
}


function ApiEndpoints() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="text-3xl font-bold text-gray-900 mb-4">API Endpoints</div>
            <div className="text-lg xl:text-xl text-gray-600">
              Connect to our API using these base URLs
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-xl shadow-sm overflow-hidden border border-gray-200">
            <div className="divide-y divide-gray-200">
              <div className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <div className="flex items-center mb-4 sm:mb-0">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 mr-3">
                      Production
                    </span>
                    <h3 className="text-lg font-medium text-gray-900" style={{ color:'#101828' }}>Live Environment</h3>
                  </div>
                  <div className="group">
                    <code className="px-4 py-2 bg-gray-100 text-gray-800 rounded font-mono text-sm block sm:inline-block group-hover:bg-gray-200 transition-colors">
                      https://prod.theteller.net
                    </code>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <div className="flex items-center mb-4 sm:mb-0">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mr-3">
                      Sandbox
                    </span>
                    <h3 className="text-lg font-medium text-gray-900" style={{ color:'#101828' }}>Test Environment</h3>
                  </div>
                  <div className="group">
                    <code className="px-4 py-2 bg-gray-100 text-gray-800 rounded font-mono text-sm block sm:inline-block group-hover:bg-gray-200 transition-colors">
                      https://test.theteller.net
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function IntegrationCard({icon: Icon, title, description, link, linkText}){
  return(
    <div className='bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden h-full group'>
      <div className='p-6'>
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mr-4">
            <Icon size={24}/>
          </div>
          <h3 className='text-xl font-semibold text-gray-800' style={{ color:"#1E2939" }}>
            {title}
          </h3>
          </div>
          <p className='text-gray-600 mb-6 leading-relaxed'>
            {description}
          </p>
          <div className='mt-auto pt-4'>
            <Link
              to={link} 
              className='inline-flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors'>
                {linkText}
            <svg 
              className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            </Link>
          </div>

      </div>
    </div>
  );
}



function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`flex justify-between items-center w-full h-20 px-10 fixed max-sm:px-5 max-sm:bg-white/70 z-20 transition-all duration-300 ${
        isScrolled ? ' backdrop-blur-xs bg-gradient-to-r from-white/50 via-white/10 to-white/10 shadow-2xl shadow-black/5 before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/20 before:to-transparent before:pointer-events-none' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {/* <CreditCard className="text-blue-600 mr-2" size={28} /> */}
            {/* <span className="text-xl font-bold text-blue-600">ExpressPay</span> */}
            <Logo2 title="TheTeller Logo" />
            <span className="ml-2 px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-md">DOCS</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a style={{ color:'#155DFC' }} href="https://payswitch.com.gh/" className="text-blue-600 cursor-pointer hover:underline underline-offset-6 transition-colors duration-200">Company</a>
            <a style={{ color:'#155DFC' }} href="https://payswitch.com.gh/contact" className="text-blue-600 cursor-pointer hover:underline underline-offset-6 transition-colors duration-200">Get Support</a>
            <Link to="/docs/overview" style={{ color:'#155DFC' }} className="text-blue-600 cursor-pointer hover:underline underline-offset-6 transition-colors duration-200 ">Developers</Link>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? <IoMdClose size={24} /> : <LuMenu  size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 px-4 absolute w-full">
          <div className="flex flex-col space-y-4">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 py-2">Company</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 py-2">Get Support</a>
            <a href="#" className="text-blue-600 font-medium py-2">Developers</a>
          </div>
        </div>
      )}
    </nav>
  );
}

function HomepageFeatures() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Integration Options</h2>
          <p className="text-lg text-gray-600">
            Multiple ways to integrate payments into your platforms
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <IntegrationCard
            icon={CiGlobe}
            title="Website Integration"
            description="Accept payments on your website with our JavaScript libraries and customizable checkout forms."
            link="/docs/IntegrationQuickStart/TheTellerStandardCheckout"
            linkText="View Integration Guide"
          />
          
          <IntegrationCard
            icon={LuShoppingBag}
            title="E-commerce Integration"
            description="Seamlessly integrate with popular e-commerce platforms like WooCommerce, Shopify, and Magento."
            link="https://theteller.net/developer"
            linkText="Browse Plugins"
          />
          
          <IntegrationCard
            icon={LuSmartphone}
            title="Mobile Integration"
            description="Native SDKs for iOS and Android to add payments to your mobile applications with minimal effort."
            link="https://theteller.net/developer"
            linkText="View SDKs"
          />
        </div>
      </div>
    </section>
  );
}



function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div style={{ color:"#99A1AF" }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              
            <Logo title="TheTeller Logo" />
            </div>
            <p className="text-gray-400 mb-4">
              Accept payments seamlessly with our developer-friendly API.
            </p>
            {/* <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaXTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div> */}
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" style={{ color:"#99A1AF" }} className="text-gray-400 hover:text-white transition-colors">Payment Processing</a></li>
              <li><a href="#" style={{ color:"#99A1AF" }} className="text-gray-400 hover:text-white transition-colors">Subscriptions</a></li>
              <li><a href="#" style={{ color:"#99A1AF" }} className="text-gray-400 hover:text-white transition-colors">Invoicing</a></li>
              <li><a href="#" style={{ color:"#99A1AF" }} className="text-gray-400 hover:text-white transition-colors">Reporting</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Developers</h3>
            <ul className="space-y-2">
              <li><a href="#" style={{ color:"#99A1AF" }} className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" style={{ color:"#99A1AF" }} className="text-gray-400 hover:text-white transition-colors">API Reference</a></li>
              <li><a href="#" style={{ color:"#99A1AF" }} className="text-gray-400 hover:text-white transition-colors">SDKs & Libraries</a></li>
              <li><a href="#" style={{ color:"#99A1AF" }} className="text-gray-400 hover:text-white transition-colors">Status</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a style={{ color:"#99A1AF" }} href="https://payswitch.com.gh/about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              {/* <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li> */}
              {/* <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Partners</a></li> */}
              <li><a href="https://payswitch.com.gh/contact" style={{ color:"#99A1AF" }} className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} 	PaySwitch Limited. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex flex-wrap gap-4">
              <a href="https://theteller.net/privacy"  style={{ color:"#99A1AF" }} className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="https://theteller.net/terms"  style={{ color:"#99A1AF" }} className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              {/* <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (

    <div className="min-h-screen flex flex-col">
    {/* <Layout
      title={siteConfig.title}
      description="TheTeller API Documentation - Accept payments seamlessly with our developer-friendly payment processing platform"> */}
        <Navbar 
        title={siteConfig.title}
        />
      <main className="flex-grow">
      <Hero />
        <HomepageFeatures />
        
        <ApiEndpoints />
      </main>
      <Footer/>
    {/* </Layout> */}
    </div>
  );
}