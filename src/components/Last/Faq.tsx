import React from "react";
import SingleFaq from "./SingleFaq";

const faqData = [
  {
    id: "1",
    question: "What is AiDocker?",
    answer:
      "AiDocker is a platform dedicated to enabling the development of decentralized AI applications, providing resources for creating, training, and deploying AI models, and offering access to a network of GPUs for computational power.",
  },
  {
    id: "2",
    question: "How does the DePIN network function?",
    answer:
      "DePIN, our Decentralized Physical Infrastructure Network, connects users to a network of GPUs, allowing for scalable computing power necessary for AI model development and deployment.",
  },
  {
    id: "3",
    question: "Can I contribute to AiDocker's dataset library?",
    answer:
      "Yes, AiDocker encourages contributions to its dataset library. Users can share their unique datasets, enhancing the diversity and richness of resources available for AI development.",
  },
  {
    id: "4",
    question: "What are the revenue opportunities on AiDocker?",
    answer:
      "Users can earn revenue through various means, including sharing AI models, providing GPU resources in the DePIN network, and participating in our dataset and model marketplaces.",
  },
  {
    id: "5",
    question: "How can I get started with using AiDocker?",
    answer:
      "To get started, sign up on our platform. You'll gain access to our resources, including datasets and GPU power, and can begin developing and deploying your AI models.",
  },
];

const Faq = () => {
  return (
    <div id="faq" className="flex justify-center flex-col">
      <div className="text-xs font-medium leading-4 heading-gradient tracking-widest uppercase self-center whitespace-nowrap mt-4 sm:mt-20 max-md:mt-10">
        FAQ
      </div>
      <div className="text-white text-center text-3xl sm:text-4xl font-bold leading-10 sm:leading-[56px] tracking-tighter mt-2 sm:mt-2 mb-10 max-md:max-w-full">
        Frequently Asked Questions
      </div>

      {faqData.map((faq) => (
        <SingleFaq key={faq.id} {...faq} />
      ))}
    </div>
  );
};

export default Faq;
