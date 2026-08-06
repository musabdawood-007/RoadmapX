import { Roadmap } from "../types/roadmap";

export const nlpEngineerRoadmap: Roadmap = {
  id: "nlp-engineer",
  title: "NLP Engineer",
  description: "Build systems that understand, generate, and analyze human language.",
  introduction:
    "NLP engineering builds systems that understand and generate human language. You'll learn to process text at scale, fine-tune language models, build retrieval-augmented generation pipelines, and deploy production-ready language applications.",
  icon: "💬",
  category: "Data & AI",
  difficulty: "Advanced",
  estimatedTime: "5-9 months",
  steps: [
    {
      id: "step-1",
      label: "Python",
      tool: "Python",
      description:
        "Master Python with emphasis on data structures, generators, and object-oriented patterns. Learn NumPy for numerical computation and Pandas for data manipulation. Python is the foundation of the NLP ecosystem — every major library and framework is built on it.",
      url: "https://www.python.org/doc/",
    },
    {
      id: "step-2",
      label: "Text Processing",
      tool: "spaCy",
      description:
        "Build production-grade NLP pipelines with spaCy for tokenization, lemmatization, and named entity recognition. Learn to configure custom pipelines and process large corpora efficiently. spaCy's industrial-strength design makes it the go-to choice for real-world text processing.",
      url: "https://spacy.io/usage",
    },
    {
      id: "step-3",
      label: "Text Analysis",
      tool: "NLTK",
      description:
        "Explore foundational NLP techniques with NLTK including tokenization, stemming, tagging, and parsing. Work with corpora and lexical resources for research and prototyping. NLTK remains invaluable for understanding NLP concepts and experimenting with classical algorithms.",
      url: "https://www.nltk.org/",
    },
    {
      id: "step-4",
      label: "Linguistics Fundamentals",
      tool: "Core NLP",
      description:
        "Study phonology, morphology, syntax, semantics, and pragmatics to understand how language is structured. Learn about part-of-speech tagging, dependency parsing, and constituency grammars. A solid grounding in linguistics helps you design better preprocessing pipelines and interpret model behavior.",
      url: "https://www.nltk.org/book/",
    },
    {
      id: "step-5",
      label: "Word Embeddings",
      tool: "Gensim",
      description:
        "Represent words as dense vectors that capture semantic meaning and relationships. Implement Word2Vec, GloVe, and FastText to learn embeddings from your own corpora. Embeddings are the bridge between raw text and machine learning — they turn words into numbers that preserve meaning.",
      url: "https://radimrehurek.com/gensim/models/word2vec.html",
    },
    {
      id: "step-6",
      label: "Transformers",
      tool: "Hugging Face",
      description:
        "Understand the self-attention mechanism, positional encoding, and the encoder-decoder architecture. Load and fine-tune pre-trained models for classification, NER, summarization, and translation. Transformers revolutionized NLP and remain the dominant architecture for language understanding tasks.",
      url: "https://huggingface.co/docs/transformers",
    },
    {
      id: "step-7",
      label: "Fine-Tuning LLMs",
      tool: "PEFT",
      description:
        "Adapt large language models to your domain using parameter-efficient techniques like LoRA and QLoRA. Learn when to fine-tune versus when to use prompting, and how to prepare training datasets effectively. Fine-tuning gives you precise control over model behavior that general-purpose models cannot provide.",
      url: "https://huggingface.co/docs/peft/",
    },
    {
      id: "step-8",
      label: "RAG Systems",
      tool: "LangChain",
      description:
        "Build Retrieval-Augmented Generation pipelines that combine LLMs with external knowledge sources. Implement document chunking strategies, semantic search, and context injection to ground model outputs in your data. RAG is the primary technique for making LLMs answer questions about domain-specific information.",
      url: "https://python.langchain.com/docs/tutorials/rag",
    },
    {
      id: "step-9",
      label: "Vector Databases",
      tool: "Pinecone",
      description:
        "Store and query high-dimensional embeddings using vector databases optimized for similarity search. Understand indexing algorithms like HNSW and IVF, and learn to tune recall versus latency trade-offs. Vector databases are the memory layer that powers semantic search and retrieval-augmented systems.",
      url: "https://docs.pinecone.io/",
    },
    {
      id: "step-10",
      label: "Prompt Engineering",
      tool: "OpenAI API",
      description:
        "Design effective prompts that guide LLMs to produce accurate and structured outputs. Master techniques like few-shot learning, chain-of-thought reasoning, and system prompt design. Prompt engineering is often the fastest path from idea to working NLP application without any model training.",
      url: "https://platform.openai.com/docs/guides/prompt-engineering",
    },
    {
      id: "step-11",
      label: "Speech & Audio NLP",
      tool: "Whisper",
      description:
        "Process speech signals for transcription, speaker diarization, and sentiment analysis from audio. Work with OpenAI Whisper for automatic speech recognition and libraries like librosa for audio feature extraction. Speech NLP extends language understanding beyond text to the spoken word.",
      url: "https://github.com/openai/whisper",
    },
    {
      id: "step-12",
      label: "Evaluation Metrics",
      tool: "Evaluate",
      description:
        "Measure NLP model quality using metrics like BLEU, ROUGE, perplexity, and BERTScore. Learn to design evaluation pipelines that capture both fluency and faithfulness of generated text. Proper evaluation is critical — without it you cannot compare approaches or detect regressions.",
      url: "https://huggingface.co/docs/evaluate/",
    },
    {
      id: "step-13",
      label: "NLP Ops",
      tool: "MLflow",
      description:
        "Track experiments, version models, and monitor NLP system performance in production. Learn to detect data drift, manage model registries, and automate retraining pipelines. NLOps ensures your language models remain reliable and accurate as data and user needs evolve.",
      url: "https://mlflow.org/docs/latest/index.html",
    },
    {
      id: "step-14",
      label: "Deployment",
      tool: "Docker",
      description:
        "Containerize NLP services for consistent deployment across development and production environments. Serve models with FastAPI, optimize inference latency, and implement batching strategies for high throughput. Docker and API design ensure your language applications scale to serve real users.",
      url: "https://docs.docker.com/",
    },
  ],
};
