
// const Portada = ({portada}) => {


//     const [ordenadas, setOrdenadas] = useState([]);
  
//     const lenisRef = useRef(null);
  
//     const scrollContainerRef = useRef(null);
//     const scrollContentRef = useRef(null);
  
//     useEffect(() => {
//       const lenis = new Lenis({
//         duration: 0.5,
//         easing: (t) => t, // linear easing for continuous scrolling
//         smooth: true,
//         direction: 'horizontal', // Set direction to horizontal
//       });
  
//       lenisRef.current = lenis;
  
//       const onRaf = (time) => {
//         lenis.raf(time);
//         requestAnimationFrame(onRaf);
//       };
  
//       requestAnimationFrame(onRaf);
  
//       return () => {
//         lenis.destroy();
//       };
//     }, []);
  
//     useEffect(() => {
//       const scrollContainer = scrollContainerRef.current;
  
//       const scrollContent = () => {
//         scrollContainer.scrollLeft += 1;
  
//         requestAnimationFrame(scrollContent);
//       };
  
//       scrollContent();
//     }, []);
  
//     useEffect(() => {
//       if (portada){
//         const fotos = portada
//           .filter(foto => JSON.parse(foto.visible.value))
//           .sort((a, b) => a.orden.value - b.orden.value)
        
//         setOrdenadas([...fotos, ...fotos, ...fotos, ...fotos, ...fotos, ...fotos])
//       }
//     }, [portada]);
  
//     return (
//       <div className="home-cover" ref={scrollContainerRef}>
//         <div id="content" className="scroll-content" ref={scrollContentRef}>
//           {ordenadas.map((foto, index) => (
//             <div className="foto-portada" key={index}>  
//               <img src={⁠ ${foto.imagen.reference.image.url} ⁠} loading="lazy" />
//               <div className={⁠ creditos color-${foto.color.value} ⁠}>
//                 {foto.autor && <p className='caps'>{foto.autor.value}</p>}
//                 {foto.titulo && <p className='caps'>{foto.titulo.value}</p>}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     )
//   }