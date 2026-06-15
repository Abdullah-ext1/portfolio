import { useReveal } from '../../hooks/useReveal'
import { blogPosts } from '../../data/blog'
import './Blog.css'

export const Blog = () => {
  const ref = useReveal()

  return (
    <section id="blog">
      <div className="section-label dark">$ cat ~/notes</div>

      <div className="blog-grid" ref={ref}>
        {blogPosts.map((post) => (
          <a key={post.title} href={post.href} className="blog-card reveal">
            <div>
              <span className="blog-tag">{post.tag}</span>
            </div>
            <h3 className="blog-title">{post.title}</h3>
            <p className="blog-excerpt">{post.excerpt}</p>
            <div className="blog-meta">
              {post.readTime} read · read →
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

