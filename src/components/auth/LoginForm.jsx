import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../services/authService";

const LoginForm = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await loginUser(formData);

    // Save JWT token
    localStorage.setItem("token", response.token);

    // Save logged-in user
    localStorage.setItem("user", JSON.stringify(response.user));

    alert(response.message);

    // Redirect based on role
    if (response.user.role === "admin") {
      navigate("/admin/dashboard");
    } else if (response.user.role === "trainer") {
      navigate("/trainer/dashboard");
    } else {
      navigate("/member/dashboard");
    }
  } catch (error) {
    alert(
      error.response?.data?.message ||
      "Login failed."
    );
  }
};

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block mb-2 font-medium">
          Email
        </label>

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          required
        />
      </div>

      <div>
        <label className="block mb-2 font-medium">
          Password
        </label>

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-emerald-500 text-white py-3 rounded-lg font-semibold hover:bg-emerald-600 transition"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;