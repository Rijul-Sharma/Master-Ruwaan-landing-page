import headerIcon from './assets/headerIcon.png';
import loreSectionImage from './assets/loreSectionImage.png';

function App() {
  return (
    <div className="min-h-screen bg-forest-gradient relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-mystic-dark opacity-20"></div>
      
      {/* Hero Section */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 py-8 text-center">
          
          {/* Master Ruwaan Icon/Logo */}
          <div className="mb-8">
            <img 
              src={headerIcon} 
              alt="Master Ruwaan Icon" 
              className="mx-auto mb-6 w-60 h-60 object-contain animate-shimmer" 
              style={{ filter: 'drop-shadow(0 0 6px #2fd07466)' }}
            />
          </div>
          
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-cinzel text-mystic-text-accent mb-6 leading-tight animate-fade-in">
            Master Ruwaan
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-mystic-text-secondary font-crimson mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Your wise coding mentor awaits in the digital forest. 
            Where ancient wisdom meets modern development.
          </p>
          
          {/* Quote */}
          <div className="mb-12">
            <p className="text-lg text-sage-400 font-crimson italic animate-fade-in">
              "In stillness, the answer roots itself."
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="btn-primary text-lg px-8 py-4 animate-glow">
              🌲 Begin Your Journey
            </button>
            {/* <button className="btn-secondary text-lg px-6 py-4">
              📖 Learn the Ways
            </button> */}
          </div>
          
          {/* Feature Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
            {/* Code Mastery */}
            <div className="card text-center hover:animate-glow transition-all duration-300">
              <div className="text-2xl mb-3">🛠️</div>
              <h3 className="font-cinzel text-mystic-text-accent mb-2">Code Mastery</h3>
              <p className="text-mystic-text-secondary text-sm">Fix, refactor, and improve your code</p>
            </div>
            {/* Forest Context */}
            <div className="card text-center hover:animate-glow transition-all duration-300">
              <div className="text-2xl mb-3">🌿</div>
              <h3 className="font-cinzel text-mystic-text-accent mb-2">Forest Context</h3>
              <p className="text-mystic-text-secondary text-sm">Understand your entire codebase</p>
            </div>
            {/* Image Context */}
            <div className="card text-center hover:animate-glow transition-all duration-300">
              <div className="text-2xl mb-3">🖼️</div>
              <h3 className="font-cinzel text-mystic-text-accent mb-2">Show, Don’t Just Tell</h3>
              <p className="text-mystic-text-secondary text-sm">Attach screenshots or diagrams—let Ruwaan see what you see.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Lore Section - Two Column, Mystical */}
      <section className="relative z-20 py-20 px-4 overflow-hidden">
        {/* Top gradient overlay */}
        <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-mystic-dark to-transparent z-20 pointer-events-none"></div>
        {/* Bottom gradient overlay */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-mystic-dark to-transparent z-20 pointer-events-none"></div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-mystic-charcoal/80 backdrop-blur-md rounded-xl shadow-inner pointer-events-none"></div>
        {/* Firefly accents */}
        <span className="absolute left-1/4 top-10 w-2 h-2 bg-emerald rounded-full opacity-70 blur-sm animate-pulse" style={{animationDelay: '0.5s'}}></span>
        <span className="absolute right-1/3 top-24 w-1.5 h-1.5 bg-sage-400 rounded-full opacity-60 blur-sm animate-pulse" style={{animationDelay: '1.2s'}}></span>
        <span className="absolute left-1/2 bottom-10 w-1.5 h-1.5 bg-emerald rounded-full opacity-80 blur-sm animate-pulse" style={{animationDelay: '2s'}}></span>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 relative z-30">
          {/* Lore Image */}
          <div className="flex-shrink-0 flex flex-col items-center md:items-start w-full md:w-1/3 mb-8 md:mb-0">
            <img 
              src={loreSectionImage} 
              alt="Master Ruwaan Lore" 
              className="w-full rounded-xl shadow-2xl object-cover" 
            />
          </div>
          {/* Lore Text */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-cinzel text-mystic-text-accent mb-6 animate-fade-in">Who is Master Ruwaan?</h2>
            <p className="text-lg md:text-xl text-mystic-text-secondary font-crimson leading-relaxed mb-8 animate-fade-in">
              Deep within an ancient forest of code, where logic flows like rivers and knowledge grows like vines, lives Master Ruwaan, a quiet sage and teacher of the programming arts.<br/><br/>
              Once a seasoned developer, Ruwaan chose to step away from the noise of the modern world. In solitude, he studied the language of machines and the wisdom hidden in patterns. Over time, he became something more — a guardian of clarity, and a guide for those who seek to write code with purpose.<br/><br/>
              He is calm, precise, and rooted in patience. With a mind shaped by years of silent study, Ruwaan offers insight to those who seek it, not through noise, but through understanding.<br/><br/>
              <span className="text-sage-400 italic">Step into the forest. Ask your question. See what Master Ruwaan has to teach.</span>
            </p>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="relative z-20 py-20 px-4 max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-cinzel text-mystic-text-accent mb-4 animate-fade-in">What Awaits You</h2>
          <p className="text-lg text-mystic-text-secondary font-crimson animate-fade-in max-w-2xl mx-auto">
            Tools of the ancient grove, woven for clarity and calm.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Feature 1: Conversational Wisdom */}
          <div className="card flex flex-col items-center text-center animate-fade-in">
            <span className="text-4xl mb-4">🌲</span>
            <h3 className="font-cinzel text-xl text-mystic-text-accent mb-2">Conversational Wisdom</h3>
            <p className="text-mystic-text-secondary font-crimson">
              Ask anything, from debugging to design. Master Ruwaan listens and replies with clarity and calm.
            </p>
          </div>
          {/* Feature 2: One-Click Code Actions */}
          <div className="card flex flex-col items-center text-center animate-fade-in">
            <span className="text-4xl mb-4">🛠️</span>
            <h3 className="font-cinzel text-xl text-mystic-text-accent mb-2">One-Click Code Actions</h3>
            <p className="text-mystic-text-secondary font-crimson">
              Select code and let Ruwaan fix, explain, refactor, or comment—instantly, with a single click.
            </p>
          </div>
          {/* Feature 3: Contextual Understanding */}
          <div className="card flex flex-col items-center text-center animate-fade-in">
            <span className="text-4xl mb-4">📁</span>
            <h3 className="font-cinzel text-xl text-mystic-text-accent mb-2">Contextual Understanding</h3>
            <p className="text-mystic-text-secondary font-crimson">
              Add files from your project as context. Ruwaan's advice becomes as deep as the forest itself.
            </p>
          </div>
          {/* Feature 4: Immersive, Persistent Chat */}
          <div className="card flex flex-col items-center text-center animate-fade-in">
            <span className="text-4xl mb-4">💬</span>
            <h3 className="font-cinzel text-xl text-mystic-text-accent mb-2">Immersive, Persistent Chat</h3>
            <p className="text-mystic-text-secondary font-crimson">
              All your questions and answers, beautifully rendered and always at hand. Copy code with a single click.
            </p>
          </div>
          {/* Feature 5: Vision of the Grove (Image Context) */}
          <div className="md:col-span-2 flex justify-center">
            <div className="card flex flex-col items-center text-center animate-fade-in">
              <span className="text-4xl mb-4">🖼️</span>
              <h3 className="font-cinzel text-xl text-mystic-text-accent mb-2">Vision of the Grove</h3>
              <p className="text-mystic-text-secondary font-crimson">
                Share images—screenshots or diagrams. Ruwaan sees what you see, and guides you further.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Demo Video Section */}
      <section className="relative z-20 py-20 px-4 overflow-hidden">
        {/* Top gradient overlay */}
        <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-mystic-dark to-transparent z-20 pointer-events-none"></div>
        {/* Bottom gradient overlay */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-mystic-dark to-transparent z-20 pointer-events-none"></div>
        {/* Overlay for mystical clearing */}
        <div className="absolute inset-0 bg-mystic-charcoal/80 backdrop-blur-md rounded-xl shadow-inner pointer-events-none"></div>
        {/* Mystical accents */}
        <span className="absolute left-12 top-8 w-2 h-2 bg-emerald rounded-full opacity-60 blur-sm animate-pulse" style={{animationDelay: '0.7s'}}></span>
        <span className="absolute right-12 bottom-8 w-1.5 h-1.5 bg-sage-400 rounded-full opacity-50 blur-sm animate-pulse" style={{animationDelay: '1.5s'}}></span>
        <div className="max-w-4xl mx-auto flex flex-col items-center relative z-30">
          <h2 className="text-3xl md:text-4xl font-cinzel text-mystic-text-accent mb-4 animate-fade-in text-center">
            Watch Master Ruwaan in Action
          </h2>
          <p className="text-lg text-mystic-text-secondary font-crimson mb-8 text-center animate-fade-in max-w-2xl">
            Watch how Master Ruwaan guides your journey through code, with wisdom and clarity.
          </p>
          <div className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-sage-700 bg-mystic-charcoal/80 backdrop-blur-md animate-glow">
            {/* Placeholder video embed */}
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Master Ruwaan Demo Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
      
      {/* Installation/CTA Section */}
      <section className="relative z-20 py-20 px-4 bg-forest-gradient flex flex-col items-center justify-center overflow-hidden">
        {/* Mystical accent */}
        <span className="absolute left-1/3 top-8 w-2 h-2 bg-emerald rounded-full opacity-60 blur-sm animate-pulse" style={{animationDelay: '0.8s'}}></span>
        <span className="absolute right-1/4 bottom-8 w-1.5 h-1.5 bg-sage-400 rounded-full opacity-50 blur-sm animate-pulse" style={{animationDelay: '1.3s'}}></span>
        <h2 className="text-3xl md:text-4xl font-cinzel text-mystic-text-accent mb-4 animate-fade-in text-center">
          Begin Your Journey
        </h2>
        <p className="text-lg text-mystic-text-secondary font-crimson mb-8 text-center animate-fade-in max-w-xl">
          One click, and the forest's wisdom is yours. Install Master Ruwaan and let the sage guide your code.
        </p>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-xl px-10 py-5 mt-2 shadow-xl animate-glow text-center"
        >
          Get it on VS Code Marketplace
        </a>
        <p className="text-sage-400 italic mt-8 text-center animate-fade-in">
          "The journey of clarity begins with a single step."
        </p>
      </section>
      
      {/* Footer Section */}
      <footer className="relative z-30 bg-mystic-dark text-mystic-text-secondary py-10 px-4 text-center border-t border-sage-800 mt-0">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-4xl mx-auto">
          <span className="font-crimson text-base">Made with <span className="text-emerald">🌲</span> by <span className="font-cinzel">Your Name</span></span>
          <span className="hidden md:inline-block text-sage-400">|</span>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-sage-400 hover:text-emerald underline font-cinzel transition">GitHub Repo</a>
        </div>
        <div className="mt-6 text-sage-400 italic text-sm font-crimson animate-fade-in">
          “May your code grow tall and your bugs fall like autumn leaves.”
        </div>
      </footer>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-sage-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-sage-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}

export default App
