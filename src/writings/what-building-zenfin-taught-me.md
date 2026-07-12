---
title: What Building Zenfin Taught Me
created_at: 2026-07-12
description: Reflections after shutting down Zenfin. About building products, building habits, AI moving faster than expected, user research, and marketing.
---

A year ago, I built **Zenfin**, a WhatsApp-based personal finance assistant. The idea came from a frustration I had with existing expense trackers. Most of them required you to stop what you were doing, open an app, fill out a form, pick a category, and repeat that process every day. It always felt like unnecessary work. Having to install yet another app just to manually record how much I spent that day wasn't something I looked forward to.

Then LLMs came along, and they felt like a breath of fresh air. Instead of forcing people to adapt to software, why not let the software adapt to how people naturally communicate? Users could simply send messages like "Coffee 35k," "Paid electricity 450k," or upload a receipt, and let AI handle everything else. Categorization, reports, summaries. All automatically.

It felt like a genuinely interesting use of AI.

_Today, Zenfin is no longer running._

Oddly enough, I don't consider it a failure. If anything, building it taught me lessons I probably couldn't have learned any other way. Looking back, almost none of them were technical.

## Building a product is one thing. Getting people to keep using it is another.

As engineers, it's easy to measure progress by things we can see: features shipped, bugs fixed, systems deployed. Launching a product feels like crossing the finish line. In reality, launching is just the beginning. That's when you finally find out whether the problem you thought you solved actually matters to someone else.

People don't automatically use a product just because it's well built. They also don't magically develop new habits simply because you've made the workflow easier. Personal finance is a good example of this. The value doesn't appear after recording a single expense. It only becomes meaningful after weeks, or even months, of consistent use.

Getting AI to read receipts or categorize transactions wasn't the hard part. That part was surprisingly easy. The difficult part was getting people to come back tomorrow, then next week, then next month.

**From a product perspective, having lots of features or very few bugs is mostly a vanity metric. The real metric is revenue.**

Looking back, I realized I was trying to solve a behavioral problem with engineering. I assumed that if I made recording expenses frictionless enough, people would naturally stick with it. They didn't.

That experience also changed how I understood Paul Graham's essay, [Do Things That Don't Scale](https://www.paulgraham.com/ds.html). When I first read it, I thought it was about manually onboarding users or answering support tickets. After building Zenfin, I realized that's not really the point. Those things don't matter because they're manual. They matter because they force you to spend time with your users. Dashboards tell you what happened. Conversations often tell you why.

Looking back, I spent far more time optimizing how people recorded transactions than understanding why they stopped recording them once the novelty wore off. Technical problems were familiar territory. Human behavior wasn't.

## Ideas don't last long in AI

This lesson only became obvious a few months after Zenfin launched.

Zenfin wasn't just competing with other personal finance apps. It was competing with the entire AI ecosystem, including companies moving much faster than I ever could.

When I started, tracking expenses through WhatsApp chat felt fairly unique. But within a matter of months, foundation models had improved dramatically. Better memory. Better multimodal capabilities. More reliable tool calling. Longer context windows. Suddenly, many things that once justified a dedicated application could be done directly inside ChatGPT, Claude, Gemini, or whichever AI assistant people were already using every day.

I don't see this as a bad thing. That's simply what building AI products looks like today, especially AI wrappers. What looks like a product today can become a feature a few months later. Eventually, even that feature becomes a native capability of the foundation model itself.

That changes the question founders need to ask. It used to be, _"Can AI do this?"_ Today, the more important question is, _"If ChatGPT can do this too, why should my product still exist?"_ That's a much harder question to answer.

## Platform risk

There was another lesson I didn't expect when I started: platform policies can change overnight.

From day one, I wanted Zenfin to be as affordable as possible. The target market was Indonesia, and we all know this is a very price-sensitive market. My obsession was keeping operating costs low enough that people wouldn't think twice about subscribing. Fortunately, LLM inference kept getting cheaper over time, and I became increasingly optimistic that the business model would work.

[Then WhatsApp changed its pricing model](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing/non-template-messages).

Instead of charging primarily per conversation, Meta started charging businesses for every automated message they sent. Reminders, confirmations, weekly reports, AI replies. Suddenly, every automated interaction had its own cost attached to it.

Ironically, the more active a user became, the more expensive they became to serve.

Nothing about the product changed. But the economics changed overnight.

I'm sure Zenfin wasn't the only product affected. Almost every conversational product probably had to rethink pricing, impose usage limits, or even consider moving to another platform.

It reminded me that if your business depends heavily on someone else's platform, your business model depends on their decisions too. We often spend time thinking about technical risk and market risk. Platform risk deserves just as much attention, yet it's far harder to predict.

## User research is harder than coding

One thing I seriously underestimated was understanding what users actually wanted.

Writing software is relatively deterministic. Once the requirements are clear, the job is mostly implementation. User research isn't like that. Not because people intentionally lie, but because people often don't really know what they want.

Some users are incredibly enthusiastic during onboarding. They tell you they'll use the product every day. A week later, they're gone. Others request specific features, but once you've built them, they never use them. Meanwhile, the users who give almost no feedback sometimes end up becoming your most loyal customers.

The natural response for engineers is to build more features because that's what we're good at. But every new feature is really just another assumption about user behavior. If that assumption is wrong, you've simply spent more time building the wrong thing.

The real challenge isn't writing the code. It's figuring out which assumptions are actually true.

## Marketing is a profession, not a side job

This was probably my biggest lesson.

I knew almost nothing about marketing. I even ended up creating a dedicated ChatGPT prompt just to help me learn it.

I know how to design systems, manage infrastructure, integrate LLMs, and build applications that scale. I've spent years doing exactly that. I also knew marketing would probably become my biggest bottleneck. I just didn't expect it to be _this_ difficult.

Distribution, positioning, pricing, copywriting, content, referrals, and simply understanding where potential users spend their time are all disciplines in their own right. Just like software engineering, they require deliberate practice.

Engineers often believe that a good product will naturally find its audience. Sometimes it does. But much more often, the product is genuinely good, and nobody knows it exists.

## Looking back

Zenfin never became a "real" business.

But if you asked whether I regret building it, the answer would be no. Every side project teaches you something. Zenfin just happened to teach me lessons that had very little to do with coding.

The next time I build a product, I think I'll start by asking better questions first.
