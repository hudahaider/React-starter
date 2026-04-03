
const About = () => {
    return(
        <section className="relative py-25 flex flex-col justify-center items-center text-center text-white px-6 bg-cover bg-center bg-no-repeat bg-fixed" style={{backgroundImage: "url('/assets/about-model.jpg')"}}>
            {/* Overlay */}
            <div className="absolute inset-0 bg-pink-950/10"></div>

            {/* About */}
            <div className="max-w-2xl mx-auto realtive z-10">
            <h1 className="text-4xl font-serif mb-8">ABOUT US</h1>
            <p className="text-md font-light leading-loose tracking-wide mb-10 max-w-4xl mx-auto">Cosmetics by Chloe understands that makeup is more than skin deep. It's about confidence, empowerment, and celebrating your unique features. Our carefully curated range of products is designed to enhance your natural beauty while allowing you to experiment and play with color in ways that resonate with your personality. Channel your inner artist with our versatile range of makeup products. With Cosmetics by Chloe, your face becomes your canvas, and each application becomes a stroke of self-expression.</p>
            <button className="border border-white px-10 py-3 text-xs tracking-widest hover:bg-white hover:text-black transition-all duration-300">CONTACT US</button>
            </div>
        </section>
    )
}
export default About;