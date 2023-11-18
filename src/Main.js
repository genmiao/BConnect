import ReactMarkdown from "react-markdown";
import React, { useState } from "react";

function Main({ activeAnnouncement, onUpdateAnnouncement }){
    const [posted, setPosted] = useState(false);

    const onEditField = (key, value) => {
        onUpdateAnnouncement({
            ...activeAnnouncement,
            [key]: value, //explain
            date: Date.now()
        })
    };

    const onTogglePost = () => {
        setPosted(!posted);
      };

    if(!activeAnnouncement)
        return <div className="no-active-note">No announcement selected</div>;

    return <div className="app-main">

        <div className="app-main-note-edit">

            <input type="text" id="title" 
            value={activeAnnouncement.title} 
            onChange={(e) => onEditField("title", e.target.value)} 
            autoFocus />

            <textarea id="body" 
            placeholder="Write your announcement here..." 
            value={activeAnnouncement.content} 
            onChange={(e) => onEditField("content", e.target.value)} />
            
        </div>

        <div className="app-main-note-preview">
            <h1 className="preview-title">{activeAnnouncement.title}</h1>
            <ReactMarkdown className="markdown-preview">{activeAnnouncement.content}</ReactMarkdown>
            
            <div className="post-button-container">
                <button className="post-button" // Add the CSS class
                    onClick={onTogglePost} >
                    {posted ? "Submitted" : "Submit"}
                </button>
            </div>
        </div>

    </div>;

}

export default Main;