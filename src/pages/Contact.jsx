function Contact() {
  return (
    <main className="-mt-10 relative flex items-center justify-center min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center bg-[image:url(https://media.gettyimages.com/id/1457889029/photo/group-of-food-with-high-content-of-dietary-fiber-arranged-side-by-side.jpg?s=612x612&w=gi&k=20&c=YiNatAP0CzFSalhnkzSUFyy6XpVhBe3WSnRpu1W3pV4=)]"></div>

      <div className="absolute inset-0 bg-accbg/80"></div>

      <div className="relative z-10 flex flex-col items-center bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg w-[80%] max-w-90">

        <h1 className="text-3xl font-bold text-acc4 mb-4">
          Contact Us
        </h1>

        <form className="flex flex-col gap-4 w-full max-w-80">
          <input
            type="text"
            placeholder="Your Name"
            className="p-2 rounded border"
          />
          <input
            type="email"
            placeholder="your@email.com"
            className="p-2 rounded border"
          />
          <textarea
            placeholder="Your Message"
            className="p-2 rounded border"
          ></textarea>
          <button className="bg-acc4 text-white p-2 rounded hover:opacity-90 transition">
            Send
          </button>
        </form>

      </div>
    </main>
  );
}

export default Contact;