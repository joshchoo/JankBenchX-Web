import React from "react";
import ReactMarkdown from "react-markdown";

import { PageLayout } from "../page-layout/PageLayout";

const content = `
# About

Hi there!

I'm **Josh** (aka **joshuous**). My obsession is developing delightful user experiences and performant products. I have a few years of experience developing Android OS ROMs ([VertexOS](https://github.com/vertexos) and [Paranoid Android](https://github.com/AOSPA)) and kernels ([RenderZenith](https://github.com/eas-project)) as a hobby with great folks. I am comfortable with implementing high-level user features, to integrating middleware, and diving deep into the low-level kernel to improve scheduler performance. While I spend most of my time these days doing full stack web development, I continue to think about ways to improve the Android OS user and developer experience. This has led to the development of JankBenchX, an Android UI benchmark app and web app with great user experience. I hope you enjoy using it!

Feel free to check out my [website](https://joshuous.com/) and my works on [GitHub](https://github.com/joshuous/)!
`;

export const AboutPage: React.FC = () => {
  return (
    <PageLayout>
      <ReactMarkdown className="markdown-body">{content}</ReactMarkdown>
    </PageLayout>
  );
};
