import React from 'react'

function Profile() {
    return (
        <div className="container container-while">
            <div className="row">
                <div className="col">
                    <img src={new URL('../assets/img1.png', import.meta.url).href} alt="Profile" />
                </div>
                <div className="col">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Special title treatment</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
