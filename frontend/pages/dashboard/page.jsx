import Link from 'next/link';
import { NextSeo } from 'next-seo';
//import { Header } from '../components/Header/Header';
// import { Header } from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Header from '../components/Header/Header';

const Dashboard = () => {
  const posts = [
    { title: 'First Post', slug: 'first-post', excerpt: 'This is the first post.' },
    { title: 'Second Post', slug: 'second-post', excerpt: 'This is the second post.' },
    { title: 'Third Post', slug: 'third-post', excerpt: 'This is the third post.' },
    { title: 'Fourth Post', slug: 'fourth-post', excerpt: 'This is the fourth post.' },
  ];

  return (
    <>
     {/* <Header/>  */}
    <div className="container my-5">
      <NextSeo title="Dashboard | Blog Platform" description="View all posts in your dashboard." />
      <h1 className="mb-4 text-center">Dashboard</h1>

      <div className="row">
        {posts.map((post) => (
          <div key={post.slug} className="col-md-6 mb-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.excerpt}</p>
                <Link href={`/post/${post.slug}`} className="btn btn-primary">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Dashboard;
