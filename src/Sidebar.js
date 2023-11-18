function Sidebar({ announcements, 
                onAddAnnouncement, 
                onDeleteAnnouncement, 
                activeAnnouncement, 
                setActiveAnnouncement 
            }){

    const sortedAnnouncements = announcements.sort((a, b) => b.date - a.date) //the updated announcement will be at the top of the list

    return <div className="app-sidebar">
    <div className="app-sidebar-header">
        <h1>Announcements</h1>
        <button onClick={onAddAnnouncement}>Add</button>
    </div>

    <div className="app-sidebar-notes">

        {sortedAnnouncements.map((announcement) => (

            <div className={`app-sidebar-note ${announcement.id === activeAnnouncement && "active"}`}
                onClick={() => setActiveAnnouncement(announcement.id)}>
                    
                <div className="sidebar-note-title">

                    <strong>{announcement.title}</strong>
                    <button onClick={() => onDeleteAnnouncement(announcement.id)}>Delete</button>

                </div>

                <p>{announcement.content && announcement.content.substr(0, 100) + "..."}</p>


                <small className="note-meta">
                    Last modified {new Date(announcement.date).toLocaleDateString("en-GB", {})} {/*date and time*/}
                </small>
            </div>
        ))}
        
    </div>

    </div>;

}

export default Sidebar;