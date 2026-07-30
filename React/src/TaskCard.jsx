function TaskCard() {
  return (
    <>
    <div className="task-card">
        <div className="left-card">
            <h3>Task Timeline</h3>
            <div className="card">
                <h4>Social Media</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptatum.</p>
                <span>0.000048</span>
            </div>
            <div className="card">
                <h4>Content Creation</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptatum.</p>
                <span>0.000048</span>
            </div>
            <div className="card">
                <h4>App downloads & reviews</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptatum.</p>
                <span>0.000048</span>
            </div>
            <div className="card">
                <h4>Survey & Polls</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptatum.</p>
                <span>0.000048</span>
            </div>
            <div className="card">
                <h4>Videos</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptatum.</p>
                <span>0.000048</span>
            </div>
            <div className="card">
                <h4>Email subscription</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptatum.</p>
                <span>0.000048</span>
            </div>
            <div className="card">
                <h4>Product Testing & Feedback</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptatum.</p>
                <span>0.000048</span>
            </div>
            <div className="card">
                <h4>Joining online Communities</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptatum.</p>
                <span>0.000048</span>
            </div>
            <div className="card">
                <h4>Online Purchases & Cashback</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptatum.</p>
                <span>0.000048</span>
            </div>
        </div>
        <div className="right-card">
            <h3>Task Details</h3>
            <p>Status: Open</p>
            <h2 className="h2">Campaign Topic</h2>
            <p>This Survey is about Social Media</p>
            <div className="instructions">
                <h3>Instructions</h3>
                <ol>
                    <li>This Survey is about blah blah blah blah blah</li>
                    <li>This Survey is about blah blah blah blah blah</li>
                    <li>This Survey is about blah blah blah blah blah</li>
                </ol>
            </div>
            <div className="rewards">
                <h3>Rewards</h3>
                <span>0.000048</span>
            </div>
            <button className="link-btn">Link Instagram</button>
            <div className="upload-img">
                <h3>Submit Screenshot</h3>
                <p>Submit a screenshot of the mobile app you just downloaded and reviewed to receive your reward.</p>
                <button className="img-btn">
                    <p>Click to upload image</p>
                    <span>PNG (2 MB max)</span>
                </button>
                <button className="submit-btn">Submit App Screenshot</button>
            </div>
        </div> 
    </div>
    </>
  )
}

export default TaskCard