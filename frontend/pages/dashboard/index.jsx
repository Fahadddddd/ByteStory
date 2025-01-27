
"use client"

import { useEffect, useState } from "react"
import Navigation from "../../components/Article/navigation"
import ArticleCard from "../../components/Article/article-card"

import Header from '../../components/Header/Header.js';

export default function Home() {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetch("/api/articles")
      .then((res) => res.json())
      .then((data) => setArticles(data.articles))
  }, [])

  return (
    <div>
      <Header />
      <Navigation />
      <div className="p-4">
        {articles.map((article) => (
          <ArticleCard key={article.id} {...article} />
        ))}
      </div>
    </div>
  )
}

