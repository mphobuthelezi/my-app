import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Form from "./components/Form/Form";
import Notes from "./components/Notes/Notes";
import Modal from "./components/Modal/Modal";

function App() {
  const notes = [
    {
      id: "a123",
      title: "Exmple title1",
      text: "Exmple text1",
    },
    {
      id: "a123",
      title: "Exmple title2",
      text: "Exmple text2",
    },

    {
      id: "a123",
      title: "Exmple title3",
      text: "Exmple text3",
    },
    {
      id: "a123",
      title: "Exmple title4",
      text: "Exmple text4",
    },
  ];
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Form />
      <Notes notes={notes} />
      <Modal />
    </div>
  );
}

export default App;
