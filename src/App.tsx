function App() {
  const colorHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const [tab] = await chrome.tabs.query({ active: true });

    console.log(`App.tsx:9 e. ==>>`, e.target.value);

    chrome.scripting.executeScript<string[], void>({
      target: { tabId: tab.id! },
      args: [e.target.value],
      func: (c) => {
        document.body.style.backgroundColor = c;
      },
    });
  };

  return (
    <div className="w-96">
      <div className="flex">
        <h1>Enter Your Prompt</h1>
        <input
          type="color"
          name="name"
          id="id"
          onChange={(e) => colorHandler(e)}
        />
      </div>
    </div>
  );
}

export default App;
