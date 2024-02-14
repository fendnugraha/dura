export default function About() {
  return (
    <>
      <section className="flex justify-center items-center h-screen" id="about">
        <div className="container mx-auto grid-cols-2 grid gap-3">
          <div>
            <h1 className="text-5xl">About Us</h1>
            <p className="text-md font-light">This is About Us Page</p>

            <div className="w-full mt-2">
              <p className="text-sm text-justify font-bold mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. At facilis iure sapiente, perferendis vel eveniet cupiditate optio, numquam amet odio aspernatur rem consequuntur praesentium harum accusamus necessitatibus blanditiis rerum. Molestiae!</p>
              <p className="text-sm text-justify mb-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet ex, necessitatibus fugiat quo minima a provident aperiam dolor ipsa repellendus similique fuga aliquid, earum consequuntur odit error perspiciatis repellat sequi beatae praesentium commodi accusamus fugit ipsam! Repellat, culpa fugit magnam odio impedit commodi provident ullam modi, fuga ipsam nostrum quam tempora unde aperiam aut hic iure, saepe numquam omnis nesciunt veniam asperiores! Ea nobis sed suscipit sequi culpa mollitia officia quia animi neque rerum! Necessitatibus rerum excepturi magnam dolores blanditiis repellendus tempore perferendis placeat non, nobis possimus ipsa eveniet exercitationem fugit, fugiat tenetur eligendi corporis autem odit. Amet quibusdam quae eum libero facere similique! Suscipit placeat maxime necessitatibus temporibus, ad, vel rerum minus facilis omnis natus laboriosam. Ut amet doloremque aut pariatur nemo minus. Odio eos dolorem ipsa. Porro voluptatum hic quibusdam,
                quas, aut saepe placeat, illo obcaecati fuga iusto maiores quis fugiat labore assumenda dicta laudantium sapiente quasi cumque atque tempore consequuntur id. Fugit veniam perferendis voluptatem dolorem ratione?
              </p>
              <div className="p-4 bg-slate-200 rounded-lg text-slate-600">
                <blockquote className="text-sm italic text-justify font-bold">
                  &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, quae.&quot;
                  <br />- DURA Team -
                </blockquote>
              </div>
            </div>
          </div>

          <div>
            <img src="https://source.unsplash.com/random/800x800/?building-office" alt="image" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>
    </>
  );
}
