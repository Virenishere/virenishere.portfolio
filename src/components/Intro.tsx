const Intro = () => {
  return(
     <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-20"
      >
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-6">Welcome Home</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            This is the home section. The navbar will automatically highlight
            when you scroll to this section.
          </p>
          <div className="mt-8">
            <p className="text-white/50 text-sm">
              Try clicking on the navbar links above to see smooth scrolling in
              action!
            </p>
          </div>
        </div>
      </section>
  )
};

export default Intro;
