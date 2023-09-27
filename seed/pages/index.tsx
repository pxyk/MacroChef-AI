import { useState, ChangeEvent, FormEvent } from "react";
import { FormData, Result } from "../types/index";
import Form from "../components/Form";
import Results from "../components/Result";
import Error from "../components/Error";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState<FormData>({
    Age: "",
    Gender: "",
    Height: "",
    Weight: "",
  });
  const [result, setResult] = useState<Result | null>(null);
  const [error, setError] = useState<string | null>(null);

  const submitHandle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Log the formData before sending
    console.log("Data to be sent:", query);

    fetch("/api/generate", {
      method: "post",
      body: JSON.stringify({ query }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res?.error) {
          setError(
            "There is an error in your information. Please check your information."
          );
          setResult(null);
        } else {
          setResult(res);
          setError(null);
        }
        setQuery({
          Age: "",
          Gender: "",
          Height: "",
          Weight: "",
        });
      })
      .catch((err) => {
        setError("An error occurred while fetching data.");
        console.error(err);
      })
      .finally(() => setLoading(false));
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setQuery((prevQuery) => ({
      ...prevQuery,
      [name]: value,
    }));
  };

  return (
    <div className="flex max-w-7xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Navbar />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-20 mt-20 background-gradient">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-gray-300 sm:text-7xl">
          Effortless{" "}
          <span className="relative whitespace-nowrap text-blue-600">
            <span className="relative">AI-Driven</span>
          </span>{" "}
          Ordering for Your{" "}
          <span className="relative whitespace-nowrap text-blue-600">
            <span className="relative">Nutritional Goals</span>
          </span>{" "}
        </h1>
        <div className="max-w-6xl mx-auto px-4">
          <Form
            query={query}
            loading={loading}
            handleInputChange={handleInputChange}
            submitHandle={submitHandle}
          />
        </div>
        <Error error={error} />
        <Results result={result} />
      </main>
      <Footer />
    </div>
  );
}
