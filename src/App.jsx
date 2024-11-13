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
  ArrowRight,
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
      videoUrl: "https://www.youtube.com/embed/P3T_znRTZMQ?si=G2p9M6Tz6jYF_rgN", // Replace with actual YouTube video ID
    },
    {
      title: "How to Ollie",
 
   
      difficulty: "Intermediate",
      videoUrl: "https://www.youtube.com/embed/7Xc4jNljMPM?si=rfX8aKm1PmIo6SqN", // Replace with actual YouTube video ID
    },
    {
      title: "Kickflip Tutorial",
     
 
      difficulty: "Advanced",
      videoUrl: "https://www.youtube.com/embed/kpVhjV-I6nM?si=2zkPAUF3zkNrpylB", // Replace with actual YouTube video ID
    },
  ];
  const beginnerGuides = [
    {
      title: "Getting Started",
      topics: [
        "Choosing Your First Board",
        "Understanding Skateboard Parts",
        "Safety Equipment Guide",
        "Basic Stance and Position",
      ],
    },
    {
      title: "Fundamental Skills",
      topics: [
        "Pushing and Stopping",
        "Balance and Control",
        "Basic Turns and Carving",
        "Foot Positioning",
      ],
    },
    {
      title: "First Tricks",
      topics: [
        "Rolling and Riding",
        "Tic-Tacs",
        "Manuals",
        "Ollie Preparation",
      ],
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
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Skateboarding <span className="text-orange-500">Basics</span>
          </h2>
          <div className="grid grid-cols-1 gap-8">
            {/* Parts of a Skateboard */}
            <div className="p-6 bg-gray-800 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold mb-4">Parts of a Skateboard</h3>
              <p className="text-gray-300 mb-6">
                Understanding your skateboard's components is crucial for both
                riding and maintenance. Each part plays a vital role in how your
                board performs, and knowing these components helps you make
                informed decisions when customizing your setup.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4"> {/* Use grid layout with two columns on small screens and above */}
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
    },
  ].map((part, index) => (
    <div
      key={index}
      className="flex flex-col bg-gray-700 p-4 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
    >
      <div className="flex flex-col flex-grow">
        <h4 className="font-bold text-orange-500">{part.title}</h4>
        <p className="text-gray-300">{part.description}</p>
      </div>
      <img
        src={part.image}
        alt={part.title}
        className="w-44 h-44 mt-4 rounded-md object-contain" // Image size remains the same
      />
    </div>
  ))}
</div>
            </div>

            {/* Basic Terminology */}
            <div className="p-6 bg-gray-800 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold mb-4">Basic Terminology</h3>
              <p className="text-gray-300 mb-6">
                Skateboarding has its own unique language and terminology.
                Understanding these basic terms will help you communicate with
                other skaters and follow tutorials more effectively.
              </p>
              <div className="space-y-4">
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
                  },
                ].map((term, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 mb-4 bg-gray-700 p-4 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
                  >
                    <img
                      src={term.image}
                      alt={term.title}
                      className="w-32 h-32 rounded-md object-cover"
                    />
                    <div className="flex-col flex-grow">
                      <h4 className="font-bold text-orange-500">
                        {term.title}
                      </h4>
                      <p className="text-gray-300">{term.description}</p>
                      <a
                        href={term.videoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-block bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full transition-colors duration-300"
                      >
                        Watch Video
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
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Beginner's <span className="text-orange-500">Guide</span>
          </h2>
          <p className="text-gray-300 text-center max-w-3xl mx-auto mb-12">
            Every great skater started as a beginner. Our comprehensive guide
            breaks down the learning process into manageable steps, helping you
            progress safely and confidently. Follow these modules to build a
            strong foundation in skateboarding.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {beginnerGuides.map((guide, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-4">{guide.title}</h3>
                <p className="text-gray-300 mb-6">
                  {guide.title === "Getting Started" &&
                    "Begin your skateboarding journey with the essential knowledge you need. Learn about equipment selection, safety basics, and the fundamental positioning that will set you up for success."}
                  {guide.title === "Fundamental Skills" &&
                    "Master the core techniques that every skater needs. These skills form the foundation of all advanced tricks and maneuvers, focusing on balance, control, and basic board manipulation."}
                  {guide.title === "First Tricks" &&
                    "Take your first steps into the world of skateboarding tricks. Start with basic maneuvers that build confidence and control, preparing you for more advanced techniques."}
                </p>
                <ul className="space-y-3">
                  {guide.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-center">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-3" />
                      {topic}
                    </li>
                  ))}
                </ul>
               
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
            <div className="safety-item p-6 bg-gray-800 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Essential Gear</h3>
              <p className="text-gray-300 mb-6">
                Proper safety equipment is your best defense against injuries.
                Each piece of gear serves a specific purpose and is designed to
                protect you during inevitable falls and mistakes. Investing in
                quality safety gear is investing in your skateboarding future.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-orange-500">Helmet</h4>
                  <p className="text-gray-300 ml-4">
                    Protects against head injuries. Always choose a
                    CPSC-certified skateboarding helmet that fits properly.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-orange-500">Knee Pads</h4>
                  <p className="text-gray-300 ml-4">
                    Essential for learning tricks and preventing scrapes. Look
                    for pads with hard caps for sliding.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-orange-500">Elbow Pads</h4>
                  <p className="text-gray-300 ml-4">
                    Protect against impact and scrapes during falls. Choose pads
                    that don't restrict movement.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-orange-500">Wrist Guards</h4>
                  <p className="text-gray-300 ml-4">
                    Prevent wrist injuries from falling. Critical since instinct
                    is to catch yourself with your hands.
                  </p>
                </div>
              </div>
              <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full">
                Shop Safety Gear
              </button>
            </div>
            <div className="safety-item p-6 bg-gray-800 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Safety Tips</h3>
              <p className="text-gray-300 mb-6">
                Smart skating is safe skating. Following these essential safety
                guidelines will help you avoid common injuries and make your
                skating experience more enjoyable. Remember, even professional
                skaters prioritize safety.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-orange-500">
                    Always Wear Protective Gear
                  </h4>
                  <p className="text-gray-300 ml-4">
                    No matter your skill level, proper safety equipment is
                    non-negotiable. It gives you confidence to try new things.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-orange-500">
                    Skate in Safe Environments
                  </h4>
                  <p className="text-gray-300 ml-4">
                    Choose locations free from traffic, debris, and excessive
                    pedestrians. Skateparks and empty parking lots are ideal.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-orange-500">
                    Be Aware of Your Surroundings
                  </h4>
                  <p className="text-gray-300 ml-4">
                    Stay alert to obstacles, other skaters, and changing
                    conditions. Environmental awareness prevents accidents.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-orange-500">
                    Start Slow and Progress Gradually
                  </h4>
                  <p className="text-gray-300 ml-4">
                    Build your skills methodically. Master basics before
                    attempting advanced tricks to prevent injury.
                  </p>
                </div>
              </div>
              <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full">
                Read More Tips
              </button>
            </div>
          </div>
        </div>
      </section>

    
<section className="py-20 bg-gray-900">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-12">
      Featured <span className="text-orange-500">Tutorials</span>
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {tutorialVideos.map((video, index) => (
        <div
          key={index}
          className="bg-gray-800 rounded-xl overflow-hidden"
        >
          <div className="relative">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-48 object-cover cursor-pointer"
              onClick={() => setSelectedVideo(video.videoUrl)} // Set the selected video URL
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <Play className="w-12 h-12 text-orange-500" />
            </div>
          
          </div>
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">{video.title}</h3>
            <div className="flex justify-between text-sm text-gray-400">
             
              <span className="text-orange-500">{video.difficulty}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Modal for video playback */}
  {selectedVideo && (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="relative w-full max-w-3xl">
        <button
          className="absolute top-2 right-2 text-white text-2xl"
          onClick={() => setSelectedVideo(null)} // Close modal
        >
          &times;
        </button>
        <iframe
          width="100%"
          height="315"
          src={selectedVideo}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )}
</section>

      {/* New Progress Tracking Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Track Your <span className="text-orange-500">Progress</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillLevels.map((level, index) => (
              <div key={index} className="bg-gray-900 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  {level.icon}
                  <h3 className="text-2xl font-bold ml-3">{level.level}</h3>
                </div>
                <p className="text-gray-400 mb-4">{level.description}</p>
                <ul className="space-y-2">
                  {level.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center">
                      <Star className="w-4 h-4 text-orange-500 mr-2" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Testimonials Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Skater <span className="text-orange-500">Team</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="ml-3">
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-gray-400">Age {testimonial.age}</p>
                  </div>
                </div>
                <p className="text-gray-300">{testimonial.text}</p>
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
            <div className="bg-gray-900 rounded-xl p-8">
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
            <div className="bg-gray-900 rounded-xl p-8">
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
            © 2023 MATEX Skateboarding. All rights reserved.
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
