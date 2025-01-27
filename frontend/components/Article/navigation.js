export default function Navigation() {
    const categories = ["For you", "Following", "Cybersecurity", "Software Engineering", "Technology", "Programming"]
  
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
        <div className="container-fluid justify-content-center">
          <button className="btn btn-outline-secondary rounded-circle me-2">
            <span>+</span>
          </button>
          <div className="navbar-nav">
            {categories.map((category) => (
              <a key={category} className="nav-link px-3" href="#">
                {category}
              </a>
            ))}
          </div>
        </div>
      </nav>
    )
  }
  
  