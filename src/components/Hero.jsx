import React from 'react'

const Hero = () => {
    return (
        <>
            <div className="hero bg-base-200 max-h-screen my-10">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src="https://media.istockphoto.com/id/673858790/photo/butter-chicken-curry-with-tender-chicken-breast-cream-butter-honey.jpg?s=2048x2048&w=is&k=20&c=1fejREV0k6LKqMNo1pgD4LJjWRNrC5qF9FEsrLhQ6R4="
                        className="max-w-xl rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
