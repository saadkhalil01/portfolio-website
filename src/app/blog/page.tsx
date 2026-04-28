import Link from 'next/link';
import type { Metadata } from 'next';
import { posts } from './data';
import Navbar from '../components/Navbar';

export const metadata: Metadata = {
  title: 'Blog — React Native Development | Muhammad Saad',
  description: 'Practical guides on React Native, Stripe, GPT-4 integration, and mobile performance optimization from a freelance developer who ships production apps.',
  alternates: { canonical: 'https://saadkhalil.dev/blog' },
  openGraph: {
    title: 'Blog — React Native Development | Muhammad Saad',
    description: 'Practical guides on React Native, Stripe, GPT-4 integration, and mobile performance optimization.',
    url: 'https://saadkhalil.dev/blog',
    type: 'website',
  },
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Header */}
      <section className="neobrutalist-bg border-b-4 border-black" style={{ paddingTop: 110, paddingBottom: 80, paddingLeft: 40, paddingRight: 40 }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-black uppercase tracking-widest text-black/70 mb-3">saadkhalil.dev / blog</p>
          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter text-white/90 mb-5"
            style={{ fontFamily: 'var(--font-outfit)' }}
          >
            Blog
          </h1>
          <p className="text-black/70 text-lg font-bold max-w-2xl">
            Practical guides on React Native, mobile payments, AI integration, and performance — written from shipping real production apps.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="bg-white" style={{ paddingTop: 80, paddingBottom: 100, paddingLeft: 40, paddingRight: 40 }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post, idx) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <article
                  style={{ padding: 10 }}
                  className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col h-full hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all"
                >

                  <div className="p-8 sm:p-10 flex flex-col flex-1">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {post.tags.map(tag => (
                        <span
                          key={tag}
                          style={{ padding: 5,marginBottom: 10 }}
                          className="text-xs font-black uppercase px-3 py-1 bg-black text-white border-2 border-black"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h2
                      className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black mb-4 leading-tight"
                      style={{ fontFamily: 'var(--font-outfit)', marginBottom: 10 }}
                    >
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-black/70 font-bold text-sm leading-relaxed mb-8 flex-1">
                      {post.excerpt}
                    </p>

                    {/* Footer */}
                    <div style={{paddingTop: 10}} className="flex items-center justify-between pt-5 border-t-2 border-black">
                      <div className="flex items-center gap-3 text-xs font-black uppercase text-black/50">
                        <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                        <span>·</span>
                        <span>{post.readTime}</span>
                      </div>
                      <span className="text-xs font-black uppercase text-black group-hover:translate-x-1 transition-transform">
                        Read →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="neobrutalist-bg border-t-4 border-black" style={{ paddingTop: 70, paddingBottom: 70, paddingLeft: 40, paddingRight: 40 }}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black mb-2" style={{ fontFamily: 'var(--font-outfit)' }}>
              Need a React Native developer?
            </h2>
            <p className="text-black/70 font-bold">I build iOS + Android apps for early-stage startups.</p>
          </div>
          <a href="mailto:saadkhalil9999@gmail.com" className="btn-neo-black shrink-0 px-8 py-4 text-sm font-black uppercase">
            Book a Strategy Call →
          </a>
        </div>
      </section>
    </div>
  );
}
