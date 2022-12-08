import React from 'react'

const Library = () => {
    return (
        <>
            {/* <!-- ***** Gaming Library Start ***** --> */}
            <div class="gaming-library">
                <div class="col-lg-12">
                    <div class="heading-section">
                        <h4><em>Your Gaming</em> Library</h4>
                    </div>
                    <div class="item">
                        <ul>
                            <li><img src="./user/assets/images/game-01.jpg" alt="" class="templatemo-item" /></li>
                            <li><h4>Dota 2</h4><span>Sandbox</span></li>
                            <li><h4>Date Added</h4><span>24/08/2036</span></li>
                            <li><h4>Hours Played</h4><span>634 H 22 Mins</span></li>
                            <li><h4>Currently</h4><span>Downloaded</span></li>
                            <li><div class="main-border-button border-no-active"><a href="#">Donwloaded</a></div></li>
                        </ul>
                    </div>
                    <div class="item">
                        <ul>
                            <li><img src="./user/assets/images/game-02.jpg" alt="" class="templatemo-item" /></li>
                            <li><h4>Fortnite</h4><span>Sandbox</span></li>
                            <li><h4>Date Added</h4><span>22/06/2036</span></li>
                            <li><h4>Hours Played</h4><span>740 H 52 Mins</span></li>
                            <li><h4>Currently</h4><span>Downloaded</span></li>
                            <li><div class="main-border-button"><a href="#">Donwload</a></div></li>
                        </ul>
                    </div>
                    <div class="item last-item">
                        <ul>
                            <li><img src="./user/assets/images/game-03.jpg" alt="" class="templatemo-item" /></li>
                            <li><h4>CS-GO</h4><span>Sandbox</span></li>
                            <li><h4>Date Added</h4><span>21/04/2036</span></li>
                            <li><h4>Hours Played</h4><span>892 H 14 Mins</span></li>
                            <li><h4>Currently</h4><span>Downloaded</span></li>
                            <li><div class="main-border-button border-no-active"><a href="#">Donwloaded</a></div></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="main-button">
                        <a href="profile.html">View Your Library</a>
                    </div>
                </div>
            </div>
            {/* <!-- ***** Gaming Library End ***** --> */}
        </>
    )
}

export default Library