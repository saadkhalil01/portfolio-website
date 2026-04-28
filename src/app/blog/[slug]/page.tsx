import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { posts, getPost, type ContentBlock } from '../data';
import Navbar from '../../components/Navbar';

export function generateStaticParams() {
  return posts.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Muhammad Saad`,
    description: post.excerpt,
    alternates: { canonical: `https://saadkhalil.dev/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://saadkhalil.dev/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: ['Muhammad Saad'],
    },
  };
}

function renderBlock(block: ContentBlock, i: number) {
  switch (block.type) {
    case 'h2':
      return (
        <h2
          key={i}
          className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black mt-12 mb-4"
          style={{ fontFamily: 'var(--font-outfit)' }}
        >
          {block.text}
        </h2>
      );
    case 'p':
      return (
        <p key={i} className="text-black/80 font-bold leading-relaxed text-base sm:text-lg mb-5">
          {block.text}
        </p>
      );
    case 'ul':
      return (
        <ul key={i} className="mb-5 flex flex-col gap-3">
          {block.items.map((item, j) => (
            <li key={j} className="flex gap-3 text-black/80 font-bold text-base sm:text-lg leading-relaxed">
              <div className="mt-2 w-2 h-2 bg-black shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      );
    case 'ol':
      return (
        <ol key={i} className="mb-5 flex flex-col gap-3">
          {block.items.map((item, j) => (
            <li key={j} className="flex gap-3 text-black/80 font-bold text-base sm:text-lg leading-relaxed">
              <span className="shrink-0 font-black text-black text-sm min-w-[1.5rem]">{j + 1}.</span>
              {item}
            </li>
          ))}
        </ol>
      );
    case 'code':
      return (
        <div key={i} className="mb-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex items-center gap-2 px-4 py-2 bg-black border-b-4 border-black">
            <span className="text-xs font-black uppercase text-white tracking-widest">{block.lang}</span>
          </div>
          <pre
            className="overflow-x-auto p-5 text-sm leading-relaxed"
            style={{ background: '#121212', color: '#a3e635', fontFamily: 'ui-monospace, monospace' }}
          >
            <code>{block.text}</code>
          </pre>
        </div>
      );
    case 'callout':
      return (
        <div
          key={i}
          className="mb-6 px-6 py-5 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] neobrutalist-bg"
        >
          <p className="text-black font-black text-base sm:text-lg leading-relaxed">{block.text}</p>
        </div>
      );
    default:
      return null;
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: 'Muhammad Saad',
      url: 'https://saadkhalil.dev',
    },
    publisher: {
      '@type': 'Person',
      name: 'Muhammad Saad',
      url: 'https://saadkhalil.dev',
    },
    mainEntityOfPage: `https://saadkhalil.dev/blog/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-white">
        <Navbar />

        {/* Post header */}
        <section className="neobrutalist-bg border-b-4 border-black" style={{ paddingTop: 110, paddingBottom: 70, paddingLeft: 40, paddingRight: 40 }}>
          <div className="max-w-3xl mx-auto">
            <Link
              href="/blog"
              style={{ marginBottom: 10 }}
              className="inline-flex items-center gap-2 text-xs font-black uppercase text-black/70 hover:text-black transition-colors tracking-widest mb-4"
            >
              ← All Posts
            </Link>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-5">
              {post.tags.map(tag => (
                <span
                  key={tag}
                  style={{ padding: 5 }}
                  className="text-xs font-black uppercase px-3 py-1 bg-black text-white border-2 border-black"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white/90 leading-tight mb-6"
              style={{ fontFamily: 'var(--font-outfit)' }}
            >
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs font-black uppercase text-black/70 tracking-widest">
              <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <span>·</span>
              <span>{post.readTime}</span>
              <span>·</span>
              <span>Muhammad Saad</span>
            </div>
          </div>
        </section>

        {/* Article body */}
        <section className="bg-white border-b-4 border-black" style={{ paddingTop: 70, paddingBottom: 90, paddingLeft: 40, paddingRight: 40 }}>
          <div className="max-w-3xl mx-auto">
            <article>
              {post.content.map((block, i) => renderBlock(block, i))}
            </article>
          </div>
        </section>

        {/* CTA */}
        <section className="neobrutalist-bg border-b-4 border-black" style={{ paddingTop: 70, paddingBottom: 70, paddingLeft: 40, paddingRight: 40 }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black mb-3" style={{ fontFamily: 'var(--font-outfit)' }}>
              Need help building your app?
            </h2>
            <p className="text-black/70 font-bold mb-6">
              I build React Native and iOS apps for startups — from idea to App Store.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="mailto:saadkhalil9999@gmail.com" className="btn-neo-black px-6 py-3 text-sm font-black uppercase">
                Book a Strategy Call →
              </a>
              <Link href="/blog" className="btn-neo-white px-6 py-3 text-sm font-black uppercase">
                ← More Posts
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
