import Link from 'next/link';

import 'bootstrap/dist/css/bootstrap.min.css';
//import {useRouter} from 'next/router';
import {
    ClerkProvider,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
  } from '@clerk/nextjs';
  


const Home = () => {

  
 

  return (
    <div className="d-flex flex-column min-vh-100">
      <header className="border-bottom">
        <nav className="navbar navbar-expand-md">
          <div className="container">
            <Link href="/" className="head-font navbar-brand fs-4 font-serif text-decoration-none">
              Byte Story
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav align-items-center">
                <li className="nav-item">
                  <Link href="#" className="nav-link text-secondary">
                    Our story
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="#" className="nav-link text-secondary">
                    Membership
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="#" className="nav-link text-secondary">
                    Write
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="#" className="nav-link text-secondary">
                  <SignedOut>
                        <SignInButton>
                             
                        </SignInButton>
                        
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                    
                  </Link>
                    
                </li>
                <li className="nav-item ms-md-2">
                <Link href={`/dashboard/page`}>
                <button className="btn btn-dark rounded-pill px-4" >Get started</button>
                </Link>
                  
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-grow-1 align-content-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="pe-md-5">
                <h1 className="head-font display-3 fw-normal mb-4" style={{ fontFamily: "serif" }}>
                  Developer stories & ideas
                </h1>
                <p className="fs-4 text-secondary mb-4">A place to read, write, and deepen your understanding</p>
                <button className="btn btn-dark btn-lg rounded-pill px-4 py-3">Start reading</button>
              </div>
            </div>
            {/* <div className="col-md-6 d-none d-md-block">
              <div className="position-relative">
                <div className="position-absolute end-0 top-0">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1661600657166-8024bdc4f130?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTd8fHRlY2glMjBibG9nfGVufDB8fDB8fHww"
                    alt="Decorative illustration"
                    className="img-fluid"
                    // style={{ maxWidth: "400px" }}
                  />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </main>

      <footer className="border-top py-3">
        <div className="container">
          <div className="d-flex flex-wrap justify-content-center gap-3 text-secondary small">
            <Link href="#" className="text-decoration-none text-secondary">
              Help
            </Link>
            <Link href="#" className="text-decoration-none text-secondary">
              Status
            </Link>
            <Link href="#" className="text-decoration-none text-secondary">
              About
            </Link>
            <Link href="#" className="text-decoration-none text-secondary">
              Careers
            </Link>
            <Link href="#" className="text-decoration-none text-secondary">
              Press
            </Link>
            <Link href="#" className="text-decoration-none text-secondary">
              Blog
            </Link>
            <Link href="#" className="text-decoration-none text-secondary">
              Privacy
            </Link>
            <Link href="#" className="text-decoration-none text-secondary">
              Terms
            </Link>
            <Link href="#" className="text-decoration-none text-secondary">
              Text to speech
            </Link>
            <Link href="#" className="text-decoration-none text-secondary">
              Teams
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
