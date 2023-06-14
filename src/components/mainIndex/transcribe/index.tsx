import React, { useState, ChangeEvent, FormEvent } from "react";
interface TranscribeProps extends React.PropsWithChildren {}

export const Transcribe: React.FunctionComponent<
  TranscribeProps
> = ({}): JSX.Element => {
  const [file, setFile] = useState<File | null>(null);
  const [transcription, setTranscription] = useState<string>("");

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!file) {
      alert("Please select an audio file.");
      return;
    }

    if (!("webkitSpeechRecognition" in window)) {
      alert(
        "Your browser does not support the Web Speech API. Please try using Google Chrome."
      );
      return;
    }

    try {
      const audioURL = URL.createObjectURL(file);
      const audio = new Audio(audioURL);

      const recognition = new webkitSpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = false;
      recognition.lang = "en-US";

      recognition.onresult = (event) => {
        const transcript = Array.from(event.results)
          .map((result) => result[0].transcript)
          .join("\n");
        setTranscription(transcript);
      };

      recognition.onerror = (event) => {
        console.error("Error transcribing audio:", event.error);
        alert("An error occurred while transcribing the audio.");
      };

      recognition.onend = () => {
        audio.removeEventListener("ended", recognition.stop);
      };

      audio.addEventListener("ended", () => {
        recognition.stop();
      });

      recognition.start();
      audio.play();
    } catch (error) {
      console.error("Error transcribing audio:", error);
      alert("An error occurred while transcribing the audio.");
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center align-middle text-2xl overflow-y-auto lg:text-5xl">
        <h1>Audio to Text Converter</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col text-center justify-center w-full px-20 py-5 gap-5"
        >
          <input
            type="file"
            accept="audio/*"
            onChange={handleFileChange}
            className=" block text-sm lg:text-3xl text-gray-500 file:mr-4 file:py-2 file:px-4 lg:file:py-6 lg:file:px-12 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
          <button
            type="submit"
            className="lg:text-4xl text-xl p-2 bg-dark-hover dark:bg-light-rate2 m-5 rounded-full dark:text-dark-heading"
          >
            Convert
          </button>
        </form>
        {transcription && (
          <div>
            <h2>Transcription:</h2>
            <p className="text-xl">{transcription}</p>
          </div>
        )}
      </div>
    </>
  );
};
