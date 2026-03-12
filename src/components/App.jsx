import React, { useState, useEffect } from "react";

// create your App component here
function App() {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(true);

  // Function to fetch a random dog image
  const fetchDog = () => {
    setLoading(true);
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        // API returns the image URL in data.message
        setImageUrl(data.message);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching dog image:", error);
        setLoading(false);
      });
  };

  // Fetch one image when the component first mounts
  useEffect(() => {
    fetchDog();
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "1rem" }}>
      <h1>Random Dog</h1>

      {/* Loading message or image */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <img src={imageUrl} alt="A Random Dog" />
      )}

      {/* Button to fetch a new dog image */}
      <button onClick={fetchDog} style={{ marginTop: "1rem" }}>
        Get New Dog
      </button>
    </div>
  );
}

export default App;
