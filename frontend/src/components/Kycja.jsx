import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Kycja() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Validimi
    if (!email.trim()) {
      setError("Email është i detyrueshëm");
      return;
    }

    if (!password.trim()) {
      setError("Fjalëkalimi është i detyrueshëm");
      return;
    }

    // If validation passes, navigate to home
    navigate("/");
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-full max-w-md p-6">
        <p className="font-bold py-10 text-2xl text-center">Kyçu</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          )}
          
          <div>
            <label htmlFor="email" className="block mb-2 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="fjalekalimi" className="block mb-2 font-medium">
              Fjalëkalimi
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="fjalekalimi"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Fjalëkalimi"
                className="border rounded px-3 py-2 w-full pr-20 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-1 text-sm text-blue-600 hover:text-blue-800"
              >
                {showPassword ? "Fshih" : "Shfaq"}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors font-medium"
          >
            Kyçu
          </button>

          <p className="text-center mt-4">
            <span className="text-gray-600">Nuk keni llogari? </span>
            <Link to="/regjistrohu" className="text-blue-600 hover:underline">
              Regjistrohu
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Kycja;
