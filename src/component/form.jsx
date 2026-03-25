export const RegForm = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-5xl/15 font-bold font-display">Contact Us</h2>
      <p>How can we help you?</p>

      <form action="" className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row justify-between gap-2">
          {/* Full name  */}
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder="John Doe"
              className="py-2 px-4 border rounded"
            />
          </div>
          {/* Email  */}
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="example@gmail"
              className="py-2 px-4 border rounded"
            />
          </div>
        </div>

        {/* message */}
        <div className="flex flex-col gap-2">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            required
            placeholder="Your message here..."
            className="border py-2 px-4 rounded h-30"
          />
        </div>
        <button
          type="submit"
          className="bg-[#FF6B00] px-4 py-2 self-end text-white rounded cursor-pointer"
        >
          Send
        </button>
      </form>
    </div>
  );
};
