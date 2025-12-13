const Contact = () => {
  return (
    <div>
      <h1 className="text-center text-2xl">Contact Us</h1>
      <form className="m-auto">
        <input type="text"  className="p-1 m-2 border border-solid border-black" placeholder="Email" />
        <br />
        <input type="text"  className="p-1 m-2 border border-solid border-black" placeholder="Name" />
        <br />
        <button className="p-2 m-2 border border-solid border-black rounded-lg">Submit</button>

      </form>
    </div>
  );
};
export default Contact;
