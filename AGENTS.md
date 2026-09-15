# behavioural_interview_*_company — Agent Instructions

story-র দিনভিত্তিক তিন সাইটের একটা (`behavioural_interview_local_company` · `_remote_company` · `_global_company`)। এই ফাইল তিন repo-তে হুবহু এক।

- **তিন repo-র কোড হুবহু এক** — পার্থক্য শুধু `app/lib/site.ts` (নাম, `lbi`/`rbi`/`gbi` prefix, `suggestedStart` — লোকালে `2026-09-19`, বাকি দুটোয় `null`), `next.config.ts`-এর basePath, `package.json`-এর নাম আর `docs/`। কোড বদলালে তিনটাতেই একই বদল।
- **কাজ switch plan থেকে হুবহু সরানো** — সাইটের দিন = plan-এর দিন − ৫; plan-এ থাকে ঘর আর লিংক, রোজের ইংরেজি আর mock interview। তথ্য বদলালে ক্রম: `brainstorming/ASSUMPTIONS.md` → `brainstorming/` → ৬ মাসের plan → এই repo; plan-এর ঘর আর সাইটের দিন একসাথে।
- ফাইলে **তারিখ নেই**, শুধু `### দিন ০০৭ · শিরোনাম`; কাজ ছাড়া দিন "বিরতি"। দিনের নম্বর পরপর না হলে build ভাঙে। "আজ" = ক্যালেন্ডারের তারিখ, plan পেছায় না।
- কাজে `(ডক ০২.০২)` = `guide/`-এর স্তর.ডক; না মিললে **build ভাঙে**। `guide/` = `behavioural_interview/docs/` হুবহু, তিন repo-তে এক।
- 🧠 নাম → `app/lib/principles.ts` (switch plan-এর কপি); নতুন নাম লিখলে তিন repo-তেই যোগ।
- Progress চার key (`start`, `task`, `check`, `review`) — একমাত্র `app/hooks/useProgress.ts` দিয়ে। নোটের ঘর নেই, ইচ্ছাকৃত।
- `app/lib/plan.ts` আর `app/lib/guide.ts` server-only।
- **Theme contract অলঙ্ঘনীয়**, সাইট **dark-only**।

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
