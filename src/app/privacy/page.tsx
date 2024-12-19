'use client'
import React, { useEffect, useState } from 'react';
import SectionTitle from '@/components/common/layout/section/SectionTitle';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const Page = () => {
  const [markdownContent, setMarkdownContent] = useState('');

  useEffect(() => {
    // Fetch the markdown file
    const fetchMarkdown = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/Cloud-Premises/iccmw-app/refs/heads/main/PRIVACY_POLICY.md');
        const text = await response.text();
        setMarkdownContent(text);
      } catch (error) {
        console.error("Error fetching markdown:", error);
      }
    };

    fetchMarkdown();
  }, []);

  return (
    <div>
      {/* Page Title */}
      <SectionTitle title='Privacy Policy' />

      {/* Page Body */}
      <div className="max-w-screen-xl mx-auto p-4">
        <div className="prose md:prose-sm lg:prose-md max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {markdownContent}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default Page;
