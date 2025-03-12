const SignupForm = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
      <input
        type="text"
        placeholder="Name"
        className="w-full p-2 mb-2 border rounded"
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full p-2 mb-2 border rounded"
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full p-2 mb-2 border rounded"
      />
      <button className="w-full bg-green-500 text-white p-2 rounded">
        Sign Up
      </button>
    </div>
  );
};

export default SignupForm;
