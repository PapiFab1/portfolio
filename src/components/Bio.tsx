export default function Bio() {
  return (
    <section id="bio" className="text-white py-16 sm:py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <div className="h-px w-8 bg-blue-500" />
          <p className="text-blue-400 text-xs tracking-[0.5em] uppercase font-medium">Bio</p>
        </div>

        <h2 className="text-4xl font-black mb-6 leading-tight">
          Hi, I'm <span className="text-blue-400">Jonathan.</span>
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
          I'm Jonathan Fabien, a Software Engineer specializing in full-stack web development with React, TypeScript, Node.js, and modern databases. I'm passionate about building software that solves real problems and exploring how AI can enhance developer workflows. I enjoy learning new technologies and creating applications that combine thoughtful design with reliable engineering.
        </p>
      </div>
    </section>
  )
}
