import {useEffect, useState} from "react";
import uuid from "react-uuid";
import './App.css';
import Sidebar from './Sidebar';
import Main from './Main';

function App() {

  const [announcements, setAnnouncements] = useState(JSON.parse(localStorage.announcements) || []);
  const [activeAnnouncement, setActiveAnnouncement] = useState(false);

  //IF THERE'S AN API ALREADY YOU DO NOT HAVE TO DO THIS
  useEffect(() => { //whenever theres an updated or added announcement it will be stored in the localStorage so that everytime you refresh the page, the announcement will remain
    localStorage.setItem("announcements", JSON.stringify(announcements)) //JSON.stringyfy converts any java objects into an actual string
  },[announcements])

  const onAddAnnouncement = () => {
    const newAnnouncement = {
      id: uuid(), //create a random id for the new notebook
      title: "Untitled Note",
      content: "",
      date: Date.now(),
    };

    setAnnouncements([newAnnouncement, ...announcements]);
  };
  
  const onUpdateAnnouncement = (updatedAnnouncement) => { //send onUpdateAnnouncement from the main with an updated object
    const updatedAnnouncementArray = announcements.map((announcement) => {
      if(announcement.id === activeAnnouncement){
        return updatedAnnouncement;
      }
      return announcement;
    })
    setAnnouncements(updatedAnnouncementArray);
  };

  const onDeleteAnnouncement = (idToDelete) => {
    setAnnouncements(announcements.filter((announcement) => announcement.id !== idToDelete)); //check the current loops/iterations on the id them compares it to idToDelete. If its true it will stay in the array, otherwise it will be removed
  };

  const getActiveAnnouncement = () => { //get the current stored id and find it in the array and return the entire current object
    return announcements.find((announcement) => announcement.id === activeAnnouncement);// loop through each announcement
  //return announcements.find((announcement) => announcement.id === activeAnnouncement) || {};
  }

    return (
      <div className="App">
        <Sidebar announcements={announcements} 
                onAddAnnouncement={onAddAnnouncement} 
                onDeleteAnnouncement={onDeleteAnnouncement}
                activeAnnouncement={activeAnnouncement}
                setActiveAnnouncement={setActiveAnnouncement}/>

        <Main activeAnnouncement={getActiveAnnouncement()} onUpdateAnnouncement={onUpdateAnnouncement}/> 
        {/*always running, always passing through current active note */}

      </div>
    );
}

export default App;
