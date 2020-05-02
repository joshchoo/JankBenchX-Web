import React from 'react';
import ReactMarkdown from 'react-markdown';

import { PageLayout } from '../page-layout/PageLayout';

const content = `
# About

### What is JankBench?
JankBench is an UI benchmark app [developed by Google](https://android.googlesource.com/platform/frameworks/base/+/refs/heads/master/tests/JankBench/). Compared with other benchmarks that evaluate a device's computational performance, JankBench measures a device's ability to display content smoothly [(UI Performance)](https://joshuous.com/posts/evaluating-performance/). Users tend to [perceive dropped frames (janks) more noticeably](https://source.android.com/devices/tech/debug/eval_perf) compared to a less obvious issue such as slightly slower application launch times.

### What is JankBenchX?
[JankBench**X**](https://github.com/joshuous/jankbenchx) is an e-**X**-tended fork of the JankBench app that makes it easy for developers and users to store and share their results via the [JankBenchX Web App](https://jankbenchx.now.sh/). It adds the following features:
* Uploads results to JankBenchX Web APIs.
- Calculates scores differently. Scores for each test are **aggregated** across all runs and then calculated. This differs from the original JankBench, which calculates results for each run and then averages them.
- Calculates scores based on the device's display refresh rate. The original JankBench **assumes** device displays run at 60Hz, which does not reflect the actual jank deadline. On a device with 90Hz display, the scores calculated by JankBench would be too optimistic because of a false higher jank deadline. JankBenchX improves on this by checking the device's refresh rate before calculating the scores.

### What is a 'jank'?
A jank is a visibly jarring pause that disrupts the smooth rendering of the user interface. It tends to be caused by a 'dropped' frame, which took longer than the jank deadline to render.

### What is the jank deadline?
I refer to **jank deadline** as the time limit that each frame needs to be rendered to avoid a jank. Although a frame may take longer than the jank deadline to render, it may not necessarily cause a jank (sounds contradictory but read the next question).

### Why does my jank percentage appear low although there are many frames that exceed the jank deadline on the frame distribution graph?
[Triple buffering](https://www.androidpolice.com/2012/07/12/getting-to-know-android-4-1-part-3-project-butter-how-it-works-and-what-it-added/) helps to prevent jank snowballs. Although some frames take longer than the jank deadline to render, the system still has backup buffers to render to the display. Another good explanation of triple buffering can be seen at the [Project Butter talk](https://youtu.be/Q8m9sHdyXnE?t=1475).

### What is the difference between janks and bad frames?
Bad frames are frames that take at least 75% of jank deadline duration to render. It can paint a picture of how much your device is struggling to render the frames within the jank deadline.

### How do I interpret the results?
**Score**: lower is better

**Jank**: lower is better

**Bad frames**: lower is better

**Consistency**: higher is better

**Penalty**: lower is better

These metrics need to be evaluated as a whole rather than in isolation. You may refer to the following calculations to understand what each metric represents:

**Jank deadline (ms)** = \`1 / display refresh rate (Hz)\`

**Bad frame duration (ms)** = \`0.75 * jank deadline (ms)\`

**Score** = \`mean duration of bad frames (ms) * standard deviation of bad frames * percentage of janks\`

**Consistency** (capped at 100) = \`mean duration of all frames (ms) / standard deviation of all frames\`

**Penalty** (capped at 100) = \`100 * (95th percentile duration (ms) - bad frame duration (ms)) / (2 * jank deadline (ms) - bad frame duration (ms))\`

One way to interpret the **score** is that it considers a combination of consistency and ability to render frames quickly with few dropped frames.

### What are JankBenchX's limitations?
JankBenchX cannot account for variable display refresh rates (e.g. Razer phone and Pixel 4). It assumes that your device uses a fixed display refresh rate.

### How do I contribute FAQs, suggestions, ideas, or bug reports?
Fantastic! Please create a [Github issue here](https://github.com/joshuous/JankBenchX-Web/issues) with details.

### How can I contribute code?
You are welcomed to submit a pull request for the [Android app](https://github.com/joshuous/JankBenchX) or the [web app](https://github.com/joshuous/JankBenchX-Web). For info, the following tech stack is used:

- Android app: typical Java
- Web Frontend: React + GraphQL
- Web Backend: Node.js serverless functions (Vercel) + FaunaDB

`;

export const AboutPage: React.FC = () => {
  return (
    <PageLayout>
      <ReactMarkdown source={content} className="markdown-body" />
    </PageLayout>
  );
};
