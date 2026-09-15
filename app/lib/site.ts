/**
 * সাইটের পরিচয় আর এই পথের সেটিং — plan-এর কনটেন্ট নয়, তাই `docs/`-এ নয়, এখানে।
 *
 * তিনটা পথের (লোকাল · রিমোট · গ্লোবাল) কোড একই; পার্থক্য শুধু এই ফাইল,
 * `next.config.ts`-এর basePath, `package.json`-এর নাম আর `docs/`-এর কনটেন্ট।
 */
export const SITE: {
  title: string;
  short: string;
  emoji: string;
  description: string;
  storagePrefix: string;
  suggestedStart: string | null;
} = {
  title: "রিমোট কোম্পানির behavioural",
  short: "রিমোট behavioural",
  emoji: "🎙️",
  description:
    "বাংলাদেশে বসে বিদেশি রিমোট কোম্পানির behavioural প্রশ্নের জন্য — ছয়টা STAR story ইংরেজিতে, একটা লিখে বোঝানো নিয়ে, ১৮০ দিনের plan-এর story-র ঘরে, learning to learn-এর নীতিতে।",
  /** localStorage key-এর prefix — তিন পথের progress আলাদা থাকে */
  storagePrefix: "rbi",
  /** শুরুর তারিখ না থাকলে প্রস্তাব — নেই — plan-এর সাথে চালালে plan-এর দিন ০০৬-এর তারিখ */
  suggestedStart: null,
};
