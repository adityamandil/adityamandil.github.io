// AI Tools Database
const aiToolsDatabase = [
    // Content Creation & Writing
    {
        name: "ChatGPT",
        description: "Advanced AI chatbot for conversations, content writing, coding, and problem-solving",
        category: "Content Creation",
        tags: ["writing", "chatbot", "coding", "general"],
        website: "https://chat.openai.com"
    },
    {
        name: "Jasper AI",
        description: "AI copywriting tool for marketing content, blog posts, and social media",
        category: "Content Creation",
        tags: ["copywriting", "marketing", "blog", "social media"],
        website: "https://www.jasper.ai"
    },
    {
        name: "Copy.ai",
        description: "AI-powered copywriting and content generation tool",
        category: "Content Creation",
        tags: ["copywriting", "content", "marketing"],
        website: "https://www.copy.ai"
    },
    {
        name: "Grammarly",
        description: "AI writing assistant for grammar, spelling, and style corrections",
        category: "Content Creation",
        tags: ["writing", "grammar", "editing"],
        website: "https://www.grammarly.com"
    },
    
    // Image Generation
    {
        name: "Midjourney",
        description: "AI image generation tool creating stunning artwork from text descriptions",
        category: "Image Generation",
        tags: ["image", "art", "design", "creative"],
        website: "https://www.midjourney.com"
    },
    {
        name: "DALL-E 3",
        description: "OpenAI's advanced image generation model for creating unique images",
        category: "Image Generation",
        tags: ["image", "art", "design", "creative"],
        website: "https://openai.com/dall-e-3"
    },
    {
        name: "Stable Diffusion",
        description: "Open-source AI image generator for creating detailed images",
        category: "Image Generation",
        tags: ["image", "art", "design", "open-source"],
        website: "https://stability.ai"
    },
    {
        name: "Canva AI",
        description: "AI-powered design platform with image generation and editing",
        category: "Image Generation",
        tags: ["design", "image", "graphics", "templates"],
        website: "https://www.canva.com"
    },
    
    // Video Creation
    {
        name: "Runway ML",
        description: "AI video editing and generation tool for content creators",
        category: "Video Creation",
        tags: ["video", "editing", "generation", "creative"],
        website: "https://runwayml.com"
    },
    {
        name: "Synthesia",
        description: "AI video generation platform with virtual presenters",
        category: "Video Creation",
        tags: ["video", "avatar", "presentation"],
        website: "https://www.synthesia.io"
    },
    {
        name: "Descript",
        description: "AI-powered video and podcast editing tool",
        category: "Video Creation",
        tags: ["video", "podcast", "editing", "transcription"],
        website: "https://www.descript.com"
    },
    
    // Code & Development
    {
        name: "GitHub Copilot",
        description: "AI pair programmer that helps write code faster",
        category: "Development",
        tags: ["coding", "programming", "development"],
        website: "https://github.com/features/copilot"
    },
    {
        name: "Cursor",
        description: "AI-powered code editor built for productivity",
        category: "Development",
        tags: ["coding", "IDE", "development"],
        website: "https://cursor.sh"
    },
    {
        name: "Replit AI",
        description: "AI-powered collaborative coding platform",
        category: "Development",
        tags: ["coding", "collaboration", "development"],
        website: "https://replit.com"
    },
    
    // Business & Productivity
    {
        name: "Notion AI",
        description: "AI assistant integrated into Notion for writing and productivity",
        category: "Productivity",
        tags: ["productivity", "notes", "writing", "organization"],
        website: "https://www.notion.so/product/ai"
    },
    {
        name: "Otter.ai",
        description: "AI meeting transcription and note-taking assistant",
        category: "Productivity",
        tags: ["transcription", "meetings", "notes"],
        website: "https://otter.ai"
    },
    {
        name: "Fireflies.ai",
        description: "AI notetaker for meetings and conversations",
        category: "Productivity",
        tags: ["transcription", "meetings", "notes"],
        website: "https://fireflies.ai"
    },
    
    // Marketing & SEO
    {
        name: "Surfer SEO",
        description: "AI-powered SEO optimization and content planning tool",
        category: "Marketing",
        tags: ["SEO", "content", "optimization", "marketing"],
        website: "https://surferseo.com"
    },
    {
        name: "MarketMuse",
        description: "AI content strategy and optimization platform",
        category: "Marketing",
        tags: ["SEO", "content strategy", "marketing"],
        website: "https://www.marketmuse.com"
    },
    {
        name: "Lately AI",
        description: "AI social media content generator and calendar",
        category: "Marketing",
        tags: ["social media", "content", "marketing"],
        website: "https://www.lately.ai"
    },
    
    // Customer Service
    {
        name: "Intercom AI",
        description: "AI-powered customer service and chatbot platform",
        category: "Customer Service",
        tags: ["chatbot", "customer service", "support"],
        website: "https://www.intercom.com"
    },
    {
        name: "Zendesk AI",
        description: "AI customer support and ticketing system",
        category: "Customer Service",
        tags: ["support", "tickets", "customer service"],
        website: "https://www.zendesk.com"
    },
    
    // Audio & Voice
    {
        name: "ElevenLabs",
        description: "AI voice generation and text-to-speech platform",
        category: "Audio",
        tags: ["voice", "speech", "audio", "TTS"],
        website: "https://elevenlabs.io"
    },
    {
        name: "Murf AI",
        description: "AI voice generator for voiceovers and narration",
        category: "Audio",
        tags: ["voice", "voiceover", "narration"],
        website: "https://murf.ai"
    },
    {
        name: "Adobe Podcast",
        description: "AI-powered audio recording and editing tool",
        category: "Audio",
        tags: ["podcast", "audio", "editing"],
        website: "https://podcast.adobe.com"
    },
    
    // Research & Analysis
    {
        name: "Perplexity AI",
        description: "AI-powered search engine and research assistant",
        category: "Research",
        tags: ["search", "research", "information"],
        website: "https://www.perplexity.ai"
    },
    {
        name: "Consensus",
        description: "AI-powered academic research and paper search",
        category: "Research",
        tags: ["research", "academic", "papers"],
        website: "https://consensus.app"
    },
    {
        name: "Elicit",
        description: "AI research assistant for literature review",
        category: "Research",
        tags: ["research", "academic", "literature"],
        website: "https://elicit.org"
    },
    
    // Data & Analytics
    {
        name: "Julius AI",
        description: "AI data analyst for analyzing and visualizing data",
        category: "Analytics",
        tags: ["data", "analytics", "visualization"],
        website: "https://julius.ai"
    },
    {
        name: "Tableau AI",
        description: "AI-powered business intelligence and analytics",
        category: "Analytics",
        tags: ["data", "analytics", "business intelligence"],
        website: "https://www.tableau.com"
    },
    
    // Design & Creative
    {
        name: "Adobe Firefly",
        description: "Adobe's AI image generation and editing tool",
        category: "Design",
        tags: ["image", "design", "creative", "editing"],
        website: "https://www.adobe.com/products/firefly.html"
    },
    {
        name: "Figma AI",
        description: "AI-powered design features in Figma",
        category: "Design",
        tags: ["design", "UI", "UX", "prototyping"],
        website: "https://www.figma.com"
    },
    {
        name: "Uizard",
        description: "AI-powered UI design and prototyping tool",
        category: "Design",
        tags: ["UI", "design", "prototyping"],
        website: "https://uizard.io"
    },
    
    // Email & Communication
    {
        name: "Superhuman AI",
        description: "AI-powered email client for productivity",
        category: "Email",
        tags: ["email", "productivity", "communication"],
        website: "https://superhuman.com"
    },
    {
        name: "Lavender AI",
        description: "AI email writing assistant for sales teams",
        category: "Email",
        tags: ["email", "sales", "writing"],
        website: "https://www.lavender.ai"
    },
    
    // Translation
    {
        name: "DeepL",
        description: "AI-powered translation tool with high accuracy",
        category: "Translation",
        tags: ["translation", "language", "multilingual"],
        website: "https://www.deepl.com"
    },
    {
        name: "Google Translate AI",
        description: "Google's AI translation service",
        category: "Translation",
        tags: ["translation", "language", "multilingual"],
        website: "https://translate.google.com"
    },
    
    // HR & Recruitment
    {
        name: "HireVue",
        description: "AI-powered video interviewing and assessment",
        category: "HR & Recruitment",
        tags: ["recruitment", "hiring", "interviews"],
        website: "https://www.hirevue.com"
    },
    {
        name: "Paradox AI",
        description: "AI recruiting assistant and chatbot",
        category: "HR & Recruitment",
        tags: ["recruitment", "hiring", "chatbot"],
        website: "https://www.paradox.ai"
    },
    
    // Legal
    {
        name: "Harvey AI",
        description: "AI legal assistant for research and document analysis",
        category: "Legal",
        tags: ["legal", "research", "documents"],
        website: "https://www.harvey.ai"
    },
    {
        name: "DoNotPay",
        description: "AI consumer advocacy and legal assistance",
        category: "Legal",
        tags: ["legal", "consumer", "assistance"],
        website: "https://donotpay.com"
    },
    
    // Finance
    {
        name: "Kensho",
        description: "AI analytics for financial markets",
        category: "Finance",
        tags: ["finance", "analytics", "markets"],
        website: "https://www.kensho.com"
    },
    {
        name: "Plaid AI",
        description: "AI-powered financial data and insights",
        category: "Finance",
        tags: ["finance", "data", "banking"],
        website: "https://plaid.com"
    },
    
    // Education
    {
        name: "Khan Academy AI",
        description: "AI tutor for personalized learning",
        category: "Education",
        tags: ["education", "learning", "tutoring"],
        website: "https://www.khanacademy.org"
    },
    {
        name: "Duolingo AI",
        description: "AI-powered language learning platform",
        category: "Education",
        tags: ["education", "language", "learning"],
        website: "https://www.duolingo.com"
    },
    {
        name: "Quizlet AI",
        description: "AI study tools and flashcards",
        category: "Education",
        tags: ["education", "studying", "flashcards"],
        website: "https://quizlet.com"
    },
    
    // Healthcare
    {
        name: "Ada Health",
        description: "AI symptom checker and health assessment",
        category: "Healthcare",
        tags: ["healthcare", "symptoms", "medical"],
        website: "https://ada.com"
    },
    {
        name: "Babylon Health",
        description: "AI-powered healthcare consultation",
        category: "Healthcare",
        tags: ["healthcare", "consultation", "medical"],
        website: "https://www.babylonhealth.com"
    },
    
    // Presentations
    {
        name: "Beautiful.ai",
        description: "AI-powered presentation maker with smart templates",
        category: "Presentations",
        tags: ["presentations", "slides", "design", "business"],
        website: "https://www.beautiful.ai"
    },
    {
        name: "Tome",
        description: "AI storytelling platform for presentations and narratives",
        category: "Presentations",
        tags: ["presentations", "storytelling", "slides", "AI generation"],
        website: "https://tome.app"
    },
    {
        name: "Gamma",
        description: "AI presentation creator - write and design presentations instantly",
        category: "Presentations",
        tags: ["presentations", "slides", "design", "AI writing"],
        website: "https://gamma.app"
    },
    {
        name: "Slidesgo AI",
        description: "AI-powered presentation templates and slide generator",
        category: "Presentations",
        tags: ["presentations", "templates", "slides", "design"],
        website: "https://slidesgo.com"
    },
    {
        name: "Pitch",
        description: "AI-enhanced collaborative presentation software",
        category: "Presentations",
        tags: ["presentations", "collaboration", "team", "design"],
        website: "https://pitch.com"
    },
    {
        name: "Presentations.AI",
        description: "Create stunning presentations with AI in seconds",
        category: "Presentations",
        tags: ["presentations", "AI generation", "slides", "quick"],
        website: "https://www.presentations.ai"
    },
    {
        name: "Decktopus",
        description: "AI presentation generator with smart layouts",
        category: "Presentations",
        tags: ["presentations", "slides", "templates", "business"],
        website: "https://www.decktopus.com"
    },
    
    // Writing Assistant
    {
        name: "Wordtune",
        description: "AI writing companion for rewriting and rephrasing",
        category: "Writing Assistant",
        tags: ["writing", "rewriting", "grammar", "paraphrasing"],
        website: "https://www.wordtune.com"
    },
    {
        name: "ProWritingAid",
        description: "AI writing assistant with grammar and style checking",
        category: "Writing Assistant",
        tags: ["writing", "grammar", "editing", "style"],
        website: "https://prowritingaid.com"
    },
    {
        name: "Hemingway Editor",
        description: "AI tool to make your writing bold and clear",
        category: "Writing Assistant",
        tags: ["writing", "editing", "clarity", "readability"],
        website: "https://hemingwayapp.com"
    },
    {
        name: "QuillBot",
        description: "AI paraphrasing and summarizing tool",
        category: "Writing Assistant",
        tags: ["paraphrasing", "summarizing", "writing", "rewriting"],
        website: "https://quillbot.com"
    },
    {
        name: "Rytr",
        description: "AI writing assistant for content creation",
        category: "Writing Assistant",
        tags: ["writing", "content creation", "copywriting"],
        website: "https://rytr.me"
    },
    
    // Video Editing
    {
        name: "Pictory",
        description: "AI video creation from text and articles",
        category: "Video Editing",
        tags: ["video", "editing", "text-to-video", "content"],
        website: "https://pictory.ai"
    },
    {
        name: "InVideo AI",
        description: "AI video editor with templates and automated editing",
        category: "Video Editing",
        tags: ["video", "editing", "templates", "automation"],
        website: "https://invideo.io"
    },
    {
        name: "Kapwing",
        description: "AI-powered video editing platform",
        category: "Video Editing",
        tags: ["video", "editing", "collaboration", "online"],
        website: "https://www.kapwing.com"
    },
    {
        name: "Lumen5",
        description: "AI video creation platform for social media",
        category: "Video Editing",
        tags: ["video", "social media", "content", "automation"],
        website: "https://lumen5.com"
    },
    {
        name: "Veed.io",
        description: "AI video editor with subtitles and effects",
        category: "Video Editing",
        tags: ["video", "editing", "subtitles", "effects"],
        website: "https://www.veed.io"
    },
    
    // Data Visualization
    {
        name: "Plotly",
        description: "AI-powered data visualization and analytics",
        category: "Data Visualization",
        tags: ["data", "visualization", "charts", "analytics"],
        website: "https://plotly.com"
    },
    {
        name: "DataRobot",
        description: "AI platform for automated machine learning and analytics",
        category: "Data Visualization",
        tags: ["data", "machine learning", "analytics", "automation"],
        website: "https://www.datarobot.com"
    },
    {
        name: "Polymer",
        description: "AI-powered spreadsheet analysis and visualization",
        category: "Data Visualization",
        tags: ["data", "spreadsheet", "visualization", "analysis"],
        website: "https://www.polymersearch.com"
    },
    
    // Meeting & Collaboration
    {
        name: "Fathom",
        description: "AI meeting assistant that records and summarizes",
        category: "Meeting Tools",
        tags: ["meetings", "recording", "transcription", "notes"],
        website: "https://fathom.video"
    },
    {
        name: "Sembly AI",
        description: "AI team assistant for meetings and notes",
        category: "Meeting Tools",
        tags: ["meetings", "notes", "transcription", "team"],
        website: "https://www.sembly.ai"
    },
    {
        name: "Tactiq",
        description: "AI meeting transcription for Google Meet and Zoom",
        category: "Meeting Tools",
        tags: ["transcription", "meetings", "notes", "zoom"],
        website: "https://tactiq.io"
    },
    {
        name: "Krisp",
        description: "AI noise cancellation for calls and meetings",
        category: "Meeting Tools",
        tags: ["meetings", "audio", "noise cancellation", "calls"],
        website: "https://krisp.ai"
    },
    
    // Writing & Blogging
    {
        name: "Writesonic",
        description: "AI writer for articles, blogs, and ads",
        category: "Blogging",
        tags: ["writing", "blogging", "content", "articles"],
        website: "https://writesonic.com"
    },
    {
        name: "ArticleForge",
        description: "AI content generator for blog articles",
        category: "Blogging",
        tags: ["blogging", "content", "articles", "SEO"],
        website: "https://www.articleforge.com"
    },
    {
        name: "Frase",
        description: "AI content optimization and research tool",
        category: "Blogging",
        tags: ["SEO", "content", "research", "optimization"],
        website: "https://www.frase.io"
    },
    {
        name: "ContentBot",
        description: "AI writer for blog content and automation",
        category: "Blogging",
        tags: ["blogging", "content", "automation", "writing"],
        website: "https://contentbot.ai"
    },
    
    // Image Editing
    {
        name: "Photoshop AI",
        description: "Adobe's AI-powered image editing features",
        category: "Image Editing",
        tags: ["image", "editing", "photo", "design"],
        website: "https://www.adobe.com/products/photoshop.html"
    },
    {
        name: "Remove.bg",
        description: "AI background remover for images",
        category: "Image Editing",
        tags: ["image", "background removal", "editing", "photo"],
        website: "https://www.remove.bg"
    },
    {
        name: "Topaz Labs",
        description: "AI photo enhancement and upscaling",
        category: "Image Editing",
        tags: ["image", "enhancement", "upscaling", "photo"],
        website: "https://www.topazlabs.com"
    },
    {
        name: "Let's Enhance",
        description: "AI image upscaler and quality enhancer",
        category: "Image Editing",
        tags: ["image", "upscaling", "enhancement", "quality"],
        website: "https://letsenhance.io"
    },
    {
        name: "Clipdrop",
        description: "AI-powered image editing and creation tools",
        category: "Image Editing",
        tags: ["image", "editing", "creation", "AI tools"],
        website: "https://clipdrop.co"
    },
    {
        name: "Cleanup.pictures",
        description: "AI tool to remove objects from photos",
        category: "Image Editing",
        tags: ["image", "editing", "object removal", "photo"],
        website: "https://cleanup.pictures"
    },
    
    // Social Media Management
    {
        name: "Hootsuite AI",
        description: "AI-powered social media management platform",
        category: "Social Media",
        tags: ["social media", "scheduling", "management", "analytics"],
        website: "https://www.hootsuite.com"
    },
    {
        name: "Buffer AI",
        description: "AI social media scheduling and analytics",
        category: "Social Media",
        tags: ["social media", "scheduling", "analytics", "content"],
        website: "https://buffer.com"
    },
    {
        name: "Predis.ai",
        description: "AI social media content creator",
        category: "Social Media",
        tags: ["social media", "content creation", "posts", "AI"],
        website: "https://predis.ai"
    },
    {
        name: "Ocoya",
        description: "AI social media content creation and scheduling",
        category: "Social Media",
        tags: ["social media", "content", "scheduling", "graphics"],
        website: "https://www.ocoya.com"
    },
    
    // Music & Audio Creation
    {
        name: "Soundraw",
        description: "AI music generator for creators",
        category: "Music Creation",
        tags: ["music", "audio", "generation", "royalty-free"],
        website: "https://soundraw.io"
    },
    {
        name: "AIVA",
        description: "AI music composition for soundtracks",
        category: "Music Creation",
        tags: ["music", "composition", "soundtrack", "AI"],
        website: "https://www.aiva.ai"
    },
    {
        name: "Boomy",
        description: "AI music maker - create songs instantly",
        category: "Music Creation",
        tags: ["music", "creation", "songs", "instant"],
        website: "https://boomy.com"
    },
    {
        name: "Beatoven.ai",
        description: "AI music generator for videos and podcasts",
        category: "Music Creation",
        tags: ["music", "video", "podcast", "background music"],
        website: "https://www.beatoven.ai"
    },
    {
        name: "Descript Overdub",
        description: "AI voice cloning for audio editing",
        category: "Music Creation",
        tags: ["voice", "audio", "cloning", "editing"],
        website: "https://www.descript.com/overdub"
    },
    
    // Chatbots & Conversational AI
    {
        name: "ManyChat",
        description: "AI chatbot builder for marketing automation",
        category: "Chatbots",
        tags: ["chatbot", "marketing", "automation", "messenger"],
        website: "https://manychat.com"
    },
    {
        name: "Tidio",
        description: "AI chatbot for customer service",
        category: "Chatbots",
        tags: ["chatbot", "customer service", "live chat", "support"],
        website: "https://www.tidio.com"
    },
    {
        name: "Drift",
        description: "AI conversational marketing platform",
        category: "Chatbots",
        tags: ["chatbot", "conversational", "marketing", "sales"],
        website: "https://www.drift.com"
    },
    {
        name: "Ada",
        description: "AI customer service automation platform",
        category: "Chatbots",
        tags: ["chatbot", "customer service", "automation", "support"],
        website: "https://www.ada.cx"
    },
    {
        name: "Landbot",
        description: "No-code chatbot builder with AI",
        category: "Chatbots",
        tags: ["chatbot", "no-code", "builder", "conversational"],
        website: "https://landbot.io"
    },
    
    // E-commerce
    {
        name: "Shopify Magic",
        description: "AI tools for e-commerce and online stores",
        category: "E-commerce",
        tags: ["ecommerce", "online store", "product descriptions", "AI"],
        website: "https://www.shopify.com"
    },
    {
        name: "Clerk.io",
        description: "AI personalization for e-commerce",
        category: "E-commerce",
        tags: ["ecommerce", "personalization", "recommendations", "AI"],
        website: "https://clerk.io"
    },
    {
        name: "Vue.ai",
        description: "AI for e-commerce product recommendations",
        category: "E-commerce",
        tags: ["ecommerce", "recommendations", "personalization", "retail"],
        website: "https://vue.ai"
    },
    
    // Summarization
    {
        name: "TLDR This",
        description: "AI text summarization tool",
        category: "Summarization",
        tags: ["summarization", "reading", "text", "articles"],
        website: "https://tldrthis.com"
    },
    {
        name: "Summari",
        description: "AI-powered text and article summarizer",
        category: "Summarization",
        tags: ["summarization", "articles", "text", "reading"],
        website: "https://www.summari.com"
    },
    {
        name: "Scholarcy",
        description: "AI research paper summarizer",
        category: "Summarization",
        tags: ["summarization", "research", "academic", "papers"],
        website: "https://www.scholarcy.com"
    },
    
    // Website Builders
    {
        name: "Wix ADI",
        description: "AI website builder with design intelligence",
        category: "Website Builders",
        tags: ["website", "builder", "design", "no-code"],
        website: "https://www.wix.com"
    },
    {
        name: "Durable",
        description: "AI website builder - build a site in 30 seconds",
        category: "Website Builders",
        tags: ["website", "builder", "fast", "AI generation"],
        website: "https://durable.co"
    },
    {
        name: "10Web",
        description: "AI WordPress website builder and hosting",
        category: "Website Builders",
        tags: ["website", "wordpress", "builder", "hosting"],
        website: "https://10web.io"
    },
    {
        name: "Framer AI",
        description: "AI-powered website design and prototyping",
        category: "Website Builders",
        tags: ["website", "design", "prototyping", "no-code"],
        website: "https://www.framer.com"
    },
    
    // Logo & Branding
    {
        name: "Looka",
        description: "AI logo maker and brand identity designer",
        category: "Logo & Branding",
        tags: ["logo", "branding", "design", "identity"],
        website: "https://looka.com"
    },
    {
        name: "Brandmark",
        description: "AI logo design and branding tool",
        category: "Logo & Branding",
        tags: ["logo", "branding", "design", "AI generation"],
        website: "https://brandmark.io"
    },
    {
        name: "Namelix",
        description: "AI business name generator",
        category: "Logo & Branding",
        tags: ["naming", "business", "branding", "generator"],
        website: "https://namelix.com"
    },
    {
        name: "Designs.ai",
        description: "AI creative suite for logos, videos, and more",
        category: "Logo & Branding",
        tags: ["logo", "design", "branding", "creative suite"],
        website: "https://designs.ai"
    },
    
    // Gaming
    {
        name: "Scenario",
        description: "AI-generated game assets and art",
        category: "Gaming",
        tags: ["gaming", "game development", "assets", "art"],
        website: "https://www.scenario.com"
    },
    {
        name: "Ludo AI",
        description: "AI game design and ideation assistant",
        category: "Gaming",
        tags: ["gaming", "game design", "ideation", "development"],
        website: "https://ludo.ai"
    },
    {
        name: "Rosebud AI",
        description: "AI game maker - create games with AI",
        category: "Gaming",
        tags: ["gaming", "game creation", "AI generation", "development"],
        website: "https://www.rosebud.ai"
    },
    
    // 3D & Animation
    {
        name: "Spline AI",
        description: "AI 3D design and animation tool",
        category: "3D & Animation",
        tags: ["3D", "design", "animation", "modeling"],
        website: "https://spline.design"
    },
    {
        name: "Kaedim",
        description: "AI 2D to 3D model generator",
        category: "3D & Animation",
        tags: ["3D", "modeling", "generation", "conversion"],
        website: "https://www.kaedim3d.com"
    },
    {
        name: "Masterpiece Studio",
        description: "AI 3D model generator for creators",
        category: "3D & Animation",
        tags: ["3D", "modeling", "generation", "VR"],
        website: "https://masterpiecestudio.com"
    },
    {
        name: "Runway Gen-2",
        description: "AI video generation and animation",
        category: "3D & Animation",
        tags: ["video", "animation", "generation", "AI"],
        website: "https://runwayml.com/gen-2"
    }
];

// Get unique categories
const categories = [...new Set(aiToolsDatabase.map(tool => tool.category))].sort();

// Search and filter functionality
let currentFilters = {
    searchQuery: '',
    category: 'all'
};

// Initialize AI Directory
function initAIDirectory() {
    renderCategories();
    renderAITools(aiToolsDatabase);
    setupEventListeners();
}

// Render category filters
function renderCategories() {
    const categoryFilter = document.getElementById('categoryFilter');
    if (!categoryFilter) return;
    
    categoryFilter.innerHTML = `
        <option value="all">All Categories</option>
        ${categories.map(cat => `<option value="${cat}">${cat}</option>`).join('')}
    `;
}

// Render AI tools
function renderAITools(tools) {
    const toolsGrid = document.getElementById('aiToolsGrid');
    const resultsCount = document.getElementById('resultsCount');
    
    if (!toolsGrid) return;
    
    if (tools.length === 0) {
        toolsGrid.innerHTML = `
            <div class="no-results">
                <div class="no-results-icon">🔍</div>
                <h3>No AI tools found</h3>
                <p>Try adjusting your search or filters</p>
            </div>
        `;
        if (resultsCount) resultsCount.textContent = '0 AI Tools';
        return;
    }
    
    if (resultsCount) {
        resultsCount.textContent = `${tools.length} AI Tool${tools.length !== 1 ? 's' : ''}`;
    }
    
    toolsGrid.innerHTML = tools.map(tool => `
        <div class="ai-tool-card">
            <div class="tool-header">
                <div class="tool-category-badge">${tool.category}</div>
            </div>
            <h3 class="tool-name">${tool.name}</h3>
            <p class="tool-description">${tool.description}</p>
            <div class="tool-tags">
                ${tool.tags.slice(0, 3).map(tag => `<span class="tool-tag">${tag}</span>`).join('')}
            </div>
            <a href="${tool.website}" target="_blank" rel="noopener noreferrer" class="tool-link">
                Visit Website →
            </a>
        </div>
    `).join('');
}

// Filter tools based on current filters
function filterTools() {
    let filtered = aiToolsDatabase;
    
    // Filter by search query
    if (currentFilters.searchQuery) {
        const query = currentFilters.searchQuery.toLowerCase();
        filtered = filtered.filter(tool => 
            tool.name.toLowerCase().includes(query) ||
            tool.description.toLowerCase().includes(query) ||
            tool.category.toLowerCase().includes(query) ||
            tool.tags.some(tag => tag.toLowerCase().includes(query))
        );
    }
    
    // Filter by category
    if (currentFilters.category !== 'all') {
        filtered = filtered.filter(tool => tool.category === currentFilters.category);
    }
    
    renderAITools(filtered);
}

// Setup event listeners
function setupEventListeners() {
    const searchInput = document.getElementById('aiSearchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    const clearBtn = document.getElementById('clearSearch');
    
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentFilters.searchQuery = e.target.value;
            filterTools();
            
            // Show/hide clear button
            if (clearBtn) {
                clearBtn.style.display = e.target.value ? 'block' : 'none';
            }
        });
    }
    
    if (categoryFilter) {
        categoryFilter.addEventListener('change', (e) => {
            currentFilters.category = e.target.value;
            filterTools();
        });
    }
    
    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            if (searchInput) searchInput.value = '';
            if (categoryFilter) categoryFilter.value = 'all';
            currentFilters = { searchQuery: '', category: 'all' };
            clearBtn.style.display = 'none';
            filterTools();
        });
    }
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAIDirectory);
} else {
    initAIDirectory();
}

