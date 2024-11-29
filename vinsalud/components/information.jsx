const Information = () => {
    return (
      <div className="w-full p-8">
   
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 mb-12">
       
          <div className="text-center">
            <h2 className="text-5xl font-bold mb-6 text-white">Consultorio Moderno</h2>
            <p className="text-2xl text-white leading-relaxed">
              Nuestro consultorio cuenta con tecnología de última generación y espacios diseñados para tu máxima comodidad.
              Aquí encontrarás todo lo que necesitas para garantizar un cuidado integral y profesional. Sabemos que tu 
              tiempo es valioso, por eso hemos creado un ambiente moderno y acogedor, enfocado en brindarte la mejor experiencia.
            </p>
          </div>
        
          <div>
            <img
              src="/consultorio.jpg"
              alt="Consultorio Moderno"
              className="w-1/2 h-auto rounded-lg shadow-md object-cover mx-auto" 
            />
          </div>
        </div>
  

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
    
          <div className="flex justify-center">
          <img
            src="/medico.jpg"
            alt="Buena Atención"
            className="w-full h-auto max-w-[80%] rounded-lg shadow-md object-cover" 
          />
        </div>
     
          <div className="text-center">
            <h2 className="text-5xl font-bold mb-6 text-white">Buena Atención</h2>
            <p className="text-2xl text-white leading-relaxed">
              Nos enorgullece ofrecer un servicio excepcional a nuestros pacientes. Nuestro equipo de profesionales 
              altamente capacitados se asegura de brindarte atención personalizada, enfocándose en tus necesidades 
              específicas. Valoramos tu confianza y trabajamos continuamente para superar tus expectativas.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Information;
  