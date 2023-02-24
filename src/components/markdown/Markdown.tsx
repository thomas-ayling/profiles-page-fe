import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const Markdown = ({ text }: { text: string }) => {
  return <ReactMarkdown children={text} remarkPlugins={[remarkGfm]} className='markdown-component'/>;
};

export default Markdown;
