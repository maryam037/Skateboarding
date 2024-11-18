import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Instagram,
  Youtube,
  Twitter,
  BookOpen,
  Award,
  Users,
  Play,
  Star,
  ArrowRight,  Clock,
} from "lucide-react";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const tutorialVideos = [
    {
      title: "How to ride a skateboard",
      difficulty: "Beginner",
      videoUrl: "https://www.youtube.com/embed/P3T_znRTZMQ?si=G2p9M6Tz6jYF_rgN",
      thumbnail: "src/assets/pushing.jpeg", // Add an actual path to the thumbnail image
      description: "Learn the basics of riding a skateboard, including proper stance, pushing, and balance.",
    },
    {
      title: "How to Ollie",
      difficulty: "Intermediate",
      videoUrl: "https://www.youtube.com/embed/7Xc4jNljMPM?si=rfX8aKm1PmIo6SqN",
      thumbnail: "src/assets/ollie.jpeg", // Add an actual path to the thumbnail image
      description: "Master the fundamental skateboard trick - the ollie. Learn technique and practice tips.",
    },
    {
      title: "Kickflip Tutorial",
      difficulty: "Advanced",
      videoUrl: "https://www.youtube.com/embed/kpVhjV-I6nM?si=2zkPAUF3zkNrpylB",
      thumbnail: "src/assets/kick.jpeg", // Add an actual path to the thumbnail image
      description: "Advanced tutorial on performing a perfect kickflip. Break down the technique step by step.",
    },
];
 
 
  const testimonials = [
    {
      name: "Maryam Ashfaq",
      age: 23,
      text: "Here to help you go from complete beginner to landing your first Ollie in just 1 month!",
      image: "src/assets/maryampic.png",
    },
    {
      name: "Arisha Farhan",
      age: 23,
      text: "Cruising is so much easier. Highly recommended!",
      image: "/api/placeholder/64/64",
    },
    {
      name: "Sara Shah",
      age: 20,
      text: "Skateboarding is fun!",
      image: "/api/placeholder/64/64",
    },
  ];

  const skillLevels = [
    {
      level: "Beginner",
      description: "0-3 months experience",
      skills: [
        "Basic pushing",
        "Balance control",
        "Simple turns",
        "Stopping safely",
      ],
      icon: <Users className="w-6 h-6 text-orange-500" />,
    },
    {
      level: "Intermediate",
      description: "3-12 months experience",
      skills: ["Ollie", "180s", "Basic grinds", "Riding switch"],
      icon: <BookOpen className="w-6 h-6 text-orange-500" />,
    },
    {
      level: "Advanced",
      description: "1+ years experience",
      skills: ["Kickflips", "Complex grinds", "Gap jumps", "Technical combos"],
      icon: <Award className="w-6 h-6 text-orange-500" />,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-orange-500 transition-all duration-300 z-50"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Navigation */}
      <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-40 transition-all duration-300">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              MATEX<span className="font-black"> SKATEBOARDING</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {["Home", "Basics", "Guide", "Safety"].map((item) => (
                <button
                  key={item}
                  className="group relative py-2"
                  onClick={() => setActiveSection(item.toLowerCase())}
                >
                  {item}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 transform origin-left transition-transform duration-300 ${
                      activeSection === item.toLowerCase()
                        ? "scale-x-100"
                        : "scale-x-0"
                    } group-hover:scale-x-100`}
                  />
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-screen" : "max-h-0"
          } overflow-hidden`}
        >
          <div className="px-4 py-2 space-y-4 bg-gray-900">
            {["Home", "Basics", "Guide", "Safety"].map((item) => (
              <button
                key={item}
                className="block w-full text-left px-4 py-2 hover:bg-gray-800 rounded"
                onClick={() => {
                  setActiveSection(item.toLowerCase());
                  setIsMenuOpen(false);
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="src/assets/skateboardingbg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 z-10" />

        <div className="relative z-20 max-w-5xl mx-auto flex flex-col items-center mt-12">
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-center">
            MASTER THE <span className="text-orange-500">BOARD</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-center">
            Learn skateboarding with me, Maryam 23 year old who developed
            immense love and passion for skateboarding 3 years ago. Here I
            gather information for us to get better at skateboarding together.{" "}
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105">
            Start Your Journey
          </button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <ChevronDown size={32} />
        </div>
      </section>
      {/* Skateboarding Basics Section */}
{/* Skateboarding Basics Section */}
<section className="py-20 bg-black">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-12">
      Skateboarding <span className="text-orange-500">Basics</span>
    </h2>
    <div className="grid grid-cols-1 gap-8">
      {/* Parts of a Skateboard */}
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl">
        <h3 className="text-3xl font-bold mb-6 text-orange-500 border-b border-gray-700 pb-4">
          Parts of a Skateboard
        </h3>
        <p className="text-gray-300 mb-8 leading-relaxed">
          Understanding your skateboard's components is crucial for both
          riding and maintenance. Each part plays a vital role in how your
          board performs, and knowing these components helps you make
          informed decisions when customizing your setup.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Deck",
              description:
                "The wooden board you stand on, typically made from 7 layers of maple wood. Comes in various widths and shapes for different riding styles.",
              image: "src/assets/decks.JPG",
            },
            {
              title: "Trucks",
              description:
                "Metal axles attached to the deck that allow turning and provide stability. The tightness of trucks affects your turning radius.",
              image: "src/assets/trucks.JPG",
            },
            {
              title: "Wheels",
              description:
                "Urethane wheels come in different sizes and hardness levels. Larger, softer wheels are better for cruising, while smaller, harder wheels are ideal for tricks.",
              image: "src/assets/wheels.JPG",
            },
            {
              title: "Bearings",
              description:
                "Metal components inside the wheels that allow them to spin smoothly. Quality bearings can significantly improve your riding experience.",
              image: "src/assets/bearings.JPG",
            },
            {
              title: "Grip Tape",
              description:
                "Rough, sandpaper-like material applied to the top of the deck for traction. Essential for maintaining control during tricks and regular riding.",
              image: "src/assets/griptape.JPG",
            }
          ].map((part, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <div className="relative">
                <img
                  src={part.image}
                  alt={part.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h4 className="text-2xl font-bold text-white">{part.title}</h4>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-300 text-sm">
                  {part.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Basic Terminology */}
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl">
        <h3 className="text-3xl font-bold mb-6 text-orange-500 border-b border-gray-700 pb-4">
          Basic Terminology
        </h3>
        <p className="text-gray-300 mb-8 leading-relaxed">
          Skateboarding has its own unique language and terminology.
          Understanding these basic terms will help you communicate with
          other skaters and follow tutorials more effectively.
        </p>
        <div className="space-y-6">
          {[
            {
              title: "Stance: Regular vs. Goofy",
              description:
                "Your stance determines which foot leads on the board. Regular riders lead with their left foot, while goofy riders lead with their right. Neither is better - it's all about what feels natural to you.",
              image: "src/assets/stance.JPG",
              videoLink: "https://youtu.be/EbLJ9ypcHRE?feature=shared",
            },
            {
              title: "Pushing: How to Propel Yourself",
              description:
                "The fundamental motion of skateboarding involves keeping your front foot on the board while pushing with your back foot. Learning to push smoothly and maintain balance is your first key skill.",
              image: "src/assets/pushing.jpeg",
              videoLink: "https://youtu.be/elvJPyWYBuY?feature=shared",
            },
            {
              title: "Carving: Making Smooth Turns",
              description:
                "Carving refers to making fluid turns by shifting your weight from heel to toe edge. It's similar to surfing or snowboarding and helps control speed and direction.",
              image: "src/assets/carving.jpeg",
              videoLink: "https://youtu.be/7of2VqAiM2Q?feature=shared",
            },
            {
              title: "Ollie: The Fundamental Trick",
              description:
                "The ollie is jumping with your board using a specific technique. It's the foundation for most skateboarding tricks and essential for advancing your skills.",
              image: "src/assets/ollie.jpeg",
              videoLink: "https://youtu.be/JNmUK9fvrAs?feature=shared",
            }
          ].map((term, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl overflow-hidden flex flex-col md:flex-row items-center"
            >
              <div className="md:w-1/3">
                <img
                  src={term.image}
                  alt={term.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:w-2/3">
                <h4 className="text-2xl font-bold text-orange-500 mb-4">
                  {term.title}
                </h4>
                <p className="text-gray-300 mb-6">
                  {term.description}
                </p>
                <a
                  href={term.videoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors"
                >
                  Watch Video
                  <svg 
                    className="ml-2 w-5 h-5" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>
   {/* Beginner's Guide Section */}
<section className="py-20 bg-black">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-12">
      Beginner's <span className="text-orange-500">Guide</span>
    </h2>
    <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-16">
      Every skateboarding journey begins with a single push. Our comprehensive 
      guide is designed to transform your curiosity into confidence, breaking 
      down the barriers between you and your skateboarding dreams.
    </p>
    <div className="space-y-12">
      {[
        {
          title: "Getting Started",
          backgroundImage: "src/assets/1sk (3).jpg",
          paragraphs: [
            "Skateboarding is more than just a sport - it's a journey of self-discovery, freedom, and personal expression. Many people look at skateboarders and think it's impossible to learn, but the truth is, everyone starts as a beginner.",
            "Choosing your first skateboard is like choosing a new companion. It's not about finding the most expensive board, but the one that feels right for you. We'll guide you through understanding skateboard components, finding the right size, and setting up your first board.",
            "The initial fear is normal. Every professional skater remembers their first wobbly attempts. The secret is to embrace the learning process, to understand that falling is not failure - it's how you learn, grow, and ultimately succeed."
          ],
          topics: [
            "Choosing Your First Board",
            "Understanding Skateboard Parts",
            "Safety Equipment Guide",
            "Basic Stance and Position",
            "Overcoming Initial Fears"
          ]
        },
        {
          title: "Fundamental Skills",
          backgroundImage: "src/assets/1sk (2).jpg",
          paragraphs: [
            "Balance is the language of skateboarding. It's not about having superhuman abilities, but about understanding how your body moves and connects with the board. Think of it like learning to dance - awkward at first, but magical once you get the rhythm.",
            "Pushing, stopping, and turning are your first conversations with the skateboard. These aren't just technical skills, they're your gateway to freedom. Imagine confidently navigating through your environment, controlling your speed, feeling the pure joy of movement.",
            "Muscle memory is your best friend. The more you practice, the more natural these movements become. What seems impossible today will feel effortless tomorrow. Every push, every turn is a step towards mastery."
          ],
          topics: [
            "Pushing and Stopping",
            "Balance and Control",
            "Basic Turns and Carving",
            "Foot Positioning",
            "Building Muscle Memory"
          ]
        },
        {
          title: "First Tricks",
          backgroundImage: "src/assets/1sk (1).jpg",
          paragraphs: [
            "Tricks are the poetry of skateboarding - where creativity meets skill, and your personal style begins to emerge. The first trick is always the most magical. It's not about perfection, but about the moment you realize you can do something you once thought impossible.",
            "The ollie, your first real trick, is a rite of passage. It's more than just jumping with a board - it's about understanding body mechanics, timing, and most importantly, believing in yourself. Each attempt is a lesson, each fall is progress.",
            "Remember, no skater was born great. Every professional started exactly where you are now - nervous, excited, and ready to challenge themselves. Tricks are not about impressing others, but about challenging and surprising yourself."
          ],
          topics: [
            "Rolling and Riding",
            "Tic-Tacs",
            "Manuals",
            "Ollie Preparation",
            "Building Confidence"
          ]
        }
      ].map((guide, index) => (
        <div 
          key={index} 
          className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-105 overflow-hidden relative"
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src={guide.backgroundImage} 
              alt={guide.title} 
              className="w-full h-full object-cover opacity-30"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 p-10">
            <h3 className="text-3xl font-bold mb-6 text-orange-500 border-b border-gray-700 pb-4">
              {guide.title}
            </h3>

            {guide.paragraphs.map((paragraph, pIndex) => (
              <p 
                key={pIndex} 
                className="text-lg text-gray-300 mb-5 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}

            <div className="mt-8">
              <h4 className="text-xl font-semibold text-white mb-4">Key Learning Points:</h4>
              <ul className="space-y-3">
                {guide.topics.map((topic, topicIndex) => (
                  <li 
                    key={topicIndex} 
                    className="flex items-center text-base"
                  >
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3" />
                    <span className="text-gray-300">{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
     {/* Safety Guide Section */}
<section className="py-20 bg-black">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-12">
      Safety <span className="text-orange-500">Guide</span>
    </h2>
    <p className="text-gray-300 text-center max-w-3xl mx-auto mb-12">
      Safety isn't just about protection - it's about confidence. When
      you're properly equipped and aware of safety practices, you can
      focus on progressing your skills without unnecessary risks. Our
      comprehensive safety guide ensures you're well-prepared for your
      skateboarding journey.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Essential Gear */}
      <div className="safety-item p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-105">
        <div className="flex items-center mb-6">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-10 w-10 text-orange-500 mr-4" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" 
            />
          </svg>
          <h3 className="text-2xl font-bold text-white">Essential Gear</h3>
        </div>
        <p className="text-gray-300 mb-6">
          Proper safety equipment is your best defense against injuries.
          Each piece of gear serves a specific purpose and is designed to
          protect you during inevitable falls and mistakes.
        </p>
        <div className="space-y-4">
          {[
            {
              title: "Helmet",
              description: "Protects against head injuries. Always choose a CPSC-certified skateboarding helmet that fits properly.",
              icon: "🧢"
            },
            {
              title: "Knee Pads",
              description: "Essential for learning tricks and preventing scrapes. Look for pads with hard caps for sliding.",
              icon: "🦵"
            },
            {
              title: "Elbow Pads",
              description: "Protect against impact and scrapes during falls. Choose pads that don't restrict movement.",
              icon: "💪"
            },
            {
              title: "Wrist Guards",
              description: "Prevent wrist injuries from falling. Critical since instinct is to catch yourself with your hands.",
              icon: "🤚"
            }
          ].map((gear, index) => (
            <div 
              key={index} 
              className="bg-gray-800 p-4 rounded-xl hover:bg-gray-700 transition-colors"
            >
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-3">{gear.icon}</span>
                <h4 className="font-bold text-orange-500">{gear.title}</h4>
              </div>
              <p className="text-gray-300 text-sm ml-10">{gear.description}</p>
            </div>
          ))}
        </div>
        <button className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
          Shop Safety Gear
        </button>
      </div>

      {/* Safety Tips */}
      <div className="safety-item p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-105">
        <div className="flex items-center mb-6">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-10 w-10 text-orange-500 mr-4" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
            />
          </svg>
          <h3 className="text-2xl font-bold text-white">Safety Tips</h3>
        </div>
        <p className="text-gray-300 mb-6">
          Smart skating is safe skating. Following these essential safety
          guidelines will help you avoid common injuries and make your
          skating experience more enjoyable.
        </p>
        <div className="space-y-4">
          {[
            {
              title: "Always Wear Protective Gear",
              description: "No matter your skill level, proper safety equipment is non-negotiable.",
              icon: "🛡️"
            },
            {
              title: "Skate in Safe Environments",
              description: "Choose locations free from traffic, debris, and excessive pedestrians.",
              icon: "🏞️"
            },
            {
              title: "Be Aware of Your Surroundings",
              description: "Stay alert to obstacles, other skaters, and changing conditions.",
              icon: "👀"
            },
            {
              title: "Start Slow and Progress Gradually",
              description: "Build your skills methodically. Master basics before advanced tricks.",
              icon: "🐢"
            }
          ].map((tip, index) => (
            <div 
              key={index} 
              className="bg-gray-800 p-4 rounded-xl hover:bg-gray-700 transition-colors"
            >
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-3">{tip.icon}</span>
                <h4 className="font-bold text-orange-500">{tip.title}</h4>
              </div>
              <p className="text-gray-300 text-sm ml-10">{tip.description}</p>
            </div>
          ))}
        </div>
        <button className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
          Read More Tips
        </button>
      </div>
    </div>
  </div>
</section>
{/* Featured Tutorials Section */}
<section className="py-20 bg-black">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold mb-4">
        Featured <span className="text-orange-500">Tutorials</span>
      </h2>
      <p className="text-gray-400 max-w-2xl mx-auto">
        Curated video tutorials to help you progress from a complete beginner to a skilled skateboarder. Learn at your own pace with our step-by-step guides.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {tutorialVideos.map((video, index) => (
        <div
          key={index}
          className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
        >
          <div className="relative overflow-hidden">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
              onClick={() => setSelectedVideo(video.videoUrl)}
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm">
                <Play className="w-12 h-12 text-white drop-shadow-lg" />
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-white flex-grow pr-4">{video.title}</h3>
              <span className="bg-orange-500/20 text-orange-500 px-3 py-1 rounded-full text-sm">
                {video.difficulty}
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-4">{video.description}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center text-gray-400">
                <Clock className="w-4 h-4 mr-2" />
                <span className="text-sm">10 mins</span>
              </div>
              <button 
                onClick={() => setSelectedVideo(video.videoUrl)}
                className="text-orange-500 hover:text-orange-600 flex items-center text-sm"
              >
                Watch Now
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Modal for video playback */}
  {selectedVideo && (
    <div 
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
      onClick={() => setSelectedVideo(null)}
    >
      <div 
        className="relative w-full max-w-4xl bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-white bg-red-500/20 hover:bg-red-500/40 rounded-full p-2 z-50"
          onClick={() => setSelectedVideo(null)}
        >
          <X className="w-6 h-6" />
        </button>
        <iframe
          width="100%"
          height="600"
          src={selectedVideo}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-2xl"
        ></iframe>
      </div>
    </div>
  )}
</section>

{/* Progress Tracking Section */}
<section className="py-20 bg-black">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold mb-4">
        Track Your <span className="text-orange-500">Progress</span>
      </h2>
      <p className="text-gray-400 max-w-2xl mx-auto">
        Your skateboarding journey is unique. Our progress tracking helps you understand your current skill level and provides a roadmap for improvement.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {skillLevels.map((level, index) => (
        <div 
          key={index} 
          className="bg-gray-800 rounded-2xl p-8 shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
        >
          <div className="flex items-center mb-6">
            {level.icon}
            <h3 className="text-2xl font-bold ml-4 text-white">{level.level}</h3>
          </div>
          <p className="text-gray-400 mb-6 text-sm">{level.description}</p>
          <div className="border-t border-gray-700 pt-6">
            <h4 className="text-lg font-semibold text-orange-500 mb-4">Key Skills</h4>
            <ul className="space-y-3">
              {level.skills.map((skill, skillIndex) => (
                <li 
                  key={skillIndex} 
                  className="flex items-center text-gray-300"
                >
                  <Star className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" />
                  <span className="text-sm">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
          <button className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-full transition-colors">
            View Skill Breakdown
          </button>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Testimonials Section */}
<section className="py-20 bg-black">
  <div className="container mx-auto px-4">
  <h2 className="text-4xl font-bold text-center mb-12">
             Our <span className="text-orange-500">Team</span>
          </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <div 
          key={index} 
          className="bg-black border border-gray-800 rounded-3xl p-6 transform transition-all duration-300 hover:scale-105"
        >
          <div className="flex items-center mb-4">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full border-2 border-orange-500 object-cover"
            />
            <div className="ml-4">
              <h4 className="font-bold text-white text-xl">{testimonial.name}</h4>
              <p className="text-gray-400 text-sm">Age {testimonial.age}</p>
            </div>
          </div>
          <p className="text-gray-300 italic">"{testimonial.text}"</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* New Community Section */}
      <section className="py-20 bg-black">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-12">
      Join Our <span className="text-orange-500">Community</span>
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-gray-900 rounded-xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
        <h3 className="text-2xl font-bold mb-4">Monthly Meetups</h3>
        <p className="mb-6">
          Join our local skating sessions every month on sunday evenings.
          All skill levels welcome!
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full flex items-center">
          Session Details
          <ArrowRight className="ml-2" />
        </button>
      </div>
      <div className="bg-gray-900 rounded-xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
        <h3 className="text-2xl font-bold mb-4">Online Community</h3>
        <p className="mb-6">
          Share your progress, ask questions, and connect with fellow
          skaters in Pakistan and abroad
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full flex items-center">
          Follow on Instagram
          <ArrowRight className="ml-2" />
        </button>
      </div>
    </div>
  </div>
</section>

      {/* Footer Section */}
      <footer className="py-10 bg-black">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 MATEX Skateboarding. All rights reserved.
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-orange-500">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-500">
              <Youtube size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-500">
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
