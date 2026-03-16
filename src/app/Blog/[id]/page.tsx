"use client";

import Hero from "@/src/components/Blog/Hero";
import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import { useParams } from "next/navigation";

export default function BlogPage() {
  const { id } = useParams();

  return (
    <>
      <Header />
      <Hero />

      <div className="max-w-7xl mx-auto px-10 md:px-16 py-12">
        <div className="grid md:grid-cols-10 gap-6 items-start">
          
          <div className="md:col-span-6">
         
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="https://bzanalytics.ai/assets/images/blog/rag-l.jpg"
                alt="blog"
                className="w-full h-[450px] object-cover"
              />

              
              <div className="absolute bottom-0 left-0 w-full h-[45%] backdrop-blur-sm bg-black/30"></div>

             
              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-flex items-center gap-2 bg-white px-3 py-1 rounded-md mb-3">
                  <span className="w-2.5 h-2.5 bg-blue-500 rounded-full"></span>
                  <p className="text-sm text-gray-700 font-medium">
                    Technology & Business
                  </p>
                </div>

                <h2 className="text-white text-[22px] font-bold leading-7 mb-2 max-w-[600px]">
                  Bridging the Gap: How RAG (Retrieval Augmented Generation) is
                  Transforming Generative AI
                </h2>

                <p className="text-gray-200 text-sm">Apr 15 • 10 min read</p>
              </div>
            </div>

        
            <p className="mt-20 text-white leading-7">
              In recent years, the field of artificial intelligence (AI) has
              witnessed a remarkable revolution, particularly in generative
              models. One of the most significant advancements in this realm is
              the emergence of retrieval augmented generation, which has proven
              to be a game-changer in enhancing the capabilities of generative
              AI models. This blog explores the profound impact of
              retrieval-augmented generation and its role in revolutionising the
              landscape of generative AI.
            </p>
          </div>

        
          <div className="md:col-span-4 space-y-4">
            <h2 className="text-[20px] mb-6 font-semibold text-white leading-[24px]">
              In this article
            </h2>

            <p className="border-l-[3px] border-orange-500 pl-3 py-2 text-[#f79d0f]">
              RAG Transforming generative AI.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
