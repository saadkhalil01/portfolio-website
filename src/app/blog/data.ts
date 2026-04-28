export type ContentBlock =
  | { type: 'h2'; text: string }
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'code'; lang: string; text: string }
  | { type: 'callout'; text: string };

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  content: ContentBlock[];
}

export const posts: BlogPost[] = [
  {
    slug: 'react-native-vs-flutter-2025',
    title: 'React Native vs Flutter in 2025: A Freelance Developer\'s Honest Take',
    excerpt: 'I\'ve shipped 4 production apps in React Native and consulted on Flutter projects. Here\'s the unfiltered truth about which framework wins for startup builds in 2025.',
    date: '2025-03-15',
    readTime: '7 min read',
    tags: ['React Native', 'Flutter', 'Mobile'],
    content: [
      { type: 'p', text: 'Every client eventually asks me the same question: "Should we build in React Native or Flutter?" After shipping four production apps — MyndSpark, LoyalAI, FanGenie, and SplitMart — I have a grounded answer. The choice is less about the framework and more about your team, timeline, and existing codebase.' },
      { type: 'h2', text: 'The Honest Performance Comparison' },
      { type: 'p', text: 'Flutter\'s Dart-compiled UI renders at 60fps without the JavaScript bridge React Native historically relied on. That gap has largely closed. Since React Native 0.71, the New Architecture (Fabric + JSI) removed the async bridge entirely. In benchmarks I\'ve run on real devices, both frameworks are indistinguishable for typical app workloads — lists, forms, transitions.' },
      { type: 'p', text: 'Where Flutter still wins: pixel-perfect custom animations and games. If your app is a design-heavy experience where every pixel matters, Flutter\'s canvas-based renderer has no peer. React Native delegates to native components, so you\'re always one OS update away from a subtle UI shift.' },
      { type: 'h2', text: 'The JavaScript Ecosystem Advantage' },
      { type: 'p', text: 'React Native\'s biggest real-world advantage is the npm ecosystem. Every API, every third-party SDK (Stripe, Firebase, Segment, OpenAI) ships a JavaScript SDK first. With Flutter you\'re waiting for a Dart wrapper that may lag months behind the official release or be maintained by one person.' },
      { type: 'p', text: 'When I integrated GPT-4 streaming into LoyalAI, the OpenAI JS SDK just worked. In a Flutter project I consulted on, the team hand-rolled HTTP streaming because the Dart package was incomplete. That cost them a sprint.' },
      { type: 'h2', text: 'Team & Hiring Reality' },
      { type: 'p', text: 'For a startup hiring freelancers or a small team, React Native wins on talent pool. Every web developer who knows React can contribute to a React Native codebase within days. Flutter requires learning Dart, which has near-zero overlap with skills your web team already has.' },
      { type: 'ul', items: [
        'React Native: hire from the entire React web talent pool',
        'Flutter: hire from a smaller, specialized Dart pool',
        'React Native: web and mobile can share business logic, hooks, and types',
        'Flutter: separate codebase from your web product entirely',
      ]},
      { type: 'h2', text: 'When I Recommend Flutter' },
      { type: 'p', text: 'Flutter is the right call in two situations: you\'re building something that needs to run on mobile, web, and desktop from one codebase with identical pixel-perfect UI, or you\'re building a game or highly animated experience. Google Pay, Alibaba\'s Xianyu, and BMW\'s My BMW app are Flutter. They have dedicated Dart teams and pixel-perfect requirements.' },
      { type: 'h2', text: 'When I Recommend React Native' },
      { type: 'p', text: 'React Native wins for almost every SaaS or consumer startup I\'ve worked with. The reasons are practical: faster hiring, better third-party SDK support, code sharing with your web product, and a massive community that means Stack Overflow has an answer for your problem at 2am.' },
      { type: 'callout', text: 'My default recommendation for funded startups building consumer apps in 2025: React Native with Expo. You get OTA updates, a managed build service, and the full npm ecosystem. Ship in weeks, not months.' },
      { type: 'h2', text: 'The Real Decision Framework' },
      { type: 'ol', items: [
        'Does your team already know React? → React Native.',
        'Do you need pixel-perfect custom animations as a core feature? → Flutter.',
        'Are you integrating multiple third-party SaaS SDKs (payments, AI, analytics)? → React Native.',
        'Is this a design-forward app where the UI IS the product? → Flutter.',
        'Do you need web + mobile from one codebase? → Flutter (or React Native Web if you\'re flexible).',
      ]},
      { type: 'p', text: 'Both frameworks are production-ready. The gap that existed in 2019 is mostly gone. Pick based on your team\'s skills and your third-party dependency needs — not benchmarks.' },
    ],
  },
  {
    slug: 'stripe-react-native-integration-guide',
    title: 'Stripe Payments in React Native: The Complete 2025 Integration Guide',
    excerpt: 'A production-tested guide to integrating Stripe into React Native using @stripe/stripe-react-native. Covers PaymentSheet, webhooks, and the mistakes that cost teams weeks.',
    date: '2025-04-01',
    readTime: '9 min read',
    tags: ['React Native', 'Stripe', 'Payments'],
    content: [
      { type: 'p', text: 'I\'ve wired up Stripe in two production React Native apps — FanGenie and SplitMart — both now live on the App Store. This guide covers the path that actually works in 2025, not the outdated tutorials that still use the old Elements API or manual card field handling.' },
      { type: 'h2', text: 'Setup: The Right Packages' },
      { type: 'p', text: 'Use @stripe/stripe-react-native. Don\'t use the older stripe-react-native-sdk or roll your own WebView approach. The official package gives you native 3DS, Apple Pay, and Google Pay out of the box.' },
      { type: 'code', lang: 'bash', text: 'npx expo install @stripe/stripe-react-native' },
      { type: 'p', text: 'Wrap your app root with the StripeProvider:' },
      { type: 'code', lang: 'tsx', text: `import { StripeProvider } from '@stripe/stripe-react-native';

export default function App() {
  return (
    <StripeProvider publishableKey={process.env.EXPO_PUBLIC_STRIPE_KEY!}>
      <RootNavigator />
    </StripeProvider>
  );
}` },
      { type: 'h2', text: 'PaymentSheet: The Only Flow You Need' },
      { type: 'p', text: 'Forget building a custom card form. Stripe\'s PaymentSheet handles card entry, Apple Pay, Google Pay, saved cards, and 3DS in one pre-built UI. PCI compliance is Stripe\'s problem, not yours. Here\'s the complete flow:' },
      { type: 'code', lang: 'tsx', text: `import { useStripe } from '@stripe/stripe-react-native';

export function CheckoutButton({ amount }: { amount: number }) {
  const { initPaymentSheet, presentPaymentSheet } = useStripe();

  async function handlePayment() {
    // 1. Create PaymentIntent on your backend
    const { paymentIntent, ephemeralKey, customer } = await fetch(
      '/api/create-payment-intent',
      { method: 'POST', body: JSON.stringify({ amount }) }
    ).then(r => r.json());

    // 2. Init the sheet
    const { error: initError } = await initPaymentSheet({
      merchantDisplayName: 'Your App',
      customerId: customer,
      customerEphemeralKeySecret: ephemeralKey,
      paymentIntentClientSecret: paymentIntent,
      allowsDelayedPaymentMethods: false,
    });
    if (initError) return;

    // 3. Present — handles everything including 3DS
    const { error } = await presentPaymentSheet();
    if (!error) {
      // Payment confirmed — update your UI
    }
  }

  return <Button onPress={handlePayment} title="Pay Now" />;
}` },
      { type: 'h2', text: 'The Backend: Node.js PaymentIntent' },
      { type: 'p', text: 'Your backend needs to create the PaymentIntent and return the three secrets. Never do this client-side — your secret key would be exposed.' },
      { type: 'code', lang: 'ts', text: `import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

app.post('/api/create-payment-intent', async (req, res) => {
  const { amount } = req.body;

  const customer = await stripe.customers.create();
  const ephemeralKey = await stripe.ephemeralKeys.create(
    { customer: customer.id },
    { apiVersion: '2024-06-20' }
  );
  const paymentIntent = await stripe.paymentIntents.create({
    amount, // in cents
    currency: 'usd',
    customer: customer.id,
    automatic_payment_methods: { enabled: true },
  });

  res.json({
    paymentIntent: paymentIntent.client_secret,
    ephemeralKey: ephemeralKey.secret,
    customer: customer.id,
  });
});` },
      { type: 'h2', text: 'Webhooks: The Part Everyone Skips' },
      { type: 'p', text: 'Don\'t rely on the client to confirm payment success. The app can close, crash, or lose network after the PaymentSheet resolves. Stripe webhooks are your source of truth. Listen for payment_intent.succeeded and update your database there.' },
      { type: 'callout', text: 'Critical: Always verify payment server-side via webhooks before granting access to paid features. Client-side confirmation can be spoofed or interrupted.' },
      { type: 'ul', items: [
        'payment_intent.succeeded → unlock premium features',
        'customer.subscription.created → handle recurring billing',
        'invoice.payment_failed → notify user to update card',
        'charge.dispute.created → flag for manual review',
      ]},
      { type: 'h2', text: 'Apple Pay & Google Pay' },
      { type: 'p', text: 'Apple Pay is enabled automatically if you pass the merchantDisplayName to initPaymentSheet and add the Apple Pay entitlement. For Expo, add the Stripe plugin to your app.config.ts and run a new build — no native code changes needed.' },
      { type: 'h2', text: 'RevenueCat: When Stripe Isn\'t the Right Choice' },
      { type: 'p', text: 'If you\'re building subscriptions, consider RevenueCat instead of Stripe. RevenueCat handles the App Store and Play Store in-app purchase APIs (which Apple requires for digital goods sold through iOS apps). It also unifies analytics, paywalls, and receipt validation across platforms. For FanGenie\'s subscription tier, I used RevenueCat and saved two weeks of native billing code.' },
      { type: 'h2', text: 'Common Mistakes' },
      { type: 'ol', items: [
        'Using test keys in production (yes, this happens — use environment variables)',
        'Not handling 3DS — some European cards require it, your app will silently fail without it',
        'Confirming payment on the client only — always verify with webhooks',
        'Forgetting to add STRIPE_WEBHOOK_SECRET to production environment',
        'Not setting currency correctly — amount is always in the smallest currency unit (cents)',
      ]},
    ],
  },
  {
    slug: 'gpt4-react-native-ai-integration',
    title: 'Building AI-Powered Mobile Apps with GPT-4 and React Native',
    excerpt: 'How I integrated GPT-4 streaming into LoyalAI — a production React Native app — including architecture decisions, cost optimization, and UX patterns that actually work on mobile.',
    date: '2025-04-20',
    readTime: '8 min read',
    tags: ['React Native', 'AI', 'GPT-4'],
    content: [
      { type: 'p', text: 'When I built LoyalAI — a relationship assistant app on the App Store — I needed to integrate GPT-4 with streaming responses in React Native. Most tutorials show you how to call the API. None of them show you how to handle streaming on mobile, manage costs, or design a UX that doesn\'t feel broken. This post covers all three.' },
      { type: 'h2', text: 'Architecture: Never Call OpenAI Directly from the App' },
      { type: 'p', text: 'Your OpenAI API key must never leave your server. A decompiled React Native bundle will expose any key you hardcode or store in environment variables. Always proxy through your backend.' },
      { type: 'code', lang: 'ts', text: `// Your Node.js backend — never expose this on the client
import OpenAI from 'openai';
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.post('/api/chat', authenticate, async (req, res) => {
  const { messages } = req.body;

  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');

  const stream = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages,
    stream: true,
  });

  for await (const chunk of stream) {
    const text = chunk.choices[0]?.delta?.content ?? '';
    if (text) res.write(\`data: \${JSON.stringify({ text })}\\n\\n\`);
  }

  res.write('data: [DONE]\\n\\n');
  res.end();
});` },
      { type: 'h2', text: 'Streaming in React Native' },
      { type: 'p', text: 'React Native\'s fetch does not support streaming. You have two options: use EventSource (SSE) with a polyfill, or use a chunked XHR approach. For LoyalAI I used EventSource with the react-native-event-source package.' },
      { type: 'code', lang: 'tsx', text: `import EventSource from 'react-native-sse';

function useStreamingChat() {
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = useCallback((messages: Message[]) => {
    setLoading(true);
    setResponse('');

    const es = new EventSource('https://your-api.com/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: \`Bearer \${token}\` },
      body: JSON.stringify({ messages }),
    });

    es.addEventListener('message', (e) => {
      if (e.data === '[DONE]') {
        setLoading(false);
        es.close();
        return;
      }
      const { text } = JSON.parse(e.data!);
      setResponse(prev => prev + text);
    });

    es.addEventListener('error', () => { setLoading(false); es.close(); });
  }, [token]);

  return { response, loading, sendMessage };
}` },
      { type: 'h2', text: 'UX Patterns for AI on Mobile' },
      { type: 'p', text: 'Streaming text that appears character by character looks jarring on mobile unless you handle it well. Patterns that work:' },
      { type: 'ul', items: [
        'Show a typing indicator (three dots) while the first token arrives',
        'Auto-scroll to bottom as new tokens arrive — but stop scrolling if the user manually scrolls up',
        'Render markdown (bold, lists) — use react-native-markdown-display for LLM output',
        'Add a stop button — users will want to interrupt a long response',
        'Cache responses locally so hitting back doesn\'t re-fetch',
      ]},
      { type: 'h2', text: 'Cost Optimization' },
      { type: 'p', text: 'GPT-4o costs $5/1M input tokens and $15/1M output tokens. With a few thousand daily active users sending multiple messages, costs compound fast. The techniques that actually matter:' },
      { type: 'ol', items: [
        'Keep system prompts short and reuse them with prompt caching (Anthropic) or a cached messages array',
        'Summarize conversation history after every 10 exchanges instead of sending the full context',
        'Use gpt-4o-mini for low-stakes responses (suggestions, quick lookups) and gpt-4o for complex generation',
        'Rate-limit per user at the API layer — not just the client',
        'Log token usage per request to catch runaway prompts',
      ]},
      { type: 'h2', text: 'System Prompt Design for Mobile Apps' },
      { type: 'p', text: 'Your system prompt is the most important lever you have. Keep it under 500 tokens. Be explicit about response format (short, mobile-friendly) and persona. A system prompt that says "respond in 2-3 sentences unless asked for detail" dramatically reduces output token costs.' },
      { type: 'callout', text: 'Lesson from LoyalAI: a verbose system prompt that produced 400-word answers cost 10x more per conversation than a tightly scoped one that produced 80-word answers. Users actually preferred the shorter responses on mobile.' },
      { type: 'h2', text: 'App Store Considerations' },
      { type: 'p', text: 'Apple reviews AI features carefully. Make sure your app description accurately describes the AI capabilities, include a content moderation layer (OpenAI\'s moderation endpoint is free and fast), and have a clear privacy policy covering what data is sent to OpenAI. Apple will reject apps that send user data to third-party AI APIs without clear disclosure.' },
    ],
  },
  {
    slug: 'react-native-performance-optimization-tips',
    title: 'React Native Performance Optimization: 7 Tips That Actually Move the Needle',
    excerpt: 'After fixing critical performance bottlenecks in a client\'s app and improving load times by 40%, here are the changes that had real impact — not the premature optimizations that wasted weeks.',
    date: '2025-05-10',
    readTime: '8 min read',
    tags: ['React Native', 'Performance', 'Optimization'],
    content: [
      { type: 'p', text: 'A client brought me in after their React Native app had shipped with serious performance issues — jank on scroll, slow navigation, and an 8-second cold start. Within two weeks we had cut load time by 40% and eliminated most of the jank. Here\'s exactly what worked, and what didn\'t.' },
      { type: 'h2', text: '1. Enable Hermes (If You Haven\'t)' },
      { type: 'p', text: 'Hermes is now the default JavaScript engine for React Native, but older projects may still be running JSC. Hermes pre-compiles JavaScript to bytecode at build time, cutting startup time significantly. Check your android/app/build.gradle — hermesEnabled should be true. For Expo, it\'s enabled by default since SDK 48.' },
      { type: 'p', text: 'On the app that was crashing: switching from JSC to Hermes alone cut cold start from 8 seconds to 4.8 seconds. That\'s 3 seconds for a config change.' },
      { type: 'h2', text: '2. Use the New Architecture (Fabric + JSI)' },
      { type: 'p', text: 'React Native\'s New Architecture removes the async JavaScript bridge that was the root cause of UI thread jank. Fabric renders UI synchronously, JSI allows direct JS-to-native method calls. As of React Native 0.73+, you can enable it with a single flag. Most popular libraries now support it.' },
      { type: 'code', lang: 'ts', text: `// android/gradle.properties
newArchEnabled=true

// ios/Podfile — set before pod install
ENV['RCT_NEW_ARCH_ENABLED'] = '1'` },
      { type: 'h2', text: '3. Fix Your FlatList — It\'s Probably Wrong' },
      { type: 'p', text: 'The most common source of scroll jank I see is a misconfigured FlatList. Three changes make a dramatic difference:' },
      { type: 'code', lang: 'tsx', text: `<FlatList
  data={items}
  keyExtractor={(item) => item.id}
  renderItem={renderItem}
  // These three are critical:
  removeClippedSubviews={true}
  maxToRenderPerBatch={10}
  windowSize={5}
  // For images: set explicit dimensions so layout doesn't recalculate
  getItemLayout={(_, index) => ({ length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index })}
/>` },
      { type: 'p', text: 'getItemLayout is the biggest win if your list items have fixed height. Without it, React Native has to measure every item to calculate scroll position. With it, scroll jumps to the exact pixel immediately.' },
      { type: 'h2', text: '4. Memoize Aggressively in List Items' },
      { type: 'p', text: 'Every time the parent component re-renders, renderItem recreates. Wrap list item components in React.memo and use useCallback for handlers. This prevents the entire visible list from re-rendering when unrelated state changes.' },
      { type: 'code', lang: 'tsx', text: `const ListItem = React.memo(({ item, onPress }: Props) => {
  return <TouchableOpacity onPress={() => onPress(item.id)}>...</TouchableOpacity>;
});

// In the parent:
const renderItem = useCallback(({ item }) => (
  <ListItem item={item} onPress={handlePress} />
), [handlePress]);

const handlePress = useCallback((id: string) => {
  // handle
}, []);` },
      { type: 'h2', text: '5. Move Animations to the UI Thread' },
      { type: 'p', text: 'React Native\'s Animated API runs on the JS thread by default. When JS is busy (fetching, processing), animations stutter. Use Reanimated 3 with worklets — animations run on the native UI thread and are immune to JS thread congestion.' },
      { type: 'code', lang: 'tsx', text: `import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';

function PressableCard() {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <Animated.View style={animatedStyle}>
      <Pressable
        onPressIn={() => { scale.value = withSpring(0.96); }}
        onPressOut={() => { scale.value = withSpring(1); }}
      >
        {/* content */}
      </Pressable>
    </Animated.View>
  );
}` },
      { type: 'h2', text: '6. Lazy Load Screens and Heavy Components' },
      { type: 'p', text: 'Don\'t import every screen at the top of your navigator. React Navigation supports lazy loading — screens are only imported when first visited. For heavy components (charts, maps, rich text editors), use dynamic imports with React.lazy and a Suspense fallback.' },
      { type: 'callout', text: 'The app I optimized was importing a PDF viewer library on cold start even though 95% of users never opened PDFs. Lazy loading it cut the initial bundle parse time by 1.2 seconds.' },
      { type: 'h2', text: '7. Profile Before Optimizing Anything' },
      { type: 'p', text: 'The biggest waste of time I see is developers optimizing things that aren\'t bottlenecks. Before touching anything, use Flipper with the React DevTools and Performance plugins. Identify where frames are dropping and what\'s causing re-renders. React Native\'s built-in Performance Monitor (shake device → "Perf Monitor") shows JS and UI FPS in real time. Optimize the thing the profiler points to — not the thing that feels slow.' },
      { type: 'ul', items: [
        'Flipper + React DevTools: find unnecessary re-renders',
        'Flipper Network: spot slow API calls blocking render',
        'Xcode Instruments (iOS): find memory leaks and CPU spikes',
        'Android Studio Profiler: same for Android',
        'React Native Performance Monitor: quick sanity check on FPS',
      ]},
      { type: 'p', text: 'Performance work is satisfying when you measure before and after. Every change I listed above came from profiling data, not intuition. Start there.' },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find(p => p.slug === slug);
}
