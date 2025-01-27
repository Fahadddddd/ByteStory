import React from 'react';
import {
    ClerkProvider,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton,
} from '@clerk/nextjs';
import Link from 'next/link';
import styles from './Header.module.css'

const Header = () => {
    return (
        <header className="border-bottom">
            <nav className="navbar navbar-expand-md">
                <div className="container">
                    <Link href="/" legacyBehavior>
                        <a className="head-font navbar-brand fs-4 font-serif text-decoration-none">
                            Byte Story
                        </a>
                    </Link>
                    {/* <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
                    <div
                        className="collapse navbar-collapse justify-content-end"
                        id="navbarNav"
                    >
                        <ul className="navbar-nav align-items-center">
                            <li className="nav-item">
                            <div>
                              <input type="text" className={styles.search} placeholder="Search" />
                              {/* <button>Search</button> */}
                            </div>

                            </li>
                            <li className="nav-item">
                                {/* <Link href="#">
                                    <a className="nav-link text-secondary">Membership</a>
                                </Link> */}
                            </li>
                            <li className="nav-item">
                                <Link href="#" legacyBehavior>
                                    <a className="nav-link text-secondary">Write</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                {/* <Link href="#"> */}
                                    <a className="nav-link text-secondary">
                                        <SignedOut>
                                            <SignInButton />
                                        </SignedOut>
                                        <SignedIn>
                                            <UserButton />
                                        </SignedIn>
                                    </a>
                                {/* </Link> */}
                            </li>
                            {/* <li className="nav-item ms-md-2">
                                <Link href="/dashboard" legacyBehavior>
                                    <button className="btn btn-dark rounded-pill px-4">
                                        Get started
                                    </button>
                                </Link>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
