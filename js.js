<input id="email" type="email" placeholder="Email">
<input id="password" type="password" placeholder="Password">
<button id="login-btn">Login</button>
<button id="register-btn">Register</button>

<script type="module">
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl = "https://alczgundxcmhqqsofcjl.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFsY3pndW5keGNtaHFxc29mY2psIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkyNDc5MjAsImV4cCI6MjA4NDgyMzkyMH0.8h1Nj7K9PJrYoKYU0dEHz4LxtdzapHN888C-68n5t0g";

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

document.getElementById("login-btn").addEventListener("click", async () => {
  const email = emailInput.value;
  const password = passwordInput.value;

  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    alert("Login failed: " + error.message);
  } else {
    alert("Logged in successfully!");
    console.log(data.user); // User info
  }
});

document.getElementById("register-btn").addEventListener("click", async () => {
  const email = emailInput.value;
  const password = passwordInput.value;

  const { data, error } = await supabase.auth.signUp({ email, password });

  if (error) {
    alert("Register failed: " + error.message);
  } else {
    alert("Registered successfully! Check your email to verify.");
    console.log(data.user); // User info
  }
});
</script>
