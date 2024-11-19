import { useEffect, useState } from "react";

export const Threads = () => {
  const [threads, setThreads] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    try {
      const fetchThreads = async () => {
        const response = await fetch(
          `https://railway.bulletinboard.techtrain.dev/threads?offset=${offset}`
        );
        const data = await response.json();
        setThreads(data);
      };
      fetchThreads();
    } catch (e) {
      console.error("Failed to get threads:", e);
    }
  }, [offset]);

  const handlePrev = () => {
    setOffset((offsetValue) => {
      return Math.max(0, offsetValue - 10);
    });
  };

  const handleNext = () => {
    setOffset((offsetValue) => {
      return offsetValue + 10;
    });
  };

  return (
    <div>
      <h2 class="thread_title">スレッド一覧</h2>
      <ul style={{ listStyleType: "none" }}>
        {threads.map((thread) => (
          <li key={thread.id} class="thread">
            {thread.title}
          </li>
        ))}
      </ul>
      <button onClick={handlePrev} disabled={offset === 0}>
        Prev
      </button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};
