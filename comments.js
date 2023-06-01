import React from "react";
import CommentList from "./AllComments";
import RoadList from "./AllRoads";

function Comments() {
    return (
        <>
        <div>
            <h1>Contact feedback form (the result will be sent to the email of the owner)</h1>
            < form action="https://formsubmit.co/victor190501@gmail.com" method="POST">
                <input type="text" name="Name" placeholder="Full Name" required></input><br></br>
                <input type="email" name="Email" placeholder="Email" required></input><br></br>
                <textarea name="Message" placeholder="Message" required></textarea><br></br>
                <button type="submit">Send</button>

            </form>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div>
        <h1>Comments section</h1>
        <CommentList/>
        </div>
        </>
    );
}

export default Comments;