const LoginForm = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
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
      <button className="w-full bg-blue-500 text-white p-2 rounded">
        Login
      </button>
    </div>
  );
};

export default LoginForm;
