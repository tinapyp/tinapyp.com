<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Fathin Afif - Data Scientist Portfolio</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <script src="https://unpkg.com/lucide@latest"></script>
  </head>
  <body class="bg-white text-gray-900">
    <main class="flex min-h-screen flex-col items-center justify-between">
      <!-- Hero Section -->
      <section class="w-full">
        <header class="px-4 lg:px-6 h-14 flex items-center max-w-7xl mx-auto">
          <a class="flex items-center justify-center" href="#">
            <img src="/placeholder.svg" alt="Logo" class="h-8 w-8" />
            <span class="sr-only">Fathin Afif</span>
          </a>
          <nav class="ml-auto flex gap-4 sm:gap-6">
            <a
              class="text-sm font-medium hover:underline underline-offset-4"
              href="#about"
              >About</a
            >
            <a
              class="text-sm font-medium hover:underline underline-offset-4"
              href="#experience"
              >Experience</a
            >
            <a
              class="text-sm font-medium hover:underline underline-offset-4"
              href="#projects"
              >Projects</a
            >
            <a
              class="text-sm font-medium hover:underline underline-offset-4"
              href="#contact"
              >Contact</a
            >
          </nav>
        </header>
        <div
          class="container px-4 md:px-6 py-12 md:py-24 lg:py-32 max-w-5xl mx-auto"
        >
          <div
            class="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 items-center"
          >
            <div class="flex flex-col justify-center space-y-4">
              <div class="space-y-2">
                <h1
                  class="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                >
                  Hi, I'm<br />Fathin Afif
                </h1>
                <p class="max-w-[600px] text-gray-500 md:text-xl">
                  I'm a Data Scientist with a strong foundation in Machine
                  Learning and Data Analysis, dedicated to transforming complex
                  data into actionable insights
                </p>
              </div>
              <div class="flex flex-wrap gap-2">
                <span
                  class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10"
                  >Python</span
                >
                <span
                  class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10"
                  >TensorFlow</span
                >
                <span
                  class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10"
                  >PyTorch</span
                >
                <span
                  class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10"
                  >Scikit-learn</span
                >
                <span
                  class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10"
                  >Pandas</span
                >
              </div>
              <div class="flex gap-6">
                <div>
                  <div class="text-3xl font-bold">15+</div>
                  <div class="text-sm text-gray-500">Projects Built</div>
                </div>
                <div>
                  <div class="text-3xl font-bold">5+</div>
                  <div class="text-sm text-gray-500">Publications</div>
                </div>
              </div>
              <div class="flex flex-col gap-2 min-[400px]:flex-row">
                <a
                  href="#"
                  class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4"
                >
                  <i data-lucide="github" class="w-5 h-5 mr-2"></i>
                  View GitHub
                </a>
                <a
                  href="#contact"
                  class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4"
                >
                  <i data-lucide="mail" class="w-5 h-5 mr-2"></i>
                  Contact Me
                </a>
              </div>
            </div>
            <div class="flex items-center justify-center">
              <div class="relative w-[400px] h-[400px]">
                <img
                  src="/placeholder.svg"
                  alt="Brand Logo"
                  class="object-contain w-full h-full"
                />
                <div
                  class="absolute bottom-4 right-4 rounded-lg bg-white px-4 py-2 shadow-lg"
                >
                  <div class="text-sm font-medium">5+ years of experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- About Section -->
      <section id="about" class="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div class="container px-4 md:px-6 max-w-5xl mx-auto">
          <h2
            class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8"
          >
            About Me
          </h2>
          <div class="grid gap-10 lg:gap-12 md:grid-cols-[1fr,400px]">
            <div class="space-y-8">
              <p class="text-gray-500 text-lg leading-relaxed">
                I'm a passionate Data Scientist with expertise in developing and
                implementing advanced machine learning solutions that drive
                business value. With a strong foundation in statistical analysis
                and predictive modeling, I specialize in transforming complex
                datasets into actionable insights. My approach combines rigorous
                mathematical methodology with practical business acumen to
                deliver innovative solutions in machine learning, deep learning,
                and natural language processing. I'm particularly interested in
                developing scalable AI solutions that can make a real impact
                across industries.
              </p>
              <div class="grid grid-cols-3 gap-4 md:gap-8">
                <div
                  class="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm"
                >
                  <i
                    data-lucide="code-2"
                    class="w-6 h-6 mb-2 text-blue-500"
                  ></i>
                  <div class="text-2xl font-bold">25+</div>
                  <p class="text-sm text-gray-500">ML Models Deployed</p>
                </div>
                <div
                  class="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm"
                >
                  <i data-lucide="users" class="w-6 h-6 mb-2 text-blue-500"></i>
                  <div class="text-2xl font-bold">15+</div>
                  <p class="text-sm text-gray-500">Research Papers</p>
                </div>
                <div
                  class="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm"
                >
                  <i
                    data-lucide="git-fork"
                    class="w-6 h-6 mb-2 text-blue-500"
                  ></i>
                  <div class="text-2xl font-bold">50+</div>
                  <p class="text-sm text-gray-500">Projects Completed</p>
                </div>
              </div>
              <a
                href="#projects"
                class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4"
              >
                View Projects
                <i data-lucide="arrow-right" class="w-4 h-4 ml-2"></i>
              </a>
            </div>
            <div class="space-y-8">
              <div class="space-y-4">
                <div class="flex items-center gap-2">
                  <i data-lucide="code-2" class="w-5 h-5"></i>
                  <h3 class="text-lg font-semibold">Technical Skills</h3>
                </div>
                <div class="flex flex-wrap gap-2">
                  <span
                    class="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600"
                    >Python</span
                  >
                  <span
                    class="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600"
                    >R</span
                  >
                  <span
                    class="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600"
                    >SQL</span
                  >
                  <span
                    class="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600"
                    >Julia</span
                  >
                  <span
                    class="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600"
                    >Scala</span
                  >
                  <span
                    class="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600"
                    >MATLAB</span
                  >
                </div>
              </div>
              <div class="space-y-4">
                <div class="flex items-center gap-2">
                  <i data-lucide="code-2" class="w-5 h-5"></i>
                  <h3 class="text-lg font-semibold">Frameworks & Tools</h3>
                </div>
                <div class="flex flex-wrap gap-2">
                  <span
                    class="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600"
                    >TensorFlow</span
                  >
                  <span
                    class="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600"
                    >PyTorch</span
                  >
                  <span
                    class="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600"
                    >scikit-learn</span
                  >
                  <span
                    class="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600"
                    >Pandas</span
                  >
                  <span
                    class="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600"
                    >NumPy</span
                  >
                  <span
                    class="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600"
                    >Keras</span
                  >
                  <span
                    class="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600"
                    >Apache Spark</span
                  >
                  <span
                    class="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600"
                    >Docker</span
                  >
                  <span
                    class="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600"
                    >AWS</span
                  >
                  <span
                    class="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600"
                    >Azure ML</span
                  >
                  <span
                    class="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600"
                    >Tableau</span
                  >
                  <span
                    class="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600"
                    >Power BI</span
                  >
                </div>
              </div>
              <div class="space-y-4">
                <div class="flex items-center gap-2">
                  <i data-lucide="code-2" class="w-5 h-5"></i>
                  <h3 class="text-lg font-semibold">Expertise</h3>
                </div>
                <div class="flex flex-wrap gap-2">
                  <span
                    class="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600"
                    >Machine Learning</span
                  >
                  <span
                    class="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600"
                    >Deep Learning</span
                  >
                  <span
                    class="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600"
                    >NLP</span
                  >
                  <span
                    class="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600"
                    >Computer Vision</span
                  >
                  <span
                    class="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600"
                    >Time Series Analysis</span
                  >
                  <span
                    class="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600"
                    >Statistical Analysis</span
                  >
                  <span
                    class="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600"
                    >Big Data</span
                  >
                  <span
                    class="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600"
                    >Data Visualization</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Projects Section -->
      <section id="projects" class="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div class="container px-4 md:px-6 max-w-5xl mx-auto">
          <h2
            class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8"
          >
            Featured Projects
          </h2>
          <p class="text-center text-gray-500 mb-12">
            Some of my notable projects and personal works.
          </p>
          <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div class="flex-shrink-0">
                <img
                  class="h-48 w-full object-cover"
                  src="/placeholder.svg"
                  alt="AI-Powered Customer Segmentation"
                />
              </div>
              <div class="flex flex-1 flex-col justify-between bg-white p-6">
                <div class="flex-1">
                  <h3 class="text-xl font-semibold text-gray-900">
                    AI-Powered Customer Segmentation
                  </h3>
                  <p class="mt-3 text-base text-gray-500">
                    Developed a machine learning model to segment customers
                    based on their purchasing behavior, demographics, and
                    interactions, resulting in a 25% increase in targeted
                    marketing efficiency.
                  </p>
                </div>
                <div class="mt-6 flex items-center">
                  <div class="flex-shrink-0">
                    <span
                      class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10"
                      >Python</span
                    >
                    <span
                      class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10"
                      >Scikit-learn</span
                    >
                    <span
                      class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10"
                      >Pandas</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div class="flex-shrink-0">
                <img
                  class="h-48 w-full object-cover"
                  src="/placeholder.svg"
                  alt="Predictive Maintenance System"
                />
              </div>
              <div class="flex flex-1 flex-col justify-between bg-white p-6">
                <div class="flex-1">
                  <h3 class="text-xl font-semibold text-gray-900">
                    Predictive Maintenance System
                  </h3>
                  <p class="mt-3 text-base text-gray-500">
                    Built a deep learning model to predict equipment failures in
                    manufacturing plants, reducing downtime by 15% and
                    maintenance costs by 20%.
                  </p>
                </div>
                <div class="mt-6 flex items-center">
                  <div class="flex-shrink-0">
                    <span
                      class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10"
                      >TensorFlow</span
                    >
                    <span
                      class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10"
                      >Keras</span
                    >
                    <span
                      class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10"
                      >Docker</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div class="flex-shrink-0">
                <img
                  class="h-48 w-full object-cover"
                  src="/placeholder.svg"
                  alt="NLP-Based Sentiment Analysis Tool"
                />
              </div>
              <div class="flex flex-1 flex-col justify-between bg-white p-6">
                <div class="flex-1">
                  <h3 class="text-xl font-semibold text-gray-900">
                    NLP-Based Sentiment Analysis Tool
                  </h3>
                  <p class="mt-3 text-base text-gray-500">
                    Created a sentiment analysis tool using natural language
                    processing to analyze customer feedback, improving product
                    development decisions and increasing customer satisfaction
                    by 18%.
                  </p>
                </div>
                <div class="mt-6 flex items-center">
                  <div class="flex-shrink-0">
                    <span
                      class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10"
                      >PyTorch</span
                    >
                    <span
                      class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10"
                      >NLTK</span
                    >
                    <span
                      class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10"
                      >FastAPI</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Experience Section -->
      <section
        id="experience"
        class="w-full py-12 md:py-24 lg:py-32 bg-gray-50"
      >
        <div class="container px-4 md:px-6 max-w-5xl mx-auto">
          <h2
            class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8"
          >
            Work Experience
          </h2>
          <div class="relative">
            <div class="absolute left-0 top-0 h-full w-0.5 bg-gray-200"></div>
            <div class="space-y-12">
              <div class="relative pl-8">
                <div
                  class="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full border-4 border-white -translate-x-1/2"
                ></div>
                <div class="bg-white rounded-lg shadow-lg p-6">
                  <div class="space-y-2">
                    <div
                      class="flex items-center justify-between flex-wrap gap-2"
                    >
                      <h3 class="font-semibold text-xl">
                        Machine Learning Engineer
                      </h3>
                      <span
                        class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10"
                        >Freelance</span
                      >
                    </div>
                    <div class="flex items-center text-sm text-gray-500">
                      <i data-lucide="calendar" class="w-4 h-4 mr-2"></i>
                      Feb 2024 - Present
                    </div>
                    <div class="prose prose-gray max-w-none">
                      <ul class="list-disc pl-4 mt-4 space-y-2">
                        <li>
                          Developed and deployed machine learning models for
                          various client projects
                        </li>
                        <li>
                          Implemented data preprocessing pipelines and feature
                          engineering techniques
                        </li>
                        <li>
                          Created predictive models using advanced ML algorithms
                        </li>
                        <li>
                          Optimized model performance and provided detailed
                          documentation
                        </li>
                      </ul>
                    </div>
                    <div class="flex flex-wrap gap-2 mt-4">
                      <span
                        class="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600"
                        >TensorFlow</span
                      >
                      <span
                        class="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600"
                        >PyTorch</span
                      >
                      <span
                        class="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600"
                        >scikit-learn</span
                      >
                      <span
                        class="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600"
                        >Python</span
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="relative pl-8">
                <div
                  class="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full border-4 border-white -translate-x-1/2"
                ></div>
                <div class="bg-white rounded-lg shadow-lg p-6">
                  <div class="space-y-2">
                    <div
                      class="flex items-center justify-between flex-wrap gap-2"
                    >
                      <h3 class="font-semibold text-xl">Data Analyst</h3>
                      <div class="flex items-center gap-2">
                        <i data-lucide="building-2" class="w-4 h-4"></i>
                        <span class="font-medium">Sejasa.com</span>
                      </div>
                    </div>
                    <div class="flex items-center text-sm text-gray-500">
                      <i data-lucide="calendar" class="w-4 h-4 mr-2"></i>
                      Aug 2023 - Present
                    </div>
                    <div class="prose prose-gray max-w-none">
                      <ul class="list-disc pl-4 mt-4 space-y-2">
                        <li>
                          Analyzed complex datasets to identify trends and
                          patterns
                        </li>
                        <li>
                          Created comprehensive dashboards and reports for
                          stakeholders
                        </li>
                        <li>
                          Implemented data quality measures and automated
                          reporting processes
                        </li>
                        <li>
                          Collaborated with cross-functional teams to drive
                          data-informed decisions
                        </li>
                      </ul>
                    </div>
                    <div class="flex flex-wrap gap-2 mt-4">
                      <span
                        class="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600"
                        >SQL</span
                      >
                      <span
                        class="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600"
                        >Python</span
                      >
                      <span
                        class="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600"
                        >Tableau</span
                      >
                      <span
                        class="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600"
                        >Excel</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Hire Me Section -->
      <section class="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div class="container px-4 md:px-6 max-w-5xl mx-auto">
          <div class="rounded-[2rem] bg-gray-950 px-8 py-14 md:px-12 lg:px-16">
            <div
              class="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center"
            >
              <div class="space-y-2">
                <h2 class="text-2xl font-bold text-white sm:text-3xl">
                  Have a project in mind?
                </h2>
                <p class="text-gray-400 max-w-[600px]">
                  Let's work together to bring your ideas to life. I'm ready for
                  new challenges!
                </p>
              </div>
              <a
                href="#contact"
                class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-white text-gray-900 hover:bg-gray-100 h-10 py-2 px-4"
              >
                Let's Collaborate
                <i data-lucide="arrow-up-right" class="w-4 h-4 ml-2"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section id="contact" class="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div class="container px-4 md:px-6 max-w-5xl mx-auto">
          <div
            class="flex flex-col items-center justify-center space-y-4 text-center"
          >
            <h2
              class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
            >
              Get in Touch
            </h2>
            <p class="max-w-[600px] text-gray-500 md:text-xl">
              Have a project in mind or want to collaborate? Feel free to reach
              out!
            </p>
          </div>
          <div
            class="mx-auto max-w-6xl grid gap-6 md:grid-cols-2 lg:gap-12 mt-8"
          >
            <div class="space-y-8">
              <div>
                <h3 class="text-xl font-bold">Contact Details</h3>
                <div class="flex items-center mt-4 gap-4">
                  <div
                    class="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100"
                  >
                    <i data-lucide="mail" class="w-5 h-5"></i>
                  </div>
                  <a
                    href="mailto:fathinafif@gmail.com"
                    class="text-gray-500 hover:text-gray-900"
                  >
                    fathinafif@gmail.com
                  </a>
                </div>
              </div>
              <div>
                <h3 class="text-xl font-bold">Connect With Me</h3>
                <div class="flex gap-4 mt-4">
                  <a
                    href="#"
                    class="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200"
                  >
                    <i data-lucide="linkedin" class="w-5 h-5"></i>
                    <span class="sr-only">LinkedIn</span>
                  </a>
                  <a
                    href="#"
                    class="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200"
                  >
                    <i data-lucide="twitter" class="w-5 h-5"></i>
                    <span class="sr-only">Twitter</span>
                  </a>
                  <a
                    href="#"
                    class="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200"
                  >
                    <i data-lucide="github" class="w-5 h-5"></i>
                    <span class="sr-only">GitHub</span>
                  </a>
                  <a
                    href="#"
                    class="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200"
                  >
                    <i data-lucide="youtube" class="w-5 h-5"></i>
                    <span class="sr-only">YouTube</span>
                  </a>
                </div>
                <p class="mt-4 text-sm text-gray-500">
                  I typically respond within 24 hours. For urgent matters,
                  please mention it in the message.
                </p>
              </div>
            </div>
            <div class="bg-white rounded-lg shadow-lg p-6">
              <form class="space-y-4">
                <div class="grid gap-4 sm:grid-cols-2">
                  <div class="space-y-2">
                    <label
                      for="name"
                      class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >Name</label
                    >
                    <input
                      type="text"
                      id="name"
                      placeholder="John Doe"
                      required
                      class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                  <div class="space-y-2">
                    <label
                      for="email"
                      class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >Email</label
                    >
                    <input
                      type="email"
                      id="email"
                      placeholder="john@example.com"
                      required
                      class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                </div>
                <div class="space-y-2">
                  <label
                    for="message"
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >Message</label
                  >
                  <textarea
                    id="message"
                    placeholder="Your message here..."
                    required
                    class="flex min-h-[150px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4 w-full"
                >
                  Send Message
                  <i data-lucide="send" class="w-4 h-4 ml-2"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="bg-gray-800 text-white py-8">
      <div class="container mx-auto px-6 text-center">
        <p>&copy; 2024 Fathin Afif. All rights reserved.</p>
      </div>
    </footer>

    <script src={{ url_for('static', path='js/main.js') }}"></script>

  </body>
</html>
